/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([369,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 78,
	"./af.js": 78,
	"./ar": 79,
	"./ar-dz": 80,
	"./ar-dz.js": 80,
	"./ar-kw": 81,
	"./ar-kw.js": 81,
	"./ar-ly": 82,
	"./ar-ly.js": 82,
	"./ar-ma": 83,
	"./ar-ma.js": 83,
	"./ar-sa": 84,
	"./ar-sa.js": 84,
	"./ar-tn": 85,
	"./ar-tn.js": 85,
	"./ar.js": 79,
	"./az": 86,
	"./az.js": 86,
	"./be": 87,
	"./be.js": 87,
	"./bg": 88,
	"./bg.js": 88,
	"./bm": 89,
	"./bm.js": 89,
	"./bn": 90,
	"./bn.js": 90,
	"./bo": 91,
	"./bo.js": 91,
	"./br": 92,
	"./br.js": 92,
	"./bs": 93,
	"./bs.js": 93,
	"./ca": 94,
	"./ca.js": 94,
	"./cs": 95,
	"./cs.js": 95,
	"./cv": 96,
	"./cv.js": 96,
	"./cy": 97,
	"./cy.js": 97,
	"./da": 98,
	"./da.js": 98,
	"./de": 99,
	"./de-at": 100,
	"./de-at.js": 100,
	"./de-ch": 101,
	"./de-ch.js": 101,
	"./de.js": 99,
	"./dv": 102,
	"./dv.js": 102,
	"./el": 103,
	"./el.js": 103,
	"./en-SG": 104,
	"./en-SG.js": 104,
	"./en-au": 105,
	"./en-au.js": 105,
	"./en-ca": 106,
	"./en-ca.js": 106,
	"./en-gb": 107,
	"./en-gb.js": 107,
	"./en-ie": 108,
	"./en-ie.js": 108,
	"./en-il": 109,
	"./en-il.js": 109,
	"./en-nz": 110,
	"./en-nz.js": 110,
	"./eo": 111,
	"./eo.js": 111,
	"./es": 112,
	"./es-do": 113,
	"./es-do.js": 113,
	"./es-us": 114,
	"./es-us.js": 114,
	"./es.js": 112,
	"./et": 115,
	"./et.js": 115,
	"./eu": 116,
	"./eu.js": 116,
	"./fa": 117,
	"./fa.js": 117,
	"./fi": 118,
	"./fi.js": 118,
	"./fo": 119,
	"./fo.js": 119,
	"./fr": 120,
	"./fr-ca": 121,
	"./fr-ca.js": 121,
	"./fr-ch": 122,
	"./fr-ch.js": 122,
	"./fr.js": 120,
	"./fy": 123,
	"./fy.js": 123,
	"./ga": 124,
	"./ga.js": 124,
	"./gd": 125,
	"./gd.js": 125,
	"./gl": 126,
	"./gl.js": 126,
	"./gom-latn": 127,
	"./gom-latn.js": 127,
	"./gu": 128,
	"./gu.js": 128,
	"./he": 129,
	"./he.js": 129,
	"./hi": 130,
	"./hi.js": 130,
	"./hr": 131,
	"./hr.js": 131,
	"./hu": 132,
	"./hu.js": 132,
	"./hy-am": 133,
	"./hy-am.js": 133,
	"./id": 134,
	"./id.js": 134,
	"./is": 135,
	"./is.js": 135,
	"./it": 136,
	"./it-ch": 137,
	"./it-ch.js": 137,
	"./it.js": 136,
	"./ja": 138,
	"./ja.js": 138,
	"./jv": 139,
	"./jv.js": 139,
	"./ka": 140,
	"./ka.js": 140,
	"./kk": 141,
	"./kk.js": 141,
	"./km": 142,
	"./km.js": 142,
	"./kn": 143,
	"./kn.js": 143,
	"./ko": 144,
	"./ko.js": 144,
	"./ku": 145,
	"./ku.js": 145,
	"./ky": 146,
	"./ky.js": 146,
	"./lb": 147,
	"./lb.js": 147,
	"./lo": 148,
	"./lo.js": 148,
	"./lt": 149,
	"./lt.js": 149,
	"./lv": 150,
	"./lv.js": 150,
	"./me": 151,
	"./me.js": 151,
	"./mi": 152,
	"./mi.js": 152,
	"./mk": 153,
	"./mk.js": 153,
	"./ml": 154,
	"./ml.js": 154,
	"./mn": 155,
	"./mn.js": 155,
	"./mr": 156,
	"./mr.js": 156,
	"./ms": 157,
	"./ms-my": 158,
	"./ms-my.js": 158,
	"./ms.js": 157,
	"./mt": 159,
	"./mt.js": 159,
	"./my": 160,
	"./my.js": 160,
	"./nb": 161,
	"./nb.js": 161,
	"./ne": 162,
	"./ne.js": 162,
	"./nl": 163,
	"./nl-be": 164,
	"./nl-be.js": 164,
	"./nl.js": 163,
	"./nn": 165,
	"./nn.js": 165,
	"./pa-in": 166,
	"./pa-in.js": 166,
	"./pl": 167,
	"./pl.js": 167,
	"./pt": 168,
	"./pt-br": 169,
	"./pt-br.js": 169,
	"./pt.js": 168,
	"./ro": 170,
	"./ro.js": 170,
	"./ru": 171,
	"./ru.js": 171,
	"./sd": 172,
	"./sd.js": 172,
	"./se": 173,
	"./se.js": 173,
	"./si": 174,
	"./si.js": 174,
	"./sk": 175,
	"./sk.js": 175,
	"./sl": 176,
	"./sl.js": 176,
	"./sq": 177,
	"./sq.js": 177,
	"./sr": 178,
	"./sr-cyrl": 179,
	"./sr-cyrl.js": 179,
	"./sr.js": 178,
	"./ss": 180,
	"./ss.js": 180,
	"./sv": 181,
	"./sv.js": 181,
	"./sw": 182,
	"./sw.js": 182,
	"./ta": 183,
	"./ta.js": 183,
	"./te": 184,
	"./te.js": 184,
	"./tet": 185,
	"./tet.js": 185,
	"./tg": 186,
	"./tg.js": 186,
	"./th": 187,
	"./th.js": 187,
	"./tl-ph": 188,
	"./tl-ph.js": 188,
	"./tlh": 189,
	"./tlh.js": 189,
	"./tr": 190,
	"./tr.js": 190,
	"./tzl": 191,
	"./tzl.js": 191,
	"./tzm": 192,
	"./tzm-latn": 193,
	"./tzm-latn.js": 193,
	"./tzm.js": 192,
	"./ug-cn": 194,
	"./ug-cn.js": 194,
	"./uk": 195,
	"./uk.js": 195,
	"./ur": 196,
	"./ur.js": 196,
	"./uz": 197,
	"./uz-latn": 198,
	"./uz-latn.js": 198,
	"./uz.js": 197,
	"./vi": 199,
	"./vi.js": 199,
	"./x-pseudo": 200,
	"./x-pseudo.js": 200,
	"./yo": 201,
	"./yo.js": 201,
	"./zh-cn": 202,
	"./zh-cn.js": 202,
	"./zh-hk": 203,
	"./zh-hk.js": 203,
	"./zh-tw": 204,
	"./zh-tw.js": 204
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 270;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(30);

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(21);

// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(19);

// EXTERNAL MODULE: ../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(32);

// EXTERNAL MODULE: ../node_modules/connected-react-router/esm/index.js + 5 modules
var esm = __webpack_require__(42);

// EXTERNAL MODULE: ../node_modules/history/esm/history.js
var esm_history = __webpack_require__(15);

// EXTERNAL MODULE: ../node_modules/redux/es/redux.js
var redux = __webpack_require__(14);

// EXTERNAL MODULE: ../node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(232);

// CONCATENATED MODULE: ../src/redux/actionType/index.ts
/*
 |--------------------------------------------------------------------------
 | Action 常量:
 | - 布局: LAYOUT 开头
 | - 请求: API 开头
 | - 设置: SET 开头
 |--------------------------------------------------------------------------
 */
const TEST = "TEST";
const TESTONE = "TESTONE";
const API_SIGN = "API_SIGN";
const API_ONLINE = "API_ONLINE";
const API_RUNTIME = "API_RUNTIME";
const API_CAPTCHA = "API_CAPTCHA";
const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
const SET_ONLINE = "SET_ONLINE";
const SET_RUNTIME = "SET_RUNTIME";
const SET_CPATCHA_COUNTDOWN = "SET_CAPTCHA_COUNTDOWN";

// CONCATENATED MODULE: ../src/redux/reducer/generalData.ts

const generalData_data = {
    online: 0,
    runtime: '',
    captchaTime: 0
};
const generalData = (state = generalData_data, action) => {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return Object.assign({}, state, { isLogin: action.payload.status });
        case SET_ONLINE:
            return Object.assign({}, state, { online: action.payload.online });
        case SET_RUNTIME:
            return Object.assign({}, state, { runtime: action.payload.runtime });
        case SET_CPATCHA_COUNTDOWN:
            return Object.assign({}, state, { captchaTime: action.payload });
        default:
            return state;
    }
};
/* harmony default export */ var reducer_generalData = (generalData);

// CONCATENATED MODULE: ../src/redux/reducer/index.ts




const reducer_history = Object(esm_history["a" /* createBrowserHistory */])();
/* harmony default export */ var reducer = (Object(redux["combineReducers"])({
    generalData: reducer_generalData,
    router: Object(esm["b" /* connectRouter */])(reducer_history)
}));

// EXTERNAL MODULE: ../node_modules/connected-react-router/esm/middleware.js
var middleware = __webpack_require__(69);

// EXTERNAL MODULE: ../node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(233);

// CONCATENATED MODULE: ../src/redux/middleware/index.ts



const middleware_history = Object(esm_history["a" /* createBrowserHistory */])();
const RouterMiddleware = Object(middleware["a" /* default */])(middleware_history);
const middlewaresa = [
    redux_thunk_es["a" /* default */],
    RouterMiddleware,
];
/* harmony default export */ var redux_middleware = (middlewaresa);

// CONCATENATED MODULE: ../src/redux/store/store.dev.ts




const devStore = (preloadedState) => {
    const store = Object(redux["createStore"])(reducer, preloadedState, Object(redux["compose"])(Object(redux_devtools_extension["composeWithDevTools"])(Object(redux["applyMiddleware"])(...redux_middleware))));
    return store;
};
/* harmony default export */ var store_dev = (devStore);

// CONCATENATED MODULE: ../src/redux/store/store.prod.ts



const prodStore = (preloadedState) => {
    const store = Object(redux["createStore"])(reducer, preloadedState, Object(redux["compose"])(Object(redux["applyMiddleware"])(...redux_middleware)));
    return store;
};
/* harmony default export */ var store_prod = (prodStore);

// CONCATENATED MODULE: ../src/redux/store/index.ts


// tslint:disable-next-line
let store_store;
if (true) {
    store_store = store_prod;
}
else {}
/* harmony default export */ var redux_store = (store_store());

// EXTERNAL MODULE: ../public/picture/logo.png
var logo = __webpack_require__(70);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ../public/picture/Avatar.jpg
var Avatar = __webpack_require__(71);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);

