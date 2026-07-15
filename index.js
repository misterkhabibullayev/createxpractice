
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 300) {
        header.classList.add('fixed', 'top-0', 'left-0', 'bg-white', 'shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]', 'z-10')
        header.classList.remove('absolute')
    } else {
        header.classList.remove('fixed', 'top-0', 'left-0', 'bg-white', 'shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]', 'z-10')
        header.classList.add('absolute')
    }
})

