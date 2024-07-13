


document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('sliderTamanoCanvas');
    slider.addEventListener('input', handleChange);


    function handleChange(e) {
        const img = document.querySelector("canvas");
        const {value, max} = e.target;
        img.style.width = `${value*max}vh`;
        img.style.height = `${value*max}vh`;
    }


});
