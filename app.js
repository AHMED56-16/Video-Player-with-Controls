// Get video and button elements
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');

// Function to toggle play/pause
playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";  
    } else {
        video.pause();
        playPauseBtn.textContent = "Play";  
    }
});

// Restart the video once it ends
video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});
