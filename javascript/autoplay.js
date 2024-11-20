// Global function to handle autoplay detection and permission request
function handleAutoplay(audioFilePath) {
    const audio = new Audio(audioFilePath); // Replace with your audio file path

    // Attempt to play the audio
    audio.play()
        .then(() => {
            console.log("Autoplay is enabled.");
        })
        .catch(() => {
            console.warn("Autoplay is disabled. Prompting user for permission...");
            // Prompt user for autoplay permission
            const userConsent = prompt("Autoplay is currently disabled. Do you allow autoplay? Type 'yes' or 'no'.");

            if (userConsent && userConsent.toLowerCase() === "yes") {
                audio.play()
                    .then(() => {
                        console.log("Autoplay started successfully after user consent.");
                    })
                    .catch((error) => {
                        console.error("Autoplay failed even after user consent:", error);
                        alert("Autoplay failed. Please interact with the page to enable sound.");
                    });
            } else {
                alert("Autoplay remains disabled.");
            }
        });
}
