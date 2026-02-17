// Abrir/Fechar Menu
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Trocar de Abas
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    toggleMenu();
}

// Chat Local (Simulado para o Global)
function sendMsg() {
    const user = document.getElementById('chat-user').value || "Anônimo";
    const msg = document.getElementById('chat-msg').value;
    const box = document.getElementById('chat-messages');
    
    if(msg) {
        box.innerHTML += `<p style="margin-bottom:8px"><strong>${user}:</strong> ${msg}</p>`;
        document.getElementById('chat-msg').value = "";
        box.scrollTop = box.scrollHeight;
    }
}

// IA Simples
function askIA() {
    const input = document.getElementById('ia-input');
    const box = document.getElementById('ia-box');
    if(input.value) {
        box.innerHTML += `<p style="color:#94a3b8; margin-top:10px">Você: ${input.value}</p>`;
        box.innerHTML += `<p style="color:#3b82f6">Gemini: Processando sua pergunta...</p>`;
        input.value = "";
        box.scrollTop = box.scrollHeight;
    }
}

// Despertador
let alarmTimer;
function setAlarm() {
    const time = document.getElementById('alarm-time').value;
    const sound = document.getElementById('alarm-sound').value;
    const audio = document.getElementById('alarm-audio');
    
    if(!time) return alert("Defina o horário!");

    const now = new Date();
    const alarm = new Date();
    const [h, m] = time.split(':');
    alarm.setHours(h, m, 0);

    if(alarm < now) alarm.setDate(alarm.getDate() + 1);

    const diff = alarm - now;
    document.getElementById('alarm-status').innerText = "Alarme ativado!";

    alarmTimer = setTimeout(() => {
        audio.src = sound;
        audio.play();
        alert("ACORDA!");
    }, diff);
}

// Game Boost
function boostFPS() {
    document.getElementById('fps-text').innerText = "Otimizando...";
    setTimeout(() => {
        alert("Cache limpo! Memória RAM liberada virtualmente.");
        document.getElementById('fps-text').innerText = "Boost Ativo (120 FPS)";
    }, 2000);
}
