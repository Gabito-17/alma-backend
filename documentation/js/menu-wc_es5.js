'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">alma-backend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PaisesModule.html\" data-type=\"entity-link\" >PaisesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'data-bs-target="#xs-controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'id="xs-controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PaisesController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PaisesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'data-bs-target="#xs-injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'id="xs-injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PaisesService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PaisesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PersonasModule.html\" data-type=\"entity-link\" >PersonasModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'data-bs-target="#xs-controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'id="xs-controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PersonasController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PersonasController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'data-bs-target="#xs-injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'id="xs-injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PersonasService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PersonasService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SexosModule.html\" data-type=\"entity-link\" >SexosModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'data-bs-target="#xs-controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'id="xs-controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SexosController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SexosController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'data-bs-target="#xs-injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'id="xs-injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SexosService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SexosService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TipoDocumentoModule.html\" data-type=\"entity-link\" >TipoDocumentoModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'data-bs-target="#xs-controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'id="xs-controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/TipoDocumentoController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TipoDocumentoController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'data-bs-target="#xs-injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'id="xs-injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TipoDocumentoService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TipoDocumentoService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links"' : 'data-bs-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/PaisesController.html\" data-type=\"entity-link\" >PaisesController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/PersonasController.html\" data-type=\"entity-link\" >PersonasController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/SexosController.html\" data-type=\"entity-link\" >SexosController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/TipoDocumentoController.html\" data-type=\"entity-link\" >TipoDocumentoController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#entities-links"' : 'data-bs-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Pais.html\" data-type=\"entity-link\" >Pais</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Personas.html\" data-type=\"entity-link\" >Personas</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Sexo.html\" data-type=\"entity-link\" >Sexo</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/TipoDocumento.html\" data-type=\"entity-link\" >TipoDocumento</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePaisDto.html\" data-type=\"entity-link\" >CreatePaisDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePersonaDto.html\" data-type=\"entity-link\" >CreatePersonaDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateSexoDto.html\" data-type=\"entity-link\" >CreateSexoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTipoDocumentoDto.html\" data-type=\"entity-link\" >CreateTipoDocumentoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Migrations1720475450803.html\" data-type=\"entity-link\" >Migrations1720475450803</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePaisDto.html\" data-type=\"entity-link\" >UpdatePaisDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePersonaDto.html\" data-type=\"entity-link\" >UpdatePersonaDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateSexoDto.html\" data-type=\"entity-link\" >UpdateSexoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTipoDocumentoDto.html\" data-type=\"entity-link\" >UpdateTipoDocumentoDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PaisesService.html\" data-type=\"entity-link\" >PaisesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PersonasService.html\" data-type=\"entity-link\" >PersonasService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SexosService.html\" data-type=\"entity-link\" >SexosService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TipoDocumentoService.html\" data-type=\"entity-link\" >TipoDocumentoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TypeOrmConfigService.html\" data-type=\"entity-link\" >TypeOrmConfigService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));