// CONCATENATED MODULE: ../src/style/pic.js


// import GitHub from '../../public/picture/icon/github.png';
// import Twitter from '../../public/picture/icon/twitter.png';
// import WeiBo from '../../public/picture/icon/weibo.png';
// import ZhiHu from '../../public/picture/icon/zhihu.png';


// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(51);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../src/request/api.ts
/*
 |--------------------------------------------------------------------------
 | API 请求
 |--------------------------------------------------------------------------
 */
const CAPTCHA = '/api/captcha';
const ONLINE = '/api/online';
const RUNTIME = '/api/runtime';
const IS_LOGIN = '/api/account_is_login';
const SIGN_IN = '/api/account_sign_in';
const SIGN_UP = '/api/account_sign_up';
const VERIFYEMAIL = '/api/account_verify_email';
const VERIFYCODE = '/api/account_verify_code';
const SENDEMAIL = '/api/account_send_email';

// EXTERNAL MODULE: ../node_modules/axios/index.js
var axios = __webpack_require__(25);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ../src/request/index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/*
 |--------------------------------------------------------------------------
 | Request Methods
 |--------------------------------------------------------------------------
 */
/**
 * 在线人数
 * @param None
 * @return Promise response
 */
function fetchOnline() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: ONLINE
        });
        return result;
    });
}
/**
 * 運行時長
 * @param None
 * @return Promise response
 */
function fetchRunTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: RUNTIME
        });
        return result;
    });
}
/**
 *  功能: 验证邮箱是否注册
 *  @param email str
 */
function fetchVerifyEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: `${VERIFYEMAIL}?email=${email}`,
        });
        return result.data;
    });
}
/**
 *  功能: 发送注册验证码
 *  @param email str
 */
function fetchSendEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: `${SENDEMAIL}?email=${email}`,
        });
        return result.data;
    });
}
/**
 *  功能: 验证验证码
 *  @param email str
 *  @param vCode str
 */
function fetchVerifyCode(email, vCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: `${VERIFYCODE}?email=${email}&vCode=${vCode}`,
        });
        return result.data;
    });
}
/**
 * 注册账号
 * @param userInfo email string
 * @param userInfo password string
 * @param userInfo captcha string
 * @return Promise response
 */
function fetchSignUp(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'POST',
            url: SIGN_UP,
            data: userInfo
        });
        return result.data;
    });
}
/**
 * 登录账号
 * @param userInfo email string
 * @param userInfo password string
 */
function fetchSignIn(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'POST',
            url: SIGN_IN,
            data: userInfo
        });
        return result.data;
    });
}
/**
 * 登錄狀態
 */
function fetchIsLogin() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_default()({
            method: 'GET',
            url: IS_LOGIN,
        });
        return result;
    });
}

// CONCATENATED MODULE: ../src/redux/action/index.ts



/**
 * 在线人数
 * @param None
 */
