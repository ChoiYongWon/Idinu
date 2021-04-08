/**
 * Created by Yongwon on 2021-04-08
 * Email: yongwon0824@naver.com
 */

const customVar = {
    isTop : true
}

const headerFixed = () => {

    let y = document.documentElement.scrollTop
    let header = document.querySelector(".idinu-header")
    if(y >= 20 && !header.classList.contains("header-fixed")){
        header.classList.add("header-fixed")
    }else if(y < 20 && header.classList.contains("header-fixed")){
        header.classList.remove("header-fixed")
    }
}

const animateCheck = () => {
    let y = window.innerHeight;
    let animation_component = document.querySelectorAll(".animation")
    for(let element of animation_component){
        if(element.getBoundingClientRect().top + 250 < y){
            if(!element.classList.contains("show")){
                element.classList.add("show")
            }
        }

    }
}

const paint = () => {
    console.log("paint")
    document.body.style.display = "block"
}

window.onload = () => {
    paint()
    headerFixed()
    animateCheck()
    document.addEventListener("scroll", (e)=>{
        headerFixed()
        animateCheck()
        
    })
}