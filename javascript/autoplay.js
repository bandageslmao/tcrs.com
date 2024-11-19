(function() {
  // Function to check autoplay permission for audio elements
  function checkAutoplay(audioElement) {
    // Attempt to play the muted audio element (autoplay should work when muted)
    audioElement.muted = true;
    audioElement.play().then(() => {
      console.log('Autoplay is allowed (muted initially)');
    }).catch((error) => {
      console.log('Autoplay is blocked, asking for permission');
      askForAutoplayPermission(audioElement);
    });
  }

  // Function to prompt the user for autoplay permission
  function askForAutoplayPermission(audioElement) {
    const response = prompt("Autoplay is currently disabled. Would you like to enable autoplay for this audio? (yes/no)");

    if (response && response.toLowerCase() === 'yes') {
      alert("Autoplay permission granted! Reloading audio...");
      // Set the autoplay attribute and reload the audio
      audioElement.setAttribute('autoplay', 'true');
      audioElement.muted = false; // Unmute the audio after user interaction
      audioElement.load(); // Reload the audio with autoplay enabled
      audioElement.play(); // Try to play it again
    } else {
      alert("Autoplay permission denied.");
    }
  }

  // Function to initialize autoplay checks for audio elements
  function initializeAutoplayForAudios() {
    const audios = document.querySelectorAll('audio');

    audios.forEach((audio) => {
      checkAutoplay(audio); // Check autoplay for each audio element
    });
  }

  // Automatically check autoplay status when the document is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeAutoplayForAudios();
  });

  // Optional: Add user interaction to unmute audio after page load
  document.addEventListener('click', function() {
    const audios = document.querySelectorAll('audio');
    audios.forEach((audio) => {
      if (audio.muted) {
        audio.muted = false; // Unmute after user interaction
        console.log("Audio unmuted after user interaction");
      }
    });
  });

})();