function action_fetchOnline() {
    return function (dispatch) {
        fetchOnline()
            .then(e => dispatch(setOnline(e.data)));
    };
}
;
/**
 * 设置在线人数
 * @param {state、message、online}
 */
function setOnline(param) {
    return {
        type: SET_ONLINE,
        payload: param
    };
}
/**
 * 运行历史时长
 * @param None
 */
function action_fetchRunTime() {
    return function (dispatch) {
        fetchRunTime()
            .then(e => dispatch(setRunTime(e.data)));
    };
}
/**
 * 设置运行历史时长
 * @param {state、message、runtime}
 */
function setRunTime(param) {
    return {
        type: SET_RUNTIME,
        payload: param
    };
}
/**
 * 注册
 * @param Email string
 * @param Password string
 * @param captcha string
 */
function fetchSign(param) {
    return {
        type: API_SIGN,
        payload: { param }
    };
}
/**
 * 请求验证码
 * @param email: string
 */
function fetchCaptcha(param) {
    return {
        type: API_CAPTCHA,
        payload: {
            api: CAPTCHA,
            email: param
        }
    };
}
/**
 *  倒数计时
 *  @param: number
 */
function setCaptchaCountdown(param) {
    return {
        type: SET_CPATCHA_COUNTDOWN,
        payload: param
    };
}
/**
 * 登录狀態
 */
function action_isLogin() {
    return function (dispatch) {
        fetchIsLogin()
            .then(e => dispatch(action_setLoginStatus(e.data)));
    };
}
/**
 * 保存登錄態
 */
function action_setLoginStatus(param) {
    return {
        type: SET_LOGIN_STATUS,
        payload: param
    };
}

// EXTERNAL MODULE: ../src/component/Menu/index.scss
var Menu = __webpack_require__(266);

// CONCATENATED MODULE: ../src/component/Menu/index.tsx
/**
 *  作者: leo
 *  功能: 顶部导航
 *  日期：2018/8/3
 *  文件：index
 *  參數：
 */







class Menu_MenuComponent extends react_default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return Object.assign({}, nextProps);
        }
    }
    componentDidMount() {
        this.props.action_isLogin();
    }
    isSelect(path) {
        let { isLogin } = this.state;
        let pathname = location.pathname.substr(1) || 'home';
        if (isLogin && /sign/.test(pathname)) {
            this.props.history.push("/home");
        }
        return classnames_default()({
            "select": pathname === path,
            "d-vanish": isLogin && /sign/.test(path)
        });
    }
    render() {
        return (react_default.a.createElement("div", { className: "menu" },
            react_default.a.createElement("div", { className: "menu_logo" },
                react_default.a.createElement("img", { src: logo_default.a, alt: "logo" })),
            react_default.a.createElement("div", { className: "menu_btn" },
                react_default.a.createElement("span", { className: this.isSelect("home") },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: '/home' }, "Home")),
                react_default.a.createElement("span", { className: this.isSelect("article") },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: '/article' }, "Article")),
                react_default.a.createElement("span", { className: this.isSelect("signin") },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: '/signin' }, "Sign in")),
                react_default.a.createElement("span", { className: this.isSelect("signup") },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: '/signup' }, "Sign up")),
                react_default.a.createElement("span", { className: this.isSelect("write") },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: '/write' }, "Write")))));
    }
}
const mapStateToProps = ({ generalData, router }) => {
    return {
        isLogin: generalData.isLogin,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        action_isLogin: () => dispatch(action_isLogin()),
    };
};
// tslint:disable-next-line
/* harmony default export */ var component_Menu = (Object(react_router["e" /* withRouter */])(Object(es["c" /* connect */])(mapStateToProps, mapDispatchToProps)(Menu_MenuComponent)));

// EXTERNAL MODULE: ../src/component/Foot/index.scss
var Foot = __webpack_require__(268);

// EXTERNAL MODULE: ../node_modules/moment/moment.js
var moment = __webpack_require__(1);

// CONCATENATED MODULE: ../src/component/Foot/index.tsx





