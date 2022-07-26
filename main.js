console.log(1);
window.addEventListener('DOMContentLoaded', () => {
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => {
        frame.addEventListener('mouseover', () => {
            frame.style.transform = 'scale(1.2)';
            frame.style.margin = '65px';
            frame.style.border = 'thick double rgb(115, 25, 25)';
        });
        frame.addEventListener('mouseout', () => {
            frame.style.transform = 'scale(1)';
            frame.style.margin = '70px';
            frame.style.border = 'none';
        });
    });   
});


