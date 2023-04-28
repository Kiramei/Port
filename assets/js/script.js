var flg_ = true
var topBack = $('#top-back')

const fadeIn = () => {
    topBack.stop().animate({
        opacity: 1
    }, 10)
}

const fadeOut = () => {
    topBack.stop().animate({
        opacity: 0
    }, 10)
}

const canBarFade = () => {
    if (flg_)
        if (window.scrollY > 50) fadeIn()
        else fadeOut()
}

const init = () => {
    if (window.innerWidth < 992) topBack.css('opacity', 1), flg_ = false
    else flg_ = true
    canBarFade()
}

$(init)

$(window).scroll(canBarFade)

$(window).resize(init)

const scrollTop = () => {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000)
}

$('#main-label').click(scrollTop)