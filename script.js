const tl =  gsap.timeline()

function time () {
  var a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);

    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = `${a}%`;
    } else {
      a = 100
      document.querySelector("#loader h1").innerHTML = `${a}%`;
    }
  }, 100);
};

tl.to("#loader h1", {
    duration:1,
    delay:0.5,
//   scale: 1.5,
  onStart:time()
});

tl.to("#loader", {
  duration: 1  ,
//   delay: 0.5,
  top: "-100vh",
});

tl.to('.section-1 h1',{
    transform:"translateX(-125%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:".section-1",
        scroller:"body",
        // markers:true,
        scrub:3,
        start:"top 0",
        end:"top -200%",
        pin:true
    }
});
