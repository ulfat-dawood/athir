window.addEventListener('scroll', ()=>{
    const nav= document.querySelector('#header');
    
    if(window.pageYOffset > 40){
        nav.classList.add('sticky');

    }else{
        nav.classList.remove('sticky');
    }
}); 


// responsive navbar 

const burger = document.querySelector('#menu-icon'); 
const sidebar = document.querySelector('#sidebar'); 

burger.addEventListener('click', _=>{
    if(!sidebar.classList.contains("show")){
        console.log('clickyyy'); 
        sidebar.classList.add("show"); 
    }else{
        sidebar.classList.remove("show");
    }
})
