(self.webpackChunkappsmith=self.webpackChunkappsmith||[]).push([[5190],{26035:function(){},45190:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Pe}});var o=t(50390),i=t(1413),r=t(85727),a=t.n(r),l=t(32105),d=t(6623),s=t(45987),c=t(41459),u=t(62559),g=function(e){var n=e.excludeFromTabOrder,t=e.isVisibleSearch,o=e.onSearch,i=e.searchKey;return t?(0,u.jsx)(c.oi,{excludeFromTabOrder:n,onChange:o,placeholder:"Search...",size:"small",value:i}):null},m={"table-header":"styles_table-header__Nv6YJ"},h=t(79430),w=t(29439),b=t(36378);function p(e){var n=(0,o.useState)(e.pageNo||"0"),t=(0,w.Z)(n,2),i=t[0],r=t[1];(0,o.useEffect)((function(){r(e.pageNo||0)}),[e.pageNo]);var a=(0,o.useCallback)((function(n){var t=e.pageNo||0,o=Number(n.target.value);(isNaN(o)||o<1)&&(o=1),o>e.pageCount&&(o=e.pageCount),t<o?e.updatePageNo(o,h.tw.ON_NEXT_PAGE):t>o&&e.updatePageNo(o,h.tw.ON_PREV_PAGE),r(o)}),[e.pageNo,e.pageCount,e.updatePageNo]);return(0,u.jsx)(c.oi,{className:"t--table-widget-page-input",excludeFromTabOrder:e.excludeFromTabOrder,isDisabled:e.disabled,onBlur:a,onChange:function(e){r(e)},onKeyDown:function(e){e.keyCode===b.K5&&a(e)},size:"small",value:i.toString()})}var f=o.memo(p),x=function(e){var n;return e.columns.length&&e.isVisiblePagination?(0,u.jsxs)("div",{"data-table-header-pagination":"",children:[(0,u.jsxs)(c.xv,{lineClamp:1,size:"footnote",children:[null===(n=e.tableData)||void 0===n?void 0:n.length," Records"]}),(0,u.jsx)(c.hU,{excludeFromTabOrder:e.excludeFromTabOrder,icon:"chevron-left",isDisabled:0===e.currentPageIndex,onPress:function(){var n=e.currentPageIndex>0?e.currentPageIndex-1:0;0!==e.currentPageIndex&&e.updatePageNo(n+1,h.tw.ON_PREV_PAGE)},size:"small",variant:"outlined"}),(0,u.jsx)(c.xv,{lineClamp:1,size:"footnote",children:"Page"}),(0,u.jsx)(f,{disabled:1===e.pageCount,excludeFromTabOrder:e.excludeFromTabOrder,pageCount:e.pageCount,pageNo:e.pageNo+1,updatePageNo:e.updatePageNo}),(0,u.jsxs)(c.xv,{lineClamp:1,size:"footnote",children:["of ",e.pageCount]}),(0,u.jsx)(c.hU,{excludeFromTabOrder:e.excludeFromTabOrder,icon:"chevron-right",isDisabled:e.currentPageIndex===e.pageCount-1,onPress:function(){var n=e.currentPageIndex<e.pageCount-1?e.currentPageIndex+1:0;e.currentPageIndex!==e.pageCount-1&&e.updatePageNo(n+1,h.tw.ON_NEXT_PAGE)},size:"small",variant:"outlined"})]}):null},C=["columns","excludeFromTabOrder","isVisiblePagination","isVisibleSearch","onSearch","searchKey","tableData"];function R(e){var n=e.columns,t=e.excludeFromTabOrder,r=e.isVisiblePagination,a=e.isVisibleSearch,l=e.onSearch,d=e.searchKey,h=e.tableData,w=(0,s.Z)(e,C),b=(0,o.useRef)(null);if(!a&&!r)return null;var p=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{excludeFromTabOrder:t,isVisibleSearch:a,onSearch:l,searchKey:d}),r&&n.length>0&&(0,u.jsx)(c.kC,{flexGrow:1,gap:"spacing-1",justifyContent:"space-between",children:(0,u.jsx)(x,(0,i.Z)({columns:n,excludeFromTabOrder:t,isVisiblePagination:r,tableData:h},w))})]});return(0,u.jsx)("div",{className:m["table-header"],ref:b,children:(0,u.jsx)("div",{"data-layout":"",children:p})})}var v,y,S,k,P,I,T,N,F,D,z,E,A,O=t(44922),Z=t(51255),j=(t(26035),t(91699)),H=function(e){var n=e.column,t=e.isSortable,r=(0,i.Z)({},n.getHeaderProps());r.style=(0,i.Z)((0,i.Z)({},r.style),{},{display:"flex",left:n.sticky===Z.rF.LEFT&&e.multiRowSelection?Z.Zs+n.totalLeft:r.style.left});var a=!1===t,l=n.columnProperties.isCellEditable&&n.columnProperties.isEditable&&(0,j.EZ)(n.columnProperties.columnType),d=(0,o.useCallback)((function(n){e.onDragStart(n,e.columnIndex)}),[e.columnIndex,e.onDragStart]),s=(0,o.useCallback)((function(n){e.column.sticky!==Z.rF.NONE||e.isHidden||e.onDragEnter(n,e.columnIndex)}),[e.onDragEnter,e.column.sticky,e.columnIndex,e.isHidden]),g=(0,o.useCallback)((function(n){e.column.sticky!==Z.rF.NONE||e.isHidden||e.onDragLeave(n)}),[e.onDragLeave,e.column.sticky,e.isHidden]),m=(0,o.useCallback)((function(n){e.column.sticky!==Z.rF.NONE||e.isHidden||e.onDragOver(n,e.columnIndex)}),[e.onDragOver,e.column.sticky,e.columnIndex,e.isHidden]),h=(0,o.useCallback)((function(n){e.onDrop(n,e.columnIndex)}),[e.onDrop,e.columnIndex]);return(0,u.jsxs)("th",(0,i.Z)((0,i.Z)({},r),{},{"aria-hidden":e.isHidden?"true":void 0,className:"th header-reorder justify-end ".concat(e.stickyRightModifier),"data-header":e.columnName,children:[(0,u.jsx)("div",{className:e.isHidden?"hidden-header":"draggable-header","data-draggable-header":"",draggable:e.column.sticky===Z.rF.NONE&&!e.isHidden||void 0,onClick:a?void 0:function(){if(!e.isResizingColumn){var n=e.columnIndex;!0===e.isAscOrder&&(n=-1);var t=void 0!==e.isAscOrder&&!e.isAscOrder;e.sortTableColumn(n,t)}},onDrag:e.onDrag,onDragEnd:e.onDragEnd,onDragEnter:s,onDragLeave:g,onDragOver:m,onDragStart:d,onDrop:h,style:{"--padding-inline-end":t?void 0!==e.isAscOrder?"calc((var(--outer-spacing-2) * 2) + (2 *var(--sizing-7)))":"calc((var(--outer-spacing-2) * 2) + var(--sizing-7))":"calc(var(--outer-spacing-2) * 2)",justifyContent:n.columnProperties.horizontalAlignment},children:(0,u.jsxs)(c.kC,{alignItems:"center",gap:"spacing-1",children:[l&&(0,u.jsx)(c.JO,{name:"edit",size:"small"}),(0,u.jsx)(c.xv,{lineClamp:1,size:"caption",title:e.columnName.replace(/\s/g,"\xa0"),children:e.columnName.replace(/\s/g,"\xa0")})]})}),t&&(0,u.jsxs)(c.kC,{alignItems:"center",gap:"spacing-1",children:[void 0!==e.isAscOrder&&(0,u.jsx)("span",{style:{pointerEvents:"none"},children:(0,u.jsx)(c.JO,{name:e.isAscOrder?"arrow-up":"arrow-down",size:"small"})}),(0,u.jsxs)(c.bF,{children:[(0,u.jsx)(c.hU,{color:"neutral",excludeFromTabOrder:e.excludeFromTabOrder,icon:"chevron-down",size:"small",variant:"ghost"}),(0,u.jsx)(c.v2,{items:[{id:"sort-asc",label:"Sort column ascending"},{id:"sort-desc",label:"Sort column descending"}],onAction:function(n){switch(n){case"sort-asc":e.sortTableColumn(e.columnIndex,!0);break;case"sort-desc":e.sortTableColumn(e.columnIndex,!1)}}})]})]}),(0,u.jsx)("div",(0,i.Z)((0,i.Z)({},n.getResizerProps()),{},{"data-resizor":"","data-status":n.isResizing?"resizing":"",onClick:function(e){e.preventDefault(),e.stopPropagation()}}))]}))},V=(0,o.memo)(H),M=t(4942),G=t(18032),L=t.n(G),W=t(42905),_=t.n(W),B=t(30168),K=t(62608),Y=t(86125),U=t(56679),X=t(66511),J=t(23994),$=t(38637),q="border-radius: 4px;",Q=(K.ZP.div(v||(v=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  z-index: 1;\n  padding: 10px;\n  ","\n  border: 1px solid ",";\n  box-shadow: 0px 2px 4px rgba(67, 70, 74, 0.14);\n"])),q,Y.w.ATHENS_GRAY),K.ZP.div(y||(y=(0,B.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  height: 32px;\n  box-sizing: border-box;\n  padding: 8px;\n  color: ",";\n  font-size: 14px;\n  min-width: 200px;\n  cursor: ",";\n  ","\n  margin: 3px 0;\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n  .column-type {\n    width: 100%;\n  }\n  &.non-selectable {\n    background: ",";\n  }\n"])),(function(e){return e.selected?Y.w.WHITE:Y.w.OXFORD_BLUE}),(function(e){return e.isHeader?"default":"pointer"}),q,(function(e){return e.selected?Y.w.GREEN:Y.w.WHITE}),(function(e){return e.selected?Y.w.GREEN:Y.w.POLAR}),(function(e){return e.isHeader?Y.w.WHITE_CLOUD:Y.w.WHITE_SMOKE})),K.ZP.div(S||(S=(0,B.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  position: relative;\n  .title {\n    color: ",";\n    margin-left: 10px;\n  }\n  .sub-menu {\n    position: absolute;\n    right: 0;\n  }\n"])),(function(e){return e.selected&&Y.w.GREEN}),(function(e){return e.selected?Y.w.WHITE:Y.w.OXFORD_BLUE})),K.ZP.div(k||(k=(0,B.Z)(["\n  margin: 0 5px 0 0;\n  ","\n  &&&&&& {\n    .bp3-button {\n      border: none;\n    }\n    .bp3-button span {\n      font-weight: 400;\n      text-decoration: none;\n    }\n    &&& .bp3-disabled {\n      background: ",";\n      color: ",";\n    }\n  }\n"])),(function(e){return e.disabled?"cursor: not-allowed;":null}),Y.w.GREY_1,Y.w.GREY_4),K.ZP.div(P||(P=(0,B.Z)(["\n  ","\n  align-items: center;\n  display: flex;\n}\n"])),(function(e){return e.disabled?"cursor: not-allowed;":null})),(0,K.iv)(I||(I=(0,B.Z)([""]))),K.ZP.div(T||(T=(0,B.Z)(["\n  display: ",";\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  ",";\n  font-weight: ",";\n  color: ",";\n  font-style: ",";\n  text-decoration: ",";\n\n  background: ",";\n\n  &:hover,\n  .selected-row & {\n    background: ",";\n  }\n  font-size: ",";\n\n  padding: ",";\n  line-height: ","px;\n  ."," {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  ","\n  .image-cell {\n    height: ",";\n    margin: 0 5px 0 0;\n    ",";\n    object-fit: contain;\n  }\n  video {\n    ","\n  }\n  ",";\n  &.video-cell {\n    height: 100%;\n    iframe {\n      border: none;\n      ","\n    }\n  }\n  .hidden-icon {\n    display: none;\n  }\n  &:hover {\n    .hidden-icon {\n      display: inline;\n    }\n  }\n"])),(function(e){return!1!==e.isCellVisible?"flex":"none"}),(function(e){return e.isHidden?U.KM:""}),(function(e){var n;return null!==(n=e.fontStyle)&&void 0!==n&&n.includes(J.jA.BOLD)?"bold":"normal"}),(function(e){return e.textColor}),(function(e){var n;return null!==(n=e.fontStyle)&&void 0!==n&&n.includes(J.jA.ITALIC)?"italic":""}),(function(e){var n;return null!==(n=e.fontStyle)&&void 0!==n&&n.includes(J.jA.UNDERLINE)&&e.isTextType?"underline":""}),(function(e){return e.isCellDisabled?e.cellBackground?(0,X.tG)(e.cellBackground):"var(--wds-color-bg-disabled)":e.cellBackground}),(function(e){return e.cellBackground&&!e.isCellDisabled?(0,X.r5)(e.cellBackground,5):""}),(function(e){return e.textSize}),(function(e){return e.disablePadding?0:"".concat(e.compactMode?"".concat(Z.bd[e.compactMode].VERTICAL_PADDING,"px 10px"):"".concat(0,"px 10px"))}),28,O.TwV,(function(e){return e.allowCellWrapping?"\n        white-space: break-spaces;\n        word-break: break-word;\n      ":"\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;"}),(function(e){return e.imageSize?Z.Si[e.imageSize]:Z.Si.DEFAULT}),q,q,(function(e){return e.isHyperLink&&"\n    cursor: pointer;\n    &:hover {\n      color: ".concat(Y.w.ROYAL_BLUE,";\n      text-decoration: underline;\n    }")}),q)),ee=(0,K.ZP)(Q)(N||(N=(0,B.Z)(["\n  left: 0;\n  z-index: ",";\n  justify-content: center;\n  width: ","px;\n  height: auto;\n"])),$.S9.modalWidget,Z.Zs),ne=(K.ZP.div(F||(F=(0,B.Z)(["\n  background: ",";\n  box-shadow: ",";\n  width: 48px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ",";\n  cursor: ",";\n  position: relative;\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.selected?Y.w.ATHENS_GRAY:"transparent"}),(function(e){return e.selected?"inset 0px 4px 0px ".concat(Y.w.GREEN):"none"}),(function(e){return e.disabled?U.KM:""}),(function(e){return!e.disabled&&"pointer"}),Y.w.ATHENS_GRAY),K.ZP.div(D||(D=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 150px;\n  position: relative;\n  .title {\n    color: ",";\n    width: 120px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .type {\n    position: absolute;\n    left: 135px;\n    font-size: "," !important;\n    color: ",";\n  }\n"])),Y.w.GREY_10,"12px",Y.w.GREY_10),K.ZP.div(z||(z=(0,B.Z)(["\n  word-break: break-all;\n  max-width: ","px;\n"])),(function(e){return e.width})),K.ZP.tr(E||(E=(0,B.Z)(["\n  display: flex;\n  flex: 1 0 auto;\n"])))),te=K.ZP.div(A||(A=(0,B.Z)(["\n  width: ","px;\n  boxsizing: border-box;\n  flex: "," 0 auto;\n  z-index: ",";\n"])),(function(e){return e.width}),(function(e){return e.width}),(function(e){return e.sticky?$.S9.dragPreview:0})),oe=function(e,n){var t;return null!==(t=e[n])&&void 0!==t&&t.sticky&&0!==n&&e[n-1].sticky===Z.rF.RIGHT&&e[n-1].isHidden?" sticky-right-modifier":""},ie=function(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>7?arguments[7]:void 0,d=arguments.length>8?arguments[8]:void 0,s=arguments.length>9&&void 0!==arguments[9]&&arguments[9],g=new Array(e).fill("");if(r.length){var m=r[0];return g.map((function(e,t){null===d||void 0===d||d(m);var r=(0,i.Z)((0,i.Z)({},m.getRowProps()),{},{style:(0,i.Z)({display:"flex"},l)});return(0,o.createElement)("tr",(0,i.Z)((0,i.Z)({},r),{},{className:"tr",key:t}),a&&(0,u.jsx)(ee,{className:"td t--table-multiselect","data-sticky-td":"true",isCellVisible:!0,role:"cell"}),m.cells.map((function(e,t){var r=e.getCellProps(),l={};return a&&n[t].sticky===Z.rF.LEFT&&(l.left=0===t?Z.Zs:Z.Zs+n[t].columnProperties.width),(0,o.createElement)("div",(0,i.Z)((0,i.Z)({},r),{},{className:n[t].isHidden?"td hidden-cell":"td".concat(oe(n,t)),"data-column-type":"text",key:r.key,style:(0,i.Z)((0,i.Z)({},r.style),l)}),(0,u.jsx)(c.xv,{children:"\u200b"}))})))}))}var h=n.length?n:new Array(3).fill({width:t/3,isHidden:!1}),w=Object.keys(_()(h,{sticky:Z.rF.LEFT,isHidden:!1})).length,b=h.length-Object.keys(_()(h,{sticky:Z.rF.RIGHT})).length;return g.map((function(e,t){return(0,u.jsxs)(ne,{className:"tr",role:"row",style:l,children:[a&&(0,u.jsx)(ee,{className:"td t--table-multiselect","data-sticky-td":"true",isCellVisible:!0,role:"cell"}),h.map((function(e,t){var r,l={},d=e.sticky!==Z.rF.NONE?(0,M.Z)({},"data-sticky-td",!0):{};if(e.sticky===Z.rF.LEFT){var g=h.slice(0,t).map((function(e){return e.width}));l.left=a?0===t?Z.Zs:L()(g)+Z.Zs:0===t?0:L()(g),t===w-1&&(d["data-sticky-last-left-td"]=!0)}else if(e.sticky===Z.rF.RIGHT){var m=h.slice(t+1,h.length).map((function(e){return e.width}));l.right=t===h.length-1?0:L()(m),t===b&&(d["data-sticky-first-right-td"]=!0)}return(0,o.createElement)(te,(0,i.Z)((0,i.Z)({className:e&&e.isHidden?"td hidden-cell":"td".concat(oe(n,t)),role:s?"columnheader":"cell"},d),{},{"data-column-type":"text",key:t,sticky:null!==(r=null===e||void 0===e?void 0:e.sticky)&&void 0!==r?r:Z.rF.NONE,style:(0,i.Z)({},l),width:e.width}),(0,u.jsx)(c.xv,{children:"\u200b"}))}))]},t)}))},re=function(e){var n=o.useRef(""),t=e.columns.map((function(e){return e.alias})),r=(0,j.KV)(e.columns,n,e.handleReorderColumn,t),a=r.onDrag,l=r.onDragEnd,d=r.onDragEnter,s=r.onDragLeave,g=r.onDragOver,m=r.onDragStart,h=r.onDrop;return(0,u.jsxs)("thead",{onMouseLeave:e.enableDrag,onMouseOver:e.disableDrag,children:[e.headerGroups.map((function(n,r){var w=(0,i.Z)({},n.getHeaderGroupProps());return(0,o.createElement)("tr",(0,i.Z)((0,i.Z)({},w),{},{key:r,style:{width:e.headerWidth}}),e.multiRowSelection&&(0,u.jsx)(ee,{className:"td t--table-multiselect","data-sticky-td":"true",isCellVisible:!0,role:"cell",children:(0,u.jsx)(c.XZ,{excludeFromTabOrder:e.excludeFromTabOrder,isIndeterminate:e.rowSelectionState===Z.BZ.PARTIAL,isSelected:!!e.rowSelectionState,onChange:e.handleAllRowSelectClick})}),n.headers.map((function(n,o){var i=n.isHidden?"":0!==o&&e.columns[o-1].sticky===Z.rF.RIGHT&&e.columns[o-1].isHidden?"sticky-right-modifier":"";return(0,u.jsx)(V,{canFreezeColumn:e.canFreezeColumn,column:n,columnIndex:o,columnName:n.Header,columnOrder:t,editMode:e.editMode,excludeFromTabOrder:e.excludeFromTabOrder,handleColumnFreeze:e.handleColumnFreeze,handleReorderColumn:e.handleReorderColumn,isAscOrder:n.isAscOrder,isHidden:n.isHidden,isResizingColumn:e.isResizingColumn.current,isSortable:e.isSortable,multiRowSelection:e.multiRowSelection,onDrag:a,onDragEnd:l,onDragEnter:d,onDragLeave:s,onDragOver:g,onDragStart:m,onDrop:h,sortTableColumn:e.sortTableColumn,stickyRightModifier:i,widgetId:e.widgetId,width:n.width},o)})))})),0===e.headerGroups.length&&ie(1,e.columns,e.width,e.subPage,e.multiRowSelection,e.accentColor,e.borderRadius,{},e.prepareRow,!0)]})},ae=(0,o.memo)(re),le=o.createContext({accentColor:"",borderRadius:"",multiRowSelection:!1,selectedRowIndex:-1,selectedRowIndices:[],columns:[],width:0,rows:[],primaryColumnId:"",isAddRowInProgress:!1,totalColumnsWidth:0});function de(e){var n=(0,o.useContext)(le),t=n.columns,r=n.isAddRowInProgress,a=n.multiRowSelection,l=n.prepareRow,d=n.primaryColumnId,s=n.selectedRowIndex,g=n.selectedRowIndices,m=n.selectTableRow;null===l||void 0===l||l(e.row);var h=(0,i.Z)((0,i.Z)({},e.row.getRowProps()),{},{style:(0,i.Z)({display:"flex"},e.style||{})}),w=a?g.includes(e.row.index):e.row.index===s,b=d&&e.row.original[d]||e.index;return(0,o.createElement)("div",(0,i.Z)((0,i.Z)({},h),{},{"aria-checked":w,className:"tr ".concat(w?"selected-row":""," ").concat(e.className||""),"data-is-new":r&&0===e.index?"":void 0,"data-rowindex":e.index,key:b}),a&&(0,u.jsx)(ee,{className:"td t--table-multiselect","data-sticky-td":"true",isCellVisible:!0,role:"cell",children:(0,u.jsx)(c.XZ,{excludeFromTabOrder:e.excludeFromTabOrder,isSelected:!!w,onChange:function(){e.row.toggleRowSelected(),null===m||void 0===m||m(e.row)}})}),e.row.cells.map((function(n,r){var l,d=n.getCellProps();return d.style=(0,i.Z)((0,i.Z)({},d.style),{},{display:"flex",alignItems:t[r].columnProperties.verticalAlignment,justifyContent:t[r].columnProperties.horizontalAlignment,left:t[r].sticky===Z.rF.LEFT&&a?n.column.totalLeft+Z.Zs:null===d||void 0===d||null===(l=d.style)||void 0===l?void 0:l.left}),(0,o.createElement)("div",(0,i.Z)((0,i.Z)({},d),{},{"aria-hidden":t[r].isHidden?"true":void 0,className:t[r].isHidden?"td hidden-cell":"td".concat(0!==r&&t[r-1].sticky===Z.rF.RIGHT&&t[r-1].isHidden?" sticky-right-modifier":""),"data-cell-color":t[r].columnProperties.cellColor,"data-colindex":r,"data-column-type":t[r].columnProperties.columnType,"data-rowindex":e.index,key:r}),n.render("Cell"))})))}var se=function(e){var n=(0,o.useContext)(le),t=n.accentColor,i=n.borderRadius,r=n.columns,a=n.multiRowSelection,l=n.prepareRow,d=n.rows,s=n.width;return(0,u.jsx)(u.Fragment,{children:ie(e.rowCount,r,s,d,a,t,i,e.style,l,!1)})},ce=function(e){return(0,u.jsxs)("div",(0,i.Z)((0,i.Z)({},e.getTableBodyProps()),{},{className:"tbody body",children:[e.rows.map((function(n,t){return(0,u.jsx)(de,{excludeFromTabOrder:e.excludeFromTabOrder,index:t,row:n},t)})),e.pageSize>e.rows.length&&(0,u.jsx)(se,{excludeFromTabOrder:e.excludeFromTabOrder,rowCount:e.pageSize-e.rows.length})]}))},ue=["accentColor","borderRadius","canFreezeColumn","columns","disableDrag","editMode","enableDrag","handleAllRowSelectClick","handleColumnFreeze","handleReorderColumn","headerGroups","isAddRowInProgress","isResizingColumn","isSortable","multiRowSelection","prepareRow","primaryColumnId","rows","rowSelectionState","selectedRowIndex","selectedRowIndices","selectTableRow","sortTableColumn","subPage","widgetId","width"],ge=function(e){var n=e.accentColor,t=e.borderRadius,o=e.canFreezeColumn,r=e.columns,a=e.disableDrag,l=e.editMode,d=e.enableDrag,c=e.handleAllRowSelectClick,g=e.handleColumnFreeze,m=e.handleReorderColumn,h=e.headerGroups,w=e.isAddRowInProgress,b=e.isResizingColumn,p=e.isSortable,f=e.multiRowSelection,x=e.prepareRow,C=e.primaryColumnId,R=e.rows,v=e.rowSelectionState,y=e.selectedRowIndex,S=e.selectedRowIndices,k=e.selectTableRow,P=e.sortTableColumn,I=e.subPage,T=e.widgetId,N=e.width,F=(0,s.Z)(e,ue);return(0,u.jsx)(le.Provider,{value:{accentColor:n,canFreezeColumn:o,disableDrag:a,editMode:l,enableDrag:d,handleAllRowSelectClick:c,handleColumnFreeze:g,handleReorderColumn:m,headerGroups:h,isResizingColumn:b,isSortable:p,rowSelectionState:v,sortTableColumn:P,subPage:I,widgetId:T,isAddRowInProgress:w,borderRadius:t,multiRowSelection:f,prepareRow:x,primaryColumnId:C,selectedRowIndex:y,selectedRowIndices:S,selectTableRow:k,columns:r,rows:R,width:N,getTableBodyProps:e.getTableBodyProps,totalColumnsWidth:e.totalColumnsWidth},children:(0,u.jsx)(ce,(0,i.Z)({rows:R},F))})},me=function(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ae,{accentColor:e.accentColor,borderRadius:e.borderRadius,canFreezeColumn:e.canFreezeColumn,columns:e.columns,disableDrag:e.disableDrag,editMode:e.editMode,enableDrag:e.enableDrag,excludeFromTabOrder:e.excludeFromTabOrder,handleAllRowSelectClick:e.handleAllRowSelectClick,handleColumnFreeze:e.handleColumnFreeze,handleReorderColumn:e.handleReorderColumn,headerGroups:e.headerGroups,headerWidth:e.multiRowSelection&&e.totalColumnsWidth?Z.Zs+e.totalColumnsWidth:e.totalColumnsWidth,isResizingColumn:e.isResizingColumn,isSortable:e.isSortable,multiRowSelection:e.multiRowSelection,prepareRow:e.prepareRow,rowSelectionState:e.rowSelectionState,sortTableColumn:e.sortTableColumn,subPage:e.subPage,widgetId:e.widgetId,width:e.width}),(0,u.jsx)(ge,{accentColor:e.accentColor,borderRadius:e.borderRadius,columns:e.columns,excludeFromTabOrder:e.excludeFromTabOrder,getTableBodyProps:e.getTableBodyProps,height:e.pageSize*e.tableSizes.ROW_HEIGHT,isAddRowInProgress:e.isAddRowInProgress,multiRowSelection:!!e.multiRowSelection,pageSize:e.pageSize,prepareRow:e.prepareRow,primaryColumnId:e.primaryColumnId,rows:e.subPage,selectTableRow:e.selectTableRow,selectedRowIndex:e.selectedRowIndex,selectedRowIndices:e.selectedRowIndices,width:e.width})]})},he=o.forwardRef(me),we=t(57716),be=function(){return"Connect your data or use sample data to display table"},pe=t(26844),fe="styles_table__Rsy57",xe={minWidth:30,width:150},Ce=[];var Re=function(e){var n=o.useRef(!1),t=e.columns,r=e.data,s=e.multiRowSelection,c=e.showConnectDataOverlay,g=e.toggleAllRowSelect,m=o.useMemo((function(){return t.filter((function(e){return"actions"!==e.alias}))}),[t]),h=e.serverSidePaginationEnabled&&e.totalRecordsCount?Math.ceil(e.totalRecordsCount/e.pageSize):Math.ceil(e.data.length/e.pageSize),w=e.pageNo<h?e.pageNo:0,b=(0,l.useTable)({columns:t,data:r,defaultColumn:xe,initialState:{pageIndex:w,pageSize:e.pageSize},manualPagination:!0,pageCount:h},l.useBlockLayout,l.useResizeColumns,l.usePagination,l.useRowSelect,d.useSticky),p=b.getTableBodyProps,f=b.getTableProps,x=b.headerGroups,C=b.page,v=b.prepareRow,y=b.state,S=b.totalColumnsWidth;y.columnResizing.isResizingColumn?n.current=!0:n.current&&setTimeout((function(){n.current=!1,function(n){var t=(0,i.Z)((0,i.Z)({},e.columnWidthMap),n);for(var o in t)if(t[o]<60)t[o]=60;else if(void 0===t[o]){var r=e.columns.filter((function(e){return!e.isHidden})).length;t[o]=e.width/r}e.handleResizeColumn(t)}(y.columnResizing.columnWidths)}),0);var k=w*e.pageSize,P=k+e.pageSize;e.serverSidePaginationEnabled&&(k=0,P=e.data.length);var I=(0,o.useMemo)((function(){return C.slice(k,P)}),[C,k,P]),T=e.selectedRowIndices||Ce,N=Z.bd[e.compactMode||Z.$G.DEFAULT],F=o.useMemo((function(){if(!s)return null;var e=a()(C,(function(e,n){return T.includes(n.index)?e+1:e}),0);return 0===e?0:e===C.length?1:2}),[s,C,T]),D=(0,o.useCallback)((function(){g(!Boolean(F),C)}),[C,F,g]),z=e.isVisibleSearch||e.isVisibleFilters||e.isVisibleDownload||e.isVisiblePagination||e.allowAddNewRow,E="DEFAULT"===e.variant?"default":"VARIANT2"===e.variant?"no-borders":"VARIANT3"===e.variant?"horizontal-borders":"default";return(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(we.A,{btnText:(0,pe.tnH)(pe.LRA),message:(0,pe.tnH)(be),onConnectData:e.onConnectData}),(0,u.jsxs)("div",{className:fe,"data-status":e.isAddRowInProgress?"add-row-in-progress":"","data-type":"static","data-variant":E,id:"table".concat(e.widgetId),children:[z&&(0,u.jsx)(R,{columns:m,currentPageIndex:w,excludeFromTabOrder:e.excludeFromTabOrder,isVisiblePagination:e.isVisiblePagination,isVisibleSearch:e.isVisibleSearch,nextPageClick:e.nextPageClick,onSearch:e.onSearch,pageCount:h,pageNo:e.pageNo,prevPageClick:e.prevPageClick,searchKey:e.searchKey,serverSidePaginationEnabled:e.serverSidePaginationEnabled,tableData:r,totalRecordsCount:e.totalRecordsCount,updatePageNo:e.updatePageNo}),(0,u.jsx)("div",{className:"tableWrap ".concat(e.isLoading?O.Ms1:""),"data-table-wrapper":"",children:(0,u.jsx)("div",(0,i.Z)((0,i.Z)({},f()),{},{className:"table column-freeze",children:(0,u.jsx)(he,{accentColor:e.accentColor,borderRadius:e.borderRadius,canFreezeColumn:e.canFreezeColumn,columns:e.columns,disableDrag:e.disableDrag,editMode:e.editMode,enableDrag:e.enableDrag,excludeFromTabOrder:e.excludeFromTabOrder,getTableBodyProps:p,handleAllRowSelectClick:D,handleColumnFreeze:e.handleColumnFreeze,handleReorderColumn:e.handleReorderColumn,headerGroups:x,height:e.height,isAddRowInProgress:e.isAddRowInProgress,isResizingColumn:n,isSortable:e.isSortable,multiRowSelection:null===e||void 0===e?void 0:e.multiRowSelection,pageSize:e.pageSize,prepareRow:v,primaryColumnId:e.primaryColumnId,rowSelectionState:F,selectTableRow:e.selectTableRow,selectedRowIndex:e.selectedRowIndex,selectedRowIndices:e.selectedRowIndices,sortTableColumn:e.sortTableColumn,subPage:I,tableSizes:N,totalColumnsWidth:S,widgetId:e.widgetId,width:e.width})}))})]})]})},ve=t(8960),ye=t.n(ve),Se=t(85392);function ke(e){var n=e.allowAddNewRow,t=e.allowRowSelection,i=e.allowSorting,r=e.borderColor,a=e.borderWidth,l=e.canFreezeColumn,d=e.columns,s=e.columnWidthMap,c=e.compactMode,g=e.delimiter,m=e.disabledAddNewRowSave,h=e.disableDrag,w=e.editableCell,b=e.editMode,p=e.filters,f=e.handleColumnFreeze,x=e.handleReorderColumn,C=e.handleResizeColumn,R=e.height,v=e.isAddRowInProgress,y=e.isLoading,S=e.isSortable,k=e.isVisibleDownload,P=e.isVisibleFilters,I=e.isVisiblePagination,T=e.isVisibleSearch,N=e.multiRowSelection,F=e.nextPageClick,D=e.onAddNewRow,z=e.onAddNewRowAction,E=e.onBulkEditDiscard,A=e.onBulkEditSave,O=e.onConnectData,Z=e.onRowClick,j=e.onSearch,H=e.pageNo,V=e.pageSize,M=e.prevPageClick,G=e.primaryColumnId,L=e.searchKey,W=e.selectAllRow,_=e.selectedRowIndex,B=e.selectedRowIndices,K=e.serverSidePaginationEnabled,Y=e.showConnectDataOverlay,U=e.sortTableColumn,X=e.tableData,J=e.totalRecordsCount,$=e.triggerRowSelection,q=e.unSelectAllRow,Q=e.updatePageNo,ee=e.variant,ne=e.widgetId,te=e.widgetName,oe=e.width,ie=(0,o.useCallback)((function(e,n){if(i)if(-1===e)U("",n);else{var t,o=d[e],r=(null===(t=o.metaProperties)||void 0===t?void 0:t.type)||Se.cV.TEXT;r!==Se.cV.IMAGE&&r!==Se.cV.VIDEO&&U(o.alias,n)}}),[U,i,d]),re=(0,o.useCallback)((function(e){t&&Z(e.original,e.index)}),[t,Z]),ae=(0,o.useCallback)((function(e,n){t&&(e?W(n):q(n))}),[t,W,q]),le=(0,o.useCallback)((function(){return h(!0)}),[h]),de=(0,o.useCallback)((function(){return h(!1)}),[h]);return(0,u.jsx)(Re,{accentColor:e.accentColor,allowAddNewRow:n,borderColor:r,borderRadius:e.borderRadius,borderWidth:a,boxShadow:e.boxShadow,canFreezeColumn:l,columnWidthMap:s,columns:d,compactMode:c,data:X,delimiter:g,disableDrag:le,disabledAddNewRowSave:m,editMode:b,editableCell:w,enableDrag:de,excludeFromTabOrder:e.excludeFromTabOrder,filters:p,handleColumnFreeze:f,handleReorderColumn:x,handleResizeColumn:C,height:R,isAddRowInProgress:v,isLoading:y,isSortable:S,isVisibleDownload:k,isVisibleFilters:P,isVisiblePagination:I,isVisibleSearch:T,multiRowSelection:N,nextPageClick:F,onAddNewRow:D,onAddNewRowAction:z,onBulkEditDiscard:E,onBulkEditSave:A,onConnectData:O,onSearch:j,pageNo:H-1,pageSize:V||1,prevPageClick:M,primaryColumnId:G,searchKey:L,selectTableRow:re,selectedRowIndex:_,selectedRowIndices:B,serverSidePaginationEnabled:K,showConnectDataOverlay:Y,sortTableColumn:ie,toggleAllRowSelect:ae,totalRecordsCount:J,triggerRowSelection:$,updatePageNo:Q,variant:ee,widgetId:ne,widgetName:te,width:oe})}var Pe=o.memo(ke,(function(e,n){return e.compactMode===n.compactMode&&e.delimiter===n.delimiter&&e.disableDrag===n.disableDrag&&e.editMode===n.editMode&&e.isSortable===n.isSortable&&e.filters===n.filters&&e.handleReorderColumn===n.handleReorderColumn&&e.handleResizeColumn===n.handleResizeColumn&&e.height===n.height&&e.isLoading===n.isLoading&&e.isVisibleDownload===n.isVisibleDownload&&e.isVisibleFilters===n.isVisibleFilters&&e.isVisiblePagination===n.isVisiblePagination&&e.isVisibleSearch===n.isVisibleSearch&&e.nextPageClick===n.nextPageClick&&e.onRowClick===n.onRowClick&&e.pageNo===n.pageNo&&e.pageSize===n.pageSize&&e.prevPageClick===n.prevPageClick&&e.searchKey===n.searchKey&&e.onSearch===n.onSearch&&e.selectedRowIndex===n.selectedRowIndex&&e.selectedRowIndices===n.selectedRowIndices&&e.serverSidePaginationEnabled===n.serverSidePaginationEnabled&&e.sortTableColumn===n.sortTableColumn&&e.totalRecordsCount===n.totalRecordsCount&&e.triggerRowSelection===n.triggerRowSelection&&e.updatePageNo===n.updatePageNo&&e.widgetId===n.widgetId&&e.widgetName===n.widgetName&&e.width===n.width&&e.borderRadius===n.borderRadius&&e.boxShadow===n.boxShadow&&e.borderWidth===n.borderWidth&&e.borderColor===n.borderColor&&e.accentColor===n.accentColor&&ye()(e.columnWidthMap,n.columnWidthMap)&&e.tableData===n.tableData&&e.columns===n.columns&&ye()(e.editableCell,n.editableCell)&&e.variant===n.variant&&e.primaryColumnId===n.primaryColumnId&&ye()(e.isEditableCellsValid,n.isEditableCellsValid)&&e.isAddRowInProgress===n.isAddRowInProgress&&e.allowAddNewRow===n.allowAddNewRow&&e.allowRowSelection===n.allowRowSelection&&e.allowSorting===n.allowSorting&&e.disabledAddNewRowSave===n.disabledAddNewRowSave&&e.canFreezeColumn===n.canFreezeColumn&&e.showConnectDataOverlay===n.showConnectDataOverlay}))},29306:function(e){e.exports=function(e,n){for(var t,o=-1,i=e.length;++o<i;){var r=n(e[o]);void 0!==r&&(t=void 0===t?r:t+r)}return t}},18032:function(e,n,t){var o=t(29306),i=t(10733);e.exports=function(e){return e&&e.length?o(e,i):0}},6623:function(e,n,t){"use strict";var o=t(38416).default;function i(e){return"left"===e.sticky||"right"===e.sticky?e.sticky:e.parent?i(e.parent):null}function r(e,n){var t=n.findIndex((function(n){return n.id===e})),o=n[t],r=n[t+1],a="left"===i(o),l=r&&"left"===i(r);return a&&!l}function a(e,n){var t=n.findIndex((function(n){return n.id===e})),o=n[t],r=n[t-1],a="right"===i(o),l=r&&"right"===i(r);return a&&!l}function l(e,n){for(var t=0,o=n.findIndex((function(n){return n.id===e}))+1;o<n.length;o+=1)!1!==n[o].isVisible&&(t+=n[o].width);return t}Object.defineProperty(n,"__esModule",{value:!0}),n.checkErrors=function(e){var n=!!e.find((function(e){return e.parent})),t=e.filter((function(e){return e.sticky&&!e.parent})).map((function(e){var n=e.Header;return"'".concat(n,"'")}));if(n&&t.length)throw new Error("WARNING react-table-sticky:\n      \nYour ReactTable has group and sticky columns outside groups, and that will break UI.\n      \nYou must place ".concat(t.join(" and ")," columns into a group (even a group with an empty Header label)\n"));var o=e.find((function(e){return!e.sticky&&e.columns&&e.columns.find((function(e){return e.sticky}))}));if(o){var i=o.columns.find((function(e){return e.sticky}));if(i)throw new Error("WARNING react-table-sticky:\n    \nYour ReactTable contain columns group with at least one child columns sticky.\n    \nWhen ReactTable has columns groups, only columns groups can be sticky\n    \nYou must set sticky: 'left' | 'right' for the '".concat(o.Header,"'\n    column, or remove the sticky property of '").concat(i.Header,"' column."))}},n.getStickyValue=i,n.columnIsLastLeftSticky=r,n.columnIsFirstRightSticky=a,n.getMarginRight=l;var d={position:"sticky",zIndex:3};function s(e,t){var s={},c={};n.checkErrors(t.columns);var u=i(e);if(u){s=Object.assign({},d),c["data-sticky-td"]=!0;var g=function(e,n){return n.filter((function(n){return n.depth===e.depth}))}(e,t.flatHeaders),m="left"===u?e.totalLeft:l(e.id,g);s=Object.assign(Object.assign({},s),o({},u,"".concat(m,"px"))),r(e.id,g)&&(c["data-sticky-last-left-td"]=!0),a(e.id,g)&&(c["data-sticky-first-right-td"]=!0)}return Object.assign({style:s},c)}n.useSticky=function(e){e.getHeaderProps.push((function(e,n){var t=n.instance;return[e,s(n.column,t)]})),e.getCellProps.push((function(e,n){var t=n.instance;return[e,s(n.cell.column,t)]}))},n.useSticky.pluginName="useSticky"}}]);
//# sourceMappingURL=5190.cc7f1c73.chunk.js.map