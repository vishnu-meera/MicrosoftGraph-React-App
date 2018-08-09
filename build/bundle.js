/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fecthCalenderDetails = exports.fecthCurrentUser = exports.fetchMe = exports.FETCH_CALENDER_EVENTS = exports.FETCH_CURRENT_USER = exports.FETCH_ME = undefined;

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _asyncRequest = __webpack_require__(18);

var _asyncRequest2 = _interopRequireDefault(_asyncRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_ME = exports.FETCH_ME = 'fetch_me';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fecth_current_user';
var FETCH_CALENDER_EVENTS = exports.FETCH_CALENDER_EVENTS = 'fetch_calender_events';

var fetchMe = exports.fetchMe = function fetchMe(token) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res, headers;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //console.log("Authorization bearer token",token)
                            res = {};

                            if (!token) {
                                _context.next = 7;
                                break;
                            }

                            headers = { 'Authorization': 'Bearer ' + token };
                            _context.next = 5;
                            return _axios2.default.get('https://graph.microsoft.com/v1.0/me/', { headers: headers });

                        case 5:
                            res = _context.sent;

                            //console.log("data : ",res.data)
                            //console.log(api)
                            //const res = await api.get('/me');
                            dispatch({
                                type: FETCH_ME,
                                payload: res
                            });

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fecthCurrentUser = exports.fecthCurrentUser = function fecthCurrentUser(token) {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res, headers;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log("Authorization bearer token", token);
                            res = {};

                            if (!token) {
                                _context2.next = 7;
                                break;
                            }

                            headers = { 'Authorization': 'Bearer ' + token };
                            _context2.next = 6;
                            return _axios2.default.get('https://graph.microsoft.com/v1.0/me/', { headers: headers });

                        case 6:
                            res = _context2.sent;

                        case 7:
                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fecthCalenderDetails = exports.fecthCalenderDetails = function fecthCalenderDetails(token) {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res, headers;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            console.log("Authorization bearer token", token);
                            res = {};

                            if (!token) {
                                _context3.next = 16;
                                break;
                            }

                            headers = { 'Authorization': 'Bearer ' + token };

                            console.log("headers : ", headers);
                            _context3.prev = 5;
                            _context3.next = 8;
                            return (0, _asyncRequest2.default)('https://graph.microsoft.com/v1.0/me/events', {
                                method: 'GET',
                                headers: headers
                            });

                        case 8:
                            res = _context3.sent;

                            console.log(res);
                            _context3.next = 16;
                            break;

                        case 12:
                            _context3.prev = 12;
                            _context3.t0 = _context3['catch'](5);

                            console.log("fecthCalenderDetails: ", JSON.stringify(_context3.t0));
                            res = _context3.t0.Error;

                        case 16:
                            dispatch({
                                type: FETCH_CALENDER_EVENTS,
                                payload: res
                            });

                        case 17:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[5, 12]]);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(19);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _MyProfilePage = __webpack_require__(20);

var _MyProfilePage2 = _interopRequireDefault(_MyProfilePage);

var _calenderEventsPage = __webpack_require__(21);

var _calenderEventsPage2 = _interopRequireDefault(_calenderEventsPage);

var _NotFoundPage = __webpack_require__(22);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _MyProfilePage2.default, {
        path: '/ggggg'
    }), _extends({}, _calenderEventsPage2.default, {
        path: '/hhhhhh',
        exact: true
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                console.log("this.props.auth", this.props.auth);
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading...'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _passportAzureAd = __webpack_require__(12);

var _passport = __webpack_require__(13);

var _passport2 = _interopRequireDefault(_passport);

var _renderHelper = __webpack_require__(14);

var _renderHelper2 = _interopRequireDefault(_renderHelper);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(4);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _uuid = __webpack_require__(30);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = {};
var app = (0, _express2.default)();
var creds = {
    redirectUrl: 'http://localhost:3002/tokenForGraph',
    clientID: 'e80eb675-7c39-442a-aba3-ebb1d3f5fb27',
    clientSecret: 'vwqzUEKA290%bbvCHE08]%(',
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    allowHttpForRedirectUrl: true, // For development only
    responseType: 'code',
    validateIssuer: false, // For development only
    responseMode: 'query',
    scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite']
};

_passport2.default.use(new _passportAzureAd.OIDCStrategy(creds, function (iss, sub, profile, accessToken, refreshToken, done) {
    done(null, { profile: profile, accessToken: accessToken, refreshToken: refreshToken });
}));

_passport2.default.serializeUser(function (user, done) {
    var id = _uuid2.default.v4();
    users[id] = user;
    done(null, id);
});

_passport2.default.deserializeUser(function (id, done) {
    var user = users[id];
    done(null, user);
});

app.use(__webpack_require__(31)());
app.use(__webpack_require__(32).urlencoded({ extended: true }));
app.use(__webpack_require__(33)({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());
app.use(_express2.default.static('public'));

app.get('/tokenForGraph', _passport2.default.authenticate('azuread-openidconnect', { failureRedirect: '/' }), function (req, res) {
    var session = req.session;
    session.bearetToken = req.user.accessToken;
    console.log("/tokenForGraph");
    res.redirect('/');
});

app.get('/logout', function (req, res) {
    var session = req.session;
    session.bearetToken = '';
    console.log("/logout");
    res.redirect('/');
});

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    var token = req.session.bearetToken;
    console.log("Path: ", req.path);

    var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store, token) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderHelper2.default)(req, store, context);
        if (context.notFound) res.status(404);
        res.send(content);
    });
});

