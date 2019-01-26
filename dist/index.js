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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var DeckItem =
/*#__PURE__*/
function () {
  function DeckItem(imageUrl, index, options) {
    var _this = this;

    _classCallCheck(this, DeckItem);

    this.el = document.createElement('div');
    this.el.className = 'deck-item';
    this.contentEl = document.createElement('div');
    this.contentEl.className = 'deck-item-content';
    var contentWrap = document.createElement('div');
    contentWrap.className = 'deck-item-content_wrapper';
    this.el.appendChild(contentWrap);
    contentWrap.appendChild(this.contentEl);
    this.options = options || {};
    this.narrowMode = Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() < this.options.breakpoint;
    this.index = index;
    window.addEventListener('resize', function (ev) {
      if (Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() <= _this.options.breakpoint) {
        if (!_this.narrowMode) {
          // console.log('resize, turning on')
          _this.narrowMode = true; // this.turnOnNarrowMode()
        }

        _this.photo.fitByBothSides(_this.el);
      } else {
        if (_this.narrowMode) {
          // console.log('resize, turning Off')
          _this.turnOffNarrowMode();
        }
      }
    });
    this.photo = new _photo_js__WEBPACK_IMPORTED_MODULE_0__["Photo"](imageUrl);
    this.loadPhoto().catch(function (err) {
      throw err;
    });
  }

  _createClass(DeckItem, [{
    key: "turnOnNarrowMode",
    value: function turnOnNarrowMode(mode) {// this.narrowMode = true
      // this perhaps would be better to set with css vw
      // this.el.style.width = getViewportWidth() + 'px'
      // this.photo.fitByBothSides(this.el)
    }
  }, {
    key: "turnOffNarrowMode",
    value: function turnOffNarrowMode() {
      this.narrowMode = false; // this.photo.fitByHeight(this.el)
      // this.el.style.width = this.photo.dims.width + 'px'

      this.photo.clearInlineStyles();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.el.getBoundingClientRect().width;
    } // get position of the item, relative to the containing Deck

  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.el.offsetLeft;
    } // get position of the midpoint of the item, relative to the containing deck

  }, {
    key: "getMidpoint",
    value: function getMidpoint() {
      return this.getOffset() + this.getWidth() / 2;
    }
    /**
      @param {String} height height in css syntax
    */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.el.style.height = height;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.el.style.width = width;
    }
  }, {
    key: "isInView",
    value: function isInView() {
      var offset = this.getOffset();
      var deckPosition = this.options.getDeckPosition();
      console.log('deckItem.isInView, offset: ', offset);
      console.log('deckItem.isInView, width: ', this.getWidth());
      console.log('deckItem.isInView, getDeckPosition: ', this.options.getDeckPosition());
      console.log('deckItem.isInView, getGalleryViewportWidth: ', this.options.getGalleryViewportWidth()); // deckPosition could be negative

      return offset + deckPosition >= 0 && deckPosition + offset + this.getWidth() <= this.options.getGalleryViewportWidth() ? true : false; // if (
      //   this.getOffset() + this.options.getDeckPosition() > 0 &&
      //   this.getOffset() + this.getWidth() < this.options.getGalleryViewportWidth()
      // ) {
      //
      // }
    }
  }, {
    key: "loadPhoto",
    value: function loadPhoto(url) {
      var _this2 = this;

      return this.photo.load() // Photo.prototype.loadImage()
      .then(function (photo) {
        try {
          _this2.options.photoLoadCb(photo); // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
          // img.style.visibility = "hidden"


          photo.hide();

          _this2.contentEl.appendChild(photo.el);

          if (!_this2.narrowMode) {// at the moment, seems like we handle all of this with css,
            // and don't need to fite the photo and set it's container's width respectively
            // this.photo.fitByHeight(this.el)
            // this.el.style.width = this.photo.dims.width + 'px'
          } else {
            _this2.photo.fitByBothSides(_this2.contentEl);
          }

          _this2.photo.show(); // img.style.visibility = 'visible'

        } catch (err) {
          Promise.reject(err);
        }
      }); // .catch((err) => {
      //   throw err
      // })
    }
  }]);

  return DeckItem;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck(imageUrls, options) {
    _classCallCheck(this, Deck);

    this.el = document.createElement('div');
    this.el.className = 'gallery-deck';
    this.options = options;
    this.breakpoint = options.breakpoint;
    this.position = 0;
    this.offset = 0;
    this.loaded = false;
    this.itemsLoaded = 0;
    this.items = this.initItems(imageUrls);
    this.appendItems(); // initialize the transform matrix styling

    this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'; // window.on('resize', (ev) => {
    //   if (getViewportWidth() < this.breakpoint) {
    //
    //   }
    // })
  }
  /*
  calculateDeckOffset(index) {
    if (getViewportWidth() < this.breakpoint) {
      const itemOffset = this.items[index].getOffset()
      const deckOffsetNew = -itemOffset
       return deckOffsetNew
    } else {
      const itemOffset = this.items[index].getMidpoint()
       const galleryMidpoint = this.options.getGalleryViewportWidth() / 2 // .getBoundingClientRect().width / 2
      const deckOffsetNew = -itemOffset + galleryMidpoint
       // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)
       return deckOffsetNew
    }
  }
  */


  _createClass(Deck, [{
    key: "calculateDeckOffsetCentered",
    value: function calculateDeckOffsetCentered(index) {
      var itemOffset = this.items[index].getMidpoint();
      var galleryMidpoint = this.options.getGalleryViewportWidth() / 2; // .getBoundingClientRect().width / 2

      var deckOffsetNew = -itemOffset + galleryMidpoint; // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)

      return deckOffsetNew;
    }
  }, {
    key: "calculateDeckOffset",
    value: function calculateDeckOffset(index) {
      var itemOffset = this.items[index].getOffset();
      var deckOffsetNew = -itemOffset;
      return deckOffsetNew;
    }
    /*
    // TODO:
    getActualPositionWhileTransitioning() {
      return this.el.getBoundingClientRect().left + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
      - this.options.getGalleryPos().left
      + window.scrollX
    }
    */

    /**
    @param {boolean} centered if true - centers the item, if falsy - doesn't center
    */

  }, {
    key: "goToItem",
    value: function goToItem(index, centered) {
      if (index < 0 || index > this.items.length - 1) {
        throw new Error("can't go to unexisting item at " + index);
      }

      if (!this.loaded) {
        // throw new Error("")
        // TODO: make it so it can go to the items that are already loaded, and
        // then, adjust the position of the deck so it stays on the item we've gone to
        // as other items load (if necessary).
        // This could be impactful if the deck is right at the top of the page and user
        // wants to immediately be able to interact with things.
        // console.log("photos in the deck haven't loaded yet");
        return undefined;
      }

      var deckPositionNew = centered ? this.calculateDeckOffsetCentered(index) : this.calculateDeckOffset(index); // TODO:
      // this.offset = this.transitioning
      //   ? deckPositionNew - this.getActualPositionWhileTransitioning()
      //   : deckPositionNew - this.position

      this.offset = deckPositionNew - this.position;
      this.position = deckPositionNew;

      if (this.transitioning) {
        this.el.style.transform = this.makeMatrix(this.offset);
      } else {
        var transitionendCb = function transitionendCb() {
          this.transitionendCb();
          this.el.removeEventListener('transitionend', transitionendCb);
          this.transitioning = false;
        };

        this.el.classList.add('transition');
        this.transitioning = true;
        this.el.addEventListener('transitionend', transitionendCb.bind(this));
        this.el.style.transform = this.makeMatrix(this.offset);
      }

      return this.items[index];
    }
  }, {
    key: "makeMatrix",
    value: function makeMatrix(x) {
      return 'matrix(1, 0, 0, 1, ' + x + ', 0)';
    }
  }, {
    key: "transitionendCb",
    value: function transitionendCb() {
      this.el.style.left = this.position + 'px';
      this.el.classList.remove('transition');
      this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
  }, {
    key: "initItems",
    value: function initItems(urls) {
      var _this3 = this;

      return urls.map(function (url, i) {
        return new DeckItem(url, i, {
          breakpoint: _this3.breakpoint,
          photoLoadCb: function photoLoadCb() {
            // console.log("photoLoadCb, deck.itemsLoaded: ", this.itemsLoaded);
            _this3.itemsLoaded++;

            if (_this3.itemsLoaded == _this3.items.length) {
              // console.log("photoLoadCb, deck.itemsLoaded == deck.items.length, deck.itemsLoaded: ", this.itemsLoaded);
              _this3.loaded = true;

              _this3.options.loadCb();
            }
          },
          getGalleryViewportWidth: _this3.options.getGalleryViewportWidth,
          getDeckPosition: function getDeckPosition() {
            return _this3.position;
          }
        });
      });
    }
  }, {
    key: "appendItem",
    value: function appendItem(item) {
      this.el.appendChild(item.el);
    }
  }, {
    key: "appendItems",
    value: function appendItems() {
      var _this4 = this;

      this.items.forEach(function (item) {
        _this4.appendItem(item);
      });
    }
  }]);

  return Deck;
}();

