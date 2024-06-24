"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[155],{155:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},a=[],o=r(459),u=r(388),i=(r(4114),r(3278)),f=r(3484);const s={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.mw},password:{required:i.mw}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return(0,u.A)((0,o.A)().mark((function t(){var r;return(0,o.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=!0,(0,f.yy)(e.form.username,e.form.password,r),console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/")}catch(n){console.log(n.response),e.form.submitError=n.response.data.message}case 1:case"end":return t.stop()}}),t)})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=s;var d=r(1656),c=(0,d.A)(l,n,a,!1,null,"7a96c5b1",null);const p=c.exports},3484:(e,t,r)=>{function n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"A user is already logged in",success:!1}}};return{status:200,response:{data:{message:"login succeeded",success:!0}}}}function a(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}r.d(t,{_z:()=>a,yy:()=>n})},1794:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=a},4020:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=a},3959:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=a},938:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=a},3057:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=a(r(6288));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=i;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var s=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=s},361:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=a},8726:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,o=(0,n.regex)("email",a);t["default"]=o},3278:(e,t,r)=>{function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"X4",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Ru",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Bp",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"mw",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"f4",{enumerable:!0,get:function(){return y.default}});var a=S(r(1794)),o=S(r(4020)),u=S(r(1413)),i=S(r(938)),f=S(r(8726)),s=S(r(9182)),l=S(r(1125)),d=S(r(1924)),c=S(r(4386)),p=S(r(5381)),v=S(r(446)),m=S(r(6347)),y=S(r(1298)),b=S(r(2359)),g=S(r(353)),h=S(r(3959)),_=S(r(7703)),w=S(r(6041)),P=S(r(4371)),x=S(r(7332)),j=S(r(361)),O=M(r(3057));function $(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return($=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=$(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}return a.default=e,r&&r.set(e,a),a}function S(e){return e&&e.__esModule?e:{default:e}}},7332:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=a},9182:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t["default"]=a;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},1125:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t["default"]=a;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},1924:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=a},4371:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=a},4386:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=a},6041:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=a},7703:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=a},1413:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=a},353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=a},5381:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=a},446:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},6347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},1298:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=a},2359:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(3057),a=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",a);t["default"]=o},6288:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(2778).L:r(5788).withParams,a=n;t["default"]=a},2778:(e,t,r)=>{function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.L=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},o=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},u=a.vuelidate?a.vuelidate.withParams:o;t.L=u}}]);
//# sourceMappingURL=155.5a458747.js.map