"use strict";(self.webpackChunkblend_metrics=self.webpackChunkblend_metrics||[]).push([[5487],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/ui/share-window-settings.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ShareWindowSettings});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/icons/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ShareWindowSettings(_ref){var backButtonClickHandlerProp=_ref.backButtonClickHandlerProp;return __jsx("div",null,__jsx("button",{className:"h-[50px] w-[100px] bg-red-500",onClick:function backButtonHandler(){backButtonClickHandlerProp(!1)}},"Click me to go back to the container"),__jsx("div",{id:"Share-Window-Settings-Frame-Container",className:"g-[32px]  flex h-[716px] w-[690px] shrink-0 flex-col items-start rounded-xl p-[24px] shadow-xl"},__jsx("div",{id:"Settings Nav Container",className:"flex flex-col items-start gap-3"},__jsx("div",{id:"Settings Nav",className:"item-start g-3 flex h-[28px]"},__jsx("div",{id:"Settings Nav Inner Container",className:"flex h-[28px] w-[642px] items-center justify-between"},__jsx("div",{id:"Frame-1",className:"flex items-center gap-3"},__jsx("button",{className:"h-[20px] w-[100px] bg-blue-100"},"Back")),__jsx("h1",{id:"Manage Share Settings text",className:"items-center text-lg font-semibold leading-7"},"Manage Share Settings"),__jsx(_icons__WEBPACK_IMPORTED_MODULE_1__.lO,null))))))}ShareWindowSettings.displayName="ShareWindowSettings",ShareWindowSettings.__docgenInfo={description:"",methods:[],displayName:"ShareWindowSettings",props:{backButtonClickHandlerProp:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""}}};try{sharewindowsettings.displayName="sharewindowsettings",sharewindowsettings.__docgenInfo={description:"",displayName:"sharewindowsettings",props:{backButtonClickHandlerProp:{defaultValue:null,description:"",name:"backButtonClickHandlerProp",required:!1,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/share-window-settings.tsx#sharewindowsettings"]={docgenInfo:sharewindowsettings.__docgenInfo,name:"sharewindowsettings",path:"components/ui/share-window-settings.tsx#sharewindowsettings"})}catch(__react_docgen_typescript_loader_error){}},"./stories/share-window-settings.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Base$parameters,_Base$parameters2,_Users_kirkflores_Documents_Kirk_s_MacBook_Air_InternshipRepo_kirk_blend_metrics_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_ui_share_window_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/share-window-settings.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_kirkflores_Documents_Kirk_s_MacBook_Air_InternshipRepo_kirk_blend_metrics_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"ShareWindowSettings",component:_components_ui_share_window_settings__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{backgrounds:{default:"black",values:[{name:"white",value:"#000000"}]}}};var Base={render:function render(){return __jsx(_components_ui_share_window_settings__WEBPACK_IMPORTED_MODULE_2__.Z,null)}};Base.parameters=_objectSpread(_objectSpread({},Base.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <ShareWindowSettings />\n}"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2=_Base$parameters2.docs)||void 0===_Base$parameters2?void 0:_Base$parameters2.source)})})}}]);