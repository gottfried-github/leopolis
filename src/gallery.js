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
      this.el.appendChild(photo.el)

      if (!this.narrowMode) {
        // at the moment, seems like we handle all of this with css,
        // and don't need to fite the photo and set it's container's width respectively

        // this.photo.fitByHeight(this.el)
        // this.el.style.width = this.photo.dims.width + 'px'
      } else {
        this.photo.fitByBothSides(this.el)
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

    this.breakpoint = options.breakpoint

    this.items = this.initItems(imageUrls)
    this.appendItems()

    // window.on('resize', (ev) => {
    //   if (getViewportWidth() < this.breakpoint) {
    //
    //   }
    // })
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

function boot(photoUrls) {
  // const photoUrls = []
  const container = document.querySelector('.gallery')

  const deck = new Deck(photoUrls, {breakpoint: 800})

  container.appendChild(deck.el)

  console.log(deck)
}

export {boot}
