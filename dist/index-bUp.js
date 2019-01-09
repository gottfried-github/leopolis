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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      this.dims = this.calculateFitByHeight(this.el.getBoundingClientRect(), container.getBoundingClientRect()); // const imgDims = this.calculateFitByHeight(img, this.el)

      this.el.style.width = this.dims.width;
      this.el.style.height = this.dims.height;
      return this;
    }
  }, {
    key: "fitByBothSides",
    value: function fitByBothSides(container) {
      this.dims = this.calculateFitByBothSides(this.el.getBoundingClientRect(), container.getBoundingClientRect());
      this.el.style.width = this.dims.width + 'px';
      this.el.style.height = this.dims.height + 'px';
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

var DeckItem =
/*#__PURE__*/
function () {
  function DeckItem(imageUrl, index, options) {
    var _this2 = this;

    _classCallCheck(this, DeckItem);

    this.el = document.createElement('div');
    this.el.className = 'deck-item';
    this.contentEl = document.createElement('div');
    this.contentEl.className = 'deck-item-content';
    var contentWrap = document.createElement('div');
    contentWrap.className = 'deck-item-content_wrapper';
    this.el.appendChild(contentWrap);
    contentWrap.appendChild(this.contentEl);
    this.options = options;
    this.narrowMode = getViewportWidth() < this.options.breakpoint;
    this.index = index;
    window.addEventListener('resize', function (ev) {
      if (getViewportWidth() <= _this2.options.breakpoint) {
        if (!_this2.narrowMode) {
          console.log('resize, turning on');
          _this2.narrowMode = true; // this.turnOnNarrowMode()
        }

        _this2.photo.fitByBothSides(_this2.el);
      } else {
        if (_this2.narrowMode) {
          console.log('resize, turning Off');

          _this2.turnOffNarrowMode();
        }
      }
    });
    this.photo = new Photo(imageUrl);
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
    key: "loadPhoto",
    value: function loadPhoto(url) {
      var _this3 = this;

      return this.photo.load() // Photo.prototype.loadImage()
      .then(function (photo) {
        try {
          _this3.options.photoLoadCb(photo); // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
          // img.style.visibility = "hidden"


          photo.hide();

          _this3.contentEl.appendChild(photo.el);

          if (!_this3.narrowMode) {// at the moment, seems like we handle all of this with css,
            // and don't need to fite the photo and set it's container's width respectively
            // this.photo.fitByHeight(this.el)
            // this.el.style.width = this.photo.dims.width + 'px'
          } else {
            _this3.photo.fitByBothSides(_this3.contentEl);
          }

          _this3.photo.show(); // img.style.visibility = 'visible'

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

  _createClass(Deck, [{
    key: "calculateDeckOffset",
    value: function calculateDeckOffset(index) {
      if (getViewportWidth() < this.breakpoint) {
        var itemOffset = this.items[index].getOffset();
        var deckOffsetNew = -itemOffset;
        return deckOffsetNew;
      } else {
        var _itemOffset = this.items[index].getMidpoint();

        var galleryMidpoint = this.options.getGalleryWidth() / 2; // .getBoundingClientRect().width / 2

        var _deckOffsetNew = -_itemOffset + galleryMidpoint;

        console.log('Deck.calculateDeckOffset, index', index);
        console.log('Deck.calculateDeckOffset, items[index]', this.items[index]);
        console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint());
        console.log('Deck.calculateDeckOffset, itemOffset', _itemOffset);
        console.log('Deck.calculateDeckOffset, deckOffsetNew', _deckOffsetNew);
        return _deckOffsetNew;
      }
    }
    /*
    // TODO:
    getActualPositionWhileTransitioning() {
      return this.el.getBoundingClientRect().left + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
      - this.options.getGalleryPos().left
      + window.scrollX
    }
    */

  }, {
    key: "goToItem",
    value: function goToItem(index) {
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
        console.log("photos in the deck haven't loaded yet");
        return undefined;
      }

      var deckPositionNew = this.calculateDeckOffset(index); // TODO:
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
      var _this4 = this;

      return urls.map(function (url, i) {
        return new DeckItem(url, i, {
          breakpoint: _this4.breakpoint,
          photoLoadCb: function photoLoadCb() {
            console.log("photoLoadCb, deck.itemsLoaded: ", _this4.itemsLoaded);
            _this4.itemsLoaded++;

            if (_this4.itemsLoaded == _this4.items.length) {
              console.log("photoLoadCb, deck.itemsLoaded == deck.items.length, deck.itemsLoaded: ", _this4.itemsLoaded);
              _this4.loaded = true;

              _this4.options.loadCb();
            }
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
      var _this5 = this;

      this.items.forEach(function (item) {
        _this5.appendItem(item);
      });
    }
  }]);

  return Deck;
}();

var Gallery =
/*#__PURE__*/
function () {
  function Gallery(photoUrls, options) {
    var _this6 = this;

    _classCallCheck(this, Gallery);

    this.el = document.createElement('div');
    this.el.className = 'gallery';
    this.deck = new Deck(photoUrls, {
      getGalleryWidth: function getGalleryWidth() {
        return _this6.el.getBoundingClientRect().width;
      },
      loadCb: function loadCb() {
        _this6.activeItem = _this6.deck.goToItem(0); // this.goToNext.call(this)
      },
      breakpoint: options.breakpoint
    });
    this.el.appendChild(this.deck.el); // const activeItem = this.deck.goToItem(0)
    // this.activeItem = activeItem
  }

  _createClass(Gallery, [{
    key: "goToNext",
    value: function goToNext() {
      if (this.activeItem.index == this.deck.items.length - 1) return;
      if (!this.deck.loaded) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index + 1);
    }
  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      if (this.activeItem.index == 0) return;
      if (!this.deck.loaded) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index - 1);
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
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
// import {slide} from './slide.js'


function boot(photoUrls) {
  // const photoUrls = []
  var container = document.querySelector('.gallery-container'); // const deck = new Deck(photoUrls, {breakpoint: 800})

  var gallery = new _gallery_js__WEBPACK_IMPORTED_MODULE_0__["Gallery"](photoUrls, {
    breakpoint: 800
  });
  container.appendChild(gallery.el);
  console.log(gallery.deck);
  console.log('gallery', gallery); // gallery.deck.goToItem(3)
}

window.addEventListener('load', function () {
  boot(['media/in/14902841_1259112727483912_3284315106318981574_o.jpg', 'media/in/19875272_10100482296286706_3883306275546166676_n.jpg', 'media/in/3b.jpg', 'media/in/6a.jpg', 'media/in/DSC_0126.jpg', 'media/in/DSC_0128.JPG', 'media/in/DSC_0350.JPG']);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIk1hdGgiLCJtaW4iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRWaWV3cG9ydFdpZHRoIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiUGhvdG8iLCJ1cmwiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9ubG9hZCIsInNyYyIsImltZ0RpbXMiLCJjb250YWluZXJEaW1zIiwicmF0aW8iLCJ3aWR0aCIsImhlaWdodCIsImltZ0RpbXNOZXciLCJjb250YWluZXIiLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZSIsImNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXJkIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJEZWNrSXRlbSIsImltYWdlVXJsIiwiaW5kZXgiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwiY29udGVudEVsIiwiY29udGVudFdyYXAiLCJhcHBlbmRDaGlsZCIsIm5hcnJvd01vZGUiLCJicmVha3BvaW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiY29uc29sZSIsImxvZyIsInBob3RvIiwiZml0QnlCb3RoU2lkZXMiLCJ0dXJuT2ZmTmFycm93TW9kZSIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwib2Zmc2V0TGVmdCIsImdldE9mZnNldCIsImdldFdpZHRoIiwibG9hZCIsInRoZW4iLCJwaG90b0xvYWRDYiIsImhpZGUiLCJzaG93IiwiRGVjayIsImltYWdlVXJscyIsInBvc2l0aW9uIiwib2Zmc2V0IiwibG9hZGVkIiwiaXRlbXNMb2FkZWQiLCJpdGVtcyIsImluaXRJdGVtcyIsImFwcGVuZEl0ZW1zIiwidHJhbnNmb3JtIiwiaXRlbU9mZnNldCIsImRlY2tPZmZzZXROZXciLCJnZXRNaWRwb2ludCIsImdhbGxlcnlNaWRwb2ludCIsImdldEdhbGxlcnlXaWR0aCIsImxlbmd0aCIsIkVycm9yIiwidW5kZWZpbmVkIiwiZGVja1Bvc2l0aW9uTmV3IiwiY2FsY3VsYXRlRGVja09mZnNldCIsInRyYW5zaXRpb25pbmciLCJtYWtlTWF0cml4IiwidHJhbnNpdGlvbmVuZENiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImJpbmQiLCJ4IiwibGVmdCIsInJlbW92ZSIsInVybHMiLCJtYXAiLCJpIiwibG9hZENiIiwiaXRlbSIsImZvckVhY2giLCJhcHBlbmRJdGVtIiwiR2FsbGVyeSIsInBob3RvVXJscyIsImRlY2siLCJhY3RpdmVJdGVtIiwiZ29Ub0l0ZW0iLCJib290IiwiZ2FsbGVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVB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QUFPLENBQUNDLEdBQVIsQ0FBWTRELE9BQU8sQ0FBQ0osSUFBcEI7QUFDQXpELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUI0RCxPQUF2QixFQVZ1QixDQVd2QjtBQUNEOztBQUVEL0csTUFBTSxDQUFDZ0QsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNwQzhELE1BQUksQ0FBQyxDQUNILDhEQURHLEVBRUgsK0RBRkcsRUFHSCxpQkFIRyxFQUlILGlCQUpHLEVBS0gsdUJBTEcsRUFNSCx1QkFORyxFQU9ILHVCQVBHLENBQUQsQ0FBSjtBQVNELENBVkQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjk0Mjc4NS93aW5kb3ctaW5uZXJ3aWR0aC12cy1kb2N1bWVudC1kb2N1bWVudGVsZW1lbnQtY2xpZW50d2lkdGhcbi8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjM4OCNjMTRcbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KCkge1xuICAvLyBnZXRFbGVtZW50c0J5VGFnTmFtZSwgaWYgSSdtIG5vdCBtaXN0YWtlbiByZXR1cm5zIGEgbGl2ZWxpc3QgKGhlbGwga25vd3Mgd2hhdCB0aGF0IGlzLCBidXQgaXQnc1xuICAvLyB1cGRhdGVkIGxpdmUgLSBhcyBkb20gZ2V0cyBjaGFuZ2VkKS4gSSdtIG5vdCBzdXJlIGFib3V0IHVzaW5nIGl0LCBpdCBiZWhhdmVkIG1pc3RlcmlvdXNseSBvbmNlLi4uXG4gIC8vIEJ1dCwgcXVlcnlTZWxlY3RvciBpcyBub3Qgc28gY29tcGF0aWJsZS5cbiAgLy8gTWF5YmU6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aClcbiAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIDpcbiAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGgoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIDpcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aCk7XG59XG5cbmNsYXNzIFBob3RvIHtcbiAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmVsLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnNyYyA9IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIGNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzKGltZ0RpbXMsIGNvbnRhaW5lckRpbXMpIHtcbiAgICAvLyBjb25zdCBpbWdEaW1zID0gaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8gY29uc3QgY29udGFpbmVyRGltcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaW1nRGltcy5yYXRpbyA9IGltZ0RpbXMud2lkdGggLyBpbWdEaW1zLmhlaWdodFxuICAgIGNvbnRhaW5lckRpbXMucmF0aW8gPSBjb250YWluZXJEaW1zLndpZHRoIC8gY29udGFpbmVyRGltcy5oZWlnaHRcblxuICAgIC8vIGlmIHdpZGVyIHRoYW4gaGlnaGVyXG4gICAgaWYgKGltZ0RpbXMucmF0aW8gPj0gY29udGFpbmVyRGltcy5yYXRpbykge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy53aWR0aCAvIGltZ0RpbXMucmF0aW9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltZ0RpbXNOZXdcblxuICAgIC8vIGlmIGhpZ2hlciB0aGFuIHdpZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltZ0RpbXNOZXcgPSB7XG4gICAgICAgIC8vIHdpZHRoOiBjb250YWluZXJEaW1zLmhlaWdodCAqIGltZ0RpbXMucmF0aW8sXG4gICAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLmhlaWdodCAqIGltZ0RpbXMucmF0aW8sXG4gICAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltZ0RpbXNOZXdcbiAgICB9XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZUZpdEJ5SGVpZ2h0KGltZ0RpbXMsIGNvbnRhaW5lckRpbXMpIHtcbiAgICAvLyBjb25zdCBpbWdEaW1zID0gaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8gY29uc3QgY29udGFpbmVyRGltcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaW1nRGltcy5yYXRpbyA9IGltZ0RpbXMud2lkdGggLyBpbWdEaW1zLmhlaWdodFxuICAgIGNvbnN0IGltZ0RpbXNOZXcgPSB7XG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgIHJhdGlvOiBpbWdEaW1zLnJhdGlvXG4gICAgfVxuXG4gICAgcmV0dXJuIGltZ0RpbXNOZXdcbiAgfVxuXG4gIGZpdEJ5SGVpZ2h0KGNvbnRhaW5lcikge1xuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlIZWlnaHQoXG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgKVxuXG4gICAgLy8gY29uc3QgaW1nRGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nLCB0aGlzLmVsKVxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLmRpbXMud2lkdGhcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZGltcy5oZWlnaHRcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmaXRCeUJvdGhTaWRlcyhjb250YWluZXIpIHtcbiAgICB0aGlzLmRpbXMgPSB0aGlzLmNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzKFxuICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIClcblxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLmRpbXMud2lkdGggKyAncHgnXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRpbXMuaGVpZ2h0ICsgJ3B4J1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNsZWFySW5saW5lU3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTlcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0JylcbiAgICB9XG4gIH1cblxuICBoaWRlKGhhcmQpIHtcbiAgICBoYXJkID8gdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gIH1cblxuICBzaG93KGhhcmQpIHtcbiAgICBpZiAoaGFyZCkge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Zpc2liaWxpdHknKVxuICAgIH1cblxuICAgIC8vIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiIDogdGhpcy5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbiAgfVxufVxuXG5jbGFzcyBEZWNrSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCBpbmRleCwgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbSdcblxuICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnQnXG5cbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudFdyYXAuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50X3dyYXBwZXInXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb250ZW50V3JhcClcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbClcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLm5hcnJvd01vZGUgPSBnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgb24nKVxuICAgICAgICAgIHRoaXMubmFycm93TW9kZSA9IHRydWVcbiAgICAgICAgICAvLyB0aGlzLnR1cm5Pbk5hcnJvd01vZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBPZmYnKVxuICAgICAgICAgIHRoaXMudHVybk9mZk5hcnJvd01vZGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gICAgdGhpcy5waG90byA9IG5ldyBQaG90byhpbWFnZVVybClcbiAgICB0aGlzLmxvYWRQaG90bygpLmNhdGNoKChlcnIpID0+IHt0aHJvdyBlcnJ9KVxuICB9XG5cbiAgdHVybk9uTmFycm93TW9kZShtb2RlKSB7XG4gICAgLy8gdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuXG4gICAgLy8gdGhpcyBwZXJoYXBzIHdvdWxkIGJlIGJldHRlciB0byBzZXQgd2l0aCBjc3MgdndcbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gZ2V0Vmlld3BvcnRXaWR0aCgpICsgJ3B4J1xuXG4gICAgLy8gdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuICB9XG5cbiAgdHVybk9mZk5hcnJvd01vZGUoKSB7XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZmFsc2VcbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG5cbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgIHRoaXMucGhvdG8uY2xlYXJJbmxpbmVTdHlsZXMoKVxuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgRGVja1xuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0TGVmdFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBtaWRwb2ludCBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgZGVja1xuICBnZXRNaWRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXQoKSArICh0aGlzLmdldFdpZHRoKCkgLyAyKVxuICB9XG5cbiAgLyoqXG4gICAgQHBhcmFtIHtTdHJpbmd9IGhlaWdodCBoZWlnaHQgaW4gY3NzIHN5bnRheFxuICAqL1xuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHdpZHRoXG4gIH1cblxuICBsb2FkUGhvdG8odXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvdG8ubG9hZCgpIC8vIFBob3RvLnByb3RvdHlwZS5sb2FkSW1hZ2UoKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBob3RvTG9hZENiKHBob3RvKVxuXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIHRoZSBpbWcsIGJ1dCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCB3aXRoIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAoc28gZGlzcGxheTogbm9uZSBpcyBub3QgYSBmaXQpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICBwaG90by5oaWRlKClcbiAgICAgICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG5cbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBhdCB0aGUgbW9tZW50LCBzZWVtcyBsaWtlIHdlIGhhbmRsZSBhbGwgb2YgdGhpcyB3aXRoIGNzcyxcbiAgICAgICAgICAvLyBhbmQgZG9uJ3QgbmVlZCB0byBmaXRlIHRoZSBwaG90byBhbmQgc2V0IGl0J3MgY29udGFpbmVyJ3Mgd2lkdGggcmVzcGVjdGl2ZWx5XG5cbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG4gICAgICAgICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGVudEVsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5zaG93KClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgIHRocm93IGVyclxuICAgIC8vIH0pXG4gIH1cbn1cblxuY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnktZGVjaydcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIHRoaXMuYnJlYWtwb2ludCA9IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtc0xvYWRlZCA9IDBcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pbml0SXRlbXMoaW1hZ2VVcmxzKVxuICAgIHRoaXMuYXBwZW5kSXRlbXMoKVxuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNmb3JtIG1hdHJpeCBzdHlsaW5nXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuXG4gICAgLy8gd2luZG93Lm9uKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAvLyAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgICAgY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAgIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgICAgY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAgIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgICAgY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfVxuICB9XG5cbiAgLypcbiAgLy8gVE9ETzpcbiAgZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcbiAgICAtIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5UG9zKCkubGVmdFxuICAgICsgd2luZG93LnNjcm9sbFhcbiAgfVxuICAqL1xuXG4gIGdvVG9JdGVtKGluZGV4KSB7XG5cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5pdGVtcy5sZW5ndGgtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgZ28gdG8gdW5leGlzdGluZyBpdGVtIGF0IFwiKyBpbmRleClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJcIilcbiAgICAgIC8vIFRPRE86IG1ha2UgaXQgc28gaXQgY2FuIGdvIHRvIHRoZSBpdGVtcyB0aGF0IGFyZSBhbHJlYWR5IGxvYWRlZCwgYW5kXG4gICAgICAvLyB0aGVuLCBhZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZWNrIHNvIGl0IHN0YXlzIG9uIHRoZSBpdGVtIHdlJ3ZlIGdvbmUgdG9cbiAgICAgIC8vIGFzIG90aGVyIGl0ZW1zIGxvYWQgKGlmIG5lY2Vzc2FyeSkuXG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGltcGFjdGZ1bCBpZiB0aGUgZGVjayBpcyByaWdodCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFuZCB1c2VyXG4gICAgICAvLyB3YW50cyB0byBpbW1lZGlhdGVseSBiZSBhYmxlIHRvIGludGVyYWN0IHdpdGggdGhpbmdzLlxuICAgICAgY29uc29sZS5sb2coXCJwaG90b3MgaW4gdGhlIGRlY2sgaGF2ZW4ndCBsb2FkZWQgeWV0XCIpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbk5ldyA9IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldChpbmRleClcblxuICAgIC8vIFRPRE86XG4gICAgLy8gdGhpcy5vZmZzZXQgPSB0aGlzLnRyYW5zaXRpb25pbmdcbiAgICAvLyAgID8gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5nZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpXG4gICAgLy8gICA6IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cblxuICAgIHRoaXMub2Zmc2V0ID0gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSBkZWNrUG9zaXRpb25OZXdcblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYi5iaW5kKHRoaXMpKVxuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdXG5cbiAgfVxuXG4gIG1ha2VNYXRyaXgoeCkge1xuICAgIHJldHVybiAnbWF0cml4KDEsIDAsIDAsIDEsICcrIHggKycsIDApJ1xuICB9XG5cbiAgdHJhbnNpdGlvbmVuZENiKCkge1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24gKydweCdcblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuICB9XG5cbiAgaW5pdEl0ZW1zKHVybHMpIHtcbiAgICByZXR1cm4gdXJscy5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZWNrSXRlbSh1cmwsIGksIHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5icmVha3BvaW50LFxuICAgICAgICBwaG90b0xvYWRDYjogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICB0aGlzLml0ZW1zTG9hZGVkKytcblxuICAgICAgICAgIGlmICh0aGlzLml0ZW1zTG9hZGVkID09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkID09IGRlY2suaXRlbXMubGVuZ3RoLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2FkQ2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kSXRlbShpdGVtKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtLmVsKVxuICB9XG5cbiAgYXBwZW5kSXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5hcHBlbmRJdGVtKGl0ZW0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IocGhvdG9VcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeSdcblxuXG4gICAgdGhpcy5kZWNrID0gbmV3IERlY2socGhvdG9VcmxzLCB7XG4gICAgICBnZXRHYWxsZXJ5V2lkdGg6ICgpID0+IHsgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfSxcbiAgICAgIGxvYWRDYjogKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMClcbiAgICAgICAgLy8gdGhpcy5nb1RvTmV4dC5jYWxsKHRoaXMpXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludDogb3B0aW9ucy5icmVha3BvaW50XG4gICAgfSlcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZWNrLmVsKVxuXG5cbiAgICAvLyBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDApXG4gICAgLy8gdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbVxuICB9XG5cbiAgZ29Ub05leHQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSB0aGlzLmRlY2suaXRlbXMubGVuZ3RoLTEpIHJldHVyblxuICAgIGlmICghdGhpcy5kZWNrLmxvYWRlZCkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4KzEpXG4gIH1cblxuICBnb1RvUHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSAwKSByZXR1cm5cbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleC0xKVxuICB9XG4gIC8qXG4gIC8vIFRPRE86XG4gIC8vIGdldCB0aGUgYWN0dWFsIHBvc2l0aW9uIG9mIHRoZSBlbCwgcmVsYXRpdmUgdG8gYm9keS5cbiAgZ2V0QWJzUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gMFxuXG4gICAgLy8gY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpXG5cbiAgICAgIHBvc2l0aW9uID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgfVxuICAqL1xufVxuXG5leHBvcnQge0dhbGxlcnl9XG4iLCIvLyBpbXBvcnQge3NsaWRlfSBmcm9tICcuL3NsaWRlLmpzJ1xuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tICcuL2dhbGxlcnkuanMnXG5mdW5jdGlvbiBib290KHBob3RvVXJscykge1xuICAvLyBjb25zdCBwaG90b1VybHMgPSBbXVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuXG4gIC8vIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhwaG90b1VybHMsIHticmVha3BvaW50OiA4MDB9KVxuXG4gIGNvbnN0IGdhbGxlcnkgPSBuZXcgR2FsbGVyeShwaG90b1VybHMsIHticmVha3BvaW50OiA4MDB9KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeS5lbClcblxuICBjb25zb2xlLmxvZyhnYWxsZXJ5LmRlY2spXG4gIGNvbnNvbGUubG9nKCdnYWxsZXJ5JywgZ2FsbGVyeSlcbiAgLy8gZ2FsbGVyeS5kZWNrLmdvVG9JdGVtKDMpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBib290KFtcbiAgICAnbWVkaWEvaW4vMTQ5MDI4NDFfMTI1OTExMjcyNzQ4MzkxMl8zMjg0MzE1MTA2MzE4OTgxNTc0X28uanBnJyxcbiAgICAnbWVkaWEvaW4vMTk4NzUyNzJfMTAxMDA0ODIyOTYyODY3MDZfMzg4MzMwNjI3NTU0NjE2NjY3Nl9uLmpwZycsXG4gICAgJ21lZGlhL2luLzNiLmpwZycsXG4gICAgJ21lZGlhL2luLzZhLmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI2LmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI4LkpQRycsXG4gICAgJ21lZGlhL2luL0RTQ18wMzUwLkpQRydcbiAgXSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9