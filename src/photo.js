import {getViewportWidth, getViewportHeight} from './lib.js'

class Photo {
  constructor(url) {
    this.url = url
    this.el = document.createElement('img')
  }

  load() {
    // const img = document.createElement('img')

    return new Promise((resolve, reject) => {

      var loaded = false
      // maybe this doesnt work in safari mobile...
      this.el.onload = () => {
        if (!loaded)
          resolve(this)
      }

      this.el.onerror = (err) => {
        if (!loaded)
          reject(err)
      }

      this.el.src = this.url
      if (this.el.complete && this.el.naturalWidth > 0) {
        console.log('photo.load, img.complete && naturalWidth > 0');
        if (!loaded) {
          loaded = true
          resolve(this)
        }
      }
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
    const imgDims = this.el.getBoundingClientRect()
    const containerDims = container.getBoundingClientRect()

    const imgDimsObj = {
      width: imgDims.width,
      height: imgDims.height,
    }

    const containerDimsObj = {
      width: containerDims.width,
      height: containerDims.height,
    }

    this.dims = this.calculateFitByHeight(
      imgDimsObj,
      containerDimsObj
    )

    // const imgDims = this.calculateFitByHeight(img, this.el)
    this.el.style.width = Math.round(this.dims.width) + 'px'
    this.el.style.height = Math.round(this.dims.height) + 'px'

    return this
  }

  // in fitByHeight I didn't convert dims to string before setting them on
  // width and height in inline styles.. However, I believe, on mobile the fitByBothSides
  // should have been called, where there wasn't this typo. In the fitByBothSides I didn't
  // convert the values to whole numbers, none the less.

  // I fixed that, and I also decided to move the values of getBoundingClientRect output
  // to a regular object literal, instead of using the output itself (which i believe is an instance
  // of some special class), including adding new properties to it.

  // Another thing I want to check is whether or not the width and height in getBoundingClientRect are
  // basic implementation.. Also, maybe it makes sense to parseInt the values of getBoundingClientRect,
  // or doing something in that spirit
  fitByBothSides(container) {
    const imgDims = this.el.getBoundingClientRect()
    const containerDims = container.getBoundingClientRect()

    const imgDimsObj = {
      width: imgDims.width,
      height: imgDims.height,
    }

    const containerDimsObj = {
      width: containerDims.width,
      height: containerDims.height,
    }

    this.dims = this.calculateFitByBothSides(
      imgDimsObj,
      containerDims
    )

    this.el.style.width = Math.round(this.dims.width) + 'px'
    this.el.style.height = Math.round(this.dims.height) + 'px'

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

export {Photo}