var Gallery =
/*#__PURE__*/
function () {
  function Gallery(photoUrls, options) {
    var _this5 = this;

    _classCallCheck(this, Gallery);

    this.el = document.createElement('div');
    this.el.className = 'gallery';
    this.deck = new Deck(photoUrls, {
      getGalleryViewportWidth: function getGalleryViewportWidth() {
        return _this5.el.getBoundingClientRect().width;
      },
      loadCb: function loadCb() {
        _this5.activeItem = _this5.deck.goToItem(0, false); // this.goToNext.call(this)
      },
      breakpoint: options.breakpoint
    });
    this.el.appendChild(this.deck.el); // const activeItem = this.deck.goToItem(0)
    // this.activeItem = activeItem
  }

  _createClass(Gallery, [{
    key: "goToNext",
    value: function goToNext() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == this.deck.items.length - 1) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index + 1, true);
    }
  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == 0) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index - 1, true);
    }
    /*
    // TODO:
    // get the actual position of the el, relative to body.
    getAbsPosition() {
      var position = 0
       // const computedStyle = window.getComputedStyle(this.el)
         position = this.el.getBoundingClientRect().left
          + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
         return position
    }
    */

  }]);

  return Gallery;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _large_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./large-view.js */ "./src/large-view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import {slide} from './slide.js'




var ShowcaseImage =
/*#__PURE__*/
function (_Enlargable) {
  _inherits(ShowcaseImage, _Enlargable);

  function ShowcaseImage(el) {
    _classCallCheck(this, ShowcaseImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseImage).call(this, el, el.dataset.url)); // super(el, getBackgroundImageUrl(el))
    // this.image = new Enlargable()
  }

  return ShowcaseImage;
}(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["Enlargable"]);

function nodeListToArray(selector) {
  var els = document.querySelectorAll(selector);
  els = Array.prototype.slice.call(els, 0);
  return els;
}

function initEnlargables(selector) {
  // var els = document.querySelectorAll(selector)
  // els = Array.prototype.slice.call(els, 0)
  // console.log(els);
  var els = nodeListToArray(selector);
  els.forEach(function (el) {
    new ShowcaseImage(el);
  });
}

function initGallery(photoUrls) {
  var container = document.querySelector('.gallery-container');
  var gallery = new _gallery_js__WEBPACK_IMPORTED_MODULE_1__["Gallery"](photoUrls, {
    breakpoint: 800
  });
  container.appendChild(gallery.el);
  var arrows = document.querySelector('.gallery-wrap');
  arrows.querySelector('.icon#bwd').addEventListener('click', gallery.goToPrevious.bind(gallery));
  arrows.querySelector('.icon#fwd').addEventListener('click', gallery.goToNext.bind(gallery));
  console.log('gallery', gallery);
}

function initLangSwitch() {
  var en = false;
  var contentEn = nodeListToArray('.text.en');
  var contentUa = nodeListToArray('.text.ua');

  function switchToEn() {
    contentUa.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentEn.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  function switchToUa() {
    contentEn.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentUa.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  var enSwitch = document.querySelector('.lang-switch #en');
  var uaSwitch = document.querySelector('.lang-switch #ua');
  var langSwitch = document.querySelector('.lang-switch');
  langSwitch.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!en) {
      enSwitch.classList.add('noned');
      uaSwitch.classList.remove('noned');
      switchToEn();
      en = true;
    } else {
      uaSwitch.classList.add('noned');
      enSwitch.classList.remove('noned');
      switchToUa();
      en = false;
    }
  }); // enSwitch.addEventListener('click', () => {
  //   enSwitch.classList.add('noned')
  //   uaSwitch.classList.remove('noned')
  //
  //   switchToEn()
  // })
  // uaSwitch.addEventListener('click', () => {
  //   uaSwitch.classList.add('noned')
  //   enSwitch.classList.remove('noned')
  //
  //   switchToUa()
  // })
}

function initNavAnimation(navBreakpoint) {
  var nav = document.querySelector('.navigation'); // const logo = document.querySelector('.header_container .logo')
  // const lang = document.querySelector('.header_container .lang-switch')

  var enlarged = true;
  window.addEventListener('scroll', function (ev) {
    if (window.scrollY > navBreakpoint && enlarged) {
      nav.classList.remove('larger'); // logo.classList.remove('larger')
      // lang.classList.remove('larger')

      enlarged = false;
    } else if (window.scrollY < navBreakpoint && !enlarged) {
      nav.classList.add('larger'); // logo.classList.add('larger')
      // lang.classList.add('larger')

      enlarged = true;
    }
  });
}

function boot(galleryUrls) {
  initLangSwitch();
  var largeViewWrap = document.querySelector('.large-view_wrap');
  _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].init({
    transition: 'opacity 0.4s',
    display: 'block',
    wrap: largeViewWrap
  });
  largeViewWrap.classList.remove('noned');
  largeViewWrap.appendChild(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].container);
  largeViewWrap.querySelector('.icon#cross').addEventListener('click', function () {
    _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].hide();
  });
  console.log('LargeView', _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"]);
  initGallery(galleryUrls);
  initEnlargables('#out .showcase .image-thumb');
  initEnlargables('#staff .member .avatar');
  new ShowcaseImage(document.querySelector('#contact .street-view')); // els.forEach(el => {new ShowcaseImage(el)})
  // initShowcases()

  initNavAnimation(25);
}

