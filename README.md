# ModernShop 🛍️

ModernShop adalah sebuah website e-commerce premium yang dibangun menggunakan teknologi web dasar (**HTML, CSS, dan JavaScript**) dengan fokus pada estetika modern, responsivitas, dan pengalaman pengguna yang halus.

![ModernShop Banner](https://raw.githubusercontent.com/NXRts/MODERNSHOP/main/assets/images/headphones.png)

## ✨ Fitur Utama

- **Desain Modern & Glassmorphism**: Antarmuka gelap (Dark Mode) yang elegan dengan efek blur dan transparansi.
- **Katalog Produk Dinamis**: Render produk dilakukan secara otomatis melalui JavaScript.
- **Sistem Keranjang Belanja**:
  - Tambah/Hapus produk.
  - Penyesuaian jumlah barang.
  - Perhitungan total harga otomatis.
  - Sinkronisasi data menggunakan `localStorage`.
- **Sistem Modal Premium**: Notifikasi kustom untuk pengalaman interaktif yang lebih baik.
- **Navigasi Multi-Halaman**: Termasuk halaman Beranda, Produk, Tentang Kami, dan Kontak.
- **Checkout Flow**: Simulasi proses pembayaran dengan ringkasan pesanan yang real-time.
- **Fully Responsive**: Teroptimasi untuk desktop, tablet, dan smartphone.

## 🚀 Teknologi yang Digunakan

- **HTML5**: Struktur semantik.
- **Vanilla CSS3**: Custom properties (variabel), modern layout (Flexbox & Grid), dan animasi.
- **Vanilla JavaScript**: Logika aplikasi, manipulasi DOM, dan pengelolaan state.
- **Google Fonts**: Tipografi menggunakan font 'Inter'.

## 📁 Struktur Folder

```text
.
├── index.html          # Halaman Beranda
├── products.html       # Katalog Produk
├── cart.html           # Keranjang Belanja
├── checkout.html       # Alur Checkout
├── about.html          # Informasi Tentang Kami
├── contact.html        # Halaman Kontak
├── css/
│   └── style.css       # Seluruh gaya visual & desain sistem
├── js/
│   ├── main.js         # Logika utama (Keranjang, Modal, UI)
│   └── products.js     # Database produk (JSON-like)
└── assets/
    └── images/         # Asset gambar produk berkualitas tinggi
```

## 🛠️ Cara Menjalankan Secara Lokal

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/NXRts/MODERNSHOP.git
   ```
2. **Masuk ke Direktori**:
   ```bash
   cd MODERNSHOP
   ```
3. **Jalankan via Browser**:
   - Karena project ini menggunakan JavaScript sederhana, Anda dapat langsung membuka `index.html` di browser pilihan Anda.
   - *Rekomendasi*: Gunakan ekstensi "Live Server" di VS Code atau jalankan server lokal sederhana:
     ```bash
     npx serve .
     ```

## 🤝 Berkontribusi

Kontribusi selalu diterima! Jika Anda ingin meningkatkan website ini, silakan melakukan *fork* repositori ini dan kirimkan *pull request*.

---

Dibuat dengan ❤️ untuk pengalaman belanja yang lebih modern.
© 2026 ModernShop. All rights reserved.
