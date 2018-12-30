// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
// https://bugzilla.mozilla.org/show_bug.cgi?id=156388#c14
function getViewportHeight() {
  // getElementsByTagName, if I'm not mistaken returns a livelist (hell knows what that is, but it's
  // updated live - as dom gets changed). I'm not sure about using it, it behaved misteriously once...
  // But, querySelector is not so compatible.
  // Maybe: (document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth)
  return window.innerHeight && document.documentElement.clientHeight ?
    Math.min(window.innerHeight, document.documentElement.clientHeight) :
    window.innerHeight || document.documentElement.clientHeight
      || (document.querySelector('body') || document.getElementsByTagName('body')[0].clientHeight);
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ?
    Math.min(window.innerWidth, document.documentElement.clientWidth) :
    window.innerWidth || document.documentElement.clientWidth
      || (document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth);
}

class Photo {
  constructor(url) {
    this.url = url
    this.el = document.createElement('img')
  }

  load() {
    // const img = document.createElement('img')

    return new Promise((resolve, reject) => {
      this.el.onload = () => {
        resolve(this)
      }

      this.el.src = this.url
    })
  }

  calculateFitByBothSides(imgDims, containerDims) {
    // const imgDims = img.getBoundingClientRect()
    // const containerDims = container.getBoundingClientRect()

    imgDims.ratio = imgDims.width / imgDims.height
    containerDims.ratio = containerDims.width / containerDims.height

    // if wider than higher
    if (imgDims.ratio >= containerDims.ratio) {
      const imgDimsNew = {
        width: containerDims.width,
        height: containerDims.width / imgDims.ratio
      }

      return imgDimsNew

    // if higher than wider
    } else {
      const imgDimsNew = {
        // width: containerDims.height * imgDims.ratio,
        width: containerDims.height * imgDims.ratio,
        height: containerDims.height
      }

      return imgDimsNew
    }

  }

  calculateFitByHeight(imgDims, containerDims) {
    // const imgDims = img.getBoundingClientRect()
    // const containerDims = container.getBoundingClientRect()

    imgDims.ratio = imgDims.width / imgDims.height
    const imgDimsNew = {
      height: containerDims.height,
      width: containerDims.height * imgDims.ratio,
      ratio: imgDims.ratio
    }

    return imgDimsNew
  }

  fitByHeight(container) {
    this.dims = this.calculateFitByHeight(
      this.el.getBoundingClientRect(),
      container.getBoundingClientRect()
    )

    // const imgDims = this.calculateFitByHeight(img, this.el)
    this.el.style.width = this.dims.width
    this.el.style.height = this.dims.height

    return this
  }

  fitByBothSides(container) {
    this.dims = this.calculateFitByBothSides(
      this.el.getBoundingClientRect(),
      container.getBoundingClientRect()
    )

    this.el.style.width = this.dims.width + 'px'
    this.el.style.height = this.dims.height + 'px'

    return this
  }

  clearInlineStyles() {
    if (this.el.style.removeProperty) {
      this.el.style.removeProperty('width')
      this.el.style.removeProperty('height')
    } else {
      // IE9
      this.el.style.removeAttribute('width')
      this.el.style.removeAttribute('height')
    }
  }

  hide(hard) {
    hard ? this.el.style.display = "none" : this.el.style.visibility = "hidden"
  }

  show(hard) {
    if (hard) {
      this.el.style.removeProperty('display')
    } else {
      this.el.style.removeProperty('visibility')
    }

    // hard ? this.el.style.display = "inline" : this.el.style.visibility = "visible"
  }
}

class DeckItem {
  constructor(imageUrl, options) {
    this.el = document.createElement('div')
    this.el.className = 'deck-item'

    this.contentEl = document.createElement('div')
    this.contentEl.className = 'deck-item-content'

    const contentWrap = document.createElement('div')
    contentWrap.className = 'deck-item-content_wrapper'
    this.el.appendChild(contentWrap)
    contentWrap.appendChild(this.contentEl)

    this.breakpoint = options.breakpoint

    this.narrowMode = getViewportWidth() < this.breakpoint

    window.addEventListener('resize', (ev) => {
      if (getViewportWidth() <= this.breakpoint) {
        if (!this.narrowMode) {
          console.log('resize, turning on')
          this.narrowMode = true
          // this.turnOnNarrowMode()
        }

        this.photo.fitByBothSides(this.el)

      } else {
        if (this.narrowMode) {
          console.log('resize, turning Off')
          this.turnOffNarrowMode()
        }
      }

    })

    this.photo = new Photo(imageUrl)
    this.loadPhoto()
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

  loadPhoto(url) {
    this.photo.load() // Photo.prototype.loadImage()
    .then((photo) => {

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
    })
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

  calculateDeckOffset(index) {
    if (getViewportWidth() < this.breakpoint) {
      const itemOffset = this.items[index].getOffset()
      const deckOffsetNew = -itemOffset

      return deckOffsetNew
    } else {
      const itemOffset = this.items[index].getMidpoint()

      const galleryMidpoint = this.options.getGalleryWidth() / 2 // .getBoundingClientRect().width / 2
      const deckOffsetNew = -itemOffset + galleryMidpoint

      console.log('Deck.calculateDeckOffset, index', index)
      console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)

      return deckOffsetNew
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

  goToItem(index) {

    if (index < 0 || index > this.items.length-1) {
      throw new Error("can't go to unexisting item at "+ index)
      return
    }

    const deckPositionNew = this.calculateDeckOffset(index)

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
    return urls.map((url) => {
      return new DeckItem(url, {
        breakpoint: this.breakpoint
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
      getGalleryWidth: () => { return this.el.getBoundingClientRect().width },
      breakpoint: options.breakpoint
    })

    this.el.appendChild(this.deck.el)
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
