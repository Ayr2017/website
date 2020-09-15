(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
// import Websites from "./services/Websites.vue";
// import Desktopapp from "./services/Desktopapp.vue";
// import Webanimation from "./services/Webanimation.vue";
var Websites = function Websites() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./services/Websites.vue */ "./resources/js/components/views/welcome/services/Websites.vue"));
};

var Desktopapp = function Desktopapp() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./services/Desktopapp.vue */ "./resources/js/components/views/welcome/services/Desktopapp.vue"));
};

var Webanimation = function Webanimation() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./services/Webanimation.vue */ "./resources/js/components/views/welcome/services/Webanimation.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Websites: Websites,
    Desktopapp: Desktopapp,
    Webanimation: Webanimation
  },
  data: function data() {
    return {
      servicePoint_1: false,
      servicePoint_2: false,
      servicePoint_3: false,
      parallaxHeight: 500,
      serviceCardState: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["subheaderSize"])), {}, {
    screenHeight: function screenHeight() {
      return window.screen.height;
    }
  }),
  methods: {
    showServicePoint: function showServicePoint(isVisible, entry, n) {
      if (isVisible) {
        switch (n) {
          case 1:
            this.servicePoint_1 = true;
            break;

          case 2:
            this.servicePoint_2 = true;
            break;

          case 3:
            this.servicePoint_3 = true;
            break;
        }
      }
    },
    setParallaxHeightValue: function setParallaxHeightValue(event) {
      this.parallaxHeight = event.target.offsetHeight + 56;
    },
    showServiceCard: function showServiceCard(isVisible, entry) {
      var _this = this;

      if (isVisible) {
        setTimeout(function () {
          _this.serviceCardState = true;
        }, 100);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-parallax[data-v-34e4a017] {\r\n  width: 100% !important;\n}\n.elev-1[data-v-34e4a017] {\r\n  text-shadow: 2px 2px 6px rgb(68, 68, 68);\n}\n.v-list-item__subtitle[data-v-34e4a017] {\r\n  -webkit-line-clamp: unset !important;\n}\n.v-list-item__title[data-v-34e4a017] {\r\n  white-space: normal !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { tile: "" } },
    [
      _c(
        "v-card",
        {
          staticClass: "ma-0 pt-12 grey lighten-3",
          attrs: { width: "100%", tile: "" }
        },
        [
          _c(
            "v-row",
            {
              staticClass: "mx-0",
              attrs: {
                align: "center",
                justify: "center",
                tile: "",
                "min-height": _vm.screenHeight
              }
            },
            [
              _c(
                "v-theme-provider",
                { attrs: { light: "" } },
                [
                  _c(
                    "v-col",
                    { staticClass: "text-center", attrs: { cols: "12" } },
                    [
                      _c(
                        "h2",
                        {
                          directives: [
                            {
                              name: "observe-visibility",
                              rawName: "v-observe-visibility",
                              value: _vm.showServiceCard,
                              expression: "showServiceCard"
                            }
                          ],
                          staticClass: "display-2 font-weight-thin mb-4",
                          staticStyle: { color: "#333" },
                          attrs: { id: "services-title" }
                        },
                        [_vm._v(_vm._s(this.$ml.get("services.title")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        { attrs: { name: "fadeRight", tag: "div" } },
                        [
                          _vm.serviceCardState
                            ? _c(
                                "v-row",
                                [
                                  _c("Websites"),
                                  _vm._v(" "),
                                  _c("Desktopapp"),
                                  _vm._v(" "),
                                  _c("Webanimation")
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mx-0", attrs: { align: "stretch" } },
            [
              _c(
                "v-parallax",
                {
                  attrs: {
                    dark: "",
                    src: "./assets/advantage.webp",
                    jumbotron: "",
                    height: _vm.parallaxHeight
                  }
                },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center", tile: "" } },
                    [
                      _c(
                        "v-theme-provider",
                        { attrs: { dark: "" } },
                        [
                          _c(
                            "v-col",
                            {
                              directives: [
                                { name: "elresize", rawName: "v-elresize" }
                              ],
                              staticClass: "text-center mx-0 px-0 my-10",
                              attrs: { cols: "12" },
                              on: { elresize: _vm.setParallaxHeightValue }
                            },
                            [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "observe-visibility",
                                      rawName: "v-observe-visibility",
                                      value: function(isVisible, entry, n) {
                                        return _vm.showServicePoint(
                                          isVisible,
                                          entry,
                                          1
                                        )
                                      },
                                      expression:
                                        "(isVisible, entry, n)=>showServicePoint(isVisible, entry, 1)"
                                    }
                                  ],
                                  staticClass:
                                    "row align-center justify-center",
                                  staticStyle: {
                                    "background-color": "#263238aa"
                                  },
                                  attrs: {
                                    fluid: "",
                                    flat: "",
                                    tile: "",
                                    dark: "",
                                    dense: ""
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      class: [
                                        _vm.subheaderSize,
                                        "text-weight-thin "
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          this.$ml.get(
                                            "services.advantage.title"
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "transition",
                                {
                                  staticClass: "list-group",
                                  attrs: { name: "slideUp", tag: "ul" }
                                },
                                [
                                  _vm.servicePoint_1
                                    ? _c(
                                        "v-list",
                                        {
                                          staticClass: "mx-auto px-0",
                                          attrs: {
                                            "three-line": "",
                                            color: "#263238aa",
                                            disabled: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-group",
                                            { attrs: { color: "primary" } },
                                            [
                                              _c(
                                                "v-list-item",
                                                {
                                                  staticClass:
                                                    "mx-md-15 px-md-15",
                                                  attrs: {
                                                    "aria-label": "reptiloids"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [_vm._v("mdi-delta")]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    {
                                                      staticClass: "text-start"
                                                    },
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            "Контроль и размах"
                                                          )
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              "Работа выполняется потомственными рептилоидами под зорким контролем иллюминатов."
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  staticClass:
                                                    "mx-md-15 px-md-15",
                                                  attrs: {
                                                    "aria-label": "element"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [
                                                          _vm._v(
                                                            "mdi-currency-usd"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    {
                                                      staticClass: "text-start"
                                                    },
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            "Дешевле на 50%"
                                                          )
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              "Работа выполняется без посредников."
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  staticClass:
                                                    "mx-md-15 px-md-15",
                                                  attrs: {
                                                    "aria-label": "element"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [
                                                          _vm._v(
                                                            "mdi-face-agent"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    {
                                                      staticClass: "text-start"
                                                    },
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            "Поддержка после сдачи работы"
                                                          )
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              "В течении гарантийного срока выполняется бесплатное обслуживание."
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  staticClass:
                                                    "mx-md-15 px-md-15",
                                                  attrs: {
                                                    "aria-label": "element"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [_vm._v("mdi-sale")]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    {
                                                      staticClass: "text-start"
                                                    },
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            "Гибкая система скидок и рассрочки"
                                                          )
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              "Расплатиться полностью можно в течение года и более."
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
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

/***/ "./resources/js/components/views/welcome/Services.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/views/welcome/Services.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=34e4a017&scoped=true& */ "./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& */ "./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34e4a017",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/welcome/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=style&index=0&id=34e4a017&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_34e4a017_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=34e4a017&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/welcome/Services.vue?vue&type=template&id=34e4a017&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_34e4a017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);