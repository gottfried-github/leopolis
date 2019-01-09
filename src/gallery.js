import {Photo} from './photo.js'
import {getViewportWidth, getViewportHeight, logFactory} from './lib.js'

class DeckItem {
  constructor(imageUrl, index, options) {
    this.el = document.createElement('div')
    this.el.className = 'deck-item'

    this.contentEl = document.createElement('div')
    this.contentEl.className = 'deck-item-content'

    const contentWrap = document.createElement('div')
    contentWrap.className = 'deck-item-content_wrapper'
    this.el.appendChild(contentWrap)
    contentWrap.appendChild(this.contentEl)

    this.options = options || {}
    this.narrowMode = getViewportWidth() < this.options.breakpoint
    this.index = index

    window.addEventListener('resize', (ev) => {
      if (getViewportWidth() <= this.options.breakpoint) {
        if (!this.narrowMode) {
          // console.log('resize, turning on')
          this.narrowMode = true
          // this.turnOnNarrowMode()
        }

        this.photo.fitByBothSides(this.el)

      } else {
        if (this.narrowMode) {
          // console.log('resize, turning Off')
          this.turnOffNarrowMode()
        }
      }

    })

    this.photo = new Photo(imageUrl)
    this.loadPhoto().catch((err) => {throw err})
  }

  turnOnNarrowMode(mode) {
    // this.narrowMode = true

    // this perhaps would be better to set with css vw
    // this.el.style.width = getViewportWidth() + 'px'

    // this.photo.fitByBothSides(this.el)
  }

  turnOffNarrowMode() {
    this.narrowMode = false
    // this.photo.fitByHeight(this.el)

    // this.el.style.width = this.photo.dims.width + 'px'
    this.photo.clearInlineStyles()
  }

  getWidth() {
    return this.el.getBoundingClientRect().width
  }

  // get position of the item, relative to the containing Deck
  getOffset() {
    return this.el.offsetLeft
  }

  // get position of the midpoint of the item, relative to the containing deck
  getMidpoint() {
    return this.getOffset() + (this.getWidth() / 2)
  }

  /**
    @param {String} height height in css syntax
  */
  setHeight(height) {
    this.el.style.height = height
  }

  setWidth(width) {
    this.el.style.width = width
  }

  isInView() {
    const offset = this.getOffset()
    const deckPosition = this.options.getDeckPosition()
    console.log('deckItem.isInView, offset: ', offset);
    console.log('deckItem.isInView, width: ', this.getWidth());
    console.log('deckItem.isInView, getDeckPosition: ', this.options.getDeckPosition());
    console.log('deckItem.isInView, getGalleryViewportWidth: ', this.options.getGalleryViewportWidth());

    // deckPosition could be negative
    return offset + deckPosition >= 0 &&
    deckPosition + offset + this.getWidth() <= this.options.getGalleryViewportWidth()
      ? true : false

    // if (
    //   this.getOffset() + this.options.getDeckPosition() > 0 &&
    //   this.getOffset() + this.getWidth() < this.options.getGalleryViewportWidth()
    // ) {
    //
    // }
  }

  loadPhoto(url) {
    return this.photo.load() // Photo.prototype.loadImage()
    .then((photo) => {
      try {
        this.options.photoLoadCb(photo)

        // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
        // img.style.visibility = "hidden"
        photo.hide()
        this.contentEl.appendChild(photo.el)

        if (!this.narrowMode) {
          // at the moment, seems like we handle all of this with css,
          // and don't need to fite the photo and set it's container's width respectively

          // this.photo.fitByHeight(this.el)
          // this.el.style.width = this.photo.dims.width + 'px'
        } else {
          this.photo.fitByBothSides(this.contentEl)
        }

        this.photo.show()
        // img.style.visibility = 'visible'
      } catch(err) {
        Promise.reject(err)
      }

    })
    // .catch((err) => {
    //   throw err
    // })
  }
}