// tslint:disable-next-line
class Foot_FootComponent extends react["Component"] {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return {
                online: nextProps.generalData.online,
                runtime: nextProps.generalData.runtime
            };
        }
    }
    // tslint:disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            online: 0,
            runtime: 0,
            onRockon: null
        };
        this.onTransition = this.onTransition.bind(this);
    }
    componentDidMount() {
        this.props.fetchOnline();
        this.props.fetchRunTime();
        let onRockon = setInterval(() => this.props.setRunTime({ runtime: this.state.runtime + 1000 }), 1000);
        this.setState({
            intervalId: onRockon
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    // onRockon() {
    //   setInterval(
    //     () => this.props.setRunTime({runtime: this.state.runtime + 1000}),
    //     1000
    //   );
    // }
    onTransition(runtime) {
        let result = runtime;
        let calculate = (arg, base) => {
            return Math.floor(arg) % base;
        };
        let year = calculate(moment["duration"](result).as('years'), 1);
        let day = calculate(moment["duration"](result).as('days'), 365);
        let hours = calculate(moment["duration"](result).as('hours'), 24);
        let minutes = calculate(moment["duration"](result).as('minutes'), 60);
        let seconds = calculate(moment["duration"](result).as('seconds'), 60);
        return `${year ? year + '年-' : ''}${day}天-${hours}小時-${minutes}分鐘-${seconds}秒`;
    }
    render() {
        let distance = this.onTransition(this.state.runtime);
        return (react["createElement"]("div", { className: "foot" },
            react["createElement"]("p", { className: "foot-inline-num" },
                "\u7576\u524D\u5728\u7DDA\u4EBA\u6578: ",
                this.state.online),
            react["createElement"]("p", { className: "foot-go-data" },
                "\u535A\u5BA2\u904B\u884C\u6642\u9577\uFF1A",
                react["createElement"]("span", null, distance),
                react["createElement"]("span", { className: "am-my-face" }, "(\u25CF'\u25E1'\u25CF)\uFF89\u2665")),
            react["createElement"]("p", { className: "foot-source" },
                "Made with ",
                react["createElement"]("i", null, "\u2764"),
                " by Leo")));
    }
}
// tslint:disable-next-line
const Foot_mapDispatchToProps = (dispatch) => {
    return {
        fetchOnline: () => dispatch(action_fetchOnline()),
        fetchRunTime: () => dispatch(action_fetchRunTime()),
        setRunTime: (arg) => dispatch(setRunTime(arg))
    };
};
/* harmony default export */ var component_Foot = (Object(es["c" /* connect */])(
// {fetchOnline, fetchRunTime, setRunTime}
({ generalData }) => ({ generalData }), Foot_mapDispatchToProps
// tslint:disable-next-line
)(Foot_FootComponent));
// interface StateTypes {
//   online: number | string;
//   runtime: number;
// // tslint:disable-next-line
//   intervalId: any;
// }

// EXTERNAL MODULE: ../src/pages/home/Home.scss
var home_Home = __webpack_require__(271);

// EXTERNAL MODULE: ../src/component/Svg/Bird_Svg/index.scss
var Bird_Svg = __webpack_require__(272);

// CONCATENATED MODULE: ../src/component/Svg/Bird_Svg/index.tsx


class Bird_Svg_Bird extends react["Component"] {
    render() {
        return (react["createElement"]("div", { id: "sky" },
            react["createElement"]("div", { className: "bird" },
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "wind" }),
                react["createElement"]("div", { className: "bird_body" },
                    react["createElement"]("div", { className: "bird_head" }),
                    react["createElement"]("div", { className: "bird_wing_left" },
                        react["createElement"]("div", { className: "bird_wing_left_top" })),
                    react["createElement"]("div", { className: "bird_wing_right" },
                        react["createElement"]("div", { className: "bird_wing_right_top" })),
                    react["createElement"]("div", { className: "bird_tail_left" }),
                    react["createElement"]("div", { className: "bird_tail_right" })))));
    }
}
/* harmony default export */ var Svg_Bird_Svg = (Bird_Svg_Bird);

// CONCATENATED MODULE: ../src/pages/home/Home.tsx



// import Menu from '../../component/Menu';
// import Foot from '../../component/Foot';
// import styled from 'styled-components';
// import ListComponent from '../../component/List';
// import { Card } from 'antd';
// import NameSvg from '../../component/Svg/Name_Svg';
// tslint:disable-next-line
class Home_Home extends react["PureComponent"] {
    render() {
        return (react["createElement"]("div", { className: "home content" },
            react["createElement"](Svg_Bird_Svg, null)));
    }
}

// EXTERNAL MODULE: ../src/component/Pagination/index.scss
var component_Pagination = __webpack_require__(273);

// CONCATENATED MODULE: ../src/component/Pagination/index.tsx


class Pagination_Pagination extends react["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let page = this.props.page;
        return (react["createElement"]("div", { className: "pagination" },
            react["createElement"]("button", { className: page && page > 0 ? '' : 'v-vanish' }, "NEWER POSTS >"),
            react["createElement"]("button", null, " ODER POSTS > ")));
    }
}
/* harmony default export */ var src_component_Pagination = (Pagination_Pagination);

// EXTERNAL MODULE: ../src/component/Author/index.scss
var component_Author = __webpack_require__(274);

// CONCATENATED MODULE: ../src/component/Author/index.tsx



