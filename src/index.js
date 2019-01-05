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
//
// function initShowcases() {
//   var els = document.querySelectorAll('#out .showcase .image-thumb')
//   els = Array.prototype.slice.call(els, 0)
//
//   // console.log(els);
//
//   els.forEach(el => {new ShowcaseImage(el)})
// }

function initEnlargables(selector) {
  var els = document.querySelectorAll(selector)
  els = Array.prototype.slice.call(els, 0)

  // console.log(els);

  els.forEach(el => {new ShowcaseImage(el)})
}

function initGallery(photoUrls) {
  const container = document.querySelector('.gallery-container')

  const gallery = new Gallery(photoUrls, {breakpoint: 800})
  container.appendChild(gallery.el)

  console.log('gallery', gallery)
}

function boot(galleryUrls) {
  const largeViewWrap = document.querySelector('.large-view_wrap')
  LargeView.init({
    transition: 'opacity 0.4s',
    display: 'block',
    wrap: largeViewWrap
  })

  largeViewWrap.appendChild(LargeView.container)
  largeViewWrap.querySelector('.icon#cross').addEventListener('click', () => {
    LargeView.hide()
  })
  
  console.log('LargeView', LargeView)

  initGallery(galleryUrls)

  initEnlargables('#out .showcase .image-thumb')
  initEnlargables('#staff .member .avatar')
  new ShowcaseImage(document.querySelector('#contact .street-view'))
  // els.forEach(el => {new ShowcaseImage(el)})

  // initShowcases()
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
