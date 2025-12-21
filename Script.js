/*
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});*/




function a () {
    
    gsap.from(".content .hs",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:2
        
    })
    
    gsap.from(".content p",{
        y:100,
        opacity:0,
        delay:1,
        duration:0.9,
        stagger:0.3
        
    })
    
    gsap.from(".content .btco",{
        y:100,
        opacity:0,
        delay:1.5,
        duration:0.9,
        stagger:0.3
        
    })
}
a()


let s= document.querySelector(".main")
let b = document.querySelector(".cursor")

s.addEventListener("mousemove", function (dets) {
    gsap.to(b,{
        x:dets.x,
        y:dets.y
        
    })
})


gsap.from("nav h1",{
    y:-100,
    opacity:0,
    duration:1.5,
    delay:0.4
    
})
gsap.from(".container > div",{
    y:-100,
    opacity:0,
    duration:0.6,
    delay:0.8,
    stagger:0.3
})
gsap.from("nav .butt",{
    opacity:0,
    scale:0.4,
    delay:1
    
})

gsap.to(".review  .card", {
    x:-2000,
    duration:2,
    delay:2,
    scrollTrigger:{
        trigger:".review",
        pin:true,
        start:"top top",
        markers:true,
        scrub:1
    }
})

/*let g =document.querySelector(" .hs")
let v = g.textContent

let d= v.split("")
let clutter= ""
d.forEach(function (e) {
    clutter+= '<span> ${e}</span>'
})
g.innerHTML= clutter

gsap.from("span",{
    y:100
})*/    })
}
a()


let s= document.querySelector(".main")
let b = document.querySelector(".cursor")

s.addEventListener("mousemove", function (dets) {
    gsap.to(b,{
        x:dets.x,
        y:dets.y
        
    })
})


gsap.from("nav h1",{
    y:-100,
    opacity:0,
    duration:1.5,
    delay:0.4
    
})
gsap.from(".container > div",{
    y:-100,
    opacity:0,
    duration:0.6,
    delay:0.8,
    stagger:0.3
})
gsap.from("nav .butt",{
    opacity:0,
    scale:0.4,
    delay:1
    
})

gsap.to(".review  .card", {
    x:-2000,
    duration:2,
    delay:2,
    scrollTrigger:{
        trigger:".review",
        pin:true,
        start:"top top",
        markers:true,
        scrub:1
    }
})
