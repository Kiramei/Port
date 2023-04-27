var t = 0
var flg = true
document.querySelector('body').onscroll = (e) => {
    if (flg) {
        $('#top-back').removeClass('d-none')
        if (window.scrollY > 50)
            fadeIn(), flg = false
        else
            fadeOut(), flg = false
    }
    // console.log(doc)
}
const fadeIn = () => {
    let temp = setInterval(() => {
        if (t < 1) {
            t += 0.15
            $('#top-back').css('opacity', t)
        }
        else clearInterval(temp), flg = true
    }, 30)
}

const fadeOut = () => {
    let temp = setInterval(() => {
        if (t >= 0) {
            t -= 0.15
            $('#top-back').css('opacity', t)
        }
        else clearInterval(temp), flg = true
    }, 30)
}