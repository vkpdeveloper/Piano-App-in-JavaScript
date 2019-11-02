function play(songnote){
    var audio = document.getElementById(songnote);
    audio.play();
}

document.onkeydown = checkKeycode

function checkKeycode(e) {
var keycode;
if (window.event)
    {keycode = window.event.keyCode;}
else if (e)
    {keycode = e.which;}
    
    // FOR 1 Notes

    if (keycode == 81) {
        play('audio1s');
    }
    else if (keycode == 65){
        play('audio1o');
    }
    else if (keycode == 90){
        play('audio1t');
    }

    // FOR 2 Notes

    if (keycode == 87) {
        play('audio2s');
    }
    else if (keycode == 83){
        play('audio2o');
    }
    else if (keycode == 88){
        play('audio2t');
    }

    // FOR 3 Notes

    if (keycode == 69) {
        play('audio3s');
    }
    else if (keycode == 68){
        play('audio3o');
    }
    else if (keycode == 67){
        play('audio3t');
    }

    // FOR 4 Notes

    if (keycode == 82) {
        play('audio4s');
    }
    else if (keycode == 70){
        play('audio4o');
    }
    else if (keycode == 86){
        play('audio4t');
    }


    // FOR 5 Notes

    if (keycode == 84) {
        play('audio5s');
    }
    else if (keycode == 71){
        play('audio5o');
    }
    else if (keycode == 66){
        play('audio5t');
    }

    // FOR 6 Notes

    if (keycode == 89) {
        play('audio5s');
    }
    else if (keycode == 72){
        play('audio5o');
    }
    else if (keycode == 78){
        play('audio5t');
    }

    // FOR 7 Notes

    if (keycode == 85) {
        play('audio7s');
    }
    else if (keycode == 74){
        play('audio7o');
    }
    else if (keycode == 77){
        play('audio7t');
    }

    // FOR 8 Notes

    if (keycode == 73) {
        play('audio8s');
    }
    else if (keycode == 75){
        play('audio8o');
    }
    else if (keycode == 188){
        play('audio8t');
    }


    // FOR 9 Notes

    if (keycode == 79) {
        play('audio9s');
    }
    else if (keycode == 76){
        play('audio9o');
    }
    else if (keycode == 190){
        play('audio9t');
    }


    // FOR 10 Notes

    if (keycode == 80) {
        play('audio10s');
    }
    else if (keycode == 186){
        play('audio10o');
    }
    else if (keycode == 191){
        play('audio10t');
    }

    // FOR 11 Notes

    if (keycode == 219) {
        play('audio11s');
    }
    else if (keycode == 222){
        play('audio11o');
    }
    else if (keycode == 16){
        play('audio11t');
    }

    // FOR 12 Notes

    if (keycode == 189) {
        play('audio12s');
    }
    else if (keycode == 187){
        play('audio12o');
    }
    else if (keycode == 220){
        play('audio12t');
    }


}