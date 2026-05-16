const box  =  document.querySelector('.box');

const observer = new ResizeObserver( 
    (entries) => {
        const boxEle =  entries[0];
        const small = boxEle.contentRect.width < 150;

        boxEle.target.style.backgroundColor  = small ? 'blueviolet': 'coral';
    }
);

observer.observe(box);