class Author_Author extends react["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react["createElement"]("div", { className: "author-info" },
            react["createElement"]("div", { className: "author-about-me" },
                react["createElement"]("h5", null, "ABOUT ME"),
                react["createElement"]("img", { src: Avatar_default.a, alt: "HEADER" }),
                react["createElement"]("span", { className: "author-mood" }, "EveryThing Will Be Fine."),
                react["createElement"]("div", { className: "author-icons" },
                    react["createElement"]("a", { href: "https://github.com/HuangHongRui" },
                        react["createElement"]("i", { className: "author-git" })),
                    react["createElement"]("a", { href: "https://www.zhihu.com/people/HuangHongRui" },
                        react["createElement"]("i", { className: "author-zhihu" })),
                    react["createElement"]("a", { href: "https://weibo.com/huanghongrui" },
                        react["createElement"]("i", { className: "author-weibo" })),
                    react["createElement"]("a", { href: "https://twitter.com/HongRui_Huang" },
                        react["createElement"]("i", { className: "author-twitter" })))),
            react["createElement"]("div", { className: "author-tags" },
                react["createElement"]("h5", null, "TAGS"),
                react["createElement"]("span", null, "\u817E\u8BAFCDC"),
                react["createElement"]("span", null, "\u524D\u7AEF\u5F00\u53D1")),
            react["createElement"]("div", { className: "author-friends" },
                react["createElement"]("h5", null, "FRIENDS"),
                react["createElement"]("span", null,
                    react["createElement"]("a", { href: "https://spontaleo.github.io/" }, "SpontaLeo")),
                react["createElement"]("span", null,
                    react["createElement"]("a", { href: "https://overtrue.me/" }, "Overtrue")),
                react["createElement"]("span", null,
                    react["createElement"]("a", { href: "https://github.com/incuisting/blogs/issues" }, "Incuisting")))));
    }
}
/* harmony default export */ var src_component_Author = (Author_Author);

// EXTERNAL MODULE: ../src/pages/article/index.scss
var article = __webpack_require__(275);

// CONCATENATED MODULE: ../src/pages/article/index.tsx





// tslint:disable-next-line
class article_Article extends react_default.a.Component {
    // tslint:disable-next-line
    constructor(props) {
        super(props);
        this.mokeData = [
            {
                caption: "主题",
                title: "副题",
                intro: "很很多字很多字很多字很多字很多字很多字很多字很多字很多字多字",
                date: "2018/2/2",
                address: "/"
            },
            {
                caption: "饿了么的 PWA 升级实践",
                title: "Upgrading Ele.me to Progressive Web App",
                // tslint:disable-next-line
                intro: "很荣幸在今年 2 月到 5 月的时间里，以顾问的身份加入饿了么，参与 PWA 的相关工作。这篇文章其实最初是在以英文写作发表在 medium 上的：Upgrading Ele.me to Progressive Web Apps，获得了一定的关注。所以也决定改写为中文版本再次分享出来，希望能对你有所帮助 ;) 本文首发于 CSDN 与《程序员》2017 年 7...",
                date: "2018/2/2",
                address: "/"
            }
        ];
        this.state = {
            hoverTitleColor: false,
            hoverArticleColor: false
        };
        this.onHoverTitle = this.onHoverTitle.bind(this);
        this.onHoverArticle = this.onHoverArticle.bind(this);
    }
    // tslint:disable-next-line
    onHoverTitle(i) {
        if (!isNaN(i)) {
            this.setState({
                hoverTitleColor: i
            });
        }
        else {
            this.setState({
                hoverTitleColor: false
            });
        }
    }
    // tslint:disable-next-line
    onHoverArticle(i) {
        if (!isNaN(i)) {
            this.setState({
                hoverArticleColor: i
            });
        }
        else {
            this.setState({
                hoverArticleColor: false
            });
        }
    }
    render() {
        let { hoverTitleColor, hoverArticleColor } = this.state;
        return (react_default.a.createElement("div", { className: "article-content content" },
            react_default.a.createElement("div", { className: "article-list" },
                this.mokeData && this.mokeData.map((data, i) => (react_default.a.createElement("div", { key: i, className: "article-item" },
                    react_default.a.createElement(react_router_dom["b" /* Link */], { to: data.address },
                        react_default.a.createElement("h4", { onMouseEnter: () => this.onHoverTitle(i), onMouseLeave: this.onHoverTitle, className: hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : "" }, data.caption),
                        react_default.a.createElement("h6", { onMouseEnter: () => this.onHoverTitle(i), onMouseLeave: this.onHoverTitle, className: hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : "" }, data.title),
                        react_default.a.createElement("p", { onMouseEnter: () => this.onHoverArticle(i), onMouseLeave: this.onHoverArticle, className: hoverArticleColor === i ? "hover-select" : "" }, data.intro)),
                    react_default.a.createElement("span", null, data.date)))),
                react_default.a.createElement(src_component_Pagination, null)),
            react_default.a.createElement(src_component_Author, null)));
    }
}
/* harmony default export */ var pages_article = (article_Article);

