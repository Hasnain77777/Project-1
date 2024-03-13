var timeout;
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function firstPageAmin(){
    var tl = gsap.timeline();
    tl.from('header',{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut,
        
    }) 
    tl.to('.boundingElemTop', {
        y: 0,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .15,
        delay: -0.6
    })
    tl.to('.boundingElemBottom' ,{
        y: 0,
        duration: .3,
        stagger: .15,
        delay: -0.6
    })
}
firstPageAmin();



function circleChaptaKaro() {
    var xscale = 1; 
    var yscale = 1;

    var xpre= 0;
    var ypre= 0;
    window.addEventListener('mousemove', function(details){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xpre);
        yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - ypre);

        xpre = details.clientX;
        ypre= details.clientY;

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector("#movingCircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
          }, 100); 
    })
}

function circleMouseFollower (xscale, yscale){
    window.addEventListener('mousemove', function(details){
        document.querySelector('#movingCircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;

    })
}
circleChaptaKaro();
circleMouseFollower();

// document.querySelectorAll('.elem').forEach(function(elem){
//     var rotate = 0;
//     var diff =  0;
//     elem.addEventListener('mouseleave' , function(){
//         gsap.to(elem.querySelector('img'), {
//             opacity: 0,
//             ease: Power3,
//             duration: 0.5,
//         })
//     })
//     elem.addEventListener('mousemove', function(dets){
//         var pos = dets.clientY - elem.getBoundingClientRect().top;
//         diff = dets.clientX - rotate;
//         rotate = dets.clientX
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             top: pos,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20 , 20 , diff * 0.6)
//           });
//     })
// })

document.querySelectorAll('.elem').forEach(function(elem){
    var rotate = 0;
    var diffort = 0;
    elem.addEventListener('mouseleave', function(){
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        })
    })
    elem.addEventListener('mousemove', function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        rotate = dets.clientX - diffort;
        diffort = dets.clientX;
        gsap.to(elem.querySelector('img'), {
            opacity: 0.9,
            ease: Power3,
            left: dets.clientX,
            top: diff,
            rotate: gsap.utils.clamp(-20, 20, rotate * 0.6)
        })
    })
})
