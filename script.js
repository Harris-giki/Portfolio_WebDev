function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const gradients = document.querySelectorAll('.aurora-gradient');
    
    gradients.forEach((gradient, index) => {
        const movement = (index + 1) * 2;
        const x = (clientX - window.innerWidth / 2) / movement;
        const y = (clientY - window.innerHeight / 2) / movement;
        
        gradient.style.transform = `translate(${x}px, ${y}px)`;
    });
});