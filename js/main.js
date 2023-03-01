
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    const bodyOverflowY = body.style.overflowY;
    body.style.overflowY = bodyOverflowY === 'hidden' ? 'auto' : 'hidden';
});

let mySwiper;

const enableSwiper = function () {
    mySwiper = new Swiper('.swiper', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
    });
};

const tagsA = document.querySelectorAll(".nav__link");

const closeBurgerMenuOnClick = () => {
    body.style.overflowY = 'auto';
    nav.classList.remove('menu-open');
}

const breakpoint = window.matchMedia('(max-width:751px)');

breakpoint.onchange = () => {

    if (breakpoint.matches) {
        // Активируем Swiper
        enableSwiper()

        if (tagsA) {
            Array.from(tagsA).forEach((tagA) => {
                tagA.addEventListener("click", closeBurgerMenuOnClick)
            })
        }
    } else {
        // Убираем Swiper
        if (mySwiper !== undefined) mySwiper.destroy(true, true)
        
        if (tagsA) {
            Array.from(tagsA).forEach((tagA) => {
                tagA.removeEventListener("click", closeBurgerMenuOnClick)
            })
        }
    }
}

// init script
breakpoint.onchange()

