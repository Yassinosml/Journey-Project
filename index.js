const bar = document.querySelector('.bar');
const navbar = document.querySelector('.nav-bar');
const body = document.querySelector('.click');
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

window.addEventListener('click',(e) => {
    if (navbar.style.opacity == '1' && e.target != bar && e.target != navbar){
        navbar.style.opacity = '0';
        navbar.style.right = '-50%';
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    }
})

/*reveal text*/
/*showing the mosque*/
const reveal1 = document.querySelector('.reveal1');
const hidden1 = document.querySelector('.hidden1');

reveal1.addEventListener('click',() => {
    if (hidden1.style.display == 'block'){
        hidden1.style.display = 'none';
        reveal1.textContent = 'Read More';
    }
    else {
        hidden1.style.display = 'block';
        reveal1.textContent = 'Read Less';
        
    }
})
/*showing Sahara*/
const reveal2 = document.querySelector('.reveal2');
const hidden2 = document.querySelector('.hidden2');

reveal2.addEventListener('click',() => {
    if (hidden2.style.display == 'block'){
        hidden2.style.display = 'none';
        reveal2.textContent = 'Read More';
    }
    else {
        hidden2.style.display = 'block';
        reveal2.textContent = 'Read Less';
        
    }
})
/*showing chechaouen*/
const reveal3 = document.querySelector('.reveal3');
const hidden3 = document.querySelector('.hidden3');

reveal3.addEventListener('click',() => {
    if (hidden3.style.display == 'block'){
        hidden3.style.display = 'none';
        reveal3.textContent = 'Read More';
    }
    else {
        hidden3.style.display = 'block';
        reveal3.textContent = 'Read Less';
        
    }
})
/*showing culture*/
const reveal4 = document.querySelector('.reveal4');
const hidden4 = document.querySelector('.hidden4');

reveal4.addEventListener('click',() => {
    if (hidden4.style.display == 'block'){
        hidden4.style.display = 'none';
        reveal4.textContent = 'Read More';
    }
    else {
        hidden4.style.display = 'block';
        reveal4.textContent = 'Read Less';
        
    }
})
/*animation while scrolling*/
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
    enteries => {
        enteries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
            
        }
        )
    },
    {
        threshold : 0.10,
    }
    
)
elements.forEach(element => {
    observer.observe(element)
})