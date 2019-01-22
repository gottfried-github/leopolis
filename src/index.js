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

function nodeListToArray(selector) {
  var els = document.querySelectorAll(selector)
  els = Array.prototype.slice.call(els, 0)
  return els
}

function initEnlargables(selector) {
  // var els = document.querySelectorAll(selector)
  // els = Array.prototype.slice.call(els, 0)

  // console.log(els);
  var els = nodeListToArray(selector)

  els.forEach(el => {new ShowcaseImage(el)})
}

function initGallery(photoUrls) {
  const container = document.querySelector('.gallery-container')

  const gallery = new Gallery(photoUrls, {breakpoint: 800})
  container.appendChild(gallery.el)

  const arrows = document.querySelector('.gallery-wrap')
  arrows.querySelector('.icon#bwd')
    .addEventListener('click', gallery.goToPrevious.bind(gallery))
  arrows.querySelector('.icon#fwd')
    .addEventListener('click', gallery.goToNext.bind(gallery))

  console.log('gallery', gallery)
}

function initLangSwitch() {

  const contentEn = nodeListToArray('.text.en')
  const contentUa = nodeListToArray('.text.ua')

  function switchToEn() {
    contentUa.forEach(el => el.classList.add('noned'))
    contentEn.forEach(el => el.classList.remove('noned'))
  }

  function switchToUa() {
    contentEn.forEach(el => el.classList.add('noned'))
    contentUa.forEach(el => el.classList.remove('noned'))
  }

  const enSwitch = document.querySelector('.lang-switch #en');
  const uaSwitch = document.querySelector('.lang-switch #ua');

  enSwitch.addEventListener('click', () => {
    enSwitch.classList.add('noned')
    uaSwitch.classList.remove('noned')

    switchToEn()
  })

  uaSwitch.addEventListener('click', () => {
    uaSwitch.classList.add('noned')
    enSwitch.classList.remove('noned')

    switchToUa()
  })
}

function initNavAnimation(navBreakpoint) {
  const nav = document.querySelector('.navigation')
  // const logo = document.querySelector('.header_container .logo')
  // const lang = document.querySelector('.header_container .lang-switch')

  var enlarged = true
  window.addEventListener('scroll', (ev) => {
    if (window.scrollY > navBreakpoint && enlarged) {
      nav.classList.remove('larger')
      // logo.classList.remove('larger')
      // lang.classList.remove('larger')
      enlarged = false

    } else if (window.scrollY < navBreakpoint && !enlarged) {
      nav.classList.add('larger')
      // logo.classList.add('larger')
      // lang.classList.add('larger')
      enlarged = true
    }
  })
}

function boot(galleryUrls) {
  initLangSwitch()

  const largeViewWrap = document.querySelector('.large-view_wrap')
  LargeView.init({
    transition: 'opacity 0.4s',
    display: 'block',
    wrap: largeViewWrap
  })

  largeViewWrap.classList.remove('noned')

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
  initNavAnimation(25)
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
