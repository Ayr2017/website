(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["subheaderSize", "iconsSize"])),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        [_vm._v("Разработка десктопных приложений")]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "my-2", attrs: { outlined: "", color: "#fff5" } },
        [
          _c("v-card-title", { staticClass: "pink--text text--darken-3" }, [
            _vm._v("Для чего нужно приложение?")
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
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium pink--text text--darken-3"
                        },
                        [_vm._v("Десктопные приложения ")]
                      ),
                      _vm._v(
                        "- специально разработанные программы, которые имеют графический интерфейс и запускаются не внутри браузера, как веб-приложения, а на компьютере. Сам браузер, является дектопным приложением. \n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Десктопные приложения могут работать и без подключения к интернету, и с подключением, в зависимости от заданной функциональности. Они могут работать с файлами на диске компьютера и устройствами. Важная особенность - возможность работы приложения без подключения к сети интернет - позволяет хранить данные на компьютере, что увеличивает безопасность. Также, не требуется отправлять большие массивы данных по сети, и это экономит время."
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
                  attrs: { size: "150", color: "pink lighten-1" }
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
          _c("v-card-title", { staticClass: "indigo--text text--darken-3" }, [
            _vm._v("Этапы разработки приложения")
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
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium indigo--text text--darken-3"
                        },
                        [_vm._v("Десктопные приложения ")]
                      ),
                      _vm._v(
                        " имеют те же этапы разработки, что и мобильные приложения. Но отличаются тем, что при внесении изменений необходимо обновить приложения на всех устройствах.  \n          "
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
                  attrs: { size: "150", color: "indigo lighten-1" }
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
          _c("v-card-title", { staticClass: "cyan--text text--darken-3" }, [
            _vm._v("Стоимость приложения")
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
                      _c("span", {
                        staticClass:
                          "font-weight-medium cyan--text text--darken-3"
                      }),
                      _vm._v(
                        " \n              Цена на десктопные приложения формируется исходя из трудозатрат и сопутствующих услуг и разрешений.  \n          "
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
                  attrs: { size: "150", color: "cyan lighten-2" }
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

/***/ "./resources/js/components/views/desktopapp/Desktopapp.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/desktopapp/Desktopapp.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desktopapp.vue?vue&type=template&id=a043bcda& */ "./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda&");
/* harmony import */ var _Desktopapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desktopapp.vue?vue&type=script&lang=js& */ "./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Desktopapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/desktopapp/Desktopapp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktopapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Desktopapp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktopapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Desktopapp.vue?vue&type=template&id=a043bcda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/desktopapp/Desktopapp.vue?vue&type=template&id=a043bcda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktopapp_vue_vue_type_template_id_a043bcda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);