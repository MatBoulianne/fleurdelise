function revealHomepage() {
    const layer = document.querySelector('.layer');
    // const navbarLogo = document.querySelector('.navbar-logo');
    // const navbarLinks = document.querySelector('.navbar-links');
    const contentLeft = document.querySelector('.content__left');
    const contentRight = document.querySelector('.content__right');
    const fleurdelise = document.querySelector('.fleurdelise-animation');

    layer.classList.add('show');
    // navbarLogo.classList.add('show');
    // navbarLinks.classList.add('show');
    contentLeft.classList.add('show');
    contentRight.classList.add('show');
    fleurdelise.classList.add('show');
}

revealHomepage();