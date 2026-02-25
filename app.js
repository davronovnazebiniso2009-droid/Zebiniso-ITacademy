window.onload = function() {
    const ism = localStorage.getItem('zebiniso_ism');
    if (ism) {
        document.getElementById('nameBox').classList.add('hidden');
        document.getElementById('fastBtn').classList.remove('hidden');
    }
    // Harflar animatsiyasi
    document.querySelectorAll('.animated-text span').forEach((s, i) => {
        s.style.animationDelay = (i * 0.1) + 's';
    });
};

function kirish() {
    const ism = document.getElementById('nameInput').value.trim();
    if (!ism) return alert("Ism kiriting!");
    localStorage.setItem('zebiniso_ism', ism);
    // Ism yozilgandan keyin darslar sahifasiga yo‘naltiramiz
    window.location.href = "http://127.0.0.1:5500/DarslarB/index.html";
}

function tezKirish() {
    const ism = localStorage.getItem('zebiniso_ism');
    if (!ism) return alert("Avval ism kiriting!");
    window.location.href = "http://127.0.0.1:5500/DarslarB/index.html";
}
