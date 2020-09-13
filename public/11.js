(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Page404.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Page404.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
  data: function data() {
    return {
      cicada: 0
    };
  },
  watch: {
    cicada: function cicada() {
      if (this.cicada > 3) console.log('Ok, it\'s /all_and_good_by');
    }
  },
  computed: {
    screenHeight: function screenHeight() {
      return window.screen.height + 56;
    }
  },
  mounted: function mounted() {},
  methods: {
    cicadaEnter: function cicadaEnter() {
      console.log('Click me: Math.ceil(PI).time');
    },
    cicadaClick: function cicadaClick() {
      this.cicada++;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "row pt-16 mt-16" },
    [
      _c("v-col", { staticClass: "pl-md-10 pl-lg-10 md-6 lg-6 sm-12 xs-12" }, [
        _c("h2", { staticClass: "text-h1 blue-grey--text text--darken-3" }, [
          _vm._v("404")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "headline blue-grey--text text--lighten-1" }, [
          _vm._v("\n    Такой страницы не существует\n      ")
        ]),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "subheading blue-grey--text text--lighten-1" },
          [
            _vm._v("\n        Вернитесь на\n        "),
            _c("router-link", { attrs: { to: "/" } }, [
              _vm._v("главную страницу")
            ]),
            _vm._v(".\n      ")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        {
          staticClass: "pl-md-10 pl-lg-10 md-6 lg-6 sm-12 xs-12",
          attrs: { height: "100%" }
        },
        [
          _c("v-img", {
            attrs: { src: "./assets/3301.webp" },
            on: { mouseenter: _vm.cicadaEnter, click: _vm.cicadaClick }
          })
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

/***/ "./resources/js/components/views/Page404.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/views/Page404.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page404.vue?vue&type=template&id=f0f4bd66& */ "./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66&");
/* harmony import */ var _Page404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page404.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Page404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Page404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Page404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Page404.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/views/Page404.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Page404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page404.vue?vue&type=template&id=f0f4bd66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Page404.vue?vue&type=template&id=f0f4bd66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page404_vue_vue_type_template_id_f0f4bd66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);