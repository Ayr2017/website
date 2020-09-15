(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["subheaderSize", "iconsSize"])),
  data: function data() {
    return {
      hinter3301: false
    };
  },
  mounted: function mounted() {},
  created: function created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function handleScroll(event) {
      var _this = this;

      this.hinter3301 = !this.hinter3301;
      setTimeout(function () {
        _this.hinter3301 = !_this.hinter3301;
      }, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e& ***!
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
        [_vm._v("Разработка сайтов")]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "my-2", attrs: { outlined: "", color: "#fff5" } },
        [
          _c("v-card-title", { staticClass: "blue--text text--darken-3" }, [
            _vm._v("Для чего нужен сайт?")
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
                        "\n            Сайт - это обобщенное название ресурса в интернете, куда можно получить доступ используя браузер. Цели создания сайтов могут быть различные, как и сами сайты. Некоторые сайты предназначены для того, чтобы ознакомить потенциального покупателя с продаваемым товаром или услугой, и сделать этого покупателя уже реальным реальным. Обычно, такие сайты состоят из одной страницы и называются\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("landing-page")]
                      ),
                      _vm._v(
                        "\n            (посадочная страница) или\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("целевая страница")]
                      ),
                      _vm._v(
                        " . Такие страницы имеют яркий дизайн и, обычно, имеют одну единственную страницу.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            Другая разновидность сайтов - это\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("корпоративные сайты")]
                      ),
                      _vm._v(
                        ". Их задача, показать что организация вполне себе серьезная, имеет определенные успехи в своей отрасле или, хотя бы, большие планы, и готовы в ближайшее время вытеснить, нахрен, всех конкурентов и стать первыми и единственными. Здесь, могут/должны быть указаны все нужные контакты для сотрудничества, ключевые сотрудники, адреса, описание продукции и цены.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("Интернет магазины")]
                      ),
                      _vm._v(",\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("социальные сети")]
                      ),
                      _vm._v(",\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("онлайн-конструкторы")]
                      ),
                      _vm._v(
                        ", и прочее - это уже совсем другой уровень сайтов, их называют\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium blue--text text--darken-3"
                        },
                        [_vm._v("веб-приложениями")]
                      ),
                      _vm._v(
                        ".\n            Такие сайты имеют изощрённую бизнес-логику, обязательно, базу-данных, и высокую степень защиты. Так как, здесь, информация стоит денег.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "На сегодняшний день, сайт - способ связи с миром и нужен каждому бизнесу или проекту."
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
                  attrs: { size: "150", color: "blue lighten-1" }
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
          _c("v-card-title", { staticClass: "teal--text text--darken-3" }, [
            _vm._v("Этапы разработки сайта")
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
                        "\n            Разработка сайтов включает в себя несколько этапов. Первое\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [
                          _vm._v(
                            "- анализ потребностей и формирование технического задания"
                          )
                        ]
                      ),
                      _vm._v(
                        ".\n            На данном этапе формируется вся концепция, структура, логика, инструменты. Техническое задание полностью отражает потребности клиента и формирует подробное описание функционала.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n            Третье\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("- верстка и программирование")]
                      ),
                      _vm._v(
                        ".\n            Верстка, это сборка макета и придание определенных стилей. Программирование, это когда задается функциональность. Необходимо понимать, что сайт состоит из двух основных частей -\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("фронтенд и бекенд")]
                      ),
                      _vm._v(
                        ". Фронтенд - это видимая часть. Бекенд - невидимая, и находится по ту сторону сети, на сервере.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n            Третье\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("- верстка и программирование")]
                      ),
                      _vm._v(
                        ".\n            Верстка, это сборка макета и придание определенных стилей. Программирование, это когда задается функциональность. Необходимо понимать, что сайт состоит из двух основных частей -\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("фронтенд и бекенд")]
                      ),
                      _vm._v(
                        ". Фронтенд - это видимая часть. Бекенд - невидимая, и находится по ту сторону сети, на сервере.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n            Четвертое\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("- заполнение контентом.")]
                      ),
                      _vm._v(
                        ".\n            Сюда входят приобретение и обработка фотографий, аудио-видео материалов, написание статей и просто любых тектов. Фронтенд - это видимая часть. Бекенд - невидимая, и находится по ту сторону сети, на сервере.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n            Пятое\n            "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [
                          _vm._v(
                            "- пуско-наладочные работы и конечное тестирование."
                          )
                        ]
                      ),
                      _vm._v(
                        ".\n            Сайт выводится на сервер, приобретается доменное имя и привязывается к сайту. Происходит полное тестирование всего функционала, сверяется с техническим задаение. После этого этапа работа считается завершенной и передается клиенту.\n          "
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col d-flex align-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { to: "/page" }
                    },
                    [
                      _c(
                        "v-icon",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.hinter3301,
                              expression: "!hinter3301"
                            }
                          ],
                          staticClass: "ma-10 ml-0 hidden-sm-and-down",
                          attrs: {
                            size: "150",
                            color: "teal lighten-1",
                            link: "",
                            to: "/page"
                          }
                        },
                        [_vm._v("mdi-altimeter")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-avatar",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.hinter3301,
                          expression: "hinter3301"
                        }
                      ],
                      staticClass: "ma-10 ml-0 hidden-sm-and-down",
                      attrs: { size: "150", tile: "" }
                    },
                    [_c("v-img", { attrs: { src: "/assets/3301.webp" } })],
                    1
                  )
                ],
                1
              )
            ]
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
          _c("v-card-title", { staticClass: "green--text text--darken-3" }, [
            _vm._v("Стоимость сайта")
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
                        "\n            Стоимость сайта складывается из многих параметров. Но в основном, связаны с трудозатратами.\n            "
                      ),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-medium teal--text text--darken-3"
                        },
                        [_vm._v("Трудозатраты")]
                      ),
                      _vm._v(
                        "\n            - значит, время необходимое для реализации проекта. Но это еще не всё. Сайт можно сделать используя разные инструменты. Некоторые - платные, используя некоторые можно сделать быстро. Можно даже сделать два одинаково выглядящих сайта с большой разницей в стоимости. Они будут отличаться в легкости поддержки или изменения. Также, можно сделать или шаблонный сайт, или создавать уникальный дизайн или функционал.\n          "
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
                  attrs: { size: "150", color: "green lighten-2" }
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

/***/ "./resources/js/components/views/websites/Websitetypes.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/websites/Websitetypes.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Websitetypes.vue?vue&type=template&id=3646d70e& */ "./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e&");
/* harmony import */ var _Websitetypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Websitetypes.vue?vue&type=script&lang=js& */ "./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Websitetypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/websites/Websitetypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Websitetypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Websitetypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/websites/Websitetypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Websitetypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Websitetypes.vue?vue&type=template&id=3646d70e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/websites/Websitetypes.vue?vue&type=template&id=3646d70e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Websitetypes_vue_vue_type_template_id_3646d70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);