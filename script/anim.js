

document.querySelector('#header').addEventListener('click',()=>{
   
    banner(); 
})

const banner = ()=>{

    let timeline = new TimelineMax();

    timeline
    .fromTo('#dashy #background', 3, {opacity:0},{opacity:1, duration:.3})
    //.fromTo('#dashy #yellowBar2', 3, {opacity:0},{opacity:1, duration:1})
    //.fromTo('#dashy #yellowBar1', 3, {opacity:0},{opacity:1, duration:1})
    .fromTo('#dashy #darkBar1', 5, {strokeDashoffset:200},{strokeDashoffset:0})
    .fromTo('#dashy #darkBar1', 3,{fill:'transparent'}, {fill:"#0f3951"});


}

/*
.to('.girl',3,{y:-400},'<')
.fromTo('.bg1', {y:-50},{y:0, duration:3} , '<')
.to('.content',3,{top:'0%'},'<')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration:3},'<' )
*/