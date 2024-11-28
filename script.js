// Fungsi untuk smooth scrolling ke bagian tertentu
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk menampilkan pesan saat produk ditambahkan ke keranjang
function addToCart(product) {
    const cart = document.createElement('div');
    cart.textContent = `${product} telah ditambahkan ke keranjang!`;
    cart.style.position = 'fixed';
    cart.style.bottom = '20px';
    cart.style.right = '20px';
    cart.style.padding = '10px 20px';
    cart.style.background = '#ff5733';
    cart.style.color = '#fff';
    cart.style.borderRadius = '5px';
    cart.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    cart.style.fontSize = '16px';
    document.body.appendChild(cart);

    // Menghilangkan pesan setelah 3 detik
    setTimeout(() => {
        cart.remove();
    }, 3000);
}

// Event listener untuk smooth scroll pada semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
