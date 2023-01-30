const target = document.querySelectorAll('[data-anime]')

const animationClass = "animate"

function anime(){
const windowTop =  window.pageYOffset + window.innerHeight - 80
target.forEach(function(element){
 if((windowTop) > element.offsetTop){
    element.classList.add(animationClass)
 }
else{
    element.classList.remove(animationClass)
}
})
}

window.addEventListener('scroll',function(){
    anime()
})