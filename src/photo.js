import {getViewportWidth, getViewportHeight} from './lib.js'

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

export {Photo}
