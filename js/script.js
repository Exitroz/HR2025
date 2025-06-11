
function updateCountdown() {
    const weddingDate = new Date("2025-06-28T11:00:00");
    const now = new Date();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const navLinks = document.querySelector("nav ul");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


// Messaging
// Message handling
    const form = document.getElementById('message-form');
    const messagesDiv = document.getElementById('messages-list');
    let messages = JSON.parse(localStorage.getItem('guestbook-messages') || "[]");

    function showMessages() {
        messagesDiv.innerHTML = messages.length
            ? messages.map(m => 
                `<div class="guest-msg">
                    <strong>${m.name}</strong><br>
                    <span>${m.text}</span>
                </div>`
              ).join("")
            : '<div class="messages-placeholder"><em>No messages yet—be the first to leave one!</em></div>';
    }
    showMessages();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('guest-name').value.trim() || "Anonymous";
        const text = document.getElementById('guest-message').value.trim();
        if (!text) return;
        messages.push({ name, text });
        localStorage.setItem('guestbook-messages', JSON.stringify(messages));
        form.reset();
        showMessages();
    });