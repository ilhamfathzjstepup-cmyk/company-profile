// Toggle Menu Hamburger untuk Tampilan HP
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

// Fungsi Pesan Produk via WhatsApp
function beliProduk(namaProduk) {
    const nomorWA = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const pesan = encodeURIComponent(`Halo iblumblum, saya berminat untuk memesan produk ${namaProduk}. Apakah stok masih tersedia?`);
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
}