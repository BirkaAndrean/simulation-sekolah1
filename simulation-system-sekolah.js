// Fungsi untuk menangani eksplorasi topik
function explore(topic) {
    // Ambil elemen dengan id "result"
    const resultDiv = document.getElementById('result');

    // Tampilkan hasil eksplorasi di area "result"
    resultDiv.innerHTML = <p>Anda mengeksplorasi topik: <strong>${topic}</strong></p>;
}