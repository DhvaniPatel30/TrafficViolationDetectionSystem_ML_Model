// script.js

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const slider = document.getElementById('slider');

slider.addEventListener('input', () => {
    const sliderValue = parseFloat(slider.value) / 100;
    const videoWidth = video1.clientWidth;
    const dividerPosition = videoWidth * sliderValue;

    video1.style.width = dividerPosition + 'px';
    video2.style.width = videoWidth - dividerPosition + 'px';
});
