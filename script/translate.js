
//html/body tag: 
const html= document.querySelector('html'); 
const body= document.querySelector('body'); 

window.onload = function() {
    if(localStorage.getItem('lang') == null){
        localStorage.setItem('lang', 'ar');
    }
    switchLang(localStorage.getItem('lang'));
};

//reload onclick: 
document.querySelectorAll("[data-reload]").forEach(btn =>{
    btn.addEventListener('click' , _=>{
        var lang = btn.dataset.reload
        localStorage.setItem('lang', lang); 
        switchLang(lang);
        //location.reload(true)
    }) 
})

//swtich language 
const switchLang = (lang)=>{
    if(lang == 'ar'){
        html.dir = 'rtl'; html.lang = 'ar';
        body.style.fontFamily = "'Noto Sans Arabic', sans-serif"
        langObj = language.ar; 
        //hide button: 
        document.querySelectorAll("[data-reload='ar']").forEach((item)=>item.style.display="none")
        document.querySelectorAll("[data-reload='en']").forEach((item)=>item.style.display="flex")

        // PLACEHOLDERS 
        document.querySelector('#jj-name').placeholder = "الاسم";
        document.querySelector('#jj-email').placeholder = "البريد الالكتروني";
        document.querySelector('#jj-no').placeholder = "الجوال";
        document.querySelector('#jj-msg').placeholder = "الرسالة";
    }else{
        html.dir = 'ltr'; html.lang = 'en';
        body.style.fontFamily = "'Montserrat', sans-serif";
        langObj = language.en; 
        //hide button: 
        document.querySelectorAll("[data-reload='en']").forEach((item)=>item.style.display="none")
        document.querySelectorAll("[data-reload='ar']").forEach((item)=>item.style.display="flex")

        // PLACEHOLDERS 
        document.querySelector('#jj-name').placeholder = "NAME";
        document.querySelector('#jj-email').placeholder = "EMAIL";
        document.querySelector('#jj-no').placeholder = "CONTACT NO";
        document.querySelector('#jj-msg').placeholder = "MESSAGE";
    }
    document.querySelectorAll('[data-cnt]').forEach(item =>{
        var content = item.dataset.cnt; 
        item.innerHTML = langObj[content];
    })
}
