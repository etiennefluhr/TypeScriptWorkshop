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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/typescript/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/typescript/KeyCodes.ts":
/*!************************************!*\
  !*** ./src/typescript/KeyCodes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** ****************************************************************************************************************
 *   All key codes that are used in the game.
 *******************************************************************************************************************/
var KeyCodes = /** @class */ (function () {
    function KeyCodes() {
    }
    /** The keycode that represents the 'ARROW LEFT' key. */
    KeyCodes.KEY_LEFT = 'ArrowLeft';
    /** The keycode that represents the 'ARROW UP' key. */
    KeyCodes.KEY_UP = 'ArrowUp';
    /** The keycode that represents the 'ARROW RIGHT' key. */
    KeyCodes.KEY_RIGHT = 'ArrowRight';
    /** The keycode that represents the 'ARROW DOWN' key. */
    KeyCodes.KEY_DOWN = 'ArrowDown';
    /** The keycode that represents the 'W' key. */
    KeyCodes.KEY_W = 'KeyW';
    /** The keycode that represents the 'A' key. */
    KeyCodes.KEY_A = 'KeyA';
    /** The keycode that represents the 'S' key. */
    KeyCodes.KEY_S = 'KeyS';
    /** The keycode that represents the 'D' key. */
    KeyCodes.KEY_D = 'KeyD';
    /** The keycode that represents the 'Q' key. */
    KeyCodes.KEY_Q = 'KeyQ';
    /** The keycode that represents the 'E' key. */
    KeyCodes.KEY_E = 'KeyE';
    /** The keycode that represents the 'F' key. */
    KeyCodes.KEY_F = 'KeyF';
    /** The keycode that represents the 'R' key. */
    KeyCodes.KEY_R = 'KeyR';
    /** The keycode that represents the 'Y' key. This is affected by the EN keyboard scheme. */
    KeyCodes.KEY_Y = 'KeyZ';
    /** The keycode that represents the 'X' key. */
    KeyCodes.KEY_X = 'KeyX';
    /** The keycode that represents the 'P' key. */
    KeyCodes.KEY_P = 'KeyP';
    /** The keycode that represents the 'ENTER' key. */
    KeyCodes.KEY_ENTER = 'Enter';
    /** The keycode that represents the 'ESCAPE' key. */
    KeyCodes.KEY_ESCAPE = 'Escape';
    /** The keycode that represents the 'SPACE' key. */
    KeyCodes.KEY_SPACE = 'Space';
    /** The keycode that represents the 'LEFT CONTROL' key. */
    KeyCodes.KEY_CTRL_LEFT = 'ControlLeft';
    /** The keycode that represents the 'LEFT SHIFT' key. */
    KeyCodes.KEY_SHIFT_LEFT = 'ShiftLeft';
    /** The keycode that represents the '1' key. */
    KeyCodes.KEY_1 = 'Digit1';
    /** The keycode that represents the '2' key. */
    KeyCodes.KEY_2 = 'Digit2';
    /** The keycode that represents the '3' key. */
    KeyCodes.KEY_3 = 'Digit3';
    /** The keycode that represents the '4' key. */
    KeyCodes.KEY_4 = 'Digit4';
    /** The keycode that represents the '5' key. */
    KeyCodes.KEY_5 = 'Digit5';
    return KeyCodes;
}());
exports.KeyCodes = KeyCodes;


/***/ }),

/***/ "./src/typescript/KeySystem.ts":
/*!*************************************!*\
  !*** ./src/typescript/KeySystem.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** ****************************************************************************************************************
 *   The key system that manages all pressed keys.
 *******************************************************************************************************************/
