//button 1 
const sticky_1=document.getElementById("stickybutton_1");

const sticky_2=document.getElementById("stickytext_1");

    //button 1 visibility
    sticky_1.onclick = function() {
        sticky_2.classList.toggle("button_visibility")
    }

//button 2      
const sticky_3=document.getElementById("stickybutton_2");

const sticky_4=document.getElementById("stickytext_2");

    //button 2 visibility
    sticky_3.onclick = function() {
        sticky_4.classList.toggle("button_visibility")
    }

//audio play button 
const audio = document.querySelector('audio');
const audioplay = document.querySelector('#AudioPlay');
audio.autoplay = true;
audioplay.onclick = function(){
    if (audio.paused == true){
    audio.play() 
    audioplay.innerHTML = "pause";
       }
    else {
    audio.pause()
    audioplay.innerHTML = "play";
        } 
    }

//audio slider
const slider = document.querySelector(".slider");
slider.addEventListener('input', (e) => {
    audio.volume = e.target.value/100;
});