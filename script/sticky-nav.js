window.addEventListener('scroll', ()=>{
    const nav= document.querySelector('#header');
    
    if(window.pageYOffset > 40){
        nav.classList.add('sticky');

    }else{
        nav.classList.remove('sticky');
    }
}); 
