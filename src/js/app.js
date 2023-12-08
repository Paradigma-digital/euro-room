import scrollElement from './components/scrollElement.js';
import anime from 'animejs/lib/anime.es.js';
import Swiper, {Navigation, Pagination} from 'swiper';
import select from './components/select.js';
import modalShow from './components/modalShow.js';

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

    select()

    modalShow()

    scrollElement('.task-kub-svg')
    
    const paths = document.querySelectorAll('.main-title svg path');
    anime({
        targets: paths,
        duration: 2000,
        delay: 200,
        easing: 'easeInOutExpo',
        strokeDashoffset: [anime.setDashoffset, 0],
        complete: function () {
            paths.forEach(i => {
                setTimeout(()=> {
                    i.style.fill = i.getAttribute('stroke')
                    i.removeAttribute('stroke')
                }, 500)
            })
            
        }
    })

    const aboutClients = new Swiper('.about-clients-container', {
        slidesPerView: 14,
        slidesPerColumn: 2,
        spaceBetween: 12,
        allowTouchMove: false,
    })

    const mapSlider = new Swiper('.map-slider-container', {
        slidesPerView: 2,
        spaceBetween: 50,
    })

    const mapContry = document.querySelectorAll('.map-item'),
          mapSlides = document.querySelectorAll('.map-slide')

    mapContry.forEach(i => {
        i.addEventListener('click', () => {
            mapContry.forEach(j => j.classList.remove('active'))
            i.classList.add('active')
            mapSlides.forEach(slide => {
                if (slide.getAttribute('data-contry') != i.getAttribute('data-contry')) {
                    slide.classList.add('hide')
                } else {
                    slide.classList.remove('hide')
                }
            })
            mapSlider.update()
        })
    })

    // Якорные ссылки
    // const header = document.querySelector('.header');
    
    // const topOffset = header.offsetHeight;
    // const smoothScroll = new ScrollToAnchor({
    //     // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
    //     offset: topOffset,
    //     duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    // });


    const mainListBg = document.querySelectorAll('.main-item')
    mainListBg.forEach(i => {
        i.addEventListener('mouseover', ()=> {
            i.closest('.main-list').style.backgroundImage = `url(${i.getAttribute('data-bg')})`
        })
    })

});