var KeySystem = /** @class */ (function () {
    /** ************************************************************************************************************
     *   Creates a new key system.
     ***************************************************************************************************************/
    function KeySystem() {
        var _this = this;
        /** All 'pressed' information for all keys. */
        this.keysPressed = [];
        /** All 'needs release' information for all keys. */
        this.keysNeedRelease = [];
        window.addEventListener('keydown', function (event) { _this.onKeyDown(event); }, false);
        window.addEventListener('keyup', function (event) { _this.onKeyUp(event); }, false);
        window.addEventListener('onkeydown', function (event) { _this.onKeyDown(event); }, false);
        window.addEventListener('onkeyup', function (event) { _this.onKeyUp(event); }, false);
    }
    /** ************************************************************************************************************
     *   Being invoked by the system when a key is pressed.
     *
     *   @param event The system's propagated key event.
     ***************************************************************************************************************/
    KeySystem.prototype.onKeyDown = function (event) {
        var keyCode = event.code;
        if (!this.keysNeedRelease[keyCode]) {
            this.keysPressed[keyCode] = true;
        }
    };
    /** ************************************************************************************************************
     *   Being invoked by the system when a key is released.
     *
     *   @param event The system's propagated key event.
     ***************************************************************************************************************/
    KeySystem.prototype.onKeyUp = function (event) {
        var keyCode = event.code;
        this.keysPressed[keyCode] = false;
        this.keysNeedRelease[keyCode] = false;
    };
    /** ************************************************************************************************************
     *   Checks if the key with the given keyCode is currently pressed.
     *
     *   @param  keyCode The keyCode of the key to return pressed state.
     *
     *   @return         <code>true</code> if this key is currently pressed.
     *                   Otherwise <code>false</code>.
     ***************************************************************************************************************/
    KeySystem.prototype.isPressed = function (keyCode) {
        return this.keysPressed[keyCode];
    };
    /** ************************************************************************************************************
     *   Flags that a key needs release before being able to be pressed again.
     *
     *   @param keyCode The keyCode of the key to mark as 'needs key release'.
     ***************************************************************************************************************/
    KeySystem.prototype.setNeedsRelease = function (keyCode) {
        this.keysNeedRelease[keyCode] = true;
        this.keysPressed[keyCode] = false;
    };
    /** ************************************************************************************************************
     *   Flags all keys as released, forcing the user to press certain keys again.
     *   Handy to invoke when the game screen loses the focus.
     ***************************************************************************************************************/
    KeySystem.prototype.releaseAllKeys = function () {
        this.keysPressed = [];
    };
    return KeySystem;
}());
exports.KeySystem = KeySystem;


/***/ }),

/***/ "./src/typescript/Mfg.ts":
/*!*******************************!*\
  !*** ./src/typescript/Mfg.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
     *   The main class containing the point of entry.
     */
// @ts-ignore
var MfgDemo_1 = __webpack_require__(/*! ./MfgDemo */ "./src/typescript/MfgDemo.ts");
var Mfg = /** @class */ (function () {
    function Mfg() {
    }
    /**
     *   The application's point of entry.
     */
    Mfg.main = function () {
        Mfg.setDocumentTitle();
        Mfg.styleHtmlBody();
        Mfg.demo = new MfgDemo_1.MfgDemo();
        Mfg.demo.init();
    };
    /**
     *   Dynamically sets the document's title.
     */
    Mfg.setDocumentTitle = function () {
        document.title = "TypeScript Minimal Primer, (c) 2020 Mayflower GmbH, v. 1.0";
    };
    /**
     *   Dynamically applies css to the HTML body tag.
     */
    Mfg.styleHtmlBody = function () {
        var style = document.body.style;
        style.backgroundColor = "grey";
        style.textAlign = "center";
        style.margin = "25px";
    };
    /** The singleton instance of the demo. */
    Mfg.demo = null;
    return Mfg;
}());
exports.Mfg = Mfg;


/***/ }),

/***/ "./src/typescript/MfgDemo.ts":
/*!***********************************!*\
  !*** ./src/typescript/MfgDemo.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var MfgRect_1 = __webpack_require__(/*! ./MfgRect */ "./src/typescript/MfgRect.ts");
var KeyCodes_1 = __webpack_require__(/*! ./KeyCodes */ "./src/typescript/KeyCodes.ts");
var KeySystem_1 = __webpack_require__(/*! ./KeySystem */ "./src/typescript/KeySystem.ts");
/**
 *   Handles the demo logic.
 */
