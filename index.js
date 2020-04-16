const toggle = document.querySelector('.toggle');
const header = document.querySelector('header');
const controls = document.querySelectorAll('.control');
const circles = document.querySelectorAll('.circle');
toggle.addEventListener('click', (e) => {
    header.classList.toggle('active');
})

circles.forEach((circle, idx) => {
    circle.addEventListener('click', (e) => {
        circles.forEach(el => el.classList.remove('active')); 
        circle.classList.add('active');
        const current = document.querySelector('.current');
        controls.forEach(el => el.classList.remove('current'));
        controls[idx].classList.add('current');
        
    })
})
