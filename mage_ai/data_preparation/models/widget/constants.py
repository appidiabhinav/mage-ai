from enum import Enum

VARIABLE_NAME_BUCKETS = 'buckets'
VARIABLE_NAME_GROUP_BY = 'group_by'
VARIABLE_NAME_LIMIT = 'limit'
VARIABLE_NAME_METRICS = 'metrics'
VARIABLE_NAME_X = 'x'
VARIABLE_NAME_Y = 'y'


class AggregationFunction(str, Enum):
    AVERAGE = 'average'
    COUNT = 'count'
    COUNT_DISTINCT = 'count_distinct'
    MAX = 'max'
    MEDIAN = 'median'
    MIN = 'min'
    MODE = 'mode'
    SUM = 'sum'


class ChartType(str, Enum):
    BAR_CHART = 'bar chart'
    HISTOGRAM = 'histogram'
    LINE_CHART = 'line chart'
    PIE_CHART = 'pie chart'
    TABLE = 'table'


VARIABLE_NAMES_BY_CHART_TYPE = {
    ChartType.BAR_CHART: [
        VARIABLE_NAME_X,
        VARIABLE_NAME_Y,
    ],
    ChartType.HISTOGRAM: [
        VARIABLE_NAME_X,
    ],
    ChartType.LINE_CHART: [
        VARIABLE_NAME_X,
        VARIABLE_NAME_Y,
    ],
    ChartType.PIE_CHART: [
        VARIABLE_NAME_X,
    ],
    ChartType.TABLE: [
        VARIABLE_NAME_X,
        VARIABLE_NAME_Y,
    ],
}