

// Detecting Button Press

let allDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < allDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        let buttonInnerHTML = this.innerHTML;    // When a button is pressed we detect its inner HTML

        makeSound(buttonInnerHTML);           // and we send it to "makeSound".
     
        makeAnimation(buttonInnerHTML);
    });

}

// Detecting KeyBoard Press

document.addEventListener("keydown", function(event) {      // If a key was pressed we send 

    makeSound(event.key);                                // its key property (details) into "makeSound".

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key){
        case "w":
            let tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            let tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
            let tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            let tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":
            let snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            let crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

            case "l":
            let kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;

            default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currentKey){   // Changing the visual look of an element once it is clicked

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(()=> {
    activeButton.classList.remove("pressed");
    }, 100);
}