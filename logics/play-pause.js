const video = document.getElementById('video');
    const playBtn = document.getElementById('playBtn');

    // Show play button initially
    playBtn.classList.remove('hidden');

    // Play video and hide play button
    playBtn.addEventListener('click', () => {
      video.play();
      playBtn.classList.add('hidden');
    });

    // Show play button when video is paused or ends
    video.addEventListener('pause', () => {
      playBtn.classList.remove('hidden');
    });

    video.addEventListener('ended', () => {
      playBtn.classList.remove('hidden');
    });