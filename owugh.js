const scriptURL = document.currentScript.src;
const scriptDir = scriptURL.substring(0, scriptURL.lastIndexOf("/"));
const audioPath = scriptDir + "/resources/audio/owugh.mp3";

document.querySelectorAll('.owugh').forEach(el => {
    el.addEventListener('click', () => {
        if(el.id != 'animate') {
            el.id = 'animate'
            new Audio(audioPath).play();
        } else {
            el.id = 'flicked'
            el.addEventListener('animationend', () => el.id='');
        }
    });
    
    });
