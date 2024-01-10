gsap.to('.section-1 h1',{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:".section-1",
        scroller:"body",
        markers:true,
        scrub:3,
        start:"top 0",
        end:"top -200%",
        pin:true
    }
})