// EXTERNAL MODULE: ../src/pages/signin/index.scss
var signin = __webpack_require__(276);

// EXTERNAL MODULE: ../src/component/Tip/index.scss
var component_Tip = __webpack_require__(277);

// CONCATENATED MODULE: ../src/component/Tip/index.tsx



/**
 *  功能: 提示
 *  日期：2019-03-09
 *  參數：text string
 */
class Tip_Tip extends react["Component"] {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return Object.assign({}, nextProps);
        }
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { text } = this.state;
        let style = classnames_default()("tip", { show: text });
        return (react["createElement"]("div", { className: style },
            react["createElement"]("h4", null, text ? "提示:" : ""),
            react["createElement"]("p", null, text)));
    }
}
/* harmony default export */ var src_component_Tip = (Tip_Tip);

// CONCATENATED MODULE: ../src/utils/Methods.ts
let judge = {
    email: "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
};
/** 触发提示组件方法 **/
function onTipHandle(tipText, callfun) {
    this.setState({
        tipText: tipText
    }, () => {
        setTimeout(() => {
            this.setState({
                tipText: null
            });
            callfun && callfun();
        }, 3000);
    });
}


// CONCATENATED MODULE: ../src/pages/signin/index.tsx
var signin_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class signin_SignIn extends react["Component"] {
    constructor(props) {
        super(props);
        this.onInput = (key, val) => {
            this.setState({
                [key]: val,
            });
        };
        this.signin = () => signin_awaiter(this, void 0, void 0, function* () {
            let login = yield fetchSignIn(this.state);
            onTipHandle.call(this, login.message, () => {
                if (login && login.status) {
                    this.props.action_isLogin();
                }
            });
        });
        this.state = {
            tipText: null
        };
    }
    render() {
        let { tipText } = this.state;
        return (react["createElement"]("div", { className: "signin-wrap content" },
            react["createElement"]("div", { className: 'main' },
                react["createElement"]("div", { className: "form-wrap" },
                    react["createElement"]("form", { action: "", acceptCharset: "UTF-8", method: "POST" },
                        react["createElement"]("div", { className: "form-fields" },
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "email" }, "Username or Email:"),
                                react["createElement"]("input", { type: "email", name: 'email', tabIndex: 1, onChange: e => this.onInput("email", e.target.value) })),
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "password" },
                                    "Password:",
                                    react["createElement"]("a", { href: "" }, "Forgot?")),
                                react["createElement"]("input", { type: "password", name: 'password', tabIndex: 2, onChange: e => this.onInput("password", e.target.value) }))),
                        react["createElement"]("input", { type: "button", className: "sign-in-btn", value: "Sign In", tabIndex: 3, onClick: this.signin })),
                    react["createElement"]("p", null,
                        "Not a number?",
                        react["createElement"](react_router_dom["b" /* Link */], { to: "signup" }, "Sign up now")))),
            react["createElement"](src_component_Tip, { text: tipText })));
    }
}
const signin_mapDispatchToProps = (dispatch) => ({
    action_isLogin: () => dispatch(action_isLogin())
});
/* harmony default export */ var pages_signin = (Object(es["c" /* connect */])(null, signin_mapDispatchToProps)(signin_SignIn));

// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js
var esm_react_router = __webpack_require__(27);

// EXTERNAL MODULE: ../src/pages/signup/index.scss
var signup = __webpack_require__(278);

