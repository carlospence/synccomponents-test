"use strict";(self.webpackChunk_carlospence_synccomponents_test=self.webpackChunk_carlospence_synccomponents_test||[]).push([[454],{"./src/components/FieldDecoration/FieldDecoration.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FieldDecoration/FieldDecoration.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"SyncComponents/FieldDecoration",component:_FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_1__.h},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_1__.h,{label:"Field decoration",leading:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-user me-2",style:{opacity:.35}}),trailing:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn bt-light btn-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-redo"})}),error:"This is a test error",helper:"Max length: 10 chars",children:_ref=>{let{onFieldFocus,onFieldBlur}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",onFocus:onFieldFocus,onBlur:onFieldBlur,placeholder:"Enter name here"})}});Default.displayName="Default";const Disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_1__.h,{label:"Field decoration",leading:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-user me-2",style:{opacity:.35}}),trailing:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn bt-light btn-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-redo"})}),error:"This is a test error",helper:"Max length: 10 chars",disabled:!0,children:_ref2=>{let{onFieldFocus,onFieldBlur}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",onFocus:onFieldFocus,onBlur:onFieldBlur,placeholder:"Enter name here"})}});Disabled.displayName="Disabled",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(): any => {\n  return <FieldDecoration label="Field decoration" leading={<i className="fa fa-user me-2" style={{\n    opacity: 0.35\n  }} />} trailing={<button className="btn bt-light btn-sm">\n          <i className="fa fa-redo" />\n        </button>} error="This is a test error" helper="Max length: 10 chars">\n      {({\n      onFieldFocus,\n      onFieldBlur\n    }) => <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} placeholder="Enter name here" />}\n    </FieldDecoration>;\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'(): any => {\n  return <FieldDecoration label="Field decoration" leading={<i className="fa fa-user me-2" style={{\n    opacity: 0.35\n  }} />} trailing={<button className="btn bt-light btn-sm">\n          <i className="fa fa-redo" />\n        </button>} error="This is a test error" helper="Max length: 10 chars" disabled>\n      {({\n      onFieldFocus,\n      onFieldBlur\n    }) => <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} placeholder="Enter name here" />}\n    </FieldDecoration>;\n}',...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled"]},"./src/components/FieldDecoration/FieldDecoration.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FieldDecoration});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldDecorationRoot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs((props=>({className:"react-simple-widget field-decoration "+props.className})))`
  &.has-focus {
    .field-decoration-content-container {
      border-color: var(--rsw-primary-color);

      > label {
        color: var(--rsw-primary-color);
      }
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;

    * {
      pointer-events: none;
    }
  }

  .field-decoration-content-container {
    --border-width: 2px;

    position: relative;
    border-radius: 4px;
    border: var(--border-width) solid var(--rsw-secondary-color);
    padding: 8px 8px 4px;

    > label {
      position: absolute;
      top: -10px;
      left: 6px;
      margin: 0;
      padding: 0 4px;
      font-size: 75%;
      color: var(--rsw-label-color);
      background-color: white;
    }

    > .field-decoration-content {
      display: flex;
      align-items: center;

      > :not(.leading):not(.trailing) {
        flex: 1 1;
        width: 100%;
        outline: none;
        border: none;
      }
    }
  }

  > .field-decoration-footer {
    display: flex;
    padding: 0 10px;
    justify-content: flex-end;

    .helper,
    .error {
      margin: 0;
      font-size: 75%;
    }

    .error {
      color: var(--rsw-error-color);
      flex: 1 1;
    }
  }
`,FieldDecoration=_ref=>{let{label,leading,trailing,error,helper,disabled,children,className,...rest}=_ref;const[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),child=children({onFieldFocus:()=>setFocused(!0),onFieldBlur:()=>setFocused(!1)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldDecorationRoot,{className:(()=>{const classes=[];return className&&classes.push(className),leading&&classes.push("has-leading"),trailing&&classes.push("has-trailing"),focused&&classes.push("has-focus"),error&&classes.push("has-error"),helper&&classes.push("has-helper"),disabled&&classes.push("disabled"),classes.join(" ")})(),...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-content-container",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-content",children:[leading&&(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(leading,{className:`leading ${leading.props.className||""}`,disabled:disabled||leading.props.disabled}),(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{disabled:disabled||child.props.disabled}),trailing&&(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(trailing,{className:`leading ${trailing.props.className||""}`,disabled:disabled||trailing.props.disabled})]})]}),(error||helper)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-footer",children:[error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"error",children:error}),helper&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"helper",children:helper})]})]})};FieldDecoration.displayName="FieldDecoration";try{FieldDecoration.displayName="FieldDecoration",FieldDecoration.__docgenInfo={description:"",displayName:"FieldDecoration",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},helper:{defaultValue:null,description:"",name:"helper",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"Element"}},trailing:{defaultValue:null,description:"",name:"trailing",required:!1,type:{name:"Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FieldDecoration/FieldDecoration.tsx#FieldDecoration"]={docgenInfo:FieldDecoration.__docgenInfo,name:"FieldDecoration",path:"src/components/FieldDecoration/FieldDecoration.tsx#FieldDecoration"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-FieldDecoration-FieldDecoration-stories.bbae7d5c.iframe.bundle.js.map