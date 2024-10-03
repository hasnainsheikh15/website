let img = document.querySelectorAll('.img');



var tl = gsap.timeline();
tl.to(
  img,
  {
    y: 500,
    duration: 4,
    rotate: -30,
    stagger: 1,
  },
  "a"
);
tl.to(
  img,
  {
    x: 400,
    y: 200,
    //  translateX: 200,
    z: 400,

  
    duration: 5,
    delay: 0.2,
    stagger: 1,

    opacity: 0,
    infinite: true,
  },
  "a"
);
// tl.to(img ,{
// //  y:-20,
//  height: "50%",
//  width : "50%",
 

//  stagger:0.8,

// },"a")