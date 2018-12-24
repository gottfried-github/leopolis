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
  constructor() {

  }

  loadImage(url) {
    const img = document.createElement('img')

    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(img)
      }

      img.src = url
    })
  }

  fitImage() {

  }
}

class DeckItem {
  constructor(imageUrl, options) {
    this.el = document.createElement('div')
    this.el.className = 'deck-item'

    // this.narrowScreen = (typeof(options.narrowScreenMode) === 'undefined')
    //   ? false
    //   : options.narrowScreenMode

    this.breakpoint = options.breakpoint
    // this.contentBasedWidth = options.contentBasedWidth

    this.narrowMode = getViewportWidth() < this.breakpoint

    window.on('resize', (ev) => {
      if (getViewportWidth() < this.breakpoint) {
        if (!this.narrowMode) this.narrowMode = true

      } else if (this.narrowMode) {
        if (this.narrowMode) this.narrowMode = false
      }

    })

    // this.settings = {
    //   height: options.height
    // }

    this.loadPhoto(imageUrl)
  }

  turnOnNarrowMode(mode) {
    this.narrowMode = true
    this.el.style.width = getViewportWidth()
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

  calculateFitBoth(img, container) {
    const imgDims = img.getBoundingClientRect()
    const containerDims = container.getBoundingClientRect()

    imgDims.ratio = imgDims.width / imgDims.height
    containerDims.ratio = containerDims.width / containerDims.height

    // if wider than higher
    if (imgDims.ratio >= containerDims.ratio) {
      const imgDimsNew = {
        width: containerDims.width,
        height: containerDims.width / imgDims.ratio
      }

    // if higher than wider
    } else {
      const imgDimsNew = {
        // width: containerDims.height * imgDims.ratio,
        width: containerDims.height * imgDims.ratio,
        height: containerDims.height
      }
    }

    return imgDimsNew
  }

  calculateFitByHeight(img, container) {
    const imgDims = img.getBoundingClientRect()
    const containerDims = container.getBoundingClientRect()

    imgDims.ratio = imgDims.width / imgDims.height
    const imgDimsNew = {
      height: containerDims.height,
      width: containerDims.height * imgDims.ratio
    }

    return imgDimsNew
  }

  fitByHeight(img) {
    const imgDims = this.calculateFitByHeight(img, this.el)
    img.style.width = imgDims.width
    img.style.height = imgDims.height

    return img
  }

  fitBoth(img) {
    const imgDims = this.calculateFitByHeight(img, this.el)
    img.style.width = imgDims.width
    img.style.height = imgDims.height

    return img
  }

  loadPhoto(url) {
    this.loadImage() // Photo.prototype.loadImage()
    .then((img) => {

      // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
      img.style.visibility = "hidden"
      this.el.appendChild(img)

      if (!this.narrowMode) {
        // this.fitByHeight(img)
        const imgDims = this.calculateFitByHeight(img, this.el)
        img.style.width = imgDims.width + 'px'
        img.style.height = imgDims.height + 'px'

        if (this.contentBasedWidth) {
          this.el.style.width = imgDims.width + 'px'
        }
      } else {
        this.fitBoth(img)
      }

      img.style.visibility = 'visible'
    })
  }
}

class Deck {
  constructor(imageUrls, options) {
    this.el = document.createElement('div')
    this.el.className = 'gallery-deck'

    this.breakpoint = options.breakpoint

    this.items = this.setPhotos(imageUrls)

    window.on('resize', (ev) => {
      if (getViewportWidth() < this.breakpoint) {

      }
    })
  }

  setPhotos(urls) {
    return urls.map(() => {
      return new DeckItem(url, {

      })
    })
  }
}

class Gallery() {
  constructor() {

  }


}
