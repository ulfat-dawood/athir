let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}
// 

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting ){
          
            console.log(entry.target.id && entry.target.id == "baz");
            dashboardAnim();
            observer.unobserve(entry.target); 

          
        }

    });
};
  
let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.observed');




targets.forEach( target =>{

    observer.observe(target);
    console.log(target);
})

