const bar = document.querySelector('.bar');
const navbar = document.querySelector('.nav-bar');
const body = document.querySelector('body');
bar.addEventListener('click',() => {
    if (navbar.style.opacity == '1'){
        navbar.style.opacity = '0';
        navbar.style.right = '-50%';
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    }
    else{
        navbar.style.opacity = '1';
        navbar.style.right = '-10%';
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
        
    }
})
/*
body.addEventListener('click',() => {
    if (navbar.style.opacity == '1'){
        navbar.style.opacity = '0';
        navbar.style.right = '-50%';
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    }
})
*/