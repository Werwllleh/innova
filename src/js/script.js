document.addEventListener('DOMContentLoaded', () => {

    const background = document.querySelector('.bg');

    /*=============SUB-MENU==========*/
    const menuLinks = document.querySelectorAll('.header__nav-link');
    const arrow = document.querySelectorAll('.menu-arrow');

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("mouseenter", showSub, false);
        menuLinks[i].addEventListener("mouseleave", hideSub, false);
    }

    function showSub(e) {
        if (this.children.length > 1) {
            this.children[0].style.color = "#337AE0";
            this.children[0].classList.add('open-menu');
            this.children[1].style.height = "auto";
            this.children[1].style.overflow = "visible";
            this.children[1].style.opacity = "1";
            background.classList.add('blackout');
        } else {
            return false;
        }
    }

    function hideSub(e) {
        if (this.children.length > 1) {
            this.children[0].style.color = "#3A3C40";
            this.children[0].classList.remove('open-menu');
            this.children[1].style.height = "0px";
            this.children[1].style.overflow = "hidden";
            this.children[1].style.opacity = "0";
            background.classList.remove('blackout');
        } else {
            return false;
        }
    }


    /*=============SUB-MENU==========*/


    /*=============SLIDERS==========*/
    new Swiper('.stocks__slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        // And if we need scrollbar
        scrollbar: false,
    });

    new Swiper('.doctors__slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        // And if we need scrollbar
        scrollbar: false,
    });

    new Swiper('.feedback__slider', {
        // Optional parameters
        slidesPerView: 2.8,
        centeredSlides: true,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        // And if we need scrollbar
        scrollbar: false,
    });

    new Swiper('.portfolio__slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        // And if we need scrollbar
        scrollbar: false,
    });

    new Swiper('.map__info-slider', {
        // Optional parameters
        slidesPerView: 3.4,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: false,

        // Navigation arrows
        navigation: {
            prevEl: '.map-slider-button-prev',
            nextEl: '.map-slider-button-next',
        },

        // And if we need scrollbar
        scrollbar: false,
    });

    /*============/SLIDERS==========*/


    const mapSwitchBtns = document.querySelectorAll('.map__info-placebtn');
    const mapInfoBlock = document.querySelector('.map__info-content');

    mapSwitchBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('data-place') === 'place1') {
                mapSwitchBtns[0].classList.add('active');
                mapSwitchBtns[1].classList.remove('active');
                mapInfoBlock.children[0].classList.add('show');
                mapInfoBlock.children[1].classList.remove('show');
            }
            if (btn.getAttribute('data-place') === 'place2') {
                mapSwitchBtns[1].classList.add('active');
                mapSwitchBtns[0].classList.remove('active');
                mapInfoBlock.children[1].classList.add('show');
                mapInfoBlock.children[0].classList.remove('show');
            }
        })
    });

    const questions = document.querySelectorAll('.qa__question-checkbox');

    questions.forEach((question) => {
        question.addEventListener('click', (e) => {
            let input = e.currentTarget;
            let answer = e.currentTarget.parentNode.parentNode.children[1];

            if (input.checked === true) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
        })
    });


    /*============MAP==========*/

    const places = {
        place1: [{
            lat: 56.138666,
            lon: 47.216191,
        }],
        place2: [{
            lat: 56.126088,
            lon: 47.230198,
        }],
    }

    function init() {
        let map = new ymaps.Map('mapInner', {
            center: [56.138666, 47.216191],
            zoom: 14
        });

        let activeCategory = "place1";

        const showCategory = (category) => {
            map.geoObjects.removeAll();

            places[category].forEach((item) => {
                const placemark = new ymaps.Placemark([item.lat, item.lon], {}, {
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: './src/img/icons/map-place.svg',
                    // Размеры метки.
                    iconImageSize: [57, 73],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-29, -68]
                });

                map.geoObjects.add(placemark);
            });

            activeCategory = category;
        }

        mapSwitchBtns.forEach((button) => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-place');
                showCategory(category);
            });
        });

        showCategory(activeCategory);


        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.controls.remove('typeSelector'); // удаляем тип

    }

    ymaps.ready(init);

    /*===========/MAP==========*/

})



