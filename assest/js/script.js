$(document).ready(function(){
    $(".title").click(function(){
        $(".title").not($(this)).removeClass("active")
        $(".article").not($(this).next()).slideUp();
        $(this).next().slideToggle()
        $(this).toggleClass("active")
    })
})

$(document).ready(function(){
    $(".title1").click(function(){
        $(".title1").not($(this)).removeClass("active1")
        $(".article1").not($(this).next()).slideUp();
        $(this).next().slideToggle()
        $(this).toggleClass("active1")
    })
})

$(document).ready(function(){
    $(".title2").click(function(){
        $(".title2").not($(this)).removeClass("active2")
        $(".article2").not($(this).next()).slideUp();
        $(this).next().slideToggle()
        $(this).toggleClass("active2")
    })
})

$(document).ready(function(){
    $(".title3").click(function(){
        $(".title3").not($(this)).removeClass("active3")
        $(".article3").not($(this).next()).slideUp();
        $(this).next().slideToggle()
        $(this).toggleClass("active3")
    })
})


/////////////////////  nav

console.log(document.querySelector(".nav-links"))
let navslide = function(){
    let burger = document.querySelector(".burger")
    let nav = document.querySelector(".nav-links")
    let xicon = document.querySelector(".xicon")

    burger.addEventListener("click",function(){
        nav.classList.add("navactive")
        xicon.addEventListener("click",function(){
           nav.classList.remove("navactive")
        })
    })
}

navslide();


$(document).ready(function(){
   $(".salam").click(function(){
       $(".ul2").not($(this).next()).slideUp() 
       $(this).next().slideToggle() 
    })
})

let headers = document.querySelectorAll(".header")
headers.forEach(function(header){
    header.addEventListener("click",function(){
        header.nextElementSibling.classList.toggle("acctive")
    })
})



$(document).ready(function(){
    $(".header").click(function(){
        $(".ul2").not($(this).next()).slideUp() 
        $(this).next().slideToggle()
    })
})
