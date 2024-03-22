const buttonImg = document.getElementById('button-img');
const buttonSound = document.getElementById('button-sound');

let isPressed = false;

buttonImg.addEventListener('mousedown', function() {
  // Change the image source to pressed button image
  buttonImg.src = 'pressedbutton.png';
  
  // Rewind sound to start and play it
  buttonSound.currentTime = 0; 
  buttonSound.play();
  
  isPressed = true;
});

buttonImg.addEventListener('mouseup', function() {
  if (isPressed) {
    // Change the image source back to unpressed button image
    buttonImg.src = 'upressedbutton.png';
    
    // Pause the button sound
    buttonSound.pause();
    
    isPressed = false;
  }
});
