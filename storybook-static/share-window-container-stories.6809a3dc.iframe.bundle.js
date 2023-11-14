"use strict";(self.webpackChunkblend_metrics=self.webpackChunkblend_metrics||[]).push([[8681],{"./components/ui/share-window-settings.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ShareWindowSettings});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/icons/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ShareWindowSettings(_ref){var backButtonClickHandlerProp=_ref.backButtonClickHandlerProp;return __jsx("div",null,__jsx("button",{className:"h-[50px] w-[100px] bg-red-500",onClick:function backButtonHandler(){backButtonClickHandlerProp(!1)}},"Click me to go back to the container"),__jsx("div",{id:"Share-Window-Settings-Frame-Container",className:"g-[32px]  flex h-[716px] w-[690px] shrink-0 flex-col items-start rounded-xl p-[24px] shadow-xl"},__jsx("div",{id:"Settings Nav Container",className:"flex flex-col items-start gap-3"},__jsx("div",{id:"Settings Nav",className:"item-start g-3 flex h-[28px]"},__jsx("div",{id:"Settings Nav Inner Container",className:"flex h-[28px] w-[642px] items-center justify-between"},__jsx("div",{id:"Frame-1",className:"flex items-center gap-3"},__jsx("button",{className:"h-[20px] w-[100px] bg-blue-100"},"Back")),__jsx("h1",{id:"Manage Share Settings text",className:"items-center text-lg font-semibold leading-7"},"Manage Share Settings"),__jsx(_icons__WEBPACK_IMPORTED_MODULE_1__.lO,null))))))}ShareWindowSettings.displayName="ShareWindowSettings",ShareWindowSettings.__docgenInfo={description:"",methods:[],displayName:"ShareWindowSettings",props:{backButtonClickHandlerProp:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""}}};try{sharewindowsettings.displayName="sharewindowsettings",sharewindowsettings.__docgenInfo={description:"",displayName:"sharewindowsettings",props:{backButtonClickHandlerProp:{defaultValue:null,description:"",name:"backButtonClickHandlerProp",required:!1,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/share-window-settings.tsx#sharewindowsettings"]={docgenInfo:sharewindowsettings.__docgenInfo,name:"sharewindowsettings",path:"components/ui/share-window-settings.tsx#sharewindowsettings"})}catch(__react_docgen_typescript_loader_error){}},"./stories/share-window-container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>share_window_container_stories});var _Base$parameters,_Base$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),share_window=__webpack_require__("./components/ui/share-window.tsx"),share_window_settings=__webpack_require__("./components/ui/share-window-settings.tsx"),__jsx=react.createElement;function ShareWindowContainer(){var _useState=(0,react.useState)(!1),settingsClicked=_useState[0],setSettingsClicked=_useState[1];return __jsx(react.Fragment,null,settingsClicked?__jsx(share_window_settings.Z,{backButtonClickHandlerProp:setSettingsClicked}):__jsx(share_window.Z,{settingsClickHandlerProp:setSettingsClicked}))}ShareWindowContainer.__docgenInfo={description:"",methods:[],displayName:"ShareWindowContainer"};var share_window_container_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const share_window_container_stories={title:"ShareWindowContainer",component:ShareWindowContainer,parameters:{backgrounds:{default:"black",values:[{name:"white",value:"#000000"}]}}};var Base={render:function render(){return share_window_container_stories_jsx(ShareWindowContainer,null)}};Base.parameters=_objectSpread(_objectSpread({},Base.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <ShareWindowContainer />\n}"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2=_Base$parameters2.docs)||void 0===_Base$parameters2?void 0:_Base$parameters2.source)})})}}]);