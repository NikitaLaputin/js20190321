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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

new _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__["App"]({
  element: document.getElementById('app')
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _Table_Table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _Filter_Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _services_DataService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var App =
/*#__PURE__*/
function () {
  function App(_ref) {
    var element = _ref.element;

    _classCallCheck(this, App);

    console.log('hi`');
    this._el = element;
    this._userBalance = 10000;

    this._render();

    this.fetchData();

    this._initPortfolio();

    this._initTradeWidget();

    this._initFilter();
  }

  _createClass(App, [{
    key: "tradeItem",
    value: function tradeItem(id) {
      var coin = this._data.find(function (coin) {
        return coin.id === id;
      });

      this._tradeWidget.trade(coin);
    }
  }, {
    key: "_initPortfolio",
    value: function _initPortfolio() {
      this._portfolio = new _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_1__["Portfolio"]({
        element: this._el.querySelector('[data-element="portfolio"]'),
        balance: this._userBalance
      });
    }
  }, {
    key: "_initTradeWidget",
    value: function _initTradeWidget() {
      var _this = this;

      this._tradeWidget = new _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_2__["TradeWidget"]({
        element: this._el.querySelector('[data-element="trade-widget"]'),
        balance: this._userBalance
      });

      this._tradeWidget.on('buy', function (e) {
        var _e$detail = e.detail,
            item = _e$detail.item,
            amount = _e$detail.amount;

        _this._portfolio.addItem(item, amount);
      });
    }
  }, {
    key: "_initTable",
    value: function _initTable(data) {
      var _this2 = this;

      this._table = new _Table_Table_js__WEBPACK_IMPORTED_MODULE_0__["Table"]({
        data: data,
        element: this._el.querySelector('[data-element="table"]')
      });

      this._table.on('rowClick', function (e) {
        _this2.tradeItem(e.detail.id);
      });

      this._table.on('sort',
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(e) {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _services_DataService_js__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrencies({
                    filter: {
                      type: e.detail.type,
                      property: e.detail.property
                    }
                  });

                case 2:
                  data = _context.sent;
                  _this2._data = data;

                  _this2._table.displayData(_this2._data);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_DataService_js__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrencies();

              case 3:
                data = _context2.sent;
                this._data = data;

                this._initTable(this._data);

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: "_initFilter",
    value: function _initFilter() {
      var _this3 = this;

      this._filter = new _Filter_Filter_js__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
        element: this._el.querySelector('[data-element="filter"]')
      });

      this._filter.on('filter',
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(e) {
          var data;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _services_DataService_js__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrencies({
                    filter: e.detail
                  });

                case 2:
                  data = _context3.sent;
                  _this3._data = data;

                  _this3._table.displayData(_this3._data);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "_render",
    value: function _render() {
      this._el.innerHTML = "\n            <div class=\"row\">\n                <div class=\"col s12\">\n                    <h1>Tiny Crypto Market</h1>\n                </div>\n            </div>\n            <div class=\"row filter-row\">\n              <div class=\"col s4\" data-element=\"filter\"></div>\n            </div>\n            <div class=\"row portfolio-row\">\n                <div class=\"col s6 offset-s6\" data-element=\"portfolio\"></div>\n            </div>\n\n            <div class=\"row\">\n              <div data-element=\"table\" class=\"col s12\"></div>\n            </div>\n            <div data-element=\"trade-widget\"></div>\n        ";
    }
  }]);

  return App;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Table =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Table, _BaseComponent);

  function Table(_ref) {
    var _this;

    var data = _ref.data,
        element = _ref.element;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this));
    _this._el = element;

    _this._render(data);

    var rows = _toConsumableArray(_this._el.querySelectorAll('tbody tr'));

    _this._el.addEventListener('click', function (e) {
      _this._onRowClick(e);
    });

    _this._el.addEventListener('click', function (e) {
      if (!e.target.closest('th')) return;
      var headerClick = new CustomEvent('sort', {
        detail: {
          type: e.target.dataset.type,
          property: e.target.dataset.property
        }
      });

      _this._el.dispatchEvent(headerClick);
    });

    _this._el.addEventListener('input', function (e) {
      if (!e.target.closest('#search')) return;
      rows.map(function (row) {
        if (!row.cells[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())) row.classList.add('hidden');else row.classList.remove('hidden');
      });
    });

    return _this;
  }

  _createClass(Table, [{
    key: "displayData",
    value: function displayData(data) {
      this._render(data);
    }
  }, {
    key: "_onRowClick",
    value: function _onRowClick(e) {
      var target = e.target.closest('tbody tr');
      if (!target) return;
      var id = target.dataset.id;

      if (id) {
        var rowClickEvent = new CustomEvent('rowClick', {
          detail: {
            id: id
          }
        });

        this._el.dispatchEvent(rowClickEvent);
      }
    }
  }, {
    key: "_render",
    value: function _render(data) {
      this._el.innerHTML = "\n        <table class=\"data-table highlight\"> \n          <thead>\n            <tr>\n              <th data-type=\"string\" data-property=\"name\">Name</th>\n              <th data-type=\"string\" data-property=\"symbol\">Symbol</th>\n              <th data-type=\"number\" data-property=\"rank\">Rank</th>\n              <th data-type=\"number\" data-property=\"price\">Price</th>\n            </tr>\n          </thead>\n          <tbody>\n            ".concat(data.map(function (coin) {
        return "\n                <tr data-id=\"".concat(coin.id, "\">\n                    <td>").concat(coin.name, "</td>\n                    <td>").concat(coin.symbol, "</td>\n                    <td>").concat(coin.rank, "</td>\n                    <td>").concat(coin.price, "</td>\n                </tr>\n              ");
      }).join(''), "\n          </tbody>\n        </table>\n        ");
    }
  }]);

  return Table;
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseComponent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);
  }

  _createClass(BaseComponent, [{
    key: "on",
    value: function on(eventType, callback) {
      this._el.addEventListener(eventType, callback);
    }
  }]);

  return BaseComponent;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Portfolio =
/*#__PURE__*/
function () {
  function Portfolio(_ref) {
    var element = _ref.element,
        balance = _ref.balance;

    _classCallCheck(this, Portfolio);

    this._el = element;
    this._portfolioWorth = 0;
    this._balance = balance;
    this._items = {};

    this._render();
  }

  _createClass(Portfolio, [{
    key: "addItem",
    value: function addItem(item, amount) {
      var currentItem = this._items[item.id] || {
        name: item.name,
        id: item.id,
        amount: 0,
        total: 0
      };
      currentItem.price = item.price;
      currentItem.amount = currentItem.amount + amount;
      currentItem.total = currentItem.price * currentItem.amount;
      this._items[item.id] = currentItem;
      var purchasePrice = item.price * amount;
      this._balance -= purchasePrice;
      this._portfolioWorth = Object.values(this._items).reduce(function (total, item) {
        return total + item.total;
      }, 0);

      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var items = Object.values(this._items);
      this._el.innerHTML = "\n            <ul class=\"collapsible portfolio\">\n              <li>\n                <p class=\"collapsible-header\">\n                    Current balance: ".concat(this._balance.toFixed(2), ".\n                    Portfolio Worth: ").concat(this._portfolioWorth.toFixed(2), "\n                </p>\n                <div class=\"collapsible-body\">\n                ").concat(items.length === 0 ? '' : "\n                    <table class=\"highlight striped\"> \n                      <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Amount</th>\n                            <th>Price</th>\n                            <th>Total</th>\n                        </tr>\n                      </thead>\n              \n                      <tbody>\n                          ".concat(items.map(function (item) {
        return "\n                            <tr data-id=\"".concat(item.id, "\">\n                                <td>").concat(item.name, "</td>\n                                <td>").concat(item.amount, "</td>\n                                <td>").concat(item.price.toFixed(2), "</td>\n                                <td>").concat(item.total.toFixed(2), "</td>\n                            </tr>\n                          ");
      }).join(''), "\n                      </tbody>\n                  </table>\n                    "), "\n      \n                </div>\n              </li>\n            </ul>\n      ");
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }
  }]);

  return Portfolio;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeWidget", function() { return TradeWidget; });
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var TradeWidget =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TradeWidget, _BaseComponent);

  function TradeWidget(_ref) {
    var _this;

    var element = _ref.element,
        balance = _ref.balance;

    _classCallCheck(this, TradeWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TradeWidget).call(this));
    _this._el = element;

    _this._el.addEventListener('input', function (e) {
      if (!e.target.closest('#amount')) return;
      var value = +e.target.value;
      if (_this._currentItem.price * value > balance) _this._el.querySelector('#amount').classList.add('invalid');else {
        _this._el.querySelector('#amount').classList.remove('invalid');
      }

      _this._updateDisplay(value);
    });

    _this._el.addEventListener('click', function (e) {
      if (e.target.closest('[data-id="cancel"]')) {
        _this.close();
      }

      if (e.target.closest('[data-id="buy"]')) {
        if (_this._el.querySelector('.invalid')) return;
        var buyEvent = new CustomEvent('buy', {
          detail: {
            amount: +_this._el.querySelector('#amount').value,
            item: _this._currentItem
          }
        });

        _this._el.dispatchEvent(buyEvent);

        _this.close();
      }
    });

    _this._el.addEventListener('keydown', function (e) {
      if (!e.target.closest('#amount')) return;
      var key = e.key;

      if (!isNumeric(key) && key !== 'Backspace') {
        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(TradeWidget, [{
    key: "trade",
    value: function trade(item) {
      this._currentItem = item;
      this._total = 0;

      this._render(item);
    }
  }, {
    key: "close",
    value: function close() {
      this._el.querySelector('.modal').classList.remove('open');
    }
  }, {
    key: "_updateDisplay",
    value: function _updateDisplay(value) {
      this._totalEl = this._el.querySelector('#item-total');
      this._totalEl.textContent = (this._currentItem.price * value).toFixed(2);
    }
  }, {
    key: "_render",
    value: function _render(item) {
      this._el.innerHTML = "  \n      <div id=\"modal\" class=\"modal open\">\n        <div class=\"modal-content\">\n          <h4>Buying ".concat(item.name, ":</h4>\n          <p>\n            Current price: ").concat(item.price, ". \n            Total: <span id=\"item-total\">").concat(this._total, "</span>\n          </p>\n\n          <div class=\"row\">\n            <form class=\"col s12\">\n                <div class=\"input-field col s4\">\n                    <input id=\"amount\" type=\"text\">\n                    <label for=\"amount\">Amount</label>\n                    <span class=\"helper-text\" data-error=\"Amount is too high\"></span>\n                </div>\n            </form>\n          </div>\n\n          <div class=\"modal-footer\">\n            <a href=\"#!\" data-id=\"buy\" class=\"modal-close waves-effect waves-teal btn-flat\">Buy</a>\n            <a href=\"#!\" data-id=\"cancel\" class=\"modal-close waves-effect waves-teal btn-flat\">Cancel</a>\n          </div>\n      </div>\n      </div>\n      ");
    }
  }]);

  return TradeWidget;
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Filter =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Filter, _BaseComponent);

  function Filter(_ref) {
    var _this;

    var element = _ref.element;

    _classCallCheck(this, Filter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this));
    _this._el = element;

    _this._el.addEventListener('input', debounce(function (e) {
      var query = e.target.value.toLowerCase();
      var inputEvent = new CustomEvent('filter', {
        detail: {
          query: query
        }
      });

      _this._el.dispatchEvent(inputEvent);
    }, 300));

    _this._render();

    return _this;
  }

  _createClass(Filter, [{
    key: "_render",
    value: function _render() {
      this._el.innerHTML = "\n            <div class=\"input-field\">\n            <input data-id=\"search\" placeholder=\"Search crypto...\" type=\"text\">\n            </div>\n        ";
    }
  }]);

  return Filter;
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function debounce(f, delay) {
  var _this2 = this;

  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      f.apply(_this2, args);
    }, delay);
  };
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var COINS_URL = 'https://api.coinpaprika.com/v1/coins';

var getSingleCoinUrl = function getSingleCoinUrl(id) {
  return "".concat(COINS_URL, "/").concat(id, "/ohlcv/today/");
};

var HttpService = {
  sendRequest: function sendRequest(url) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              result = _context.sent;
              return _context.abrupt("return", result.json());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  sendMultipleRequests: function sendMultipleRequests(urls) {
    var _this = this;

    var requests = urls.map(function (url) {
      return _this.sendRequest(url);
    });
    return Promise.all(requests);
  }
};
var DataService = {
  defaultParams: {
    query: '',
    type: '',
    property: '',
    descending: true,
    lastProperty: ''
  },
  getCurrencies: function getCurrencies() {
    var _this2 = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        filter = _ref.filter;

    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var params, data, activeCoins;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = Object.assign(_this2.defaultParams, filter);
              _context2.next = 3;
              return HttpService.sendRequest(COINS_URL);

            case 3:
              data = _context2.sent;
              activeCoins = data.filter(function (coin) {
                return coin.is_active;
              });
              _this2._filteredData = activeCoins.filter(function (coin) {
                return coin.name.toLowerCase().includes(params.query);
              }); //sorting with prices takes too long

              if (params.type && params.property) {
                _this2.defaultParams.descending = filter.property === _this2.defaultParams.lastProperty ? !_this2.defaultParams.descending : true;
                _this2._filteredData = DataService.sortCoins({
                  type: params.type,
                  property: params.property
                });
              }

              return _context2.abrupt("return", DataService.getCurrenciesPrices(_this2._filteredData.slice(0, 10)));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  getCurrenciesPrices: function getCurrenciesPrices(data) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var coinsUrls, coins;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              coinsUrls = data.map(function (coin) {
                return getSingleCoinUrl(coin.id);
              });
              _context3.next = 3;
              return HttpService.sendMultipleRequests(coinsUrls);

            case 3:
              coins = _context3.sent;
              return _context3.abrupt("return", data.map(function (item, index) {
                item.price = coins[index][0].close;
                return item;
              }));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  sortCoins: function sortCoins(_ref2) {
    var _this3 = this;

    var type = _ref2.type,
        property = _ref2.property;
    this.defaultParams.lastProperty = property;
    return this._filteredData.sort(function (a, b) {
      switch (type) {
        case 'number':
          return _this3.defaultParams.descending ? +a[property] - +b[property] : +b[property] - +a[property];

        default:
          return _this3.defaultParams.descending ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DataService);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map