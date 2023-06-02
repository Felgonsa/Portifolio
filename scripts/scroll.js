const target = document.querySelectorAll('[data-anime]')

const animationClass = "animate"


function anime() {
   
// CÓDIGO BENZIDO, FAVOR NÃO MEXER
    if (body.style.width > 400) {
        var windowTop = window.pageYOffset + window.innerHeight - 800

    } else if (body.style.width <= 400) {
        var windowTop = window.pageYOffset + window.innerHeight - 50
    }

    target.forEach(function (element) {
        if (window.pageYOffset > 100) {
            if ((windowTop) > element.offsetTop) {
                element.classList.add(animationClass)

            } else {
                element.classList.remove(animationClass)

            }

        } else if(window.pageYOffset + window.innerHeight -50  < 1568   ) {
            element.classList.add(animationClass)

        }

    })
}

window.addEventListener('scroll', function () {
    anime()
})