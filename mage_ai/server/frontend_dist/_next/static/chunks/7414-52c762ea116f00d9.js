"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7414],{62694:function(e,n,t){t.d(n,{Z:function(){return V}});var r=t(77555),i=t(82394),o=t(12757),c=t(12691),l=t.n(c),u=t(34376),s=t.n(u),a=t(92083),d=t.n(a),p=t(82684),f=t(83455),h=t(60328),b=t(47999),g=t(93461),j=t(67971),x=t(10919),v=t(47409),m=t(86673),y=t(54283),O=t(17903),Z=t(19711),w=t(41374),C=t(73942),I=t(10503),P=t(46313),k=t(23831),_=t(49125),D=P.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;",""],58*_.iI,C.TR,2*_.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||k.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||k.Z.interactive).defaultBackground,";\n  ")})),E=t(19395),S=t(96510),T=t(28598);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e){var n=e.onCancel,t=e.onSuccess,r=e.pipelineRun,i=r.status,c=(0,f.Db)(w.ZP.pipeline_runs.pipeline_schedules.useCreate(null===r||void 0===r?void 0:r.pipeline_schedule_id),{onSuccess:function(e){return(0,S.wD)(e,{callback:function(){t()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),l=(0,o.Z)(c,1)[0],u=(0,p.useState)(),s=u[0],a=u[1],d=(0,p.useCallback)((function(){a(!1),l({pipeline_run:{execution_date:null===r||void 0===r?void 0:r.execution_date,pipeline_schedule_id:null===r||void 0===r?void 0:r.pipeline_schedule_id,pipeline_uuid:null===r||void 0===r?void 0:r.pipeline_uuid,variables:null===r||void 0===r?void 0:r.variables}})}),[r]),g=(0,p.useCallback)((function(){a(!1),n(N(N({},r),{},{status:v.V.CANCELLED}))}),[r]);return(0,T.jsxs)("div",{style:{position:"relative"},children:[(0,T.jsx)(h.Z,{beforeIcon:v.V.INITIAL!==i&&(0,T.jsxs)(T.Fragment,{children:[v.V.COMPLETED===i&&(0,T.jsx)(I.Jr,{size:2*_.iI}),[v.V.FAILED,v.V.CANCELLED].includes(i)&&(0,T.jsx)(I.Py,{size:2*_.iI,inverted:v.V.CANCELLED===i}),[v.V.RUNNING].includes(i)&&(0,T.jsx)(y.Z,{color:"white",small:!0})]}),borderRadius:C.D7,danger:v.V.FAILED===i,default:v.V.INITIAL===i,notClickable:v.V.COMPLETED===i,onClick:function(){return a(v.V.COMPLETED!==i)},padding:"6px",primary:v.V.RUNNING===i,warning:v.V.CANCELLED===i,children:v.D[i]}),(0,T.jsx)(b.Z,{onClickOutside:function(){return a(!1)},open:s,children:(0,T.jsxs)(D,{children:[[v.V.RUNNING,v.V.INITIAL].includes(i)&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Z.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,T.jsx)(m.Z,{mb:1}),(0,T.jsxs)(Z.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,T.jsx)("br",{}),"the current pipeline run."]}),(0,T.jsx)(Z.ZP,{}),(0,T.jsx)(m.Z,{mt:1,children:(0,T.jsxs)(j.Z,{children:[(0,T.jsx)(h.Z,{onClick:function(){g(),d()},children:"Retry run"}),(0,T.jsx)(m.Z,{ml:1}),(0,T.jsx)(h.Z,{onClick:g,children:"Cancel run"})]})})]}),[v.V.CANCELLED,v.V.FAILED].includes(i)&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(Z.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",i]}),(0,T.jsx)(m.Z,{mb:1}),(0,T.jsx)(Z.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,T.jsx)(m.Z,{mb:1}),(0,T.jsx)(h.Z,{onClick:d,children:"Retry run"})]})]})})]})}var V=function(e){var n=e.fetchPipelineRuns,t=e.onClickRow,i=e.pipelineRuns,c=e.selectedRun,u=(0,f.Db)((function(e){return w.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,S.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),a=(0,o.Z)(u,1)[0],b=[null,1,2,1,1,null],y=[{uuid:"Status"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];t&&(b.push(null),y.push({label:function(){return""},uuid:"action"}));var P=(0,p.useMemo)((function(){var e=(0,r.Z)(i);return e.sort((function(e,n){return d()(n.execution_date).valueOf()-d()(e.execution_date).valueOf()})),e}),[i]);return(0,T.jsx)(O.Z,{columnFlex:b,columns:y,isSelectedRow:function(e){return i[e].id===(null===c||void 0===c?void 0:c.id)},onClickRow:t,rows:P.map((function(e,r){var i=e.block_runs_count,o=e.completed_at,c=e.execution_date,u=e.id,d=e.pipeline_schedule_id,p=e.pipeline_schedule_name,f=e.pipeline_uuid,b=e.status,y=[];return y=r>0&&P[r-1].execution_date==e.execution_date?[(0,T.jsx)(m.Z,{ml:1,children:(0,T.jsxs)(j.Z,{alignItems:"center",children:[(0,T.jsx)(I.TT,{size:2*_.iI,useStroke:!0}),(0,T.jsx)(h.Z,{borderRadius:C.D7,notClickable:!0,padding:"6px",children:(0,T.jsx)(Z.ZP,{muted:!0,children:v.D[b]})})]})}),(0,T.jsx)(Z.ZP,{default:!0,monospace:!0,muted:!0,children:"-"}),(0,T.jsx)(Z.ZP,{default:!0,monospace:!0,muted:!0,children:"-"}),(0,T.jsx)(l(),{as:"/pipelines/".concat(f,"/runs/").concat(u),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,T.jsx)(x.Z,{bold:!0,muted:!0,children:"See block runs (".concat(i,")")})}),(0,T.jsx)(Z.ZP,{monospace:!0,muted:!0,children:o&&(0,E.e)(o).toISOString().split(".")[0]||"-"}),(0,T.jsx)(h.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return s().push("/pipelines/".concat(f,"/logs?pipeline_run_id[]=").concat(u))},children:(0,T.jsx)(I.B4,{default:!0,size:2*_.iI})})]:[(0,T.jsx)(R,{onCancel:a,onSuccess:n,pipelineRun:e}),(0,T.jsx)(Z.ZP,{monospace:!0,default:!0,children:c}),(0,T.jsx)(l(),{as:"/pipelines/".concat(f,"/triggers/").concat(d),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,T.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:p})}),(0,T.jsx)(l(),{as:"/pipelines/".concat(f,"/runs/").concat(u),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,T.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(i,")")})}),(0,T.jsx)(Z.ZP,{default:!0,monospace:!0,children:o&&(0,E.e)(o).toISOString().split(".")[0]||"-"}),(0,T.jsx)(h.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return s().push("/pipelines/".concat(f,"/logs?pipeline_run_id[]=").concat(u))},children:(0,T.jsx)(I.B4,{default:!0,size:2*_.iI})})],t&&y.push((0,T.jsx)(g.Z,{flex:1,justifyContent:"flex-end",children:(0,T.jsx)(I._Q,{default:!0,size:2*_.iI})})),y})),uuid:"pipeline-runs"})}},56681:function(e,n,t){t.d(n,{G:function(){return m},Z:function(){return y}});var r=t(12757),i=t(82394),o=t(26304),c=t(1583),l=t(22673),u=t(86532),s=t(86673),a=t(19711),d=t(17903),p=t(49125),f=t(19395),h=t(28598),b=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x={uuid:"Run details"},v={uuid:"Dependency tree"},m=[v,x];function y(e){var n=e.height,t=e.heightOffset,i=e.pipeline,g=e.selectedRun,y=e.selectedTab,O=e.setSelectedTab,Z=j({},(0,o.Z)(e,b));g?Z.blockStatus=(0,f.I)(null===g||void 0===g?void 0:g.block_runs):Z.noStatus=!0;var w=null===g||void 0===g?void 0:g.variables,C=[];w&&JSON.stringify(w,null,2).split("\n").forEach((function(e){C.push("    ".concat(e))}));var I=g&&[["Run ID",null===g||void 0===g?void 0:g.id],["Variables",(0,h.jsx)(l.Z,{language:"json",small:!0,source:C.join("\n")})]],P=g&&(0,h.jsx)(s.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:I.map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];return[(0,h.jsx)(a.ZP,{monospace:!0,muted:!0,children:t}),(0,h.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:i})]})),uuid:"LogDetail"})}),k=y&&O;return(0,h.jsxs)(h.Fragment,{children:[k&&(0,h.jsx)(s.Z,{py:p.cd,children:(0,h.jsx)(c.Z,{onClickTab:O,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:m})}),(!k||v.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,h.jsx)(u.Z,j(j({},Z),{},{height:n,heightOffset:(t||0)+(k?76:0),pipeline:i})),x.uuid===(null===y||void 0===y?void 0:y.uuid)&&P]})}},19395:function(e,n,t){t.d(n,{I:function(){return u},e:function(){return s}});var r=t(82394),i=t(92083),o=t.n(i);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,i=n.completed_at,c=n.started_at,u=n.status,s=null;c&&i&&(s=o()(i).valueOf()-o()(c).valueOf());return l(l({},e),{},(0,r.Z)({},t,{runtime:s,status:u}))}),{})}function s(e){if(!e)return null;var n=new Date(o()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}},17903:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(82394),i=t(12691),o=t.n(i),c=t(82684),l=t(10919),u=t(19711),s=t(46313),a=t(23831),d=t(49125),p=s.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;"]),f=s.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||a.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),h=(0,s.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||a.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(d.iI/2,"px ").concat(d.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(d.iI,"px ").concat(2*d.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),b=s.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})(["",""],h),g=s.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," ",""],h,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||a.Z.interactive).activeBorder,";\n  ")})),j=t(28598);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){var n=e.alignTop,t=e.buildLinkProps,r=e.columnFlex,i=e.columnMaxWidth,s=e.columns,a=void 0===s?[]:s,d=e.compact,h=e.isSelectedRow,x=e.noBorder,m=e.onClickRow,y=e.rows,O=e.uuid,Z=(0,c.useMemo)((function(){return r.reduce((function(e,n){return e+(n||0)}),0)}),r),w=(0,c.useCallback)((function(e){if(r[e]){var n=Math.round(r[e]/Z*100);return"".concat(n,"%")}return null}),[]),C=(0,c.useMemo)((function(){return null===y||void 0===y?void 0:y.map((function(e,r){var c=null===t||void 0===t?void 0:t(r),u=e.map((function(e,t){return(0,j.jsx)(g,{alignTop:n,compact:d,maxWidth:null===i||void 0===i?void 0:i(t),noBorder:x,selected:null===h||void 0===h?void 0:h(r),width:w(t),children:e},"".concat(O,"-row-").concat(r,"-cell-").concat(t))})),s=(0,j.jsx)(f,{noHover:!(c||m),onClick:m?function(){return m(r)}:null,children:u},"".concat(O,"-row-").concat(r));return c?(0,j.jsx)(o(),v(v({},c),{},{passHref:!0,children:(0,j.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:s})})):s}))}),[n,t,w,i,a,d,h,x,m,y]);return(0,j.jsxs)(p,{children:[(null===a||void 0===a?void 0:a.length)>=1&&(0,j.jsx)(f,{noHover:!0,children:a.map((function(e,n){return(0,j.jsx)(b,{compact:d,noBorder:x,children:(0,j.jsx)(u.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid})},"".concat(O,"-col-").concat(e.uuid,"-").concat(n))}))}),C]})}},47409:function(e,n,t){t.d(n,{D:function(){return c},V:function(){return o}});var r,i=t(82394),o=t(66050).V,c=(r={},(0,i.Z)(r,o.COMPLETED,"Done"),(0,i.Z)(r,o.CANCELLED,"Cancelled"),(0,i.Z)(r,o.FAILED,"Failed"),(0,i.Z)(r,o.RUNNING,"Running"),(0,i.Z)(r,o.INITIAL,"Ready"),r)},22673:function(e,n,t){var r=t(82684),i=t(73199),o=t.n(i),c=t(71735),l=t(46313),u=t(65292),s=t(23831),a=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,i=e.showLineNumbers,f=e.small,h=e.source,b=e.wrapLines,g=(0,r.useContext)(l.ThemeContext);return(0,p.jsx)(o(),{source:h,renderers:{code:function(e){var r=e.value;return(0,p.jsx)(c.Z,{customStyle:{backgroundColor:(g.background||s.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(g.content||s.Z.content).muted},language:n,showLineNumbers:i,style:u._4,useInlineStyles:!0,wrapLines:b,children:r})}}})}},1583:function(e,n,t){var r=t(82684),i=t(60328),o=t(67971),c=t(882),l=t(86673),u=t(99994),s=t(49125),a=t(28598);n.Z=function(e){var n=e.contained,t=e.onClickTab,d=e.selectedTabUUID,p=e.tabs,f=(0,r.useMemo)((function(){var e=p.length,n=[];return p.forEach((function(r,p){var f=r.Icon,h=r.IconSelected,b=r.label,g=r.uuid,j=g===d,x=j&&h||f,v=b?b():g,m=(0,a.jsxs)(o.Z,{alignItems:"center",children:[x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{default:!j,size:2*s.iI}),(0,a.jsx)(l.Z,{mr:1})]}),v]});p>=1&&e>=2&&n.push((0,a.jsx)("div",{style:{marginLeft:1.5*s.iI}},"spacing-".concat(g))),j?n.push((0,a.jsx)(c.Z,{backgroundGradient:u.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,onClick:function(){return t(r)},paddingUnitsHorizontal:2,paddingUnitsVertical:1.25,children:m},g)):n.push((0,a.jsx)("div",{style:{padding:4},children:(0,a.jsx)(i.Z,{borderLess:!0,default:!0,onClick:function(){return t(r)},outline:!0,children:m},"button-tab-".concat(g))}))})),n}),[t,d,p]),h=(0,a.jsx)(o.Z,{alignItems:"center",children:f});return n?h:(0,a.jsx)("div",{style:{paddingLeft:s.cd*s.iI,paddingRight:s.cd*s.iI},children:h})}}}]);