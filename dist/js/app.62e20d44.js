(()=>{"use strict";var e={5031:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var r=a(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("TopNav"),t("router-view")],1)},n=[],o=(a(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-bar"},[t("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"success",sticky:"true"}},[t("b-navbar-brand",[t("router-link",{staticClass:"goto",attrs:{to:{name:"main"}}},[t("b",[e._v("Vue Recipes")])])],1),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",[t("router-link",{staticClass:"goto",attrs:{to:{name:"search"}}},[e._v("Search")])],1)],1),t("b-navbar-nav",[t("b-nav-item",[t("router-link",{staticClass:"goto",attrs:{to:{name:"about"}}},[e._v("About")])],1)],1),t("b-navbar-nav",[t("b-nav-item",[e.$root.store.username?t("router-link",{staticClass:"goto",attrs:{to:{name:"NewRecipe"}}},[e._v("New Recipe")]):e._e()],1)],1),t("b-navbar-nav",[e.$root.store.username?t("b-nav-item-dropdown",{attrs:{text:"Personal",right:""}},[t("b-dropdown-item",[t("router-link",{staticClass:"dropDown",attrs:{to:{name:"My Recipes"}}},[e._v("My Recipes")])],1),t("b-dropdown-item",[t("router-link",{staticClass:"dropDown",attrs:{to:{name:"Family Recipes"}}},[e._v("Family Recipes")])],1),t("b-dropdown-item",[t("router-link",{staticClass:"dropDown",attrs:{to:{name:"Favorite Recipes"}}},[e._v("Favorite Recipes")])],1)],1):e._e()],1)],1),t("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?t("b-nav-item-dropdown",{attrs:{text:e.$root.store.username,right:"",variant:"outline-danger"}},[t("b-dropdown-item",{staticClass:"dropDown",on:{click:e.Logout}},[e._v("Logout")])],1):t("b-nav-item-dropdown",{attrs:{text:"Hello Guest",right:""}},[t("b-dropdown-item",[t("router-link",{staticClass:"dropDown",attrs:{to:{name:"register"}}},[e._v("Register")])],1),t("b-dropdown-item",[t("router-link",{staticClass:"dropDown",attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1)],1)],1)],1)}),s=[];const l={name:"TopNav",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},u=l;var c=a(1001),p=(0,c.Z)(u,o,s,!1,null,null,null);const m=p.exports,d={name:"App",components:{TopNav:m},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},g=d;var h=(0,c.Z)(g,i,n,!1,null,null,null);const v=h.exports;var f=a(1939),b=a.n(f),w=a(9669),y=a.n(w),S=a(869),k=a(3017),_=(a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"container"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Randome Recipes"}}),e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(!e.$root.store.username)+" "),t("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])}),C=[function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero"},[t("div",{staticClass:"hero-overlay"}),t("div",{staticClass:"hero-content"},[t("h1",[e._v("Welcome to Food Heaven")]),t("p",[e._v("Discover delicious meals delivered to your door")])])])}],L=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},T=[],I=a(6835),P=a(5957),O=a(8534),x=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[e.image_load?t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},j=[];a(9653);const N={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0},id:{type:Number,required:!0},image:{type:String,required:!0},aggregateLikes:{type:Number,required:!1,default:function(){}}}},R=N;var D=(0,c.Z)(R,x,j,!1,null,"58f0d08c",null);const $=D.exports;var F=a(4293);const A={name:"RecipePreviewList",components:{RecipePreview:$},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,O.Z)((0,I.Z)().mark((function t(){var a,r,i,n;return(0,I.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=5,i=(0,F.ij)(r),console.log(i),n=i.data.recipes,console.log(n),e.recipes=[],(a=e.recipes).push.apply(a,(0,P.Z)(n))}catch(o){console.log(o)}case 1:case"end":return t.stop()}}),t)})))()}}},B=A;var E=(0,c.Z)(B,L,T,!1,null,"0ad55313",null);const G=E.exports,Z={components:{RecipePreviewList:G}},q=Z;var M=(0,c.Z)(q,_,C,!1,null,"27b0e0db",null);const z=M.exports;var U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},H=[],Y={},V=(0,c.Z)(Y,U,H,!1,null,null,null);const J=V.exports;var Q=[{path:"/",name:"main",component:z},{path:"/register",name:"register",component:function(){return a.e(435).then(a.bind(a,1435))}},{path:"/login",name:"login",component:function(){return a.e(414).then(a.bind(a,7414))}},{path:"/search",name:"search",component:function(){return a.e(357).then(a.bind(a,1357))}},{path:"   ",name:"recipe",component:function(){return a.e(850).then(a.bind(a,7850))}},{path:"*",name:"notFound",component:J},{path:"/about",name:"about",component:function(){return a.e(563).then(a.bind(a,1563))}}];const X=Q;var K=a(8345),W=a(8620),ee=(a(7024),a(508)),te=a(7563),ae=a(7419),re=a(1869),ie=a(295),ne=a(3090),oe=a(794),se=a(4063),le=a(8793),ue=a(7772);r["default"].use(S.XG7),r["default"].use(k.X),r["default"].use(K.ZP);var ce=new K.ZP({routes:X}),pe=a(7846),me={origin:"*",credentials:!0,optionSuccessStatus:200};app.use(pe(me)),[ee.E,te.w6,ae.g,re.SY,ie.xL,ne.u3,oe.v5,se.F,le.m$,ue.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(W.ZP),y().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),y().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(b(),y()),r["default"].config.productionTip=!1;var de={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(de),new r["default"]({router:ce,data:function(){return{store:de}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(v)}}).$mount("#app")},4293:(e,t,a)=>{a.d(t,{iG:()=>o,ij:()=>n});a(7658);const r=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}'),i=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}');function n(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],a=0;a<e;a++)t.push(i);return{data:{recipes:t}}}function o(e){return{data:{recipe:r}}}}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,i,n)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,i,n]=e[c],s=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,n<o&&(o=n));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{357:"c0dcdbdb",414:"6772d122",435:"817df5b4",563:"5215d27f",850:"830b309e"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{357:"4d4d58bc",414:"f33ee998",435:"1f6a1476",563:"7e0c0890",850:"f952d6f2"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(r,i,n,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[i];var m=(t,a)=>{s.onerror=s.onload=null,clearTimeout(d);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(a))),t)return t(a)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,i)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,n.parentNode&&n.parentNode.removeChild(n),i(l)}};return n.onerror=n.onload=o,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var i=a[r],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],n=i.getAttribute("data-href");if(n===e||n===t)return i}},r=r=>new Promise(((i,n)=>{var o=a.miniCssF(r),s=a.p+o;if(t(o,s))return i();e(r,s,null,i,n)})),i={143:0};a.f.miniCss=(e,t)=>{var a={357:1,414:1,435:1,563:1,850:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=r(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((a,r)=>i=e[t]=[a,r]));r.push(i[2]=n);var o=a.p+a.u(t),s=new Error,l=r=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,i[1](s)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[o,s,l]=r,u=0;if(o.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(t&&t(r);u<o.length;u++)n=o[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[998],(()=>a(5031)));r=a.O(r)})();
//# sourceMappingURL=app.62e20d44.js.map