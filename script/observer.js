let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}
// 

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.id == "baz"){          
            dashboardAnim();
            observer.unobserve(entry.target); 
        }

        if(entry.isIntersecting && entry.target.id == "achievements"){          
            console.log('done');
            incrementNumbers();
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

