webpackJsonp([40],{mJMc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{form:{},rules:{},selectList:[],id:""}},created:function(){this.id=this.$route.params.id},methods:{save:function(){var e=this;this.$refs.form.validate(function(a){a&&e.$message.success("保存成功")})},handdleSearchNode:function(e){console.log(e)}},components:{OrganizationTreeSearch:t("bGai").c}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-card",{staticClass:"t-box-card"},[t("div",{staticClass:"t-box-card-header",attrs:{slot:"header"},slot:"header"},[t("span",[e._v(e._s(e.id?"编辑专业":"新增专业"))])]),e._v(" "),t("el-form",{ref:"form",staticClass:"t-page-form t-form-block",attrs:{model:e.form,rules:e.rules,"label-width":"120px",size:"small"}},[t("el-row",{attrs:{gutter:50}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"专业编码",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"专业名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"英文名",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"办学层次",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"建立年月",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总学分",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"专业代码",prop:"name"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}},e._l(e.selectList,function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"专业简称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"专业方向",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"学制",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"开设机构",prop:"name"}},[t("el-popover",{attrs:{placement:"bottom",title:"选择开设机构",trigger:"click"}},[t("OrganizationTreeSearch",{on:{selectNode:e.handdleSearchNode}}),e._v(" "),t("el-input",{attrs:{slot:"reference"},slot:"reference",model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"专业教师数",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1)],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]},o=t("VU/8")(l,r,!1,null,null,null);a.default=o.exports}});