window.addEventListener('load', function () {
  boot(['media/in/14902841_1259112727483912_3284315106318981574_o.jpg', 'media/in/19875272_10100482296286706_3883306275546166676_n.jpg', 'media/in/3b.jpg', 'media/in/6a.jpg', 'media/in/DSC_0126.jpg', 'media/in/DSC_0128.JPG', 'media/in/DSC_0350.JPG']);
});

/***/ }),

/***/ "./src/large-view.js":
/*!***************************!*\
  !*** ./src/large-view.js ***!
  \***************************/
/*! exports provided: LargeView, Enlargable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeView", function() { return LargeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enlargable", function() { return Enlargable; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargeView = {
  init: function init(options) {
    options = options || {};
    if (options.transition) this.transitionSetup = options.transition;
    this.options = options;
    var container = document.createElement('div'); // same as in the scss

    container.className = 'large-view_container';
    this.container = container; // if (options.clickCb)
    // this.container.addEventListener('click', () => {this.hide()})

    this.wrap = options.wrap || this.container;
    this.wrap.style.opacity = '0'; // this.wrap.classList.add('transparent')

    this.wrap.style.display = 'none'; // this.container.classList.add('noned')

    this.hidden = true; // this.photo = new Photo()
  },
  setPhoto: function setPhoto(url) {
    var _this = this;

    var photo = new _photo_js__WEBPACK_IMPORTED_MODULE_1__["Photo"](url); // this.photo = new Photo(url)

    return photo.load() // .then()
    .then(function (photo) {
      try {
        if (_this.hidden) {
          Promise.reject(new Error('the large-view container must be displayed before we can fit in the photo'));
        } else {
          // this.photo.hide(false)
          photo.hide(false);

          if (_this.photo) {
            _this.container.replaceChild(photo.el, _this.photo.el);
          } else {
            _this.container.appendChild(photo.el);
          }

          photo.fitByBothSides(_this.container);
          photo.show(false);
          _this.photo = photo;
        }
      } catch (err) {
        Promise.reject(err);
      }
    });
  },

  /*
  transitionendCb(cb) {
    cb()
    this.container.removeEventListener('transitionend', this.transitionendCb)
  }
  */

  /**
    @description If url is give, then, after show transition has ended, it loads the
    new photo
  */
  show: function show(url) {
    var _this2 = this;

    // if (this.showPending) {
    //   window.clearTimeout(this.showTimeoutId)
    //   // this.container.removeEventListener()
    //
    //   // should removeEventListener of itself
    //   this.transitionendCb()
    //
    //
    // }
    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // this.container.classList.remove('transition')

          self.hidden = false;
          console.log('LargeView.show, transitionendCb', self);
          resolve();
        };

        var self = _this2;
        _this2.wrap.style.display = _this2.options.display || 'flex'; // this.wrap.classList.remove('noned')

        _this2.wrap.addEventListener('transitionend', transitionendCb);

        _this2.transitionOn();

        _this2.showPending = true; // this is nuts

        _this2.showTimeoutId = window.setTimeout(function () {
          _this2.showPending = false;
          _this2.wrap.style.opacity = '1'; // this.container.classList.add('transition')
        }, 50); // this.container.classList.add('solid')
      } catch (err) {
        reject(err);
      }
    }).then(function () {
      if (url) {
        return _this2.setPhoto(url);
      }
    }, function (err) {
      Promise.reject(err);
    });
  },
  hide: function hide() {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // self.wrap.classList.remove('transition')

          self.wrap.style.display = 'none';
          self.photo.hide(false); // self.container.classList.add('noned')

          self.hidden = true;
          console.log('LargeView.hide, transitionendCb', LargeView);
          resolve();
        };

        var self = _this3;

        _this3.wrap.addEventListener('transitionend', transitionendCb);

        _this3.transitionOn(); // this.container.classList.add('transition')


        _this3.wrap.style.opacity = '0'; // this.container.classList.remove('solid')
      } catch (err) {
        reject(err);
      }
    });
  },
  transitionOff: function transitionOff() {
    this.wrap.style.transition = 'none';
  },
  transitionOn: function transitionOn() {
    this.wrap.style.transition = this.transitionSetup;
  }
}; // console.log('LargeView', LargeView)

