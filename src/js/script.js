document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', (event) => {
        console.log(event)
    });

    const background = document.querySelector('.bg');

    /*=============SUB-MENU*==========*/
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


    /*=============SUB-MENU*==========*/
})


