webpackJsonp([14],{cSip:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("bGai"),o=a("QmSG"),n={data:function(){return{organization_identify_state:o.g,entity_state:o.b,selectedDimension:"",selectNode:{},dimensionList:[{label:"行政维度",value:"1",id:1}],form:{},rules:{}}},methods:{del:function(e){var t=this;this.$confirm("此操作将删除【"+this.selectNode.label+"】数据， 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message.success("删除成功")}).catch(function(){})},addEdit:function(){this.form={}},save:function(){var e=this;this.$refs.form.validate(function(t){t&&e.$message.success("保存成功")})},haddleOrganizationNode:function(e){console.log(e),this.selectNode=e}},components:{OrganizationTree:l.b}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"t-box-card",attrs:{"body-style":{height:"768px",overflowY:"auto"}}},[a("div",{staticClass:"t-box-card-header",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("组织机构")])]),e._v(" "),a("el-form",{staticClass:"t-operate-filter",attrs:{"label-width":"48px",size:"mini"}},[a("el-form-item",{attrs:{label:"维度"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedDimension,callback:function(t){e.selectedDimension=t},expression:"selectedDimension"}},e._l(e.dimensionList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("OrganizationTree",{on:{selectNode:e.haddleOrganizationNode}})],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-card",{staticClass:"t-box-card"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addEdit}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.del}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addEdit}},[e._v("新增子机构")]),e._v(" "),a("el-form",{ref:"form",staticClass:"t-page-form t-form-block",attrs:{model:e.form,rules:e.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"归属维度",prop:"name"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属上级",prop:"name"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属校区",prop:"name"}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构代码",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构英文名",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构简称",prop:"date"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构简拼",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构地址",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"有效标识",prop:"name"}},[a("el-radio-group",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.organization_identify_state,function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"是否实体",prop:"name"}},[a("el-radio-group",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.entity_state,function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"建立年月",prop:"name"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"负责人",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮政编码",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(n,r,!1,null,null,null);t.default=m.exports}});