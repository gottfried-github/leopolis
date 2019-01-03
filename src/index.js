// import {slide} from './slide.js'
import {getBackgroundImageUrl} from './lib.js'
import {Gallery} from './gallery.js'
import {LargeView, Enlargable} from './large-view.js'

class ShowcaseImage extends Enlargable {
  constructor(el) {
    super(el, getBackgroundImageUrl(el))
    // this.image = new Enlargable()
  }
}

function initShowcases() {
  LargeView.init()
  document.querySelector('body').appendChild(LargeView.container)
  console.log('LargeView', LargeView)

  var els = document.querySelectorAll('#out .showcase .image-thumb')
  els = Array.prototype.slice.call(els, 0)

  console.log(els);

  els.forEach(el => {console.log(new ShowcaseImage(el))})
}

function initGallery(photoUrls) {
  const container = document.querySelector('.gallery-container')

  const gallery = new Gallery(photoUrls, {breakpoint: 800})
  container.appendChild(gallery.el)

  console.log('gallery', gallery)
}

function boot(galleryUrls) {
  initGallery(galleryUrls)
  initShowcases()
}

window.addEventListener('load', () => {
  boot([
    'media/in/14902841_1259112727483912_3284315106318981574_o.jpg',
    'media/in/19875272_10100482296286706_3883306275546166676_n.jpg',
    'media/in/3b.jpg',
    'media/in/6a.jpg',
    'media/in/DSC_0126.jpg',
    'media/in/DSC_0128.JPG',
    'media/in/DSC_0350.JPG'
  ])
})