// CONCATENATED MODULE: ../src/pages/signup/index.tsx
var signup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class signup_SignUp extends react["Component"] {
    constructor(props) {
        super(props);
        /** 发送验证码 **/
        this.sendCode = () => signup_awaiter(this, void 0, void 0, function* () {
            let { email } = this.state;
            if (!email) {
                onTipHandle.call(this, "邮箱不能为空");
                return;
            }
            let res = yield fetchVerifyEmail(email);
            if (res.status === 0) {
                fetchSendEmail(email)
                    .then(e => {
                    onTipHandle.call(this, e.message);
                });
                return;
            }
            onTipHandle.call(this, res.message);
        });
        /** 注册提交 **/
        this.signup = () => signup_awaiter(this, void 0, void 0, function* () {
            for (let key in this.state) {
                if (!this.state[key] && key !== "tipText") {
                    onTipHandle.call(this, "信息不全，无法提交");
                    return;
                }
            }
            const { email, vCode } = this.state;
            let res = yield fetchVerifyCode(email, vCode);
            if (!res.status) {
                onTipHandle.call(this, res.message);
                return;
            }
            let result = yield fetchSignUp(this.state);
            onTipHandle.call(this, result.message, () => {
                if (result.status) {
                    this.props.history.push('/signin');
                }
            });
        });
        /** 表单输入 **/
        this.onInput = (key, val) => {
            this.setState({
                [key]: val
            });
        };
        this.state = {
            nickname: null,
            email: null,
            password: null,
            vCode: null,
            tipText: null,
        };
    }
    render() {
        const { tipText } = this.state;
        return (react["createElement"]("div", { className: "signup-wrap content" },
            react["createElement"]("div", { className: 'main' },
                react["createElement"]("div", { className: "form-wrap" },
                    react["createElement"]("form", { action: "", acceptCharset: "UTF-8", method: "POST", target: "iframe_none" },
                        react["createElement"]("div", { className: "form-fields" },
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "account" }, "Name:"),
                                react["createElement"]("input", { type: "text", name: 'account', tabIndex: 1, onChange: e => this.onInput("nickname", e.target.value) })),
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "email" }, "Email:"),
                                react["createElement"]("input", { type: "email", name: 'email', tabIndex: 2, onChange: e => this.onInput("email", e.target.value) })),
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "password" }, "Password:"),
                                react["createElement"]("input", { type: "password", name: 'password', tabIndex: 3, onChange: e => this.onInput("password", e.target.value) })),
                            react["createElement"]("fieldset", null,
                                react["createElement"]("label", { htmlFor: "v-code" }, "Email Code:"),
                                react["createElement"]("input", { type: "text", name: 'v-code', tabIndex: 4, className: 'v-code', onChange: e => this.onInput("vCode", e.target.value) }),
                                react["createElement"]("button", { type: 'button', className: 'sign-up-btn v-code', onClick: this.sendCode, tabIndex: 5 }, "Send Code"))),
                        react["createElement"]("input", { type: "button", className: "sign-up-btn", value: "Create Account", tabIndex: 6, onClick: this.signup }),
                        react["createElement"]("iframe", { id: "iframe_none", name: "iframe_none" })),
                    react["createElement"]("p", null, "Creating an account means you\u2019re okay with our Terms of Service, Privacy Policy, and our default Notification Settings."))),
            react["createElement"](src_component_Tip, { text: tipText })));
    }
}
/* harmony default export */ var pages_signup = (Object(esm_react_router["c" /* withRouter */])(signup_SignUp));

// EXTERNAL MODULE: ../node_modules/draft-js/lib/Draft.js
var Draft = __webpack_require__(52);

// CONCATENATED MODULE: ../src/pages/write/index.tsx



class write_Write extends react_default.a.Component {
    constructor(props) {
        super(props);
        this.setEditor = (editor) => {
            // this.editor = editor;
        };
        this.focusEditor = () => {
            // if (this.editor) {
            // this.editor.focus();
            // }
        };
        this.onChange = (editorState) => this.setState({ editorState });
        this.state = { editorState: Draft["EditorState"].createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    componentDidMount() {
        this.focusEditor();
    }
    handleKeyCommand(command, editorState) {
        const newState = Draft["RichUtils"].handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return "handled";
        }
        return "not-handled";
    }
    render() {
        return (react_default.a.createElement("div", { style: styles.editor, onClick: this.focusEditor },
            react_default.a.createElement(Draft["Editor"]
            // ref={this.setEditor}
            , { 
                // ref={this.setEditor}
                placeholder: "heyyyyy", editorKey: "foobaz", editorState: this.state.editorState, onChange: this.onChange })));
    }
}
/* harmony default export */ var write = (Object(esm_react_router["c" /* withRouter */])(write_Write));
const styles = {
    editor: {
        border: "1px solid gray",
        minHeight: "6em"
    }
};

// EXTERNAL MODULE: ../src/style/global.scss
var global = __webpack_require__(368);

// CONCATENATED MODULE: ../src/index.tsx















const src_history = Object(esm_history["a" /* createBrowserHistory */])();
Object(react_dom["render"])(react_default.a.createElement(es["a" /* Provider */], { store: redux_store },
    react_default.a.createElement(esm["a" /* ConnectedRouter */], { history: src_history },
        react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null,
            react_default.a.createElement(component_Menu, null),
            react_default.a.createElement(react_router["c" /* Switch */], null,
                react_default.a.createElement(react_router["a" /* Route */], { exact: true, path: "/", component: Home_Home }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/home", component: Home_Home }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/article", component: pages_article }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/home", component: Home_Home }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/signin", component: pages_signin }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/signup", component: pages_signup }),
                react_default.a.createElement(react_router["a" /* Route */], { path: "/write", component: write })),
            react_default.a.createElement(component_Foot, null)))), document.getElementById("root"));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/logo.21408edc.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "statics/Avatar.654162f9.jpg";

/***/ })

/******/ });