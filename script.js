document.addEventListener("DOMContentLoaded", function() {
    // Ambil parameter dari URL (misal: ?order_id=12345&nominal=50000&status=pending)
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("order_id");
    const nominal = urlParams.get("nominal");
    const status = urlParams.get("status");

    // Tampilkan data di halaman
    document.querySelector("#order-id span").textContent = orderId || "Tidak tersedia";
    document.querySelector("#nominal span").textContent = nominal ? `Rp ${nominal}` : "Tidak tersedia";
    document.querySelector("#status span").textContent = status || "Tidak tersedia";

    // Tombol bayar
    document.getElementById("bayarBtn").addEventListener("click", function() {
        alert("Lanjutkan ke pembayaran!");
        // Bisa diarahkan ke pembayaran Dana QRIS, misalnya:
        window.location.href = "https://i.ibb.co.com/Q77KLkXY/qr-ID1025374704704-12-02-25-173936069-1739360693022.jpg";
    });
});