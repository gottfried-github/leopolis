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
        // maybe this doesnt work in safari mobile...
        _this.el.onload = function () {
          resolve(_this);
        };

        _this.el.src = _this.url;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImRhdGFzZXQiLCJFbmxhcmdhYmxlIiwibm9kZUxpc3RUb0FycmF5Iiwic2VsZWN0b3IiLCJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJpbml0RW5sYXJnYWJsZXMiLCJpbml0R2FsbGVyeSIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiYXJyb3dzIiwiZ29Ub1ByZXZpb3VzIiwiZ29Ub05leHQiLCJpbml0TGFuZ1N3aXRjaCIsImVuIiwiY29udGVudEVuIiwiY29udGVudFVhIiwic3dpdGNoVG9FbiIsInN3aXRjaFRvVWEiLCJlblN3aXRjaCIsInVhU3dpdGNoIiwibGFuZ1N3aXRjaCIsInByZXZlbnREZWZhdWx0IiwiaW5pdE5hdkFuaW1hdGlvbiIsIm5hdkJyZWFrcG9pbnQiLCJuYXYiLCJlbmxhcmdlZCIsInNjcm9sbFkiLCJib290IiwiZ2FsbGVyeVVybHMiLCJsYXJnZVZpZXdXcmFwIiwiTGFyZ2VWaWV3IiwiaW5pdCIsInRyYW5zaXRpb24iLCJkaXNwbGF5Iiwid3JhcCIsInRyYW5zaXRpb25TZXR1cCIsIm9wYWNpdHkiLCJoaWRkZW4iLCJzZXRQaG90byIsInJlcGxhY2VDaGlsZCIsInJlc29sdmUiLCJzZWxmIiwidHJhbnNpdGlvbk9mZiIsInRyYW5zaXRpb25PbiIsInNob3dQZW5kaW5nIiwic2hvd1RpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGlja0NiIiwiZW5sYXJnZSIsImdldFZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlZ3giLCJSZWdFeHAiLCJyZXN1bHQiLCJleGVjIiwibG9nRmFjdG9yeSIsImVudiIsImRhdGEiLCJkZXYiLCJ0cmFjZSIsIm9ubG9hZCIsInNyYyIsImltZ0RpbXMiLCJjb250YWluZXJEaW1zIiwicmF0aW8iLCJpbWdEaW1zTmV3IiwiaW1nRGltc09iaiIsImNvbnRhaW5lckRpbXNPYmoiLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJyb3VuZCIsImNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXJkIiwidmlzaWJpbGl0eSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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MkIsUUFBbkU7QUFDRDs7O3lCQUVJRCxJLEVBQU07QUFDVCxVQUFJQSxJQUFKLEVBQVU7QUFDUixhQUFLaEwsRUFBTCxDQUFRNEIsS0FBUixDQUFja0osY0FBZCxDQUE2QixTQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs5SyxFQUFMLENBQVE0QixLQUFSLENBQWNrSixjQUFkLENBQTZCLFlBQTdCO0FBQ0QsT0FMUSxDQU9UOztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1Bob3RvfSBmcm9tICcuL3Bob3RvLmpzJ1xuaW1wb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodCwgbG9nRmFjdG9yeX0gZnJvbSAnLi9saWIuanMnXG5cbmNsYXNzIERlY2tJdGVtIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmwsIGluZGV4LCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtJ1xuXG4gICAgdGhpcy5jb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuY29udGVudEVsLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0tY29udGVudCdcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50V3JhcC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnRfd3JhcHBlcidcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwKVxuICAgIGNvbnRlbnRXcmFwLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsKVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHRoaXMubmFycm93TW9kZSA9IGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5icmVha3BvaW50XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2KSA9PiB7XG4gICAgICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDw9IHRoaXMub3B0aW9ucy5icmVha3BvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBvbicpXG4gICAgICAgICAgdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuICAgICAgICAgIC8vIHRoaXMudHVybk9uTmFycm93TW9kZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuZWwpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplLCB0dXJuaW5nIE9mZicpXG4gICAgICAgICAgdGhpcy50dXJuT2ZmTmFycm93TW9kZSgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgICB0aGlzLnBob3RvID0gbmV3IFBob3RvKGltYWdlVXJsKVxuICAgIHRoaXMubG9hZFBob3RvKCkuY2F0Y2goKGVycikgPT4ge3Rocm93IGVycn0pXG4gIH1cblxuICB0dXJuT25OYXJyb3dNb2RlKG1vZGUpIHtcbiAgICAvLyB0aGlzLm5hcnJvd01vZGUgPSB0cnVlXG5cbiAgICAvLyB0aGlzIHBlcmhhcHMgd291bGQgYmUgYmV0dGVyIHRvIHNldCB3aXRoIGNzcyB2d1xuICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSBnZXRWaWV3cG9ydFdpZHRoKCkgKyAncHgnXG5cbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuZWwpXG4gIH1cblxuICB0dXJuT2ZmTmFycm93TW9kZSgpIHtcbiAgICB0aGlzLm5hcnJvd01vZGUgPSBmYWxzZVxuICAgIC8vIHRoaXMucGhvdG8uZml0QnlIZWlnaHQodGhpcy5lbClcblxuICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLnBob3RvLmRpbXMud2lkdGggKyAncHgnXG4gICAgdGhpcy5waG90by5jbGVhcklubGluZVN0eWxlcygpXG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBpdGVtLCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBEZWNrXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5vZmZzZXRMZWZ0XG4gIH1cblxuICAvLyBnZXQgcG9zaXRpb24gb2YgdGhlIG1pZHBvaW50IG9mIHRoZSBpdGVtLCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBkZWNrXG4gIGdldE1pZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldCgpICsgKHRoaXMuZ2V0V2lkdGgoKSAvIDIpXG4gIH1cblxuICAvKipcbiAgICBAcGFyYW0ge1N0cmluZ30gaGVpZ2h0IGhlaWdodCBpbiBjc3Mgc3ludGF4XG4gICovXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gd2lkdGhcbiAgfVxuXG4gIGlzSW5WaWV3KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KClcbiAgICBjb25zdCBkZWNrUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKClcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIG9mZnNldDogJywgb2Zmc2V0KTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIHdpZHRoOiAnLCB0aGlzLmdldFdpZHRoKCkpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgZ2V0RGVja1Bvc2l0aW9uOiAnLCB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKCkpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6ICcsIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpKTtcblxuICAgIC8vIGRlY2tQb3NpdGlvbiBjb3VsZCBiZSBuZWdhdGl2ZVxuICAgIHJldHVybiBvZmZzZXQgKyBkZWNrUG9zaXRpb24gPj0gMCAmJlxuICAgIGRlY2tQb3NpdGlvbiArIG9mZnNldCArIHRoaXMuZ2V0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKVxuICAgICAgPyB0cnVlIDogZmFsc2VcblxuICAgIC8vIGlmIChcbiAgICAvLyAgIHRoaXMuZ2V0T2Zmc2V0KCkgKyB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKCkgPiAwICYmXG4gICAgLy8gICB0aGlzLmdldE9mZnNldCgpICsgdGhpcy5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKClcbiAgICAvLyApIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgfVxuXG4gIGxvYWRQaG90byh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5waG90by5sb2FkKCkgLy8gUGhvdG8ucHJvdG90eXBlLmxvYWRJbWFnZSgpXG4gICAgLnRoZW4oKHBob3RvKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucGhvdG9Mb2FkQ2IocGhvdG8pXG5cbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBzZWUgdGhlIGltZywgYnV0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IHdpdGggZ2V0Qm91bmRpbmdDbGllbnRSZWN0IChzbyBkaXNwbGF5OiBub25lIGlzIG5vdCBhIGZpdClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgICAgIHBob3RvLmhpZGUoKVxuICAgICAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZChwaG90by5lbClcblxuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGF0IHRoZSBtb21lbnQsIHNlZW1zIGxpa2Ugd2UgaGFuZGxlIGFsbCBvZiB0aGlzIHdpdGggY3NzLFxuICAgICAgICAgIC8vIGFuZCBkb24ndCBuZWVkIHRvIGZpdGUgdGhlIHBob3RvIGFuZCBzZXQgaXQncyBjb250YWluZXIncyB3aWR0aCByZXNwZWN0aXZlbHlcblxuICAgICAgICAgIC8vIHRoaXMucGhvdG8uZml0QnlIZWlnaHQodGhpcy5lbClcbiAgICAgICAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250ZW50RWwpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBob3RvLnNob3coKVxuICAgICAgICAvLyBpbWcuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuXG4gICAgfSlcbiAgICAvLyAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgdGhyb3cgZXJyXG4gICAgLy8gfSlcbiAgfVxufVxuXG5jbGFzcyBEZWNrIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeS1kZWNrJ1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuXG4gICAgdGhpcy5icmVha3BvaW50ID0gb3B0aW9ucy5icmVha3BvaW50XG4gICAgdGhpcy5wb3NpdGlvbiA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcblxuICAgIHRoaXMubG9hZGVkID0gZmFsc2VcbiAgICB0aGlzLml0ZW1zTG9hZGVkID0gMFxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmluaXRJdGVtcyhpbWFnZVVybHMpXG4gICAgdGhpcy5hcHBlbmRJdGVtcygpXG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSB0cmFuc2Zvcm0gbWF0cml4IHN0eWxpbmdcbiAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG5cbiAgICAvLyB3aW5kb3cub24oJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgIC8vICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgIC8vXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxuXG4gIC8qXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpIHtcbiAgICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5icmVha3BvaW50KSB7XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0T2Zmc2V0KClcbiAgICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldFxuXG4gICAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKVxuXG4gICAgICBjb25zdCBnYWxsZXJ5TWlkcG9pbnQgPSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSAvIDIgLy8gLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMlxuICAgICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0ICsgZ2FsbGVyeU1pZHBvaW50XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGluZGV4JywgaW5kZXgpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtT2Zmc2V0JywgaXRlbU9mZnNldClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGRlY2tPZmZzZXROZXcnLCBkZWNrT2Zmc2V0TmV3KVxuXG4gICAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICAgIH1cbiAgfVxuICAqL1xuXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZChpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpXG5cbiAgICBjb25zdCBnYWxsZXJ5TWlkcG9pbnQgPSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSAvIDIgLy8gLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMlxuICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldCArIGdhbGxlcnlNaWRwb2ludFxuXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XSlcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpKVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGRlY2tPZmZzZXROZXcnLCBkZWNrT2Zmc2V0TmV3KVxuXG4gICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgfVxuXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0T2Zmc2V0KClcbiAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gIH1cblxuICAvKlxuICAvLyBUT0RPOlxuICBnZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuICAgIC0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlQb3MoKS5sZWZ0XG4gICAgKyB3aW5kb3cuc2Nyb2xsWFxuICB9XG4gICovXG5cbiAgLyoqXG4gIEBwYXJhbSB7Ym9vbGVhbn0gY2VudGVyZWQgaWYgdHJ1ZSAtIGNlbnRlcnMgdGhlIGl0ZW0sIGlmIGZhbHN5IC0gZG9lc24ndCBjZW50ZXJcbiAgKi9cbiAgZ29Ub0l0ZW0oaW5kZXgsIGNlbnRlcmVkKSB7XG5cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5pdGVtcy5sZW5ndGgtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgZ28gdG8gdW5leGlzdGluZyBpdGVtIGF0IFwiKyBpbmRleClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJcIilcbiAgICAgIC8vIFRPRE86IG1ha2UgaXQgc28gaXQgY2FuIGdvIHRvIHRoZSBpdGVtcyB0aGF0IGFyZSBhbHJlYWR5IGxvYWRlZCwgYW5kXG4gICAgICAvLyB0aGVuLCBhZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZWNrIHNvIGl0IHN0YXlzIG9uIHRoZSBpdGVtIHdlJ3ZlIGdvbmUgdG9cbiAgICAgIC8vIGFzIG90aGVyIGl0ZW1zIGxvYWQgKGlmIG5lY2Vzc2FyeSkuXG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGltcGFjdGZ1bCBpZiB0aGUgZGVjayBpcyByaWdodCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFuZCB1c2VyXG4gICAgICAvLyB3YW50cyB0byBpbW1lZGlhdGVseSBiZSBhYmxlIHRvIGludGVyYWN0IHdpdGggdGhpbmdzLlxuICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b3MgaW4gdGhlIGRlY2sgaGF2ZW4ndCBsb2FkZWQgeWV0XCIpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbk5ldyA9IGNlbnRlcmVkID8gdGhpcy5jYWxjdWxhdGVEZWNrT2Zmc2V0Q2VudGVyZWQoaW5kZXgpIDogdGhpcy5jYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KVxuXG4gICAgLy8gVE9ETzpcbiAgICAvLyB0aGlzLm9mZnNldCA9IHRoaXMudHJhbnNpdGlvbmluZ1xuICAgIC8vICAgPyBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLmdldEFjdHVhbFBvc2l0aW9uV2hpbGVUcmFuc2l0aW9uaW5nKClcbiAgICAvLyAgIDogZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuXG4gICAgdGhpcy5vZmZzZXQgPSBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLnBvc2l0aW9uXG4gICAgdGhpcy5wb3NpdGlvbiA9IGRlY2tQb3NpdGlvbk5ld1xuXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZykge1xuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfSBlbHNlIHtcblxuICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25lbmRDYigpXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcblxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiLmJpbmQodGhpcykpXG4gICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMubWFrZU1hdHJpeCh0aGlzLm9mZnNldClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF1cblxuICB9XG5cbiAgbWFrZU1hdHJpeCh4KSB7XG4gICAgcmV0dXJuICdtYXRyaXgoMSwgMCwgMCwgMSwgJysgeCArJywgMCknXG4gIH1cblxuICB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbiArJ3B4J1xuXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcbiAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG4gIH1cblxuICBpbml0SXRlbXModXJscykge1xuICAgIHJldHVybiB1cmxzLm1hcCgodXJsLCBpKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERlY2tJdGVtKHVybCwgaSwge1xuICAgICAgICBicmVha3BvaW50OiB0aGlzLmJyZWFrcG9pbnQsXG4gICAgICAgIHBob3RvTG9hZENiOiAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b0xvYWRDYiwgZGVjay5pdGVtc0xvYWRlZDogXCIsIHRoaXMuaXRlbXNMb2FkZWQpO1xuICAgICAgICAgIHRoaXMuaXRlbXNMb2FkZWQrK1xuXG4gICAgICAgICAgaWYgKHRoaXMuaXRlbXNMb2FkZWQgPT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQgPT0gZGVjay5pdGVtcy5sZW5ndGgsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxvYWRDYigpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoLFxuICAgICAgICBnZXREZWNrUG9zaXRpb246ICgpID0+IHtyZXR1cm4gdGhpcy5wb3NpdGlvbn1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlbS5lbClcbiAgfVxuXG4gIGFwcGVuZEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuYXBwZW5kSXRlbShpdGVtKVxuICAgIH0pXG4gIH1cbn1cblxuY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHBob3RvVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnknXG5cblxuICAgIHRoaXMuZGVjayA9IG5ldyBEZWNrKHBob3RvVXJscywge1xuICAgICAgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6ICgpID0+IHsgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfSxcbiAgICAgIGxvYWRDYjogKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMCwgZmFsc2UpXG4gICAgICAgIC8vIHRoaXMuZ29Ub05leHQuY2FsbCh0aGlzKVxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnQ6IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIH0pXG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZGVjay5lbClcblxuXG4gICAgLy8gY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSgwKVxuICAgIC8vIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW1cbiAgfVxuXG4gIGdvVG9OZXh0KCkge1xuICAgIGlmICghdGhpcy5kZWNrLmxvYWRlZCkgcmV0dXJuXG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSB0aGlzLmRlY2suaXRlbXMubGVuZ3RoLTEpIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleCsxLCB0cnVlKVxuICB9XG5cbiAgZ29Ub1ByZXZpb3VzKCkge1xuICAgIGlmICghdGhpcy5kZWNrLmxvYWRlZCkgcmV0dXJuXG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSAwKSByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXgtMSwgdHJ1ZSlcbiAgfVxuICAvKlxuICAvLyBUT0RPOlxuICAvLyBnZXQgdGhlIGFjdHVhbCBwb3NpdGlvbiBvZiB0aGUgZWwsIHJlbGF0aXZlIHRvIGJvZHkuXG4gIGdldEFic1Bvc2l0aW9uKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IDBcblxuICAgIC8vIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVxuXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gIH1cbiAgKi9cbn1cblxuZXhwb3J0IHtHYWxsZXJ5fVxuIiwiLy8gaW1wb3J0IHtzbGlkZX0gZnJvbSAnLi9zbGlkZS5qcydcbmltcG9ydCB7Z2V0QmFja2dyb3VuZEltYWdlVXJsfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7R2FsbGVyeX0gZnJvbSAnLi9nYWxsZXJ5LmpzJ1xuaW1wb3J0IHtMYXJnZVZpZXcsIEVubGFyZ2FibGV9IGZyb20gJy4vbGFyZ2Utdmlldy5qcydcblxuY2xhc3MgU2hvd2Nhc2VJbWFnZSBleHRlbmRzIEVubGFyZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHN1cGVyKGVsLCBlbC5kYXRhc2V0LnVybClcbiAgICAvLyBzdXBlcihlbCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSlcbiAgICAvLyB0aGlzLmltYWdlID0gbmV3IEVubGFyZ2FibGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vZGVMaXN0VG9BcnJheShzZWxlY3Rvcikge1xuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuICByZXR1cm4gZWxzXG59XG5cbmZ1bmN0aW9uIGluaXRFbmxhcmdhYmxlcyhzZWxlY3Rvcikge1xuICAvLyB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgLy8gZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuXG4gIC8vIGNvbnNvbGUubG9nKGVscyk7XG4gIHZhciBlbHMgPSBub2RlTGlzdFRvQXJyYXkoc2VsZWN0b3IpXG5cbiAgZWxzLmZvckVhY2goZWwgPT4ge25ldyBTaG93Y2FzZUltYWdlKGVsKX0pXG59XG5cbmZ1bmN0aW9uIGluaXRHYWxsZXJ5KHBob3RvVXJscykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuXG4gIGNvbnN0IGdhbGxlcnkgPSBuZXcgR2FsbGVyeShwaG90b1VybHMsIHticmVha3BvaW50OiA4MDB9KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeS5lbClcblxuICBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS13cmFwJylcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2J3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvUHJldmlvdXMuYmluZChnYWxsZXJ5KSlcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2Z3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvTmV4dC5iaW5kKGdhbGxlcnkpKVxuXG4gIGNvbnNvbGUubG9nKCdnYWxsZXJ5JywgZ2FsbGVyeSlcbn1cblxuZnVuY3Rpb24gaW5pdExhbmdTd2l0Y2goKSB7XG5cbiAgdmFyIGVuID0gZmFsc2VcblxuICBjb25zdCBjb250ZW50RW4gPSBub2RlTGlzdFRvQXJyYXkoJy50ZXh0LmVuJylcbiAgY29uc3QgY29udGVudFVhID0gbm9kZUxpc3RUb0FycmF5KCcudGV4dC51YScpXG5cbiAgZnVuY3Rpb24gc3dpdGNoVG9FbigpIHtcbiAgICBjb250ZW50VWEuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdub25lZCcpKVxuICAgIGNvbnRlbnRFbi5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJykpXG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hUb1VhKCkge1xuICAgIGNvbnRlbnRFbi5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ25vbmVkJykpXG4gICAgY29udGVudFVhLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKSlcbiAgfVxuXG4gIGNvbnN0IGVuU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoICNlbicpO1xuICBjb25zdCB1YVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLXN3aXRjaCAjdWEnKTtcblxuICBjb25zdCBsYW5nU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoJyk7XG5cbiAgbGFuZ1N3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICBpZiAoIWVuKSB7XG4gICAgICBlblN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgICB1YVN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgICAgIHN3aXRjaFRvRW4oKVxuICAgICAgZW4gPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICAgIGVuU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICAgICAgc3dpdGNoVG9VYSgpXG4gICAgICBlbiA9IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIC8vIGVuU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGVuU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgLy8gICB1YVN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG4gIC8vXG4gIC8vICAgc3dpdGNoVG9FbigpXG4gIC8vIH0pXG5cbiAgLy8gdWFTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgdWFTd2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAvLyAgIGVuU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgLy9cbiAgLy8gICBzd2l0Y2hUb1VhKClcbiAgLy8gfSlcbn1cblxuZnVuY3Rpb24gaW5pdE5hdkFuaW1hdGlvbihuYXZCcmVha3BvaW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJylcbiAgLy8gY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfY29udGFpbmVyIC5sb2dvJylcbiAgLy8gY29uc3QgbGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfY29udGFpbmVyIC5sYW5nLXN3aXRjaCcpXG5cbiAgdmFyIGVubGFyZ2VkID0gdHJ1ZVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gbmF2QnJlYWtwb2ludCAmJiBlbmxhcmdlZCkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICAvLyBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICAvLyBsYW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICBlbmxhcmdlZCA9IGZhbHNlXG5cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgbmF2QnJlYWtwb2ludCAmJiAhZW5sYXJnZWQpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgLy8gbG9nby5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgLy8gbGFuZy5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgZW5sYXJnZWQgPSB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBib290KGdhbGxlcnlVcmxzKSB7XG4gIGluaXRMYW5nU3dpdGNoKClcblxuICBjb25zdCBsYXJnZVZpZXdXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhcmdlLXZpZXdfd3JhcCcpXG4gIExhcmdlVmlldy5pbml0KHtcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjRzJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdyYXA6IGxhcmdlVmlld1dyYXBcbiAgfSlcblxuICBsYXJnZVZpZXdXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICBsYXJnZVZpZXdXcmFwLmFwcGVuZENoaWxkKExhcmdlVmlldy5jb250YWluZXIpXG4gIGxhcmdlVmlld1dyYXAucXVlcnlTZWxlY3RvcignLmljb24jY3Jvc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBMYXJnZVZpZXcuaGlkZSgpXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ0xhcmdlVmlldycsIExhcmdlVmlldylcblxuICBpbml0R2FsbGVyeShnYWxsZXJ5VXJscylcblxuICBpbml0RW5sYXJnYWJsZXMoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGluaXRFbmxhcmdhYmxlcygnI3N0YWZmIC5tZW1iZXIgLmF2YXRhcicpXG4gIG5ldyBTaG93Y2FzZUltYWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0IC5zdHJlZXQtdmlldycpKVxuICAvLyBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcblxuICAvLyBpbml0U2hvd2Nhc2VzKClcbiAgaW5pdE5hdkFuaW1hdGlvbigyNSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGJvb3QoW1xuICAgICdtZWRpYS9pbi8xNDkwMjg0MV8xMjU5MTEyNzI3NDgzOTEyXzMyODQzMTUxMDYzMTg5ODE1NzRfby5qcGcnLFxuICAgICdtZWRpYS9pbi8xOTg3NTI3Ml8xMDEwMDQ4MjI5NjI4NjcwNl8zODgzMzA2Mjc1NTQ2MTY2Njc2X24uanBnJyxcbiAgICAnbWVkaWEvaW4vM2IuanBnJyxcbiAgICAnbWVkaWEvaW4vNmEuanBnJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAxMjYuanBnJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAxMjguSlBHJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAzNTAuSlBHJ1xuICBdKVxufSlcbiIsImltcG9ydCB7Z2V0QmFja2dyb3VuZEltYWdlVXJsLCBnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge1Bob3RvfSBmcm9tICcuL3Bob3RvLmpzJ1xuXG5jb25zdCBMYXJnZVZpZXcgPSB7XG4gIGluaXQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikgdGhpcy50cmFuc2l0aW9uU2V0dXAgPSBvcHRpb25zLnRyYW5zaXRpb25cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgLy8gc2FtZSBhcyBpbiB0aGUgc2Nzc1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnbGFyZ2Utdmlld19jb250YWluZXInXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcblxuICAgIC8vIGlmIChvcHRpb25zLmNsaWNrQ2IpXG4gICAgLy8gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dGhpcy5oaWRlKCl9KVxuICAgIHRoaXMud3JhcCA9IG9wdGlvbnMud3JhcCB8fCB0aGlzLmNvbnRhaW5lclxuXG4gICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAvLyB0aGlzLndyYXAuY2xhc3NMaXN0LmFkZCgndHJhbnNwYXJlbnQnKVxuXG4gICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90bygpXG4gIH0sXG5cbiAgc2V0UGhvdG8odXJsKSB7XG4gICAgY29uc3QgcGhvdG8gPSBuZXcgUGhvdG8odXJsKVxuICAgIC8vIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8odXJsKVxuXG4gICAgcmV0dXJuIHBob3RvLmxvYWQoKVxuICAgIC8vIC50aGVuKClcbiAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigndGhlIGxhcmdlLXZpZXcgY29udGFpbmVyIG11c3QgYmUgZGlzcGxheWVkIGJlZm9yZSB3ZSBjYW4gZml0IGluIHRoZSBwaG90bycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMucGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICBwaG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIGlmICh0aGlzLnBob3RvKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocGhvdG8uZWwsIHRoaXMucGhvdG8uZWwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHBob3RvLmVsKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAgIHBob3RvLnNob3coZmFsc2UpXG4gICAgICAgICAgdGhpcy5waG90byA9IHBob3RvXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qXG4gIHRyYW5zaXRpb25lbmRDYihjYikge1xuICAgIGNiKClcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uZW5kQ2IpXG4gIH1cbiAgKi9cblxuICAvKipcbiAgICBAZGVzY3JpcHRpb24gSWYgdXJsIGlzIGdpdmUsIHRoZW4sIGFmdGVyIHNob3cgdHJhbnNpdGlvbiBoYXMgZW5kZWQsIGl0IGxvYWRzIHRoZVxuICAgIG5ldyBwaG90b1xuICAqL1xuICBzaG93KHVybCkge1xuICAgIC8vIGlmICh0aGlzLnNob3dQZW5kaW5nKSB7XG4gICAgLy8gICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuc2hvd1RpbWVvdXRJZClcbiAgICAvLyAgIC8vIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoKVxuICAgIC8vXG4gICAgLy8gICAvLyBzaG91bGQgcmVtb3ZlRXZlbnRMaXN0ZW5lciBvZiBpdHNlbGZcbiAgICAvLyAgIHRoaXMudHJhbnNpdGlvbmVuZENiKClcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgICAgc2VsZi53cmFwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgICAgc2VsZi50cmFuc2l0aW9uT2ZmKClcbiAgICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gZmFsc2VcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuc2hvdywgdHJhbnNpdGlvbmVuZENiJywgc2VsZilcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLmRpc3BsYXkgfHwgJ2ZsZXgnXG4gICAgICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG5cbiAgICAgICAgdGhpcy5zaG93UGVuZGluZyA9IHRydWVcbiAgICAgICAgLy8gdGhpcyBpcyBudXRzXG4gICAgICAgIHRoaXMuc2hvd1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuICAgICAgICB9LCA1MClcblxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzb2xpZCcpXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRQaG90byh1cmwpXG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgIH0pXG4gIH0sXG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHNlbGYud3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcbiAgICAgICAgICBzZWxmLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIHNlbGYucGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICAvLyBzZWxmLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG5cbiAgICAgICAgICBzZWxmLmhpZGRlbiA9IHRydWVcbiAgICAgICAgICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3LmhpZGUsIHRyYW5zaXRpb25lbmRDYicsIExhcmdlVmlldyk7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT24oKVxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcblxuICAgICAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzb2xpZCcpXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9mZigpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICB9LFxuXG4gIHRyYW5zaXRpb25PbigpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvblNldHVwXG4gIH1cbn1cblxuLy8gY29uc29sZS5sb2coJ0xhcmdlVmlldycsIExhcmdlVmlldylcblxuY2xhc3MgRW5sYXJnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCB1cmwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tDYi5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZW5sYXJnZSh1cmwpIHtcbiAgICBMYXJnZVZpZXcuc2hvdyh1cmwpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VubGFyZ2FibGUuZW5sYXJnZSwgTGFyZ2VWaWV3IHNob3duJylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNsaWNrQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ0VubGFyZ2FibGUuY2xpY2tDYiwgdGhpczogJywgdGhpcyk7XG4gICAgdGhpcy5lbmxhcmdlKHRoaXMudXJsKVxuICB9XG59XG5cbi8qXG5mdW5jdGlvbiBlbmxhcmdlU2hvd2Nhc2UoKSB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0QmFja2dyb3VuZEltYWdlVXJsKHRoaXMpXG4gIExhcmdlVmlldy5zaG93KGltYWdlVXJsKVxufVxuXG5mdW5jdGlvbiBnZXRFbmxhcmdhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0IC5zaG93Y2FzZSAuaW1hZ2UtdGh1bWInKVxuICBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG5cbiAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5sYXJnZVNob3djYXNlQ2IpXG4gIH0pXG59XG4qL1xuXG5leHBvcnQge0xhcmdlVmlldywgRW5sYXJnYWJsZX1cbiIsIlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjk0Mjc4NS93aW5kb3ctaW5uZXJ3aWR0aC12cy1kb2N1bWVudC1kb2N1bWVudGVsZW1lbnQtY2xpZW50d2lkdGhcbi8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjM4OCNjMTRcbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KCkge1xuICAvLyBnZXRFbGVtZW50c0J5VGFnTmFtZSwgaWYgSSdtIG5vdCBtaXN0YWtlbiByZXR1cm5zIGEgbGl2ZWxpc3QgKGhlbGwga25vd3Mgd2hhdCB0aGF0IGlzLCBidXQgaXQnc1xuICAvLyB1cGRhdGVkIGxpdmUgLSBhcyBkb20gZ2V0cyBjaGFuZ2VkKS4gSSdtIG5vdCBzdXJlIGFib3V0IHVzaW5nIGl0LCBpdCBiZWhhdmVkIG1pc3RlcmlvdXNseSBvbmNlLi4uXG4gIC8vIEJ1dCwgcXVlcnlTZWxlY3RvciBpcyBub3Qgc28gY29tcGF0aWJsZS5cbiAgLy8gTWF5YmU6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aClcbiAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIDpcbiAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGgoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIDpcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aCk7XG59XG5cblxuLypcblxuTm9kZUxpc3QgdG8gYXJyYXlcbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICAvLyBpdGVyYXRlIGJhY2t3YXJkcyBlbnN1cmluZyB0aGF0IGxlbmd0aCBpcyBhbiBVSW50MzJcbiAgZm9yICh2YXIgaSA9IG9iai5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG4qL1xuXG5mdW5jdGlvbiBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwoZWwpIHtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVxuXG4gIGNvbnN0IHJlZ3ggPSBuZXcgUmVnRXhwKC8uKnVybFxcKCg/OlxcXCI/Jz8pKC4rKSg/Oi5cXCc/XFxcIj8pXFwpLiovZylcbiAgY29uc3QgcmVzdWx0ID0gcmVneC5leGVjKGNvbXB1dGVkU3R5bGVbJ2JhY2tncm91bmQtaW1hZ2UnXSlcblxuICBpZiAocmVzdWx0WzFdKSB7XG4gICAgcmV0dXJuIHJlc3VsdFsxXVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0ZhY3RvcnkoZW52KSB7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCFlbnYuZGV2KSByZXR1cm5cblxuICAgIGNvbnNvbGUudHJhY2UoKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbn1cblxuZXhwb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsLCBsb2dGYWN0b3J5fVxuIiwiaW1wb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodH0gZnJvbSAnLi9saWIuanMnXG5cbmNsYXNzIFBob3RvIHtcbiAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBcbiAgICAgIC8vIG1heWJlIHRoaXMgZG9lc250IHdvcmsgaW4gc2FmYXJpIG1vYmlsZS4uLlxuICAgICAgdGhpcy5lbC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcylcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zcmMgPSB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb250YWluZXJEaW1zLnJhdGlvID0gY29udGFpbmVyRGltcy53aWR0aCAvIGNvbnRhaW5lckRpbXMuaGVpZ2h0XG5cbiAgICAvLyBpZiB3aWRlciB0aGFuIGhpZ2hlclxuICAgIGlmIChpbWdEaW1zLnJhdGlvID49IGNvbnRhaW5lckRpbXMucmF0aW8pIHtcbiAgICAgIGNvbnN0IGltZ0RpbXNOZXcgPSB7XG4gICAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMud2lkdGggLyBpbWdEaW1zLnJhdGlvXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG5cbiAgICAvLyBpZiBoaWdoZXIgdGhhbiB3aWRlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICAvLyB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG4gICAgfVxuXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUhlaWdodChpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodCxcbiAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLmhlaWdodCAqIGltZ0RpbXMucmF0aW8sXG4gICAgICByYXRpbzogaW1nRGltcy5yYXRpb1xuICAgIH1cblxuICAgIHJldHVybiBpbWdEaW1zTmV3XG4gIH1cblxuICBmaXRCeUhlaWdodChjb250YWluZXIpIHtcbiAgICBjb25zdCBpbWdEaW1zID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGNvbnN0IGltZ0RpbXNPYmogPSB7XG4gICAgICB3aWR0aDogaW1nRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogaW1nRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyRGltc09iaiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodCxcbiAgICB9XG5cbiAgICB0aGlzLmRpbXMgPSB0aGlzLmNhbGN1bGF0ZUZpdEJ5SGVpZ2h0KFxuICAgICAgaW1nRGltc09iaixcbiAgICAgIGNvbnRhaW5lckRpbXNPYmpcbiAgICApXG5cbiAgICAvLyBjb25zdCBpbWdEaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChpbWcsIHRoaXMuZWwpXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQodGhpcy5kaW1zLndpZHRoKSArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy5kaW1zLmhlaWdodCkgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gaW4gZml0QnlIZWlnaHQgSSBkaWRuJ3QgY29udmVydCBkaW1zIHRvIHN0cmluZyBiZWZvcmUgc2V0dGluZyB0aGVtIG9uXG4gIC8vIHdpZHRoIGFuZCBoZWlnaHQgaW4gaW5saW5lIHN0eWxlcy4uIEhvd2V2ZXIsIEkgYmVsaWV2ZSwgb24gbW9iaWxlIHRoZSBmaXRCeUJvdGhTaWRlc1xuICAvLyBzaG91bGQgaGF2ZSBiZWVuIGNhbGxlZCwgd2hlcmUgdGhlcmUgd2Fzbid0IHRoaXMgdHlwby4gSW4gdGhlIGZpdEJ5Qm90aFNpZGVzIEkgZGlkbid0XG4gIC8vIGNvbnZlcnQgdGhlIHZhbHVlcyB0byB3aG9sZSBudW1iZXJzLCBub25lIHRoZSBsZXNzLlxuXG4gIC8vIEkgZml4ZWQgdGhhdCwgYW5kIEkgYWxzbyBkZWNpZGVkIHRvIG1vdmUgdGhlIHZhbHVlcyBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb3V0cHV0XG4gIC8vIHRvIGEgcmVndWxhciBvYmplY3QgbGl0ZXJhbCwgaW5zdGVhZCBvZiB1c2luZyB0aGUgb3V0cHV0IGl0c2VsZiAod2hpY2ggaSBiZWxpZXZlIGlzIGFuIGluc3RhbmNlXG4gIC8vIG9mIHNvbWUgc3BlY2lhbCBjbGFzcyksIGluY2x1ZGluZyBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gaXQuXG5cbiAgLy8gQW5vdGhlciB0aGluZyBJIHdhbnQgdG8gY2hlY2sgaXMgd2hldGhlciBvciBub3QgdGhlIHdpZHRoIGFuZCBoZWlnaHQgaW4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGFyZVxuICAvLyBiYXNpYyBpbXBsZW1lbnRhdGlvbi4uIEFsc28sIG1heWJlIGl0IG1ha2VzIHNlbnNlIHRvIHBhcnNlSW50IHRoZSB2YWx1ZXMgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LFxuICAvLyBvciBkb2luZyBzb21ldGhpbmcgaW4gdGhhdCBzcGlyaXRcbiAgZml0QnlCb3RoU2lkZXMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaW1nRGltcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zdCBpbWdEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGltZ0RpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0RpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXNPYmogPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhcbiAgICAgIGltZ0RpbXNPYmosXG4gICAgICBjb250YWluZXJEaW1zXG4gICAgKVxuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQodGhpcy5kaW1zLndpZHRoKSArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy5kaW1zLmhlaWdodCkgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYXJJbmxpbmVTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoaGFyZCkge1xuICAgIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgfVxuXG4gIHNob3coaGFyZCkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgLy8gaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICB9XG59XG5cbmV4cG9ydCB7UGhvdG99XG4iXSwic291cmNlUm9vdCI6IiJ9