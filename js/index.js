let mMenu=document.querySelector(".mmenu")
let nav=document.querySelector(".nav")
let gnbLink=document.querySelectorAll(".link")
let gnbBg=document.querySelectorAll(".gnb_bg")
let delay = 300;
let timer = null;

mMenu.addEventListener("click",function(){
    this.classList.toggle("active")
    nav.classList.toggle("active")
})
let htmlW=window.innerWidth
window.addEventListener("resize",function(){
    htmlW=window.innerWidth
    //  console.log(htmlW)
     clearTimeout(timer);

     timer = setTimeout(function(){
        if(htmlW>=1080){
            nav.classList.remove("active") 
            mMenu.classList.remove("active")
        }
	}, delay);
})


gnbLink.forEach((link)=>{
    link.addEventListener("click",function(e){
        e.preventDefault()
        for(let i=0; i<gnbLink.length; i++){
            if(this !== gnbLink[i]) gnbLink[i].classList.remove("active")
                // gnbLink[i].classList.remove("active");
        }
        this.classList.toggle("active")
        gnbBg.forEach((bg)=>{
            bg.classList.remove("disappear")
            this.classList.add("appear")
        })
    })

})

let searchBtn=document.querySelector(".search_btn")
let searchArea=document.querySelector(".search_area")
let searchClose=document.querySelector(".search_close")

searchBtn.addEventListener("click",function(){
    searchArea.classList.add("active")
})
searchClose.addEventListener("click", function(){
    searchArea.classList.remove("active")
})


let newsTit=document.querySelectorAll(".news_subtit");
let newsTxt=document.querySelectorAll(".news_txt");

newsTit.forEach(function(item, idx){
    item.addEventListener("click",function(e){
        e.preventDefault()
        
            for(let i=0;i<newsTit.length;i++){
            newsTit[i].classList.remove("active");
            newsTxt[i].classList.remove("active");
              }
            this.classList.add("active");
            
            newsTxt[idx].classList.add("active");
            
    })
})

let btnTop=document.querySelector(".btn_tp")

window.addEventListener("scroll", function(){
    let scroll_ev=window.scrollY;
    let visualS=document.querySelector("#visual")
    let visualH=visualS.offsetHeight+visualS.offsetTop
    let footerS=document.querySelector("#footer")
    let footerH=footerS.offsetTop

    if(scroll_ev>visualH){
        btnTop.classList.add("active")
    }else{
        btnTop.classList.remove("active")
    }
    if(scroll_ev+window.innerHeight>footerH+100){
        btnTop.classList.add("invert")
    }else{
        btnTop.classList.remove("invert")
    }
})

btnTop.addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"})
})


let swiper = new Swiper(".visual_sl", {
    loop:Infinity,          
    autoplay: {delay: 6000,},
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {delay: 6000,},
    loop:Infinity,          
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    588: {
        slidesPerView: 1.2,
        centeredSlides: false,
    },
    780: {
        slidesPerView: 1.1,
    },
    1080: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
}
  
});
let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
        delay: 6000,
    },
    loop:Infinity,        
    breakpoints: {
    588: {
        slidesPerView: 1.5,
        centeredSlides: false,
    },
    780: {
        slidesPerView: 1.9,
    },
    1080: {
        slidesPerView: 3.2,
        spaceBetween: 30,
    },
    1280: {
        slidesPerView:3.6,
    },
}
      
});