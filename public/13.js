(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["subheaderSize", "iconsSize"])),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-col",
    { attrs: { xs: "12", sm: "12", md: "6", lg: "4" } },
    [
      _c(
        "div",
        {
          class: [
            _vm.subheaderSize,
            "font-weight-thin mb-10 elev-1 text--secondary"
          ]
        },
        [_vm._v("Контакты")]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { outlined: "", color: "#fff5" } },
        [
          _c(
            "v-list-item",
            { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
            [
              _c("v-icon", { attrs: { size: _vm.iconsSize } }, [
                _vm._v("mdi-phone")
              ]),
              _vm._v("Телефон:\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { text: "", large: "", href: "tel:+79047165279" } },
                [
                  _c(
                    "span",
                    { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
                    [_vm._v("+79047165279")]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
            [
              _c("v-icon", { attrs: { size: _vm.iconsSize } }, [
                _vm._v("mdi-email")
              ]),
              _vm._v("Email:\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    text: "",
                    large: "",
                    href: "mailto:ayrat.2013@ya.ru"
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
                    [_vm._v("ayrat.2013@ya.ru")]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
            [
              _c("v-icon", { attrs: { size: _vm.iconsSize } }, [
                _vm._v("mdi-whatsapp")
              ]),
              _vm._v("WhatsApp:\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    text: "",
                    large: "",
                    href: "https://api.whatsapp.com/send?phone=79047165279"
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "text-md-h5 text-sm-h5 text-xs-overline" },
                    [_vm._v("+79047165279")]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-actions")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/contacts/ContactInfo.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/views/contacts/ContactInfo.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactInfo.vue?vue&type=template&id=d85da1c4& */ "./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4&");
/* harmony import */ var _ContactInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/contacts/ContactInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactInfo.vue?vue&type=template&id=d85da1c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/contacts/ContactInfo.vue?vue&type=template&id=d85da1c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfo_vue_vue_type_template_id_d85da1c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);