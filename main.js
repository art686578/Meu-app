function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    toggleMenu();
}

function sendMsg() {
    const user = document.getElementById('chat-user').value || "Anônimo";
    const msg = document.getElementById('chat-msg').value;
    const box = document.getElementById('chat-messages');
    if(msg) {
        box.innerHTML += `<p><strong>${user}:</strong> ${msg}</p>`;
        document.getElementById('chat-msg').value = "";
        box.scrollTop = box.scrollHeight;
    }
}
