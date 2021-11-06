const close = document.getElementById('close')
const open = document.getElementById('open')
const nav = document.getElementsByClassName('responsive-navigation')[0]
const navInner = document.getElementsByClassName('responsive-navigation-inner')[0]
const bodyToClose = document.getElementsByClassName('block-to-close')[0]

const ANIMATE_OPEN = 'animate-open'
const ANIMATE_CLOSE = 'animate-close'

function toClose() {
    navInner.classList.remove(ANIMATE_OPEN)
    navInner.classList.add(ANIMATE_CLOSE)
    setTimeout(function() {
        navInner.classList.remove(ANIMATE_CLOSE)
        nav.style.display = 'none'
    }, 670)
}

function toOpen() {
    navInner.classList.remove(ANIMATE_CLOSE)
    nav.style.display = 'block'
    navInner.classList.add(ANIMATE_OPEN)
    setTimeout(function() {
        navInner.classList.remove(ANIMATE_OPEN)
    }, 800)
}

open.addEventListener('click', toOpen)

close.addEventListener('click', toClose)
navInner.addEventListener('click', function() {})
bodyToClose.addEventListener('click', toClose)