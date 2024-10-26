 window.onload = function() {
            // Show the centered box after 0.5 seconds
            setTimeout(function() {
                document.getElementById('centeredBox').classList.add('loaded');
            }, 500);

            // Show the pulse box after 0.5 seconds
            setTimeout(function() {
                document.getElementById('pulseBox').classList.add('loaded');
            }, 800);

            // Show the main box after 1 second
            setTimeout(function() {
                document.getElementById('mainBox').classList.add('loaded');
            }, 1200);
        }


// Event listener for keyboard press to go fullscreen
document.addEventListener('keydown', (event) => {
    goFullscreen(); // Trigger fullscreen on any key press
});