var Enlargable =
/*#__PURE__*/
function () {
  function Enlargable(el, url) {
    _classCallCheck(this, Enlargable);

    this.el = el;
    this.url = url;
    this.el.addEventListener('click', this.clickCb.bind(this));
  }

  _createClass(Enlargable, [{
    key: "enlarge",
    value: function enlarge(url) {
      LargeView.show(url).then(function () {
        console.log('Enlargable.enlarge, LargeView shown');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "clickCb",
    value: function clickCb() {
      console.log('Enlargable.clickCb, this: ', this);
      this.enlarge(this.url);
    }
  }]);

  return Enlargable;
}();
/*
function enlargeShowcase() {
  const imageUrl = getBackgroundImageUrl(this)
  LargeView.show(imageUrl)
}

function getEnlargableElements() {
  var els = document.querySelector('#out .showcase .image-thumb')
  els = Array.prototype.slice.call(els, 0)

  els.forEach(el => {
    el.addEventListener('click', enlargeShowcaseCb)
  })
}
*/




/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: getViewportWidth, getViewportHeight, getBackgroundImageUrl, logFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportWidth", function() { return getViewportWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportHeight", function() { return getViewportHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImageUrl", function() { return getBackgroundImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logFactory", function() { return logFactory; });
// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
// https://bugzilla.mozilla.org/show_bug.cgi?id=156388#c14
function getViewportHeight() {
  // getElementsByTagName, if I'm not mistaken returns a livelist (hell knows what that is, but it's
  // updated live - as dom gets changed). I'm not sure about using it, it behaved misteriously once...
  // But, querySelector is not so compatible.
  // Maybe: (document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth)
  return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.querySelector('body') || document.getElementsByTagName('body')[0].clientHeight;
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth;
}
/*

NodeList to array
function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
*/


function getBackgroundImageUrl(el) {
  var computedStyle = window.getComputedStyle(el);
  var regx = new RegExp(/.*url\((?:\"?'?)(.+)(?:.\'?\"?)\).*/g);
  var result = regx.exec(computedStyle['background-image']);

  if (result[1]) {
    return result[1];
  }
}

function logFactory(env) {
  return function (data) {
    if (!env.dev) return;
    console.trace();
    console.log(data);
  };
}



/***/ }),

/***/ "./src/photo.js":
/*!**********************!*\
  !*** ./src/photo.js ***!
  \**********************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Photo =
/*#__PURE__*/
function () {
  function Photo(url) {
    _classCallCheck(this, Photo);

    this.url = url;
    this.el = document.createElement('img');
  }

  _createClass(Photo, [{
    key: "load",
    value: function load() {
      var _this = this;

      // const img = document.createElement('img')
      return new Promise(function (resolve, reject) {
        var loaded = false; // maybe this doesnt work in safari mobile...

        _this.el.onload = function () {
          if (!loaded) resolve(_this);
        };

        _this.el.onerror = function (err) {
          if (!loaded) reject(err);
        };

        _this.el.src = _this.url;

        if (_this.el.complete && _this.el.naturalWidth > 0) {
          console.log('photo.load, img.complete && naturalWidth > 0');

          if (!loaded) {
            loaded = true;
            resolve(_this);
          }
        }
      });
    }
  }, {
    key: "calculateFitByBothSides",
    value: function calculateFitByBothSides(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      containerDims.ratio = containerDims.width / containerDims.height; // if wider than higher

      if (imgDims.ratio >= containerDims.ratio) {
        var imgDimsNew = {
          width: containerDims.width,
          height: containerDims.width / imgDims.ratio
        };
        return imgDimsNew; // if higher than wider
      } else {
        var _imgDimsNew = {
          // width: containerDims.height * imgDims.ratio,
          width: containerDims.height * imgDims.ratio,
          height: containerDims.height
        };
        return _imgDimsNew;
      }
    }
  }, {
    key: "calculateFitByHeight",
    value: function calculateFitByHeight(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      var imgDimsNew = {
        height: containerDims.height,
        width: containerDims.height * imgDims.ratio,
        ratio: imgDims.ratio
      };
      return imgDimsNew;
    }
  }, {
    key: "fitByHeight",
    value: function fitByHeight(container) {
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByHeight(imgDimsObj, containerDimsObj); // const imgDims = this.calculateFitByHeight(img, this.el)

      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
      return this;
    } // in fitByHeight I didn't convert dims to string before setting them on
    // width and height in inline styles.. However, I believe, on mobile the fitByBothSides
    // should have been called, where there wasn't this typo. In the fitByBothSides I didn't
    // convert the values to whole numbers, none the less.
    // I fixed that, and I also decided to move the values of getBoundingClientRect output
    // to a regular object literal, instead of using the output itself (which i believe is an instance
    // of some special class), including adding new properties to it.
    // Another thing I want to check is whether or not the width and height in getBoundingClientRect are
    // basic implementation.. Also, maybe it makes sense to parseInt the values of getBoundingClientRect,
    // or doing something in that spirit

  }, {
    key: "fitByBothSides",
    value: function fitByBothSides(container) {
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByBothSides(imgDimsObj, containerDims);
      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
      return this;
    }
  }, {
    key: "clearInlineStyles",
    value: function clearInlineStyles() {
      if (this.el.style.removeProperty) {
        this.el.style.removeProperty('width');
        this.el.style.removeProperty('height');
      } else {
        // IE9
        this.el.style.removeAttribute('width');
        this.el.style.removeAttribute('height');
      }
    }
  }, {
    key: "hide",
    value: function hide(hard) {
      hard ? this.el.style.display = "none" : this.el.style.visibility = "hidden";
    }
  }, {
    key: "show",
    value: function show(hard) {
      if (hard) {
        this.el.style.removeProperty('display');
      } else {
        this.el.style.removeProperty('visibility');
      } // hard ? this.el.style.display = "inline" : this.el.style.visibility = "visible"

    }
  }]);

  return Photo;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImRhdGFzZXQiLCJFbmxhcmdhYmxlIiwibm9kZUxpc3RUb0FycmF5Iiwic2VsZWN0b3IiLCJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJpbml0RW5sYXJnYWJsZXMiLCJpbml0R2FsbGVyeSIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiYXJyb3dzIiwiZ29Ub1ByZXZpb3VzIiwiZ29Ub05leHQiLCJpbml0TGFuZ1N3aXRjaCIsImVuIiwiY29udGVudEVuIiwiY29udGVudFVhIiwic3dpdGNoVG9FbiIsInN3aXRjaFRvVWEiLCJlblN3aXRjaCIsInVhU3dpdGNoIiwibGFuZ1N3aXRjaCIsInByZXZlbnREZWZhdWx0IiwiaW5pdE5hdkFuaW1hdGlvbiIsIm5hdkJyZWFrcG9pbnQiLCJuYXYiLCJlbmxhcmdlZCIsInNjcm9sbFkiLCJib290IiwiZ2FsbGVyeVVybHMiLCJsYXJnZVZpZXdXcmFwIiwiTGFyZ2VWaWV3IiwiaW5pdCIsInRyYW5zaXRpb24iLCJkaXNwbGF5Iiwid3JhcCIsInRyYW5zaXRpb25TZXR1cCIsIm9wYWNpdHkiLCJoaWRkZW4iLCJzZXRQaG90byIsInJlcGxhY2VDaGlsZCIsInJlc29sdmUiLCJzZWxmIiwidHJhbnNpdGlvbk9mZiIsInRyYW5zaXRpb25PbiIsInNob3dQZW5kaW5nIiwic2hvd1RpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGlja0NiIiwiZW5sYXJnZSIsImdldFZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlZ3giLCJSZWdFeHAiLCJyZXN1bHQiLCJleGVjIiwibG9nRmFjdG9yeSIsImVudiIsImRhdGEiLCJkZXYiLCJ0cmFjZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsImltZ0RpbXMiLCJjb250YWluZXJEaW1zIiwicmF0aW8iLCJpbWdEaW1zTmV3IiwiaW1nRGltc09iaiIsImNvbnRhaW5lckRpbXNPYmoiLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJyb3VuZCIsImNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXJkIiwidmlzaWJpbGl0eSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtB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Q0FFbUI7QUFDbEIsVUFBSSxLQUFLM0IsRUFBTCxDQUFRNEIsS0FBUixDQUFjcUosY0FBbEIsRUFBa0M7QUFDaEMsYUFBS2pMLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY3FKLGNBQWQsQ0FBNkIsT0FBN0I7QUFDQSxhQUFLakwsRUFBTCxDQUFRNEIsS0FBUixDQUFjcUosY0FBZCxDQUE2QixRQUE3QjtBQUNELE9BSEQsTUFHTztBQUNMO0FBQ0EsYUFBS2pMLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY3NKLGVBQWQsQ0FBOEIsT0FBOUI7QUFDQSxhQUFLbEwsRUFBTCxDQUFRNEIsS0FBUixDQUFjc0osZUFBZCxDQUE4QixRQUE5QjtBQUNEO0FBQ0Y7Ozt5QkFFSUMsSSxFQUFNO0FBQ1RBLFVBQUksR0FBRyxLQUFLbkwsRUFBTCxDQUFRNEIsS0FBUixDQUFjaUcsT0FBZCxHQUF3QixNQUEzQixHQUFvQyxLQUFLN0gsRUFBTCxDQUFRNEIsS0FBUixDQUFjd0osVUFBZCxHQUEyQixRQUFuRTtBQUNEOzs7eUJBRUlELEksRUFBTTtBQUNULFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUtuTCxFQUFMLENBQVE0QixLQUFSLENBQWNxSixjQUFkLENBQTZCLFNBQTdCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2pMLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY3FKLGNBQWQsQ0FBNkIsWUFBN0I7QUFDRCxPQUxRLENBT1Q7O0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5pbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBsb2dGYWN0b3J5fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgRGVja0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybCwgaW5kZXgsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0nXG5cbiAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250ZW50RWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50J1xuXG4gICAgY29uc3QgY29udGVudFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRXcmFwLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0tY29udGVudF93cmFwcGVyJ1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY29udGVudFdyYXApXG4gICAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWwpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplLCB0dXJuaW5nIG9uJylcbiAgICAgICAgICB0aGlzLm5hcnJvd01vZGUgPSB0cnVlXG4gICAgICAgICAgLy8gdGhpcy50dXJuT25OYXJyb3dNb2RlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgT2ZmJylcbiAgICAgICAgICB0aGlzLnR1cm5PZmZOYXJyb3dNb2RlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oaW1hZ2VVcmwpXG4gICAgdGhpcy5sb2FkUGhvdG8oKS5jYXRjaCgoZXJyKSA9PiB7dGhyb3cgZXJyfSlcbiAgfVxuXG4gIHR1cm5Pbk5hcnJvd01vZGUobW9kZSkge1xuICAgIC8vIHRoaXMubmFycm93TW9kZSA9IHRydWVcblxuICAgIC8vIHRoaXMgcGVyaGFwcyB3b3VsZCBiZSBiZXR0ZXIgdG8gc2V0IHdpdGggY3NzIHZ3XG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IGdldFZpZXdwb3J0V2lkdGgoKSArICdweCdcblxuICAgIC8vIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcbiAgfVxuXG4gIHR1cm5PZmZOYXJyb3dNb2RlKCkge1xuICAgIHRoaXMubmFycm93TW9kZSA9IGZhbHNlXG4gICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuXG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLnBob3RvLmNsZWFySW5saW5lU3R5bGVzKClcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cblxuICAvLyBnZXQgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIERlY2tcbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm9mZnNldExlZnRcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgbWlkcG9pbnQgb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGRlY2tcbiAgZ2V0TWlkcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2Zmc2V0KCkgKyAodGhpcy5nZXRXaWR0aCgpIC8gMilcbiAgfVxuXG4gIC8qKlxuICAgIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgaGVpZ2h0IGluIGNzcyBzeW50YXhcbiAgKi9cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB3aWR0aFxuICB9XG5cbiAgaXNJblZpZXcoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKVxuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgb2Zmc2V0OiAnLCBvZmZzZXQpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgd2lkdGg6ICcsIHRoaXMuZ2V0V2lkdGgoKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXREZWNrUG9zaXRpb246ICcsIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogJywgdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkpO1xuXG4gICAgLy8gZGVja1Bvc2l0aW9uIGNvdWxkIGJlIG5lZ2F0aXZlXG4gICAgcmV0dXJuIG9mZnNldCArIGRlY2tQb3NpdGlvbiA+PSAwICYmXG4gICAgZGVja1Bvc2l0aW9uICsgb2Zmc2V0ICsgdGhpcy5nZXRXaWR0aCgpIDw9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgICA/IHRydWUgOiBmYWxzZVxuXG4gICAgLy8gaWYgKFxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSA+IDAgJiZcbiAgICAvLyAgIHRoaXMuZ2V0T2Zmc2V0KCkgKyB0aGlzLmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKVxuICAgIC8vICkge1xuICAgIC8vXG4gICAgLy8gfVxuICB9XG5cbiAgbG9hZFBob3RvKHVybCkge1xuICAgIHJldHVybiB0aGlzLnBob3RvLmxvYWQoKSAvLyBQaG90by5wcm90b3R5cGUubG9hZEltYWdlKClcbiAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5waG90b0xvYWRDYihwaG90bylcblxuICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHNlZSB0aGUgaW1nLCBidXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgd2l0aCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgKHNvIGRpc3BsYXk6IG5vbmUgaXMgbm90IGEgZml0KVxuICAgICAgICAvLyBpbWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgcGhvdG8uaGlkZSgpXG4gICAgICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHBob3RvLmVsKVxuXG4gICAgICAgIGlmICghdGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gYXQgdGhlIG1vbWVudCwgc2VlbXMgbGlrZSB3ZSBoYW5kbGUgYWxsIG9mIHRoaXMgd2l0aCBjc3MsXG4gICAgICAgICAgLy8gYW5kIGRvbid0IG5lZWQgdG8gZml0ZSB0aGUgcGhvdG8gYW5kIHNldCBpdCdzIGNvbnRhaW5lcidzIHdpZHRoIHJlc3BlY3RpdmVseVxuXG4gICAgICAgICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuICAgICAgICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLnBob3RvLmRpbXMud2lkdGggKyAncHgnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmNvbnRlbnRFbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uc2hvdygpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG5cbiAgICB9KVxuICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICB0aHJvdyBlcnJcbiAgICAvLyB9KVxuICB9XG59XG5cbmNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5LWRlY2snXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLnBvc2l0aW9uID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuaXRlbXNMb2FkZWQgPSAwXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5pdEl0ZW1zKGltYWdlVXJscylcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKClcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHRyYW5zZm9ybSBtYXRyaXggc3R5bGluZ1xuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcblxuICAgIC8vIHdpbmRvdy5vbigncmVzaXplJywgKGV2KSA9PiB7XG4gICAgLy8gICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5icmVha3BvaW50KSB7XG4gICAgLy9cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgLypcbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpXG5cbiAgICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfVxuICB9XG4gICovXG5cbiAgY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0ICsgZ2FsbGVyeU1pZHBvaW50XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KCkpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldFxuXG4gICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgfVxuXG4gIC8qXG4gIC8vIFRPRE86XG4gIGdldEFjdHVhbFBvc2l0aW9uV2hpbGVUcmFuc2l0aW9uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG4gICAgLSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVBvcygpLmxlZnRcbiAgICArIHdpbmRvdy5zY3JvbGxYXG4gIH1cbiAgKi9cblxuICAvKipcbiAgQHBhcmFtIHtib29sZWFufSBjZW50ZXJlZCBpZiB0cnVlIC0gY2VudGVycyB0aGUgaXRlbSwgaWYgZmFsc3kgLSBkb2Vzbid0IGNlbnRlclxuICAqL1xuICBnb1RvSXRlbShpbmRleCwgY2VudGVyZWQpIHtcblxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLml0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBnbyB0byB1bmV4aXN0aW5nIGl0ZW0gYXQgXCIrIGluZGV4KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKVxuICAgICAgLy8gVE9ETzogbWFrZSBpdCBzbyBpdCBjYW4gZ28gdG8gdGhlIGl0ZW1zIHRoYXQgYXJlIGFscmVhZHkgbG9hZGVkLCBhbmRcbiAgICAgIC8vIHRoZW4sIGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGRlY2sgc28gaXQgc3RheXMgb24gdGhlIGl0ZW0gd2UndmUgZ29uZSB0b1xuICAgICAgLy8gYXMgb3RoZXIgaXRlbXMgbG9hZCAoaWYgbmVjZXNzYXJ5KS5cbiAgICAgIC8vIFRoaXMgY291bGQgYmUgaW1wYWN0ZnVsIGlmIHRoZSBkZWNrIGlzIHJpZ2h0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgYW5kIHVzZXJcbiAgICAgIC8vIHdhbnRzIHRvIGltbWVkaWF0ZWx5IGJlIGFibGUgdG8gaW50ZXJhY3Qgd2l0aCB0aGluZ3MuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvcyBpbiB0aGUgZGVjayBoYXZlbid0IGxvYWRlZCB5ZXRcIik7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uTmV3ID0gY2VudGVyZWQgPyB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZChpbmRleCkgOiB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpXG5cbiAgICAvLyBUT0RPOlxuICAgIC8vIHRoaXMub2Zmc2V0ID0gdGhpcy50cmFuc2l0aW9uaW5nXG4gICAgLy8gICA/IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMuZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKVxuICAgIC8vICAgOiBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLnBvc2l0aW9uXG5cbiAgICB0aGlzLm9mZnNldCA9IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cbiAgICB0aGlzLnBvc2l0aW9uID0gZGVja1Bvc2l0aW9uTmV3XG5cbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMubWFrZU1hdHJpeCh0aGlzLm9mZnNldClcbiAgICB9IGVsc2Uge1xuXG4gICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmVuZENiKClcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XVxuXG4gIH1cblxuICBtYWtlTWF0cml4KHgpIHtcbiAgICByZXR1cm4gJ21hdHJpeCgxLCAwLCAwLCAxLCAnKyB4ICsnLCAwKSdcbiAgfVxuXG4gIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uICsncHgnXG5cbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcbiAgfVxuXG4gIGluaXRJdGVtcyh1cmxzKSB7XG4gICAgcmV0dXJuIHVybHMubWFwKCh1cmwsIGkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGVja0l0ZW0odXJsLCBpLCB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuYnJlYWtwb2ludCxcbiAgICAgICAgcGhvdG9Mb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgdGhpcy5pdGVtc0xvYWRlZCsrXG5cbiAgICAgICAgICBpZiAodGhpcy5pdGVtc0xvYWRlZCA9PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b0xvYWRDYiwgZGVjay5pdGVtc0xvYWRlZCA9PSBkZWNrLml0ZW1zLmxlbmd0aCwgZGVjay5pdGVtc0xvYWRlZDogXCIsIHRoaXMuaXRlbXNMb2FkZWQpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9hZENiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgsXG4gICAgICAgIGdldERlY2tQb3NpdGlvbjogKCkgPT4ge3JldHVybiB0aGlzLnBvc2l0aW9ufVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kSXRlbShpdGVtKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtLmVsKVxuICB9XG5cbiAgYXBwZW5kSXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5hcHBlbmRJdGVtKGl0ZW0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IocGhvdG9VcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeSdcblxuXG4gICAgdGhpcy5kZWNrID0gbmV3IERlY2socGhvdG9VcmxzLCB7XG4gICAgICBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogKCkgPT4geyByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB9LFxuICAgICAgbG9hZENiOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSgwLCBmYWxzZSlcbiAgICAgICAgLy8gdGhpcy5nb1RvTmV4dC5jYWxsKHRoaXMpXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludDogb3B0aW9ucy5icmVha3BvaW50XG4gICAgfSlcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZWNrLmVsKVxuXG5cbiAgICAvLyBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDApXG4gICAgLy8gdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbVxuICB9XG5cbiAgZ29Ub05leHQoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IHRoaXMuZGVjay5pdGVtcy5sZW5ndGgtMSkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4KzEsIHRydWUpXG4gIH1cblxuICBnb1RvUHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IDApIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleC0xLCB0cnVlKVxuICB9XG4gIC8qXG4gIC8vIFRPRE86XG4gIC8vIGdldCB0aGUgYWN0dWFsIHBvc2l0aW9uIG9mIHRoZSBlbCwgcmVsYXRpdmUgdG8gYm9keS5cbiAgZ2V0QWJzUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gMFxuXG4gICAgLy8gY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpXG5cbiAgICAgIHBvc2l0aW9uID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgfVxuICAqL1xufVxuXG5leHBvcnQge0dhbGxlcnl9XG4iLCIvLyBpbXBvcnQge3NsaWRlfSBmcm9tICcuL3NsaWRlLmpzJ1xuaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmx9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tICcuL2dhbGxlcnkuanMnXG5pbXBvcnQge0xhcmdlVmlldywgRW5sYXJnYWJsZX0gZnJvbSAnLi9sYXJnZS12aWV3LmpzJ1xuXG5jbGFzcyBTaG93Y2FzZUltYWdlIGV4dGVuZHMgRW5sYXJnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwsIGVsLmRhdGFzZXQudXJsKVxuICAgIC8vIHN1cGVyKGVsLCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwoZWwpKVxuICAgIC8vIHRoaXMuaW1hZ2UgPSBuZXcgRW5sYXJnYWJsZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9kZUxpc3RUb0FycmF5KHNlbGVjdG9yKSB7XG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG4gIHJldHVybiBlbHNcbn1cblxuZnVuY3Rpb24gaW5pdEVubGFyZ2FibGVzKHNlbGVjdG9yKSB7XG4gIC8vIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAvLyBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG5cbiAgLy8gY29uc29sZS5sb2coZWxzKTtcbiAgdmFyIGVscyA9IG5vZGVMaXN0VG9BcnJheShzZWxlY3RvcilcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcbn1cblxuZnVuY3Rpb24gaW5pdEdhbGxlcnkocGhvdG9VcmxzKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LWNvbnRhaW5lcicpXG5cbiAgY29uc3QgZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KHBob3RvVXJscywge2JyZWFrcG9pbnQ6IDgwMH0pXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5LmVsKVxuXG4gIGNvbnN0IGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXdyYXAnKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jYndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9QcmV2aW91cy5iaW5kKGdhbGxlcnkpKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jZndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9OZXh0LmJpbmQoZ2FsbGVyeSkpXG5cbiAgY29uc29sZS5sb2coJ2dhbGxlcnknLCBnYWxsZXJ5KVxufVxuXG5mdW5jdGlvbiBpbml0TGFuZ1N3aXRjaCgpIHtcblxuICB2YXIgZW4gPSBmYWxzZVxuXG4gIGNvbnN0IGNvbnRlbnRFbiA9IG5vZGVMaXN0VG9BcnJheSgnLnRleHQuZW4nKVxuICBjb25zdCBjb250ZW50VWEgPSBub2RlTGlzdFRvQXJyYXkoJy50ZXh0LnVhJylcblxuICBmdW5jdGlvbiBzd2l0Y2hUb0VuKCkge1xuICAgIGNvbnRlbnRVYS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ25vbmVkJykpXG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvVWEoKSB7XG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKSlcbiAgICBjb250ZW50VWEuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpKVxuICB9XG5cbiAgY29uc3QgZW5Td2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2ggI2VuJyk7XG4gIGNvbnN0IHVhU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoICN1YScpO1xuXG4gIGNvbnN0IGxhbmdTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2gnKTtcblxuICBsYW5nU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIGlmICghZW4pIHtcbiAgICAgIGVuU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICAgICAgc3dpdGNoVG9FbigpXG4gICAgICBlbiA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdWFTd2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgICAgZW5Td2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gICAgICBzd2l0Y2hUb1VhKClcbiAgICAgIGVuID0gZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgLy8gZW5Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgZW5Td2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAvLyAgIHVhU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgLy9cbiAgLy8gICBzd2l0Y2hUb0VuKClcbiAgLy8gfSlcblxuICAvLyB1YVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICB1YVN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gIC8vICAgZW5Td2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuICAvL1xuICAvLyAgIHN3aXRjaFRvVWEoKVxuICAvLyB9KVxufVxuXG5mdW5jdGlvbiBpbml0TmF2QW5pbWF0aW9uKG5hdkJyZWFrcG9pbnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKVxuICAvLyBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250YWluZXIgLmxvZ28nKVxuICAvLyBjb25zdCBsYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250YWluZXIgLmxhbmctc3dpdGNoJylcblxuICB2YXIgZW5sYXJnZWQgPSB0cnVlXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXYpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBuYXZCcmVha3BvaW50ICYmIGVubGFyZ2VkKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIC8vIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIC8vIGxhbmcuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIGVubGFyZ2VkID0gZmFsc2VcblxuICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCBuYXZCcmVha3BvaW50ICYmICFlbmxhcmdlZCkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICAvLyBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICAvLyBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICBlbmxhcmdlZCA9IHRydWVcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJvb3QoZ2FsbGVyeVVybHMpIHtcbiAgaW5pdExhbmdTd2l0Y2goKVxuXG4gIGNvbnN0IGxhcmdlVmlld1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2Utdmlld193cmFwJylcbiAgTGFyZ2VWaWV3LmluaXQoe1xuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNHMnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd3JhcDogbGFyZ2VWaWV3V3JhcFxuICB9KVxuXG4gIGxhcmdlVmlld1dyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gIGxhcmdlVmlld1dyYXAuYXBwZW5kQ2hpbGQoTGFyZ2VWaWV3LmNvbnRhaW5lcilcbiAgbGFyZ2VWaWV3V3JhcC5xdWVyeVNlbGVjdG9yKCcuaWNvbiNjcm9zcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIExhcmdlVmlldy5oaWRlKClcbiAgfSlcblxuICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG4gIGluaXRHYWxsZXJ5KGdhbGxlcnlVcmxzKVxuXG4gIGluaXRFbmxhcmdhYmxlcygnI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgaW5pdEVubGFyZ2FibGVzKCcjc3RhZmYgLm1lbWJlciAuYXZhdGFyJylcbiAgbmV3IFNob3djYXNlSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QgLnN0cmVldC12aWV3JykpXG4gIC8vIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxuXG4gIC8vIGluaXRTaG93Y2FzZXMoKVxuICBpbml0TmF2QW5pbWF0aW9uKDI1KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYm9vdChbXG4gICAgJ21lZGlhL2luLzE0OTAyODQxXzEyNTkxMTI3Mjc0ODM5MTJfMzI4NDMxNTEwNjMxODk4MTU3NF9vLmpwZycsXG4gICAgJ21lZGlhL2luLzE5ODc1MjcyXzEwMTAwNDgyMjk2Mjg2NzA2XzM4ODMzMDYyNzU1NDYxNjY2NzZfbi5qcGcnLFxuICAgICdtZWRpYS9pbi8zYi5qcGcnLFxuICAgICdtZWRpYS9pbi82YS5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyNi5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyOC5KUEcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDM1MC5KUEcnXG4gIF0pXG59KVxuIiwiaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGdldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5cbmNvbnN0IExhcmdlVmlldyA9IHtcbiAgaW5pdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB0aGlzLnRyYW5zaXRpb25TZXR1cCA9IG9wdGlvbnMudHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBzYW1lIGFzIGluIHRoZSBzY3NzXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYXJnZS12aWV3X2NvbnRhaW5lcidcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuXG4gICAgLy8gaWYgKG9wdGlvbnMuY2xpY2tDYilcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmhpZGUoKX0pXG4gICAgdGhpcy53cmFwID0gb3B0aW9ucy53cmFwIHx8IHRoaXMuY29udGFpbmVyXG5cbiAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpXG5cbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKClcbiAgfSxcblxuICBzZXRQaG90byh1cmwpIHtcbiAgICBjb25zdCBwaG90byA9IG5ldyBQaG90byh1cmwpXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90byh1cmwpXG5cbiAgICByZXR1cm4gcGhvdG8ubG9hZCgpXG4gICAgLy8gLnRoZW4oKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCd0aGUgbGFyZ2UtdmlldyBjb250YWluZXIgbXVzdCBiZSBkaXNwbGF5ZWQgYmVmb3JlIHdlIGNhbiBmaXQgaW4gdGhlIHBob3RvJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIHBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgaWYgKHRoaXMucGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlcGxhY2VDaGlsZChwaG90by5lbCwgdGhpcy5waG90by5lbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250YWluZXIpXG4gICAgICAgICAgcGhvdG8uc2hvdyhmYWxzZSlcbiAgICAgICAgICB0aGlzLnBob3RvID0gcGhvdG9cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLypcbiAgdHJhbnNpdGlvbmVuZENiKGNiKSB7XG4gICAgY2IoKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmRDYilcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgIEBkZXNjcmlwdGlvbiBJZiB1cmwgaXMgZ2l2ZSwgdGhlbiwgYWZ0ZXIgc2hvdyB0cmFuc2l0aW9uIGhhcyBlbmRlZCwgaXQgbG9hZHMgdGhlXG4gICAgbmV3IHBob3RvXG4gICovXG4gIHNob3codXJsKSB7XG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlbmRpbmcpIHtcbiAgICAvLyAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKVxuICAgIC8vICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXG4gICAgLy9cbiAgICAvLyAgIC8vIHNob3VsZCByZW1vdmVFdmVudExpc3RlbmVyIG9mIGl0c2VsZlxuICAgIC8vICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSBmYWxzZVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5zaG93LCB0cmFuc2l0aW9uZW5kQ2InLCBzZWxmKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9wdGlvbnMuZGlzcGxheSB8fCAnZmxleCdcbiAgICAgICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcblxuICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzIGlzIG51dHNcbiAgICAgICAgdGhpcy5zaG93VGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBob3RvKHVybClcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfSlcbiAgfSxcblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gc2VsZi53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgICAgICAgIHNlbGYud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgc2VsZi5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIC8vIHNlbGYuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuaGlkZSwgdHJhbnNpdGlvbmVuZENiJywgTGFyZ2VWaWV3KTtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmFuc2l0aW9uT2ZmKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9uKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uU2V0dXBcbiAgfVxufVxuXG4vLyBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG5jbGFzcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwsIHVybCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0NiLmJpbmQodGhpcykpXG4gIH1cblxuICBlbmxhcmdlKHVybCkge1xuICAgIExhcmdlVmlldy5zaG93KHVybClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5lbmxhcmdlLCBMYXJnZVZpZXcgc2hvd24nKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcblxuICB9XG5cbiAgY2xpY2tDYigpIHtcbiAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5jbGlja0NiLCB0aGlzOiAnLCB0aGlzKTtcbiAgICB0aGlzLmVubGFyZ2UodGhpcy51cmwpXG4gIH1cbn1cblxuLypcbmZ1bmN0aW9uIGVubGFyZ2VTaG93Y2FzZSgpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwodGhpcylcbiAgTGFyZ2VWaWV3LnNob3coaW1hZ2VVcmwpXG59XG5cbmZ1bmN0aW9uIGdldEVubGFyZ2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmxhcmdlU2hvd2Nhc2VDYilcbiAgfSlcbn1cbiovXG5cbmV4cG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfVxuIiwiXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82OTQyNzg1L3dpbmRvdy1pbm5lcndpZHRoLXZzLWRvY3VtZW50LWRvY3VtZW50ZWxlbWVudC1jbGllbnR3aWR0aFxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2Mzg4I2MxNFxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gIC8vIGdldEVsZW1lbnRzQnlUYWdOYW1lLCBpZiBJJ20gbm90IG1pc3Rha2VuIHJldHVybnMgYSBsaXZlbGlzdCAoaGVsbCBrbm93cyB3aGF0IHRoYXQgaXMsIGJ1dCBpdCdzXG4gIC8vIHVwZGF0ZWQgbGl2ZSAtIGFzIGRvbSBnZXRzIGNoYW5nZWQpLiBJJ20gbm90IHN1cmUgYWJvdXQgdXNpbmcgaXQsIGl0IGJlaGF2ZWQgbWlzdGVyaW91c2x5IG9uY2UuLi5cbiAgLy8gQnV0LCBxdWVyeVNlbGVjdG9yIGlzIG5vdCBzbyBjb21wYXRpYmxlLlxuICAvLyBNYXliZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKVxuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgOlxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRXaWR0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgOlxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKTtcbn1cblxuXG4vKlxuXG5Ob2RlTGlzdCB0byBhcnJheVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIC8vIGl0ZXJhdGUgYmFja3dhcmRzIGVuc3VyaW5nIHRoYXQgbGVuZ3RoIGlzIGFuIFVJbnQzMlxuICBmb3IgKHZhciBpID0gb2JqLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiovXG5cbmZ1bmN0aW9uIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkge1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgY29uc3QgcmVneCA9IG5ldyBSZWdFeHAoLy4qdXJsXFwoKD86XFxcIj8nPykoLispKD86LlxcJz9cXFwiPylcXCkuKi9nKVxuICBjb25zdCByZXN1bHQgPSByZWd4LmV4ZWMoY29tcHV0ZWRTdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddKVxuXG4gIGlmIChyZXN1bHRbMV0pIHtcbiAgICByZXR1cm4gcmVzdWx0WzFdXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nRmFjdG9yeShlbnYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIWVudi5kZXYpIHJldHVyblxuXG4gICAgY29uc29sZS50cmFjZSgpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxufVxuXG5leHBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGxvZ0ZhY3Rvcnl9XG4iLCJpbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgUGhvdG8ge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgdmFyIGxvYWRlZCA9IGZhbHNlXG4gICAgICAvLyBtYXliZSB0aGlzIGRvZXNudCB3b3JrIGluIHNhZmFyaSBtb2JpbGUuLi5cbiAgICAgIHRoaXMuZWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWxvYWRlZClcbiAgICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKCFsb2FkZWQpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zcmMgPSB0aGlzLnVybFxuICAgICAgaWYgKHRoaXMuZWwuY29tcGxldGUgJiYgdGhpcy5lbC5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaG90by5sb2FkLCBpbWcuY29tcGxldGUgJiYgbmF0dXJhbFdpZHRoID4gMCcpO1xuICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgIGxvYWRlZCA9IHRydWVcbiAgICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29udGFpbmVyRGltcy5yYXRpbyA9IGNvbnRhaW5lckRpbXMud2lkdGggLyBjb250YWluZXJEaW1zLmhlaWdodFxuXG4gICAgLy8gaWYgd2lkZXIgdGhhbiBoaWdoZXJcbiAgICBpZiAoaW1nRGltcy5yYXRpbyA+PSBjb250YWluZXJEaW1zLnJhdGlvKSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLndpZHRoIC8gaW1nRGltcy5yYXRpb1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuXG4gICAgLy8gaWYgaGlnaGVyIHRoYW4gd2lkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgLy8gd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuICAgIH1cblxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgcmF0aW86IGltZ0RpbXMucmF0aW9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1nRGltc05ld1xuICB9XG5cbiAgZml0QnlIZWlnaHQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaW1nRGltcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zdCBpbWdEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGltZ0RpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0RpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXNPYmogPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChcbiAgICAgIGltZ0RpbXNPYmosXG4gICAgICBjb250YWluZXJEaW1zT2JqXG4gICAgKVxuXG4gICAgLy8gY29uc3QgaW1nRGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nLCB0aGlzLmVsKVxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZGltcy53aWR0aCkgKyAncHgnXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuZGltcy5oZWlnaHQpICsgJ3B4J1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIGluIGZpdEJ5SGVpZ2h0IEkgZGlkbid0IGNvbnZlcnQgZGltcyB0byBzdHJpbmcgYmVmb3JlIHNldHRpbmcgdGhlbSBvblxuICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGluIGlubGluZSBzdHlsZXMuLiBIb3dldmVyLCBJIGJlbGlldmUsIG9uIG1vYmlsZSB0aGUgZml0QnlCb3RoU2lkZXNcbiAgLy8gc2hvdWxkIGhhdmUgYmVlbiBjYWxsZWQsIHdoZXJlIHRoZXJlIHdhc24ndCB0aGlzIHR5cG8uIEluIHRoZSBmaXRCeUJvdGhTaWRlcyBJIGRpZG4ndFxuICAvLyBjb252ZXJ0IHRoZSB2YWx1ZXMgdG8gd2hvbGUgbnVtYmVycywgbm9uZSB0aGUgbGVzcy5cblxuICAvLyBJIGZpeGVkIHRoYXQsIGFuZCBJIGFsc28gZGVjaWRlZCB0byBtb3ZlIHRoZSB2YWx1ZXMgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG91dHB1dFxuICAvLyB0byBhIHJlZ3VsYXIgb2JqZWN0IGxpdGVyYWwsIGluc3RlYWQgb2YgdXNpbmcgdGhlIG91dHB1dCBpdHNlbGYgKHdoaWNoIGkgYmVsaWV2ZSBpcyBhbiBpbnN0YW5jZVxuICAvLyBvZiBzb21lIHNwZWNpYWwgY2xhc3MpLCBpbmNsdWRpbmcgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGl0LlxuXG4gIC8vIEFub3RoZXIgdGhpbmcgSSB3YW50IHRvIGNoZWNrIGlzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGluIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBhcmVcbiAgLy8gYmFzaWMgaW1wbGVtZW50YXRpb24uLiBBbHNvLCBtYXliZSBpdCBtYWtlcyBzZW5zZSB0byBwYXJzZUludCB0aGUgdmFsdWVzIG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgLy8gb3IgZG9pbmcgc29tZXRoaW5nIGluIHRoYXQgc3Bpcml0XG4gIGZpdEJ5Qm90aFNpZGVzKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGltZ0RpbXMgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY29udGFpbmVyRGltcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgY29uc3QgaW1nRGltc09iaiA9IHtcbiAgICAgIHdpZHRoOiBpbWdEaW1zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdEaW1zLmhlaWdodCxcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoXG4gICAgICBpbWdEaW1zT2JqLFxuICAgICAgY29udGFpbmVyRGltc1xuICAgIClcblxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZGltcy53aWR0aCkgKyAncHgnXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuZGltcy5oZWlnaHQpICsgJ3B4J1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNsZWFySW5saW5lU3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTlcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0JylcbiAgICB9XG4gIH1cblxuICBoaWRlKGhhcmQpIHtcbiAgICBoYXJkID8gdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gIH1cblxuICBzaG93KGhhcmQpIHtcbiAgICBpZiAoaGFyZCkge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Zpc2liaWxpdHknKVxuICAgIH1cblxuICAgIC8vIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiIDogdGhpcy5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbiAgfVxufVxuXG5leHBvcnQge1Bob3RvfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==