let body = document.getElementById("body")
let name = document.getElementById("name")
let fixed = document.getElementById("fixed")
let filter = document.getElementById("filter")

function color(){ 
    if (body.classList.contains("bg-dark")){

        body.classList.remove("bg-dark", "text-light")
        name.classList.remove("text-light")
        fixed.classList.remove("navbar-dark", "bg-dark")
        filter.classList.remove("text-light")

        body.classList.add("bg-light")
        fixed.classList.add("navbar-light", "bg-light")
        filter.classList.add("text-dark","border-dark")

    }else if(body.classList.contains("bg-light")){

        body.classList.remove("bg-light")
        filter.classList.remove("text-dark","border-dark")

        body.classList.add("text-light","bg-dark")
        fixed.classList.add("navbar-dark","bg-dark")
        filter.classList.add("text-light","border-light")

    }
}