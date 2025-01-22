function toggleMode() {
    const body = document.getElementById('body');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}