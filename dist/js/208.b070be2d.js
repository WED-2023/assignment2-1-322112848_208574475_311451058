"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[208],{4208:(e,a,r)=>{r.r(a),r.d(a,{default:()=>v});var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Register")]),a("b-form",{on:{submit:function(a){return a.preventDefault(),e.onRegister.apply(null,arguments)},reset:function(a){return a.preventDefault(),e.onReset.apply(null,arguments)}}},[a("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[a("b-form-input",{attrs:{id:"username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(a){e.$set(e.$v.form.username,"$model",a)},expression:"$v.form.username.$model"}}),e.$v.form.username.required?e.$v.form.username.length?e._e():a("b-form-invalid-feedback",[e._v(" Username length should be between 3-8 characters long ")]):a("b-form-invalid-feedback",[e._v(" Username is required ")]),e.$v.form.username.alpha?e._e():a("b-form-invalid-feedback",[e._v(" Username alpha ")])],1),a("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[a("b-form-select",{attrs:{id:"country",options:e.countries,state:e.validateState("country")},model:{value:e.$v.form.country.$model,callback:function(a){e.$set(e.$v.form.country,"$model",a)},expression:"$v.form.country.$model"}}),a("b-form-invalid-feedback",[e._v(" Country is required ")])],1),a("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(a){e.$set(e.$v.form.password,"$model",a)},expression:"$v.form.password.$model"}}),e.$v.form.password.required?e.$v.form.password.$error?a("b-form-text",{attrs:{"text-variant":"info"}},[e._v(" Your password should be "),a("strong",[e._v("strong")]),e._v(". "),a("br"),e._v(" For that, your password should be also: ")]):e._e():a("b-form-invalid-feedback",[e._v(" Password is required ")]),e.$v.form.password.required&&!e.$v.form.password.length?a("b-form-invalid-feedback",[e._v(" Have length between 5-10 characters long ")]):e._e()],1),a("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[a("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:e.validateState("confirmedPassword")},model:{value:e.$v.form.confirmedPassword.$model,callback:function(a){e.$set(e.$v.form.confirmedPassword,"$model",a)},expression:"$v.form.confirmedPassword.$model"}}),e.$v.form.confirmedPassword.required?e.$v.form.confirmedPassword.sameAsPassword?e._e():a("b-form-invalid-feedback",[e._v(" The confirmed password is not equal to the original password ")]):a("b-form-invalid-feedback",[e._v(" Password confirmation is required ")])],1),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),a("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Register")]),a("div",{staticClass:"mt-2"},[e._v(" You have an account already? "),a("router-link",{attrs:{to:"login"}},[e._v(" Log in here")])],1)],1),e.form.submitError?a("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Register failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],o=r(459),i=r(388),u=r(5492);r(4114);const s=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var l=r(3278),d=r(3484);const f={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:l.mw,length:function(e){return(0,l.Bp)(3)(e)&&(0,l.Ru)(8)(e)},alpha:l.X4},country:{required:l.mw},password:{required:l.mw,length:function(e){return(0,l.Bp)(5)(e)&&(0,l.Ru)(10)(e)}},confirmedPassword:{required:l.mw,sameAsPassword:(0,l.f4)("password")}}},mounted:function(){var e;(e=this.countries).push.apply(e,(0,u.A)(s))},methods:{validateState:function(e){var a=this.$v.form[e],r=a.$dirty,t=a.$error;return r?!t:null},Register:function(){var e=this;return(0,i.A)((0,o.A)().mark((function a(){var r;return(0,o.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{r={username:e.form.username,password:e.form.password},(0,d._z)(r),e.$router.push("/login")}catch(t){console.log(t.response),e.form.submitError=t.response.data.message}case 1:case"end":return a.stop()}}),a)})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var e=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){e.$v.$reset()}))}}},c=f;var m=r(1656),p=(0,m.A)(c,t,n,!1,null,"24c700ec",null);const v=p.exports},3484:(e,a,r)=>{function t(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a)throw{status:409,response:{data:{message:"A user is already logged in",success:!1}}};return{status:200,response:{data:{message:"login succeeded",success:!0}}}}function n(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}r.d(a,{_z:()=>n,yy:()=>t})},1794:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.regex)("alpha",/^[a-zA-Z]*$/);a["default"]=n},4020:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.regex)("alphaNum",/^[a-zA-Z0-9]*$/);a["default"]=n},3959:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,t.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return a.length>0&&a.reduce((function(a,r){return a&&r.apply(e,t)}),!0)}))};a["default"]=n},938:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e,a){return(0,t.withParams)({type:"between",min:e,max:a},(function(r){return!(0,t.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+a>=+r}))};a["default"]=n},3057:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.req=a.regex=a.ref=a.len=void 0,Object.defineProperty(a,"withParams",{enumerable:!0,get:function(){return t.default}});var t=n(r(6288));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var a in e)return!0;return!1}return!!String(e).length};a.req=i;var u=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};a.len=u;var s=function(e,a,r){return"function"===typeof e?e.call(a,r):r[e]};a.ref=s;var l=function(e,a){return(0,t.default)({type:e},(function(e){return!i(e)||a.test(e)}))};a.regex=l},361:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.regex)("decimal",/^[-]?\d*(\.\d+)?$/);a["default"]=n},8726:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,o=(0,t.regex)("email",n);a["default"]=o},3278:(e,a,r)=>{function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(a,"X4",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(a,"Ru",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(a,"Bp",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(a,"mw",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(a,"f4",{enumerable:!0,get:function(){return b.default}});var n=j(r(1794)),o=j(r(4020)),i=j(r(1413)),u=j(r(938)),s=j(r(8726)),l=j(r(9182)),d=j(r(1125)),f=j(r(1924)),c=j(r(4386)),m=j(r(5381)),p=j(r(446)),v=j(r(6347)),b=j(r(1298)),y=j(r(2359)),h=j(r(353)),g=j(r(3959)),w=j(r(7703)),_=j(r(6041)),P=j(r(4371)),S=j(r(7332)),M=j(r(361)),x=A(r(3057));function $(e){if("function"!==typeof WeakMap)return null;var a=new WeakMap,r=new WeakMap;return($=function(e){return e?r:a})(e)}function A(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!==typeof e)return{default:e};var r=$(a);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function j(e){return e&&e.__esModule?e:{default:e}}},7332:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);a["default"]=n},9182:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.withParams)({type:"ipAddress"},(function(e){if(!(0,t.req)(e))return!0;if("string"!==typeof e)return!1;var a=e.split(".");return 4===a.length&&a.every(o)}));a["default"]=n;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var a=0|+e;return a>=0&&a<=255}},1125:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,t.withParams)({type:"macAddress"},(function(a){if(!(0,t.req)(a))return!0;if("string"!==typeof a)return!1;var r="string"===typeof e&&""!==e?a.split(e):12===a.length||16===a.length?a.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};a["default"]=n;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},1924:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"maxLength",max:e},(function(a){return!(0,t.req)(a)||(0,t.len)(a)<=e}))};a["default"]=n},4371:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"maxValue",max:e},(function(a){return!(0,t.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+a<=+e}))};a["default"]=n},4386:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"minLength",min:e},(function(a){return!(0,t.req)(a)||(0,t.len)(a)>=e}))};a["default"]=n},6041:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"minValue",min:e},(function(a){return!(0,t.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+a>=+e}))};a["default"]=n},7703:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"not"},(function(a,r){return!(0,t.req)(a)||!e.call(this,a,r)}))};a["default"]=n},1413:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.regex)("numeric",/^[0-9]*$/);a["default"]=n},353:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,t.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return a.length>0&&a.reduce((function(a,r){return a||r.apply(e,t)}),!1)}))};a["default"]=n},5381:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=(0,t.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,t.req)(e.trim()):(0,t.req)(e)}));a["default"]=n},446:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"requiredIf",prop:e},(function(a,r){return!(0,t.ref)(e,this,r)||(0,t.req)(a)}))};a["default"]=n},6347:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"requiredUnless",prop:e},(function(a,r){return!!(0,t.ref)(e,this,r)||(0,t.req)(a)}))};a["default"]=n},1298:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=function(e){return(0,t.withParams)({type:"sameAs",eq:e},(function(a,r){return a===(0,t.ref)(e,this,r)}))};a["default"]=n},2359:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t=r(3057),n=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,t.regex)("url",n);a["default"]=o},6288:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(2778).L:r(5788).withParams,n=t;a["default"]=n},2778:(e,a,r)=>{function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}a.L=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},o=function(e,a){return"object"===t(e)&&void 0!==a?a:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:o;a.L=i}}]);
//# sourceMappingURL=208.b070be2d.js.map