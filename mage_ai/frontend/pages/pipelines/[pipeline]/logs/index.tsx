import NextLink from 'next/link';
import moment from 'moment';
import { ThemeContext } from 'styled-components';
import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import BlockRunType, { RunStatus } from '@interfaces/BlockRunType';
import Circle from '@oracle/elements/Circle';
import Divider from '@oracle/elements/Divider';
import Filter, { FilterQueryType } from '@components/Logs/Filter';
import Flex from '@oracle/components/Flex';
import FlexContainer from '@oracle/components/FlexContainer';
import KeyboardShortcutButton from '@oracle/elements/Button/KeyboardShortcutButton';
import Link from '@oracle/elements/Link';
import LogType, { LogDataType, LogLevelEnum } from '@interfaces/LogType';
import PipelineDetailPage from '@components/PipelineDetailPage';
import Spacing from '@oracle/elements/Spacing';
import Spinner from '@oracle/components/Spinner';
import Table from '@components/shared/Table';
import Text from '@oracle/elements/Text';
import api from '@api';
import usePrevious from '@utils/usePrevious';
import { ChevronRight } from '@oracle/icons';
import { LogLevelIndicatorStyle } from '@components/Logs/index.style';
import { PageNameEnum } from '@components/PipelineDetailPage/constants';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { getColorsForBlockType } from '@components/CodeBlock/index.style';
import { goToWithQuery } from '@utils/routing';
import { indexBy, sortByKey } from '@utils/array';
import { initializeLogs } from '@utils/models/log';
import { isEmptyObject, isEqual } from '@utils/hash';
import { numberWithCommas } from '@utils/string';
import { queryFromUrl } from '@utils/url';

const ITEMS_PER_PAGE = 40;

type BlockRunsProp = {
  pipeline: {
    uuid: string;
  };
};