class Deck {
  constructor(imageUrls, options) {
    this.el = document.createElement('div')
    this.el.className = 'gallery-deck'

    this.options = options

    this.breakpoint = options.breakpoint
    this.position = 0
    this.offset = 0

    this.loaded = false
    this.itemsLoaded = 0
    this.items = this.initItems(imageUrls)
    this.appendItems()

    // initialize the transform matrix styling
    this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'

    // window.on('resize', (ev) => {
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

  calculateDeckOffsetCentered(index) {
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

  calculateDeckOffset(index) {
    const itemOffset = this.items[index].getOffset()
    const deckOffsetNew = -itemOffset

    return deckOffsetNew
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
  goToItem(index, centered) {

    if (index < 0 || index > this.items.length-1) {
      throw new Error("can't go to unexisting item at "+ index)
    }

    if (!this.loaded) {
      // throw new Error("")
      // TODO: make it so it can go to the items that are already loaded, and
      // then, adjust the position of the deck so it stays on the item we've gone to
      // as other items load (if necessary).
      // This could be impactful if the deck is right at the top of the page and user
      // wants to immediately be able to interact with things.
      // console.log("photos in the deck haven't loaded yet");
      return undefined
    }

    const deckPositionNew = centered ? this.calculateDeckOffsetCentered(index) : this.calculateDeckOffset(index)

    // TODO:
    // this.offset = this.transitioning
    //   ? deckPositionNew - this.getActualPositionWhileTransitioning()
    //   : deckPositionNew - this.position

    this.offset = deckPositionNew - this.position
    this.position = deckPositionNew

    if (this.transitioning) {
      this.el.style.transform = this.makeMatrix(this.offset)
    } else {

      function transitionendCb() {
        this.transitionendCb()
        this.el.removeEventListener('transitionend', transitionendCb)
        this.transitioning = false
      }

      this.el.classList.add('transition')

      this.transitioning = true
      this.el.addEventListener('transitionend', transitionendCb.bind(this))
      this.el.style.transform = this.makeMatrix(this.offset)
    }

    return this.items[index]

  }

  makeMatrix(x) {
    return 'matrix(1, 0, 0, 1, '+ x +', 0)'
  }

  transitionendCb() {
    this.el.style.left = this.position +'px'

    this.el.classList.remove('transition')
    this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
  }

  initItems(urls) {
    return urls.map((url, i) => {
      return new DeckItem(url, i, {
        breakpoint: this.breakpoint,
        photoLoadCb: () => {
          // console.log("photoLoadCb, deck.itemsLoaded: ", this.itemsLoaded);
          this.itemsLoaded++

          if (this.itemsLoaded == this.items.length) {
            // console.log("photoLoadCb, deck.itemsLoaded == deck.items.length, deck.itemsLoaded: ", this.itemsLoaded);
            this.loaded = true
            this.options.loadCb()
          }
        },
        getGalleryViewportWidth: this.options.getGalleryViewportWidth,
        getDeckPosition: () => {return this.position}
      })
    })
  }

  appendItem(item) {
    this.el.appendChild(item.el)
  }

  appendItems() {
    this.items.forEach(item => {
      this.appendItem(item)
    })
  }
}

class Gallery {
  constructor(photoUrls, options) {
    this.el = document.createElement('div')
    this.el.className = 'gallery'


    this.deck = new Deck(photoUrls, {
      getGalleryViewportWidth: () => { return this.el.getBoundingClientRect().width },
      loadCb: () => {
        this.activeItem = this.deck.goToItem(0, false)
        // this.goToNext.call(this)
      },
      breakpoint: options.breakpoint
    })

    this.el.appendChild(this.deck.el)


    // const activeItem = this.deck.goToItem(0)
    // this.activeItem = activeItem
  }

  goToNext() {
    if (!this.deck.loaded) return
    if (this.activeItem.index == this.deck.items.length-1) return

    this.activeItem = this.deck.goToItem(this.activeItem.index+1, true)
  }

  goToPrevious() {
    if (!this.deck.loaded) return
    if (this.activeItem.index == 0) return

    this.activeItem = this.deck.goToItem(this.activeItem.index-1, true)
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
}

export {Gallery}
