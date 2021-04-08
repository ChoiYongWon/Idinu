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
    if(y >= 30 && !header.classList.contains("header-fixed")){
        header.classList.add("header-fixed")
    }else if(y < 30 && header.classList.contains("header-fixed")){
        header.classList.remove("header-fixed")
    }
}

window.onload = () => {
    headerFixed()
    document.addEventListener("scroll", (e)=>{
        headerFixed()
        let y = window.innerHeight;
        let animation_component = document.querySelectorAll(".animation")
        for(let element of animation_component){
            if(element.getBoundingClientRect().top + 100 < y){
                if(!element.classList.contains("show")){
                    element.classList.add("show")
                }
            }

        }
        
    })
}