function BlockRuns({
  pipeline: pipelineProp,
}: BlockRunsProp) {
  const themeContext = useContext(ThemeContext);
  const pipelineUUID = pipelineProp.uuid;

  const [offset, setOffset] = useState(ITEMS_PER_PAGE);
  const [query, setQuery] = useState<FilterQueryType>(null);

  const { data: dataPipeline } = api.pipelines.detail(pipelineUUID);
  const pipeline = useMemo(() => ({
    ...dataPipeline?.pipeline,
    uuid: pipelineUUID,
  }), [
    dataPipeline,
    pipelineUUID,
  ]);
  const blocks = useMemo(() => pipeline.blocks || [], [pipeline]);
  const blocksByUUID = useMemo(() => indexBy(blocks, ({ uuid }) => uuid), [blocks]);

  const { data: dataLogs } = api.logs.pipelines.list(pipelineUUID, query, {}, {
    pauseFetch: !query,
  });
  const isLoading = !dataLogs;
  const {
    blockRunLogs,
    pipelineRunLogs,
  } = useMemo(() => {
    if (dataLogs?.logs?.[0]) {
      const {
        block_run_logs: brLogs,
        pipeline_run_logs: prLogs,
      } = dataLogs.logs?.[0] || {};

      return {
        blockRunLogs: brLogs,
        pipelineRunLogs: prLogs,
      };
    }

    return {
      blockRunLogs: [],
      pipelineRunLogs: [],
    }
  }, [
    dataLogs,
  ]);
  const logsAll: LogType[] = useMemo(() => {
    return sortByKey(
      blockRunLogs
        .concat(pipelineRunLogs)
        .reduce((acc, log) => acc.concat(initializeLogs(log)), []),
      ({ data }) => data?.timestamp || 0,
    );
  }, [
    blockRunLogs,
    pipelineRunLogs,
  ]);
  const logsFiltered: LogType[] = useMemo(() => {
    return logsAll
      .filter(({ data }: LogType) => {
        const evals = [];

        if (!query) {
          return true;
        }

        if (query['level[]']) {
          evals.push(query['level[]'].includes(data?.level));
        }
        if (query['block_type[]']) {
          evals.push(query['block_type[]'].includes(blocksByUUID[data?.block_uuid]?.type));
        }

        return evals.every(v => v);
      });
  }, [
    blocksByUUID,
    logsAll,
    query,
  ]);
  const logs: LogType[] = useMemo(() => logsFiltered.slice(0, offset), [
      logsFiltered,
      offset,
    ]);

  const q = queryFromUrl();
  const qPrev = usePrevious(q);
  useEffect(() => {
    if (!isEqual(q, qPrev)) {
      setOffset(ITEMS_PER_PAGE);
      setQuery(q);
    }
  }, [
    q,
    qPrev,
  ]);

  return (
    <PipelineDetailPage
      before={(
        <Filter
          blocks={blocks}
          query={query}
        />
      )}
      breadcrumbs={[
        {
          label: () => 'Logs',
        },
      ]}
      pageName={PageNameEnum.PIPELINE_LOGS}
      pipeline={pipeline}
      subheader={null}
      title={({ name }) => `${name} logs`}
    >
      <Spacing px={PADDING_UNITS} py={1}>
        <Text>
          {!isLoading && (
            <>
              {numberWithCommas(logs.length)} logs of {numberWithCommas(logsFiltered.length)} found
            </>
          )}
          {isLoading && 'Searching...'}
        </Text>
      </Spacing>

      <Divider light />

      {isLoading && (
        <Spacing p={PADDING_UNITS}>
          <Spinner />
        </Spacing>
      )}

      {!isLoading && logs.length >= 1 && (
        <Table
          buildLinkProps={(rowIndex: number) => {
            const id = logs[rowIndex].data?.pipeline_schedule_id;

            if (id) {
              return {
                as: `/pipelines/${pipelineUUID}/schedules/${id}`,
                href: '/pipelines/[pipeline]/schedules/[...slug]',
              };
            }
          }}
          compact
          columnFlex={[null, null, 1, 9, null]}
          columnMaxWidth={(col: string) => col === 'Message' ? '100px' : null}
          columns={[
            {
              label: () => '',
              uuid: '!',
            },
            {
              uuid: 'Date',
            },
            {
              uuid: 'Block',
            },
            {
              uuid: 'Message',
            },
            {
              label: () => '',
              uuid: '>',
            },
          ]}
          rows={logs.map(({
            content,
            createdAt,
            data,
          }: LogType) => {
            const {
              // block_run_id: blockRunId,
              block_uuid: blockUUID,
              // error,
              // error_stack,
              // error_stacktrace,
              level,
              message,
              // pipeline_run_id: pipelineRunId,
              pipeline_uuid: pUUID,
              timestamp,
            } = data || {};

            let idEl;
            if (blockUUID) {
              const block = blocksByUUID[blockUUID];
              if (block) {
                const color = getColorsForBlockType(block.type, { theme: themeContext }).accent;

                idEl = (
                  <FlexContainer alignItems="center">
                    <NextLink
                      as={`/pipelines/${pipelineUUID}/edit?block_uuid=${blockUUID}`}
                      href="/pipelines/[pipeline]/edit"
                      passHref
                    >
                      <Link
                        block
                        fullWidth
                        sameColorAsText
                        verticalAlignContent
                      >
                        <Circle
                          color={color}
                          size={UNIT * 1.5}
                          square
                        />

                        <Spacing mr={1} />

                        <Text monospace>
                          {blockUUID}
                        </Text>
                      </Link>
                    </NextLink>
                  </FlexContainer>
                );
              }
            }

            // Click to show error

            return [
              <Flex alignItems="center" justifyContent="center">
                <LogLevelIndicatorStyle
                  critical={LogLevelEnum.CRITICAL === level}
                  debug={LogLevelEnum.DEBUG === level}
                  error={LogLevelEnum.ERROR === level}
                  exception={LogLevelEnum.EXCEPTION === level}
                  info={LogLevelEnum.INFO === level}
                  log={LogLevelEnum.LOG === level}
                  warning={LogLevelEnum.WARNING === level}
                />
              </Flex>,
              <Text muted monospace>
                {timestamp && moment.unix(timestamp).utc().format('YYYY-MM-DD HH:mm:ss')}
              </Text>,
              idEl,
              <Text monospace textOverflow>
                {message || content}
              </Text>,
              <Flex flex={1} justifyContent="flex-end">
                <ChevronRight muted size={2 * UNIT} />
              </Flex>,
            ];
          })}
          uuid="logs"
        />
      )}

      {offset < logsFiltered.length && (
        <Spacing p={PADDING_UNITS}>
          <KeyboardShortcutButton
            blackBorder
            inline
            onClick={() => setOffset(prev => prev + ITEMS_PER_PAGE)}
            sameColorAsText
            uuid="logs/load_more"
          >
            Load more logs
          </KeyboardShortcutButton>
        </Spacing>
      )}
    </PipelineDetailPage>
  );
}

BlockRuns.getInitialProps = async (ctx: any) => {
  const {
    pipeline: pipelineUUID,
  }: {
    pipeline: string;
  } = ctx.query;

  return {
    pipeline: {
      uuid: pipelineUUID,
    },
  };
};

export default BlockRuns;