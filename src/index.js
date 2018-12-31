// import {slide} from './slide.js'
import {Gallery} from './gallery.js'
function boot(photoUrls) {
  // const photoUrls = []
  const container = document.querySelector('.gallery-container')

  // const deck = new Deck(photoUrls, {breakpoint: 800})

  const gallery = new Gallery(photoUrls, {breakpoint: 800})
  container.appendChild(gallery.el)

  console.log(gallery.deck)
  console.log('gallery', gallery)
  // gallery.deck.goToItem(3)
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
