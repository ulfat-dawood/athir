window.addEventListener('load', ()=>{
    bannerLogo();
    // setTimeout(_=> window.location.hash = '#banner2',10000)
})


// COUNTER 

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  
  

  
const projects = document.querySelector(".projects");
const clients = document.querySelector(".clients");
const users = document.querySelector(".users");
const trans = document.querySelector(".trans");

const incrementNumbers= ()=>{
    animateValue(projects,0, 28, 2500);
    animateValue(clients,0, 14, 2500);
    animateValue(users,0, 4, 2500); //k
   animateValue(trans,0, 5, 2500); //m
}