var MfgDemo = /** @class */ (function () {
    /**
     *   Creates a new demo logic.
     */
    function MfgDemo() {
        var _this = this;
        /** The canvas rendering context for all 2D drawing operations. */
        this.canvasContext = null;
        /** The key system. */
        this.keySystem = null;
        /** All rects to show in the demo. */
        this.items = null;
        this.player = null;
        /**
         *   Handles one demo tick.
         */
        this.tick = function () {
            _this.render();
            _this.draw();
        };
    }
    /**
     *   Inits this demo from scratch.
     */
    MfgDemo.prototype.init = function () {
        this.initCanvas();
        this.initKeySystem();
        this.initGameElements();
        this.startDemoLoop();
    };
    /**
     *   Inits the canvas and appends it to the HTML body element.
     */
    MfgDemo.prototype.initCanvas = function () {
        var canvasTag = document.createElement("canvas");
        canvasTag.width = 900;
        canvasTag.height = 500;
        canvasTag.style.backgroundColor = "white";
        document.body.appendChild(canvasTag);
        this.canvasContext = canvasTag.getContext("2d");
    };
    /**
     *   Inits the key system.
     */
    MfgDemo.prototype.initKeySystem = function () {
        this.keySystem = new KeySystem_1.KeySystem();
    };
    /**
     *   Inits all rects for this level.
     */
    MfgDemo.prototype.initGameElements = function () {
        this.items = [
            new MfgRect_1.MfgRect(125, 25, 75, 75, "orange"),
            new MfgRect_1.MfgRect(300, 150, 120, 30, "yellow"),
            new MfgRect_1.MfgRect(550, 250, 30, 120, "red"),
            new MfgRect_1.MfgRect(620, 75, 150, 50, "grey"),
        ];
        this.player = new MfgRect_1.MfgRect(100, 200, 50, 40, "blue");
        console.log("Created [" + this.items.length + "] rects.");
    };
    /**
     *   Starts the endless demo loop.
     */
    MfgDemo.prototype.startDemoLoop = function () {
        window.setInterval(this.tick, 10);
    };
    /**
     *   Renders the current game tick.
     */
    MfgDemo.prototype.render = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.y += 0.5;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.keySystem.isPressed(KeyCodes_1.KeyCodes.KEY_RIGHT)) {
            this.player.x += 5.0;
        }
        if (this.keySystem.isPressed(KeyCodes_1.KeyCodes.KEY_LEFT)) {
            this.player.x -= 5.0;
        }
        if (this.keySystem.isPressed(KeyCodes_1.KeyCodes.KEY_UP)) {
            this.player.y -= 5.0;
        }
        if (this.keySystem.isPressed(KeyCodes_1.KeyCodes.KEY_DOWN)) {
            this.player.y += 5.0;
        }
    };
    /**
     *   Draws the current game tick.
     */
    MfgDemo.prototype.draw = function () {
        var e_2, _a;
        this.canvasContext.clearRect(0, 0, 900, 500);
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.draw(this.canvasContext);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // this.canvasContext.clearRect(0, 0, 900, 500);
        this.player.draw(this.canvasContext);
    };
    return MfgDemo;
}());
exports.MfgDemo = MfgDemo;


/***/ }),

/***/ "./src/typescript/MfgRect.ts":
/*!***********************************!*\
  !*** ./src/typescript/MfgRect.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *   A rectangular in 2D space.
 */
var MfgRect = /** @class */ (function () {
    /**
     *   Constructs a new rectangular in 2D space.
     *
     *   @param x      Left coordinate.
     *   @param y      Top coordinate.
     *   @param width  Horizontal dimension.
     *   @param height Vertical dimension.
     *   @param color  Fill color.
     */
    function MfgRect(x, y, width, height, color) {
        /** The left coordinate. */
        this.x = 0;
        /** The top coordinate. */
        this.y = 0;
        /** The horizontal dimension. */
        this.width = 0;
        /** The vertical dimension. */
        this.height = 0;
        /** The fill color. */
        this.color = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    /**
     *   Fills a rect with the specified dimensions and color.
     *
     *   @param ctx The rendering context.
     */
    MfgRect.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    return MfgRect;
}());
exports.MfgRect = MfgRect;


/***/ }),

/***/ "./src/typescript/index.ts":
/*!*********************************!*\
  !*** ./src/typescript/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mfg_1 = __webpack_require__(/*! ./Mfg */ "./src/typescript/Mfg.ts");
/** ****************************************************************************************************************
*   Being invoked when the page is loaded completely.
*******************************************************************************************************************/
window.onload = function () {
    Mfg_1.Mfg.main();
};
/** ****************************************************************************************************************
*   Being invoked when the page is left.
*******************************************************************************************************************/
window.onunload = function () {
    // no actions required on leaving website
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map