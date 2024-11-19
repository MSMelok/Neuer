function updateCountdown() {
  const endDate = new Date("2025-06-01T00:00:00Z"); // Service end date
  const now = new Date();
  const diffInMs = endDate - now;

  if (diffInMs >= 0) {
    const daysRemaining = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    document.getElementById("daysRemaining").innerText = daysRemaining;
  } else {
    document.getElementById("daysRemaining").innerText = "0";
    document.querySelector(".day-label").innerText = "الخدمة انتهت";
  }
}

// Update the countdown immediately and every day
updateCountdown();
setInterval(updateCountdown, 24 * 60 * 60 * 1000); // Every 24 hours