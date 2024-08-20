function homePageAnimation(){
    gsap.set(".slidesm", {scale:5})

var t1=gsap.timeline({
    scrollTrigger: {
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        
        scrub:2
     },
})



t1
.to(".vdodiv",{
    '--clip':"0%",
    ease:Power2,
},'a')

.to(".slidesm",{
    scale:1,
    ease:Power2,
},'a')

.to(".lft",{
    xPercent:-10,
    stagger:0.03,
    ease:Power4,
},'b')

.to(".rgt",{
    xPercent:10,
    ease:Power4,
},'b')
}

function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger :{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            pin:"true",
           
            scrub:1
    
        },
        xPercent:-200,
        ease:Power2
    })

}
function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       
        gsap.to(this.querySelector(".picture"),{opacity:1,x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX) ,ease:Power4, duration:.5})
    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{opacity:0,ease:Power4, duration:.5})
    })

})

}
function paraAnimation() {
    var clutter = "";
    var textPara = document.querySelector(".textpara");
    
    if (textPara) {
        var textContent = textPara.textContent.split("");
        textContent.forEach(function(e) {
            if (e === " ") {
                clutter += '<span>&nbsp;</span>';
            } else {
                clutter += `<span>${e}</span>`;
            }
        });
        textPara.innerHTML = clutter;

        gsap.set(".textpara span", { opacity: 0.1 });

        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 0.2,
               
            },
            opacity: 1,
            stagger: 0.03,
            ease: "power4.out"
        });
    }
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();

}
function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1

        },
        y:0,
        ease:Power4
    }
)}
function colorChanger() {
    document.querySelectorAll(".section").forEach(function(e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function() {
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function() {
                document.body.setAttribute("theme", e.dataset.color);
            }
        });
    });
}






  




realPageAnimation();
homePageAnimation();
teamAnimation();
paraAnimation();
loco();
capsuleAnimation();
colorChanger();




