(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto mb-5", attrs: { cols: "12", lg: "6", md: "8" } },
    [
      _c(
        "div",
        {
          class: [
            _vm.subheaderSize,
            "font-weight-thin mb-xs-2 mb-sm-5 mb-md-10 elev-1 text--secondary mb-1"
          ]
        },
        [_vm._v("Разработка web-анимации")]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "my-2", attrs: { outlined: "", color: "#fff5" } },
        [
          _c("v-card-title", { staticClass: "purple--text text--darken-3" }, [
            _vm._v("Для чего нужена анимация?")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-no-wrap justify-space-between" },
            [
              _c(
                "div",
                [
                  _c("v-card-text", { staticClass: "text-body-1" }, [
                    _c("p", [
                      _vm._v(
                        "\n              Раньше все сайты были статичны. Потом научились делать мигающую бегущую строку, которая вскоре начинала всех раздражать. После поняли, что просто текст не привлекателен и начали добавлять GIF-файлы, где можно было усмотреть анимацию. Со временем появился Flash, на котором можно было делать целые мультфильмы и игры. Но и он устарел, на данный момент стандартом является\n              "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium purple--text text--darken-3"
                        },
                        [_vm._v("HTML5-анимация")]
                      ),
                      _vm._v("\n              .\n            ")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Основная цель анимации на сайте - повышение привлекательности, далее улучшение интуитивной понятности. Наличие хорошей анимации на сайте располагает к себе клиента. Благодаря анимации пользователь задерживается на сайте на большее время."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Зачастую, анимация является необходимостью. Например постоянное изменение графика при поступлении новых данных."
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "ma-10 ml-0 hidden-sm-and-down",
                  attrs: { size: "150", color: "purple lighten-1" }
                },
                [_vm._v("mdi-comment-question-outline")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-actions")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "my-2", attrs: { outlined: "", color: "#fff5" } },
        [
          _c(
            "v-card-title",
            { staticClass: "deep-orange--text text--darken-3" },
            [_vm._v("Этапы разработки")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-no-wrap justify-space-between" },
            [
              _c(
                "div",
                [
                  _c("v-card-text", { staticClass: "text-body-1" }, [
                    _vm._v(
                      "\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "ma-10 ml-0 hidden-sm-and-down",
                  attrs: { size: "150", color: "deep-orange lighten-1" }
                },
                [_vm._v("mdi-altimeter")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-actions")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "my-2", attrs: { outlined: "", color: "#fff5" } },
        [
          _c(
            "v-card-title",
            { staticClass: "light-blue--text text--darken-3" },
            [_vm._v("Стоимость анимации")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-no-wrap justify-space-between" },
            [
              _c(
                "div",
                [
                  _c("v-card-text", { staticClass: "text-body-1" }, [
                    _c("p", [
                      _vm._v(
                        "Стоимость анимации зависит от сложности работы. Начинается от 5000 рублей, куда не входит стоимость интеграции."
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "ma-10 ml-0 hidden-sm-and-down",
                  attrs: { size: "150", color: "light-blue lighten-2" }
                },
                [_vm._v("mdi-cash-usd-outline")]
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

/***/ "./resources/js/components/views/webanimation/Webanimation.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/views/webanimation/Webanimation.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Webanimation.vue?vue&type=template&id=433756f3& */ "./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3&");
/* harmony import */ var _Webanimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Webanimation.vue?vue&type=script&lang=js& */ "./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Webanimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/webanimation/Webanimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webanimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webanimation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webanimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webanimation.vue?vue&type=template&id=433756f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/webanimation/Webanimation.vue?vue&type=template&id=433756f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webanimation_vue_vue_type_template_id_433756f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);