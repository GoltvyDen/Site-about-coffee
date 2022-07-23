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
    //     class cards {
//         constructor(tittle, src, alt, text) {
//             this.tittle = tittle;
//             this.src = src;
//             this.alt = alt;
//             this.text = text;   
//         }
//         render() {
//             const elem = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.elem = 'menu__item';
//                 elem.classList.add(this.elem);
//             } else {
//                 this.classes.forEach(className => elem.classList.add(className));
//             }
        
//             elem.innerHTML = `
//             <div class="frame">
//                     <div class="frame_title">
//                         <h3>${this.tittle}</h3>
//                     </div>
//                     <img class='frame_img' src=${this.src} alt=${this.alt}>  
//                     <div class="frame_text">
//                         <p>${this.text}</p>
//                     </div>
//                 </div>
//             `;
//             this.parent.append(elem);
//         }
//     }


