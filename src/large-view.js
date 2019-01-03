import {getBackgroundImageUrl, getViewportWidth, getViewportHeight} from './lib.js'
import {Photo} from './photo.js'

const LargeView = {
  init(photoUrl) {
    const container = document.createElement('div')

    // same as in the scss
    container.className = 'large-view_container'
    this.container = container

    this.container.classList.add('transparent')
    this.container.classList.add('noned')
    this.hidden = true
  },

  setPhoto(url) {
    this.photo = new Photo(url)

    return this.photo.load()
    // .then()
    .then(() => {
      try {
        if (this.hidden) {
          Promise.reject(new Error('the large-view container must be displayed before we can fit in the photo'))
        } else {
          this.photo.hide(false)
          this.container.appendChild(this.photo.el)

          this.photo.fitByBothSides(this.container)
          this.photo.show(false)
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
    return new Promise((resolve, reject) => {
      try {
        function transitionendCb() {
          this.container.classList.remove('transition')
          this.container.removeEventListener('transitionend', transitionendCb)

          this.hidden = false

          resolve()
        }

        this.container.classList.remove('noned')

        this.container.classList.add('transition')
        this.container.addEventListener('transitionend', transitionendCb.bind(this))

        this.container.classList.remove('transparent')
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
        function transitionendCb() {
          this.container.classList.remove('transition')
          this.container.classList.add('noned')

          this.container.removeEventListener('transitionend', transitionendCb)

          this.hidden = true
          resolve()
        }

        this.container.classList.add('transition')
        this.container.addEventListener('transitionend', transitionendCb.bind(this))

        this.container.classList.add('transparent')
      } catch(err) {
        reject(err)
      }
    })
  },
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
