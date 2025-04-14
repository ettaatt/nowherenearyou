function togglePlay(button) {
  // Get the play and pause images within the clicked button
  const playIcon = button.querySelector(".play-icon");
  const pauseIcon = button.querySelector(".pause-icon");

  // Toggle visibility between play and pause icons
  playIcon.classList.toggle("gone");
  pauseIcon.classList.toggle("gone");
}