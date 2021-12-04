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
        sidebar.classList.add("show"); 
        burger.innerHTML= "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x' style='align-self: center;'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>"
    }else{
        sidebar.classList.remove("show");
        burger.innerHTML= "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu' style='align-self: center;'><line x1='3' y1='12' x2='21' y2='12'></line><line x1='3' y1='6' x2='21' y2='6'></line><line x1='3' y1='18' x2='21' y2='18'></line></svg>"
    }
})

const menuItem = document.querySelectorAll('#sidebar li');

menuItem.forEach(item=>{
    item.addEventListener('click', _=>{
        sidebar.classList.remove("show");
        burger.innerHTML= "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu' style='align-self: center;'><line x1='3' y1='12' x2='21' y2='12'></line><line x1='3' y1='6' x2='21' y2='6'></line><line x1='3' y1='18' x2='21' y2='18'></line></svg>"

    })
})