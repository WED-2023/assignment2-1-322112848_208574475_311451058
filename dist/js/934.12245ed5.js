"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[934],{9934:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});i(2675),i(9463),i(8598),i(2062),i(2010);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Add Recipe")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitRecipe.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"title"}},[e._v("Recipe Title")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:""},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"description"}},[e._v("Description")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.description,expression:"recipe.description"}],staticClass:"form-control",attrs:{id:"description",required:""},domProps:{value:e.recipe.description},on:{input:function(t){t.target.composing||e.$set(e.recipe,"description",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"time"}},[e._v("Overall Time (In minuets)")]),t("b-form-spinbutton",{attrs:{id:"sb-wrap",wrap:"",min:"0",max:"999",placeholder:"--"},model:{value:e.recipe.time,callback:function(t){e.$set(e.recipe,"time",t)},expression:"recipe.time"}})],1),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"images"}},[e._v("Images")]),t("b-form-file",{attrs:{multiple:"",state:Boolean(e.files),placeholder:"Choose files or drop them here...","drop-placeholder":"Drop files here..."},on:{change:e.handleFileUpload},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),t("div",{staticClass:"mt-3"},[e._v("Selected files: "+e._s(e.files?e.files.map((function(e){return e.name})).join(", "):""))]),t("div",{staticClass:"image-preview-container"},e._l(e.recipe.images,(function(i,r){return t("div",{key:r,staticClass:"image-thumbnail"},[t("img",{attrs:{src:i},on:{click:function(t){return e.popImage(i)}}}),t("button",{attrs:{type:"button"},on:{click:function(t){return e.removeImage(r)}}},[e._v("Remove")])])})),0)],1),t("div",{staticClass:"form-group"},[t("b-form-group",{attrs:{label:"Ingredients","label-for":"tags-validation",state:e.state},scopedSlots:e._u([{key:"invalid-feedback",fn:function(){return[e._v(" You must provide at least 2 ingredients and no more than 15 ")]},proxy:!0},{key:"description",fn:function(){return[t("div",{attrs:{id:"tags-validation-help"}},[e._v(" Enter ingredients. ")])]},proxy:!0}])},[t("b-form-tags",{attrs:{"input-id":"tags-validation","input-attrs":{"aria-describedby":"tags-validation-help"},state:e.state,separator:" "},on:{input:e.handleTagInput},model:{value:e.recipe.ingredients,callback:function(t){e.$set(e.recipe,"ingredients",t)},expression:"recipe.ingredients"}})],1)],1),t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Add Recipe")])])])},n=[];i(8431),i(4114),i(4554),i(9089),i(6099);const a={props:{addRecipe:{type:Function,required:!0}},data:function(){return{recipe:{title:"",description:"",time:"",images:[],Likes:0,ingredients:[]},files:null,showImage:!1,currentImage:null,IsValid:!1}},computed:{state:function(){return this.IsValid?this.recipe.ingredients.length>2&&this.recipe.ingredients.length<16:null}},watch:{"recipe.ingredients":function(e,t){this.IsValid=!0}},methods:{tagValidator:function(e){return e===e.toLowerCase()&&e.length>2&&e.length<15},handleTagInput:function(e){var t=this;this.recipe.ingredients=e.map((function(e){return e.toLowerCase()})),this.IsValid=this.recipe.ingredients.every((function(e){return t.tagValidator(e)}))},handleFileUpload:function(e){for(var t=e.target.files||e,i=0;i<t.length;i++)this.readFile(t[i])},readFile:function(e){var t=this,i=new FileReader;i.onload=function(e){t.recipe.images||(t.recipe.images=[]),t.recipe.images.push(e.target.result)},i.readAsDataURL(e)},removeImage:function(e){this.recipe.images.splice(e,1)},popImage:function(e){this.currentImage=e,this.showImageModal=!0},submitRecipe:function(){this.recipe.id=Date.now(),this.addRecipe(this.recipe),this.recipe={title:"",description:"",time:"",images:[],Likes:0,ingredients:[]},this.files=null,this.IsValid=!1}}},s=a;var o=i(1656),l=(0,o.A)(s,r,n,!1,null,"6bbd6876",null);const c=l.exports},4606:(e,t,i)=>{var r=i(6823),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw new n("Cannot delete property "+r(t)+" of "+r(e))}},8431:(e,t,i)=>{var r=i(6518),n=i(9213).every,a=i(4598),s=a("every");r({target:"Array",proto:!0,forced:!s},{every:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},8598:(e,t,i)=>{var r=i(6518),n=i(9504),a=i(7055),s=i(5397),o=i(4598),l=n([].join),c=a!==Object,p=c||!o("join",",");r({target:"Array",proto:!0,forced:p},{join:function(e){return l(s(this),void 0===e?",":e)}})},2062:(e,t,i)=>{var r=i(6518),n=i(9213).map,a=i(597),s=a("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},4554:(e,t,i)=>{var r=i(6518),n=i(8981),a=i(5610),s=i(1291),o=i(6198),l=i(4527),c=i(6837),p=i(1469),d=i(2278),u=i(4606),f=i(597),m=f("splice"),g=Math.max,v=Math.min;r({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var i,r,f,m,h,b,y=n(this),C=o(y),_=a(e,C),w=arguments.length;for(0===w?i=r=0:1===w?(i=0,r=C-_):(i=w-2,r=v(g(s(t),0),C-_)),c(C+i-r),f=p(y,r),m=0;m<r;m++)h=_+m,h in y&&d(f,m,y[h]);if(f.length=r,i<r){for(m=_;m<C-r;m++)h=m+r,b=m+i,h in y?y[b]=y[h]:u(y,b);for(m=C;m>C-r+i;m--)u(y,m-1)}else if(i>r)for(m=C-r;m>_;m--)h=m+r-1,b=m+i-1,h in y?y[b]=y[h]:u(y,b);for(m=0;m<i;m++)y[m+_]=arguments[m+2];return l(y,C-r+i),f}})},9089:(e,t,i)=>{var r=i(6518),n=i(9504),a=Date,s=n(a.prototype.getTime);r({target:"Date",stat:!0},{now:function(){return s(new a)}})}}]);
//# sourceMappingURL=934.12245ed5.js.map