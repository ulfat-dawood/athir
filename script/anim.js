



const bannerLogo = ()=>{

    let timeline = new TimelineMax();

    timeline
    .fromTo('#dashy #background', {opacity:0},{opacity:1, duration:2})

    .fromTo('#dashy #darkBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"<")
    .fromTo('#dashy #darkBar1', {fill:'transparent'}, {fill:"#0f3951", duration:2},"-=3")
    .fromTo('#dashy #darkBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    .fromTo('#dashy #darkBar2', {fill:'transparent'}, {fill:"#0f3951", duration:2},"-=3")
    .to('[id*="dark"]',0, {strokeDasharray:0})

    .fromTo('#dashy #greenBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    .fromTo('#dashy #greenBar1', {fill:'transparent'}, {fill:"#2c6b6b", duration:3},"-=3")
    .fromTo('#dashy #greenBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    .fromTo('#dashy #greenBar2', {fill:'transparent'}, {fill:"#2c6b6b", duration:3},"-=3")
    .to('[id*="green"]',0, {strokeDasharray:0})

    .fromTo('#dashy #blueBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    .fromTo('#dashy #blueBar1', {fill:'transparent'}, {fill:"#1a81c6", duration:2},"-=3")
    .fromTo('#dashy #blueBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    .fromTo('#dashy #blueBar2', {fill:'transparent'}, {fill:"#1a81c6", duration:2},"-=3")
    .to('[id*="blue"]',0, {strokeDasharray:0})

    .fromTo('#dashy #yellowBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    .fromTo('#dashy #yellowBar1', {fill:'transparent'}, {fill:"#e5901f", duration:3},"-=3")
    .fromTo('#dashy #yellowBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    .fromTo('#dashy #yellowBar2', {fill:'transparent'}, {fill:"#e5901f", duration:3},"-=3")
    .to('[id*="yellow"]',0, {strokeDasharray:0})



}




const dashboardAnim = ()=>{
    const piePath1= "M27.65,30.45,0,17.69A30.45,30.45,0,0,1,58.1,30.45Z"; 
    const piePath= "M88.17,93.08,60.74,79.86a30.45,30.45,0,0,1,57.88,13.22Z"; 
    let timeline1 = new TimelineMax();

    timeline1
    // Bars 
    .from('#baz .bar', {scaleY:0, transformOrigin : "center bottom", stagger: .2})
    .fromTo('#baz #chart #line' ,2,{ strokeDasharray: 90, strokeDashoffset:90}, {strokeDashoffset:0 ,duration:2, ease: "expo.out"})
    .fromTo("#baz #chart circle", {scale: 0}, {scale:1 ,duration:2, stagger: .2} , "<" )

    //bullet points:
    .fromTo("#baz #list .dot", {y:10,opacity:0}, {y:0, opacity:1,duration:1, stagger: .3},1)
    .from("#baz #list .li" ,  {scaleY:0, transformOrigin : "center bottom", stagger: .2},"<")
    .fromTo("#baz #box .boxy" , {y:-5, opacity:0}, {y:10, opacity:1, stagger: .2},"<")

    // pie 
    // .from("#baz #pie #pie-front", 1, {scale:0, transformOrigin : "center"}, "<")
}



//SPLASH SCREEN
document.querySelector('#splash').addEventListener('click',()=>{
   
    dashboardAnim(); 
})

window.addEventListener('load', ()=>{
    bannerLogo();
    // setTimeout(_=> window.location.hash = '#banner2',10000)
})

const splashAnim = ()=>{
let splashTimeline= new TimelineMax();

splashTimeline
// Bars 
.from('#baz .bar', {scaleY:0, transformOrigin : "center bottom", stagger: .2})
.fromTo('#baz #chart #line' ,2,{ strokeDasharray: 90, strokeDashoffset:90}, {strokeDashoffset:0 ,duration:2, ease: "expo.out"})
.fromTo("#baz #chart circle", {scale: 0}, {scale:1 ,duration:2, stagger: .2} , "<" )

//bullet points:
.fromTo("#baz #list .dot", {y:10,opacity:0}, {y:0, opacity:1,duration:1, stagger: .3},1)
.from("#baz #list .li" ,  {scaleY:0, transformOrigin : "center bottom", stagger: .2},"<")
.fromTo("#baz #box .boxy" , {y:-5, opacity:0}, {y:10, opacity:1, stagger: .2},"<")

}
  
  //1-continous logo amination
  //////ON-LOADING://////
  //2-stop the logo aniamtion
  //3-logo bg 2 white + bg 2 whit + logo zoom in
  //4-splash opacity 0
  //5-banner animation
