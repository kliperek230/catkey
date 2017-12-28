let keys = document.querySelectorAll('.key');
let sounds = document.getElementsByTagName("audio");


    window.addEventListener('keydown', function(event){
        switch(event.key){
            case"0":
                sounds[9].currentTime=0;
                sounds[9].play();
                keys[9].classList.add("pushed");
            break;
            case"1":
                sounds[0].currentTime=0;
                sounds[0].play();
                keys[6].classList.add("pushed");
            break;
            case"2":
                sounds[1].currentTime=0;
                sounds[1].play();
                keys[7].classList.add("pushed");
            break;
            case"3":
                sounds[2].currentTime=0;
                sounds[2].play();
                keys[8].classList.add("pushed");
            break;
            case"4":
                sounds[3].currentTime=0;
                sounds[3].play();
                keys[3].classList.add("pushed");
            break;
            case"5":
                sounds[4].currentTime=0;
                sounds[4].play();
                keys[4].classList.add("pushed");
            break;
            case"6":
                sounds[5].currentTime=0;
                sounds[5].play();
                keys[5].classList.add("pushed");
            break;
            case"7":
                sounds[6].currentTime=0;
                sounds[6].play();
                keys[0].classList.add("pushed");
            break;
            case"8":
                sounds[7].currentTime=0;
                sounds[7].play();
                keys[1].classList.add("pushed");
            break;
            case"9":
                sounds[8].currentTime=0;
                sounds[8].play();
                keys[2].classList.add("pushed");
            break;
        }
    });

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('pushed');
};


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
