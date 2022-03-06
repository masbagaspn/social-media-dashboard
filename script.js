const dashboard = document.querySelector('.social-media-dashboard');
const checkbox = document.querySelector('.checkbox');
const toggle = document.querySelector('.toggle');

const switchMode = () => {
    if(checkbox.checked){
        dashboard.classList.toggle('dark-mode');
        toggle.style.transform = 'translateX(1.25rem)';
        checkbox.style.transform = 'translateX(1.25rem)';
    } else {
        dashboard.classList.remove('dark-mode');
        toggle.style.transform = 'translateX(0)';
        checkbox.style.transform = 'translateX(0)'
    }
}

checkbox.addEventListener('click', switchMode);