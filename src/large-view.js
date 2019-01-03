import {getBackgroundImageUrl, getViewportWidth, getViewportHeight} from './lib.js'
import {Photo} from 'photo.js'

const LargeView = {
  init(photoUrl) {
    const container = document.createElement('div')

    // same as in the scss
    container.className = 'large-view_container'
    this.container = container
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

class Enlargable {
  constructor() {

  }
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
