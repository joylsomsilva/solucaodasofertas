document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. COUNTDOWN TIMER LOGIC
  // ==========================================================================
  const timerDisplay = document.getElementById("countdown-timer");
  if (timerDisplay) {
    // Initial duration: 12 minutes and 34 seconds (for realism)
    let duration = 12 * 60 + 34;

    const updateTimer = () => {
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;

      // Format minutes and seconds with leading zero
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.textContent = `${minutes}:${seconds}`;

      if (duration > 7) {
        duration--;
      } else {
        // Keep a very low duration (e.g. 7 seconds remaining) to maintain urgency,
        // or reset back to a random low time between 8 and 12 minutes if the user reloads.
        duration = 8 * 60 + Math.floor(Math.random() * 120);
      }
    };

    // Initialize immediately and run every second
    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ==========================================================================
  // 2. SOCIAL PROOF NOTIFICATION SYSTEM (TOAST POPUPS)
  // ==========================================================================
  const toast = document.getElementById("social-proof-toast");
  const userNameSpan = document.getElementById("toast-user-name");

  if (toast && userNameSpan) {
    const names = [
      "Lucas C.", "Mariana S.", "Gabriel M.", "Aline T.", "Pedro H.", 
      "Juliana F.", "Rodrigo A.", "Beatriz R.", "Felipe S.", "Camila G.", 
      "Marcos V.", "Letícia O.", "Gustavo D.", "Amanda P.", "Bruno K.",
      "Thiago L.", "Sofia M.", "André C.", "Fernanda R.", "Vinícius P.",
      "Rafael M.", "Larissa S.", "Daniel B.", "Isabela G.", "Leonardo F."
    ];

    const showNotification = () => {
      // Pick a random name from the list
      const randomName = names[Math.floor(Math.random() * names.length)];
      userNameSpan.textContent = randomName;

      // Make the toast slide up by adding the 'show' class
      toast.classList.add("show");

      // Hide the toast after 3.8 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3800);

      // Schedule the next notification with a random delay between 7 and 11 seconds
      const nextDelay = (Math.floor(Math.random() * 5) + 7) * 1000;
      setTimeout(showNotification, nextDelay);
    };

    // Trigger the very first popup after 3 seconds from page load
    setTimeout(showNotification, 3000);
  }
});
