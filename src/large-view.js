import {getBackgroundImageUrl, getViewportWidth, getViewportHeight} from './lib.js'
import {Photo} from './photo.js'

const LargeView = {
  init(options) {
    options = options || {}
    if (options.transition) this.transitionSetup = options.transition
    this.options = options

    const container = document.createElement('div')

    // same as in the scss
    container.className = 'large-view_container'
    this.container = container
    this.container.addEventListener('click', () => {this.hide()})
    this.wrap = options.wrap || this.container

    this.wrap.style.opacity = '0'
    // this.wrap.classList.add('transparent')

    this.wrap.style.display = 'none'
    // this.container.classList.add('noned')
    this.hidden = true
    // this.photo = new Photo()
  },

  setPhoto(url) {
    const photo = new Photo(url)
    // this.photo = new Photo(url)

    return photo.load()
    // .then()
    .then((photo) => {
      try {
        if (this.hidden) {
          Promise.reject(new Error('the large-view container must be displayed before we can fit in the photo'))
        } else {
          // this.photo.hide(false)
          photo.hide(false)
          if (this.photo) {
            this.container.replaceChild(photo.el, this.photo.el)
          } else {
            this.container.appendChild(photo.el)
          }

          photo.fitByBothSides(this.container)
          photo.show(false)
          this.photo = photo
        }
      } catch(err) {
        Promise.reject(err)
      }
    })
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
  show(url) {
    // if (this.showPending) {
    //   window.clearTimeout(this.showTimeoutId)
    //   // this.container.removeEventListener()
    //
    //   // should removeEventListener of itself
    //   this.transitionendCb()
    //
    //
    // }
    return new Promise((resolve, reject) => {
      try {
        const self = this
        function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb)
          self.transitionOff()
          // this.container.classList.remove('transition')

          self.hidden = false

          console.log('LargeView.show, transitionendCb', self)
          resolve()
        }

        this.wrap.style.display = this.options.display || 'flex'
        // this.wrap.classList.remove('noned')
        this.wrap.addEventListener('transitionend', transitionendCb)
        this.transitionOn()

        this.showPending = true
        // this is nuts
        this.showTimeoutId = window.setTimeout(() => {
          this.showPending = false
          this.wrap.style.opacity = '1'
          // this.container.classList.add('transition')
        }, 50)

        // this.container.classList.add('solid')
      } catch(err) {
        reject(err)
      }
    })
    .then(() => {
      if (url) {
        return this.setPhoto(url)
      }
    }, (err) => {
      Promise.reject(err)
    })
  },

  hide() {
    return new Promise((resolve, reject) => {
      try {
        const self = this;
        function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb)
          self.transitionOff()
          // self.wrap.classList.remove('transition')
          self.wrap.style.display = 'none'
          self.photo.hide(false)
          // self.container.classList.add('noned')

          self.hidden = true
          console.log('LargeView.hide, transitionendCb', LargeView);
          resolve()
        }

        this.wrap.addEventListener('transitionend', transitionendCb)
        this.transitionOn()
        // this.container.classList.add('transition')

        this.wrap.style.opacity = '0'
        // this.container.classList.remove('solid')
      } catch(err) {
        reject(err)
      }
    })
  },

  transitionOff() {
    this.wrap.style.transition = 'none'
  },

  transitionOn() {
    this.wrap.style.transition = this.transitionSetup
  }
}

// console.log('LargeView', LargeView)

class Enlargable {
  constructor(el, url) {
    this.el = el
    this.url = url

    this.el.addEventListener('click', this.clickCb.bind(this))
  }

  enlarge(url) {
    LargeView.show(url)
    .then(() => {
      console.log('Enlargable.enlarge, LargeView shown')
    })
    .catch((err) => {
      console.log(err);
    })

  }

  clickCb() {
    console.log('Enlargable.clickCb, this: ', this);
    this.enlarge(this.url)
  }
}

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

export {LargeView, Enlargable}
