const navBtn = document.querySelector('.navbar__btn');
const navMobile = document.querySelector('.navbar__mobile');
const stopScroll = document.querySelector('.stop-scroll')
const body = document.body;

const showNavMobile = () => {
    navMobile.classList.toggle('active')
    bodyStyle()
}

const bodyStyle = () => {
    if (navMobile.classList.contains('active')) {
        body.classList.add('stop-scroll')
    } else {
        body.classList.remove('stop-scroll')
    }
}

navBtn.addEventListener('click', showNavMobile)