app.listen(3002, function () {
    console.log("listening on port 3002");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("passport-azure-ad");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
        )
    ));

    return '<html>\n                <head>\n                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">\n                </head>\n                <body>\n                    <div id="root">' + content + '</div>\n                    <script>\n                    window.INITIAL_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + '\n                    </script>\n                    <script src="bundle.js"></script>\n                </body>\n            </html>';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _header = __webpack_require__(17);

var _header2 = _interopRequireDefault(_header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

function loadData(store, token) {
    console.log("In fecthCurrentUser");
    return store.dispatch((0, _actions.fecthCurrentUser)(token));
}

exports.default = {
    component: App,
    loadData: loadData
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(auth) {
    console.log('my auth status is', auth.auth);
    var authButton = auth.auth ? _react2.default.createElement(
        'a',
        { href: '/logout' },
        'Logout'
    ) : _react2.default.createElement(
        'a',
        { href: '/tokenForGraph' },
        'Login'
    );

    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
                'a',
                { href: '/', className: 'brand-logo' },
                'DashBoard'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/ggggg' },
                        'About Me'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/hhhhhh' },
                        'My Calender Notifications'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    authButton
                )
            )
        )
    );
};

function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("async-request");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome!'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Dashboard using microsoft graph api\'s'
        )
    );
};

exports.default = { component: Home };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(7);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyProfile = function (_Component) {
    _inherits(MyProfile, _Component);

    function MyProfile() {
        _classCallCheck(this, MyProfile);

        return _possibleConstructorReturn(this, (MyProfile.__proto__ || Object.getPrototypeOf(MyProfile)).apply(this, arguments));
    }

    _createClass(MyProfile, [{
        key: 'componentDidMount',
        value: function componentDidMount(token) {
            this.props.fetchMe(token);
        }
    }, {
        key: 'renderUsersList',
        value: function renderUsersList() {
            console.log(this.props.me);
            var myself = this.props.me;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'table',
                    { className: 'striped highlight responsive-table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Name'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                myself.displayName
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Mail'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                myself.mail
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Job Title'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                myself.jobTitle || 'Nil'
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Mobile Phone'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                myself.mobilePhone || 'Nil'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'My Details'
                ),
                this.renderUsersList()
            );
        }
    }]);

    return MyProfile;
}(_react.Component);

function loadData(store, token) {
    console.log("After login : In MyProfilePage");
    return store.dispatch((0, _actions.fetchMe)(token));
}

function mapStatetoProps(state) {
    return { me: state.me };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStatetoProps, { fetchMe: _actions.fetchMe })((0, _requireAuth2.default)(MyProfile)),
    loadData: loadData
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(7);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalenderEvents = function (_Component) {
    _inherits(CalenderEvents, _Component);

    function CalenderEvents() {
        _classCallCheck(this, CalenderEvents);

        return _possibleConstructorReturn(this, (CalenderEvents.__proto__ || Object.getPrototypeOf(CalenderEvents)).apply(this, arguments));
    }

    _createClass(CalenderEvents, [{
        key: 'componentDidMount',
        value: function componentDidMount(token) {
            this.props.fecthCalenderDetails(token);
        }
    }, {
        key: 'renderUsersList',
        value: function renderUsersList() {
            console.log(this.props.calenderEvents);
            var data = this.props.calenderEvents;
            return _react2.default.createElement(
                'div',
                null,
                JSON.stringify(data)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Events'
                ),
                this.renderUsersList()
            );
        }
    }]);

    return CalenderEvents;
}(_react.Component);

function loadData(store, token) {
    console.log("After login : In CalenderEvents");
    return store.dispatch((0, _actions.fecthCalenderDetails)(token));
}

function mapStatetoProps(state) {
    return { calenderEvents: state.calenderEvents };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStatetoProps, { fecthCalenderDetails: _actions.fecthCalenderDetails })((0, _requireAuth2.default)(CalenderEvents)),
    loadData: loadData
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h3',
        null,
        'Page not found!!!'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var cookie = req.session.bearetToken || ' ';
    //console.log("cookie ", cookie)
    var axiosInstance = _axios2.default.create({
        baseURL: 'https://graph.microsoft.com/v1.0',
        headers: { 'Authorization': 'Bearer ' + cookie }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userReducer = __webpack_require__(27);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _authReducer = __webpack_require__(28);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _calenderEventsReducer = __webpack_require__(29);

var _calenderEventsReducer2 = _interopRequireDefault(_calenderEventsReducer);

var _redux = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    me: _userReducer2.default,
    auth: _authReducer2.default,
    calenderEvents: _calenderEventsReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ME:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data ? true : false;
        default:
            return state;
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CALENDER_EVENTS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ })
/******/ ]);