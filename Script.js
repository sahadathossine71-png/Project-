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
        stagger:0.3
        
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
