

document.querySelector('#header').addEventListener('click',()=>{
   
    dashboardAnim(); 
})

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

    let timeline1 = new TimelineMax();

    timeline1
    .from('#baz .bar', {scaleY:0, transformOrigin : "center bottom", stagger: .2})
    .fromTo('#baz #chart #line' ,2,{ strokeDasharray: 90, strokeDashoffset:90}, {strokeDashoffset:0 ,duration:2, ease: "expo.out"})
    .fromTo("#baz #chart circle", {opacity: 0}, {opacity:1 ,duration:2, stagger: .2} , "<" )

    // .fromTo('#dashy #darkBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"<")
    // .fromTo('#dashy #darkBar1', {fill:'transparent'}, {fill:"#0f3951", duration:2},"-=3")
    // .fromTo('#dashy #darkBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    // .fromTo('#dashy #darkBar2', {fill:'transparent'}, {fill:"#0f3951", duration:2},"-=3")
    // .to('[id*="dark"]',0, {strokeDasharray:0})

    // .fromTo('#dashy #greenBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    // .fromTo('#dashy #greenBar1', {fill:'transparent'}, {fill:"#2c6b6b", duration:3},"-=3")
    // .fromTo('#dashy #greenBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    // .fromTo('#dashy #greenBar2', {fill:'transparent'}, {fill:"#2c6b6b", duration:3},"-=3")
    // .to('[id*="green"]',0, {strokeDasharray:0})

    // .fromTo('#dashy #blueBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    // .fromTo('#dashy #blueBar1', {fill:'transparent'}, {fill:"#1a81c6", duration:2},"-=3")
    // .fromTo('#dashy #blueBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:3},"-=2")
    // .fromTo('#dashy #blueBar2', {fill:'transparent'}, {fill:"#1a81c6", duration:2},"-=3")
    // .to('[id*="blue"]',0, {strokeDasharray:0})

    // .fromTo('#dashy #yellowBar1', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    // .fromTo('#dashy #yellowBar1', {fill:'transparent'}, {fill:"#e5901f", duration:3},"-=3")
    // .fromTo('#dashy #yellowBar2', {strokeDashoffset:200},{strokeDashoffset:0, duration:2},"-=2")
    // .fromTo('#dashy #yellowBar2', {fill:'transparent'}, {fill:"#e5901f", duration:3},"-=3")
    // .to('[id*="yellow"]',0, {strokeDasharray:0})



}

/*
.to('.girl',3,{y:-400},'<')
.fromTo('.bg1', {y:-50},{y:0, duration:3} , '<')
.to('.content',3,{top:'0%'},'<')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration:3},'<' )
*/