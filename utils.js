/**
 * Beat class that keeps track of playing the audio
 */

class Beat {
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}


/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
    }
}