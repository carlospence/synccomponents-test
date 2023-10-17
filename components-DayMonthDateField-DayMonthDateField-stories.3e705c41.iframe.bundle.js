"use strict";(self.webpackChunk_carlospence_synccomponents_test=self.webpackChunk_carlospence_synccomponents_test||[]).push([[85],{"./src/components/DayMonthDateField/DayMonthDateField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DayMonthDateField_stories});__webpack_require__("./node_modules/react/index.js");var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),CustomField=__webpack_require__("./src/components/CustomField/CustomField.tsx"),FieldDecoration=__webpack_require__("./src/components/FieldDecoration/FieldDecoration.tsx"),DayMonthDatePicker=__webpack_require__("./src/components/DayMonthDatePicker/DayMonthDatePicker.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DayMonthDateFieldRoot=styled_components_browser_esm.ZP.div.attrs((props=>({className:"react-simple-widget month-date-field "+props.className})))`
  .month-date-picker {
    display: flex;
  }

  select {
    padding-top: 0;
    padding-bottom: 0;
    flex: 1 1;
  }

  select:first-child {
    border-top: none;
    border-left: none;
    border-bottom: none;
  }

  select:last-child {
    border-top: none;
    border-right: none;
    border-bottom: none;
  }
`,DayMonthDateField=_ref=>{let{name,label,helper,leading,trailing,disabled,onChange,onFocus,onBlur,...rest}=_ref;return(0,jsx_runtime.jsx)(DayMonthDateFieldRoot,{children:(0,jsx_runtime.jsx)(CustomField.J,{name,children:_ref2=>{let{value,error,touched,setValue,setTouched}=_ref2;return(0,jsx_runtime.jsx)(FieldDecoration.h,{label,leading,trailing,error:touched&&error,helper,disabled,children:_ref3=>{let{onFieldFocus,onFieldBlur}=_ref3;return(0,jsx_runtime.jsx)(DayMonthDatePicker.m,{value,onChange:date=>{setValue(date),onChange&&onChange(date)},onFocus:e=>{onFieldFocus(),setTouched(!0),onFocus&&onFocus(e)},onBlur:e=>{onFieldBlur(),onBlur&&onBlur(e)},...rest})}})}})})};DayMonthDateField.displayName="DayMonthDateField";try{DayMonthDateField.displayName="DayMonthDateField",DayMonthDateField.__docgenInfo={description:"",displayName:"DayMonthDateField",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: string) => void)"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"((date: string) => string)"}},monthDisplay:{defaultValue:null,description:"",name:"monthDisplay",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"long"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"Element"}},trailing:{defaultValue:null,description:"",name:"trailing",required:!1,type:{name:"Element"}},helper:{defaultValue:null,description:"",name:"helper",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DayMonthDateField/DayMonthDateField.tsx#DayMonthDateField"]={docgenInfo:DayMonthDateField.__docgenInfo,name:"DayMonthDateField",path:"src/components/DayMonthDateField/DayMonthDateField.tsx#DayMonthDateField"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const DayMonthDateField_stories={title:"SyncComponents/DayMonthDateField",component:DayMonthDateField},Default=()=>{const SampleForm=()=>(0,jsx_runtime.jsx)("div",{id:"sample-form",children:(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:{field:""},validate:values=>{const errors={};return values.field||(errors.field="Required"),errors},onSubmit:values=>{console.log(values),(0,dist.aD)("Form Submit")(values)},children:formik=>(0,jsx_runtime.jsxs)("form",{onSubmit:formik.handleSubmit,children:[(0,jsx_runtime.jsx)("div",{className:"mb-4",children:(0,jsx_runtime.jsx)(DayMonthDateField,{name:"field",label:"Month and day date field",placeholder:"Click to select date",leading:(0,jsx_runtime.jsx)("i",{className:"fa fa-calendar me-1"})})}),(0,jsx_runtime.jsx)("div",{className:"d-grid",children:(0,jsx_runtime.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})});return(0,jsx_runtime.jsx)(SampleForm,{})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(): any => {\n  const SampleForm = (): any => {\n    const initialValues: any = {\n      field: ""\n    };\n    const validate = (values: any) => {\n      const errors: any = {};\n      if (!values.field) errors.field = "Required";\n      return errors;\n    };\n    const onSubmit = (values: any) => {\n      console.log(values);\n      action("Form Submit")(values);\n    };\n    return <div id="sample-form">\n        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>\n          {formik => <form onSubmit={formik.handleSubmit}>\n              <div className="mb-4">\n                <DayMonthDateField name="field" label="Month and day date field" placeholder="Click to select date"\n            // helper={`${formik.values.field.length} of 6`}\n            leading={<i className="fa fa-calendar me-1" />} />\n              </div>\n\n              <div className="d-grid">\n                <button type="submit" className="btn btn-primary">\n                  Submit\n                </button>\n              </div>\n            </form>}\n        </Formik>\n      </div>;\n  };\n  return <SampleForm />;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/CustomField/CustomField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>CustomField});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const CustomField=_ref=>{let{children,errorBuilder:_errorBuilder,...rest}=_ref;const[field,meta,helper]=(0,formik__WEBPACK_IMPORTED_MODULE_0__.U$)(rest);return children({...field,...meta,...helper,error:(error=>{if(_errorBuilder)return _errorBuilder(error);switch(Object.prototype.toString.call(error)){case"[object Object]":return Object.keys(error).map((k=>error[k])).join(", ");case"[object Array]":return error.join(", ");case"[object String]":return error.toString();default:return null}})(meta.error)})};try{CustomField.displayName="CustomField",CustomField.__docgenInfo={description:"",displayName:"CustomField",props:{errorBuilder:{defaultValue:null,description:"",name:"errorBuilder",required:!1,type:{name:"CustomFieldErrorBuilder"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CustomField/CustomField.tsx#CustomField"]={docgenInfo:CustomField.__docgenInfo,name:"CustomField",path:"src/components/CustomField/CustomField.tsx#CustomField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DayMonthDatePicker/DayMonthDatePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>DayMonthDatePicker});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_calendarUtils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/calendarUtils.ts"),dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dayjs/plugin/arraySupport.js"),dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_2__),dayjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__),_PopupMenu_PopupMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/PopupMenu/PopupMenu.tsx"),_FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/FieldDecoration/FieldDecoration.tsx"),dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/dayjs/plugin/advancedFormat.js"),dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend(dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_2___default()),dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_6___default());const DayMonthDatePickerRoot=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div.attrs((props=>({className:"react-simple-widget month-date-picker "+props.className})))``,DayMonthDatePickerPopupRoot=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div.attrs((props=>({className:"react-simple-widget month-date-picker-popup "+props.className})))`
  header {
    p {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    button {
      i {
        color: var(--rsw-primary-color);
      }
    }
  }

  select {
    display: inline-block;
    width: auto;
    background-color: transparent;
  }

  .month-select {
    display: grid;
    grid-template-columns: repeat(4, 25%);

    button {
      transition: background-color var(--rsw-transition-duration);
      white-space: nowrap;
      border-radius: 2px;
    }

    button:focus,
    button:hover {
      outline: none;
      box-shadow: none;
    }

    button.active {
      background-color: var(--rsw-primary-color);
      color: white;
      font-weight: bold;
      border-radius: 25%
    }
  }

  .month-date-picker-error {
    text-align: center;
    margin-top: 12px;
    padding-top: 12px;
    font-size: 85%;
    font-weight: bold;
    color: var(--rsw-error-color);
    border-top: 1px solid #e3e3e3;
  }
`,DayMonthDatePicker=_ref=>{let{value,monthDisplay="small",validator,onChange,...rest}=_ref;const[displayYear,setDisplayYear]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{var year=(0,_utils_calendarUtils__WEBPACK_IMPORTED_MODULE_1__.gy)(value);return isNaN(year)?dayjs__WEBPACK_IMPORTED_MODULE_3___default()().year():year})),[displayDay,setDisplayDay]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,_utils_calendarUtils__WEBPACK_IMPORTED_MODULE_1__.dO)(value))),[displayMonth,setDisplayMonth]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,_utils_calendarUtils__WEBPACK_IMPORTED_MODULE_1__.fh)(value))),[daysInMonth,setDaysInMonth]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{var days=dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,displayDay]).daysInMonth();return isNaN(days)?30:days})),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),monthBtnClassName=active=>{const classes=["btn","btn-link","btn-sm","text-decoration-none"];return active&&classes.push("active"),classes.join(" ")},resetDisplayDate=()=>{const current=dayjs__WEBPACK_IMPORTED_MODULE_3___default()();setDisplayYear(current.year()),setDisplayMonth(current.month()),setDisplayDay(current.date())};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{var days=dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,1]).daysInMonth();isNaN(days)?(setDaysInMonth(30),displayDay>28?(setDisplayDay(1),onChange(dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD"))):onChange(dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD"))):(setDaysInMonth(days),displayDay>days?(setDisplayDay(1),onChange(dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,1]).format("YYYY-MM-DD"))):onChange(dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,displayDay]).format("YYYY-MM-DD")))}),[displayMonth,displayDay]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_PopupMenu_PopupMenu__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DayMonthDatePickerRoot,{...rest,children:"long"==monthDisplay?dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,displayDay]).format("MMMM D"):dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,displayDay]).format("MMM D")}),closePopup=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DayMonthDatePickerPopupRoot,{className:"card",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"card-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("header",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"mb-0",children:"Select Date"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button",{type:"button",className:"btn btn-light btn-sm",onClick:resetDisplayDate,children:["⏱"," "]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"month-select mb-4",children:_utils_calendarUtils__WEBPACK_IMPORTED_MODULE_1__.e7.map(((month,monthIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"button",className:monthBtnClassName(monthIndex===displayMonth),onClick:()=>{setDisplayMonth(monthIndex)},children:month.substring(0,3)},month)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FieldDecoration_FieldDecoration__WEBPACK_IMPORTED_MODULE_5__.h,{label:"Day",className:"mb-0",children:_ref2=>{let{onFieldFocus,onFieldBlur}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select",{value:displayDay,className:"day-select",onChange:e=>{if(setDisplayDay(parseInt(e.target.value)),validator){const selectedDate=dayjs__WEBPACK_IMPORTED_MODULE_3___default()([displayYear,displayMonth,parseInt(e.target.value)]).format("YYYY-MM-DD"),error=validator(selectedDate);if(error)return setError(error);setError(null)}else setError(null);closePopup()},onFocus:onFieldFocus,onBlur:onFieldBlur,children:Array(daysInMonth).fill(null).map(((_,dayIndex)=>{const day=dayIndex+1;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option",{value:day,children:day},dayIndex)}))})}}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"month-date-picker-error",children:error})]})})]})};DayMonthDatePicker.displayName="DayMonthDatePicker";try{DayMonthDatePicker.displayName="DayMonthDatePicker",DayMonthDatePicker.__docgenInfo={description:"",displayName:"DayMonthDatePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},monthDisplay:{defaultValue:{value:"small"},description:"",name:"monthDisplay",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"long"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"((date: string) => string)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DayMonthDatePicker/DayMonthDatePicker.tsx#DayMonthDatePicker"]={docgenInfo:DayMonthDatePicker.__docgenInfo,name:"DayMonthDatePicker",path:"src/components/DayMonthDatePicker/DayMonthDatePicker.tsx#DayMonthDatePicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FieldDecoration/FieldDecoration.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FieldDecoration});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldDecorationRoot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs((props=>({className:"react-simple-widget field-decoration "+props.className})))`
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
`,FieldDecoration=_ref=>{let{label,leading,trailing,error,helper,disabled,children,className,...rest}=_ref;const[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),child=children({onFieldFocus:()=>setFocused(!0),onFieldBlur:()=>setFocused(!1)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldDecorationRoot,{className:(()=>{const classes=[];return className&&classes.push(className),leading&&classes.push("has-leading"),trailing&&classes.push("has-trailing"),focused&&classes.push("has-focus"),error&&classes.push("has-error"),helper&&classes.push("has-helper"),disabled&&classes.push("disabled"),classes.join(" ")})(),...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-content-container",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-content",children:[leading&&(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(leading,{className:`leading ${leading.props.className||""}`,disabled:disabled||leading.props.disabled}),(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{disabled:disabled||child.props.disabled}),trailing&&(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(trailing,{className:`leading ${trailing.props.className||""}`,disabled:disabled||trailing.props.disabled})]})]}),(error||helper)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"field-decoration-footer",children:[error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"error",children:error}),helper&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"helper",children:helper})]})]})};FieldDecoration.displayName="FieldDecoration";try{FieldDecoration.displayName="FieldDecoration",FieldDecoration.__docgenInfo={description:"",displayName:"FieldDecoration",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},helper:{defaultValue:null,description:"",name:"helper",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"Element"}},trailing:{defaultValue:null,description:"",name:"trailing",required:!1,type:{name:"Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FieldDecoration/FieldDecoration.tsx#FieldDecoration"]={docgenInfo:FieldDecoration.__docgenInfo,name:"FieldDecoration",path:"src/components/FieldDecoration/FieldDecoration.tsx#FieldDecoration"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PopupMenu/PopupMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PopupMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const revealOptions=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  `,fadeScrimIn=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }`,PopupMenuScrim=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs((props=>({className:"react-simple-widget popup-menu-scrim "+props.className})))`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--rsw-popup-menu-scrim-bg-color);
    animation: ${fadeScrimIn} var(--rsw-transition-duration) ease-out forwards;
    overflow: auto;
    z-index: 2;
  `,PopupMenuOptions=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs((props=>({className:"react-simple-widget popup-menu-options "+props.className})))`
    position: fixed;
    width: max-content !important;
    animation: ${revealOptions} var(--rsw-transition-duration) ease-out forwards;
    z-index: 3;
  `,PopupMenu=_ref=>{let{children}=_ref;const[optionsOpened,setOptionsOpened]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[optionsCssProperties,setOptionsCssProperties]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[triggerButton,optionsMenu]=children,triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[firstAlignmentPass,setFirstAlignmentPass]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),optionsMenuIsFunction="function"==typeof optionsMenu,toggle=()=>{setOptionsOpened(!optionsOpened);const onClick=triggerButton.props.onClick;onClick&&onClick()},alignOptionsMenu=()=>{const{left:tLeft,right:tRight,bottom:tBottom,top:tTop}=triggerRef.current.getBoundingClientRect(),{right:oRight}=optionsRef.current.getBoundingClientRect(),heightAboveTrigger=tBottom,heightBelowTrigger=window.innerHeight-tTop,optionsHeight=optionsRef.current.scrollHeight,optionIsTallerThanWindow=optionsHeight>window.innerHeight,displayOptionsBelowTrigger=optionsHeight<=heightBelowTrigger,displayOptionsAboveTrigger=optionsHeight<heightAboveTrigger,optionsIsCutoffAtRight=oRight+.06*document.body.clientWidth>document.body.clientWidth,optionsTransformOrigin=[0,0],properties={};optionIsTallerThanWindow?(properties.top=0,properties.bottom=0,properties.overflow="auto",optionsIsCutoffAtRight?(optionsTransformOrigin[0]=100,properties.right=document.body.clientWidth-tRight):(optionsTransformOrigin[0]=0,properties.left=tLeft)):(optionsIsCutoffAtRight?(optionsTransformOrigin[0]=100,properties.right=document.body.clientWidth-tRight):(optionsTransformOrigin[0]=0,properties.left=tLeft),displayOptionsBelowTrigger?(properties.top=tTop,optionsTransformOrigin[1]=0):displayOptionsAboveTrigger&&(properties.bottom=window.innerHeight-tBottom,optionsTransformOrigin[1]=100)),properties.transformOrigin=`${optionsTransformOrigin[0]}% ${optionsTransformOrigin[1]}%`,setOptionsCssProperties(properties)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onScroll=()=>{setOptionsOpened(!1)};return optionsOpened&&(window.addEventListener("scroll",onScroll),document.addEventListener("scroll",onScroll),document.body.addEventListener("scroll",onScroll)),()=>{window.removeEventListener("scroll",onScroll),document.removeEventListener("scroll",onScroll),document.body.removeEventListener("scroll",onScroll)}}),[optionsOpened]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{optionsOpened&&optionsRef.current?(firstAlignmentPass||setFirstAlignmentPass(!0),alignOptionsMenu()):(setOptionsCssProperties(null),setFirstAlignmentPass(!1))}),[optionsOpened]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{firstAlignmentPass&&alignOptionsMenu()}),[firstAlignmentPass]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(triggerButton,{ref:triggerRef,onClick:toggle}),optionsOpened&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopupMenuScrim,{onClick:toggle}),optionsOpened&&optionsMenu&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopupMenuOptions,{ref:optionsRef,onClick:optionsMenuIsFunction?null:toggle,style:optionsCssProperties,children:optionsMenuIsFunction?optionsMenu((()=>setOptionsOpened(!1))):optionsMenu})]})};PopupMenu.displayName="PopupMenu";try{PopupMenu.displayName="PopupMenu",PopupMenu.__docgenInfo={description:"",displayName:"PopupMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopupMenu/PopupMenu.tsx#PopupMenu"]={docgenInfo:PopupMenu.__docgenInfo,name:"PopupMenu",path:"src/components/PopupMenu/PopupMenu.tsx#PopupMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/calendarUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dO:()=>dateDay,e7:()=>months,fh:()=>dateMonth,gQ:()=>years,gy:()=>dateYear});var dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dayjs/plugin/arraySupport.js"),dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_0__),dayjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(dayjs_plugin_arraySupport__WEBPACK_IMPORTED_MODULE_0___default());const years=Array.from(new Array(200),((v,i)=>dayjs__WEBPACK_IMPORTED_MODULE_1___default()().year()+i-120)),months=["January","February","March","April","May","June","July","August","September","October","November","December"],dateYear=date=>dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).year(),dateMonth=date=>dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).month(),dateDay=date=>dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).date()}}]);
//# sourceMappingURL=components-DayMonthDateField-DayMonthDateField-stories.3e705c41.iframe.bundle.js.map