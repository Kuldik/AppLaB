
const navLink = document.querySelectorAll('.nav__link[data-goto]');
    if (menuLinks.length > 0) {
        navLink.forEach(navLink => {
            navLink.addEventListener('click', onMenuLinkKlick);
        });

    function onMenuLinkKlick(e) {
        const navLink = e.target;
        if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            // высчитывапет расстояние с учетом вычета высоты intro__inner для корректной прокрутки
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smoothqw'
            });
            e.preventDefault(); // отключение ссылки, для блокировки нежелательного перехода
        }
    }
}


