# Portfolio Mahasiswi Akuntansi

Portfolio website profesional yang dirancang khusus untuk mahasiswi jurusan Akuntansi.

## Fitur

- **Desain Responsif** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Navigasi Smooth** - Animasi smooth scrolling antar section
- **Section Lengkap**:
  - Hero/Beranda dengan intro menarik
  - Tentang Saya dengan informasi pribadi
  - Pendidikan dengan timeline visual
  - Keahlian dengan progress bar interaktif
  - Pengalaman & Proyek
  - Sertifikasi & Penghargaan
  - Formulir Kontak

## Cara Menggunakan

1. **Edit Informasi Pribadi**
   - Buka file `index.html`
   - Ganti "Nama Anda" dengan nama Anda
   - Update informasi kontak (email, telepon, lokasi)
   - Ganti foto profil di section About (URL: `https://via.placeholder.com/400x400`)

2. **Kustomisasi Konten**
   - Edit section pendidikan dengan universitas dan prestasi Anda
   - Update keahlian dan tingkat kemampuan
   - Tambahkan pengalaman kerja atau magang Anda
   - Masukkan sertifikasi yang Anda miliki

3. **Ubah Warna Tema**
   - Buka file `style.css`
   - Edit variabel di bagian `:root` untuk mengubah skema warna:
     - `--primary-color`: Warna utama
     - `--secondary-color`: Warna sekunder
     - `--accent-color`: Warna aksen

4. **Jalankan Website**
   - Buka file `index.html` di browser Anda
   - Atau gunakan Live Server di VS Code untuk preview real-time

## Struktur File

```
portodilla/
│
├── index.html          # File HTML utama
├── style.css           # File styling/CSS
├── script.js           # File JavaScript untuk interaktivitas
└── README.md          # Dokumentasi
```

## Teknologi yang Digunakan

- HTML5
- CSS3 (dengan Flexbox & Grid)
- JavaScript (Vanilla)
- Font Awesome Icons

## Kustomisasi Lanjutan

### Menambah Social Media Links
Di section Contact, update link social media:
```html
<a href="https://linkedin.com/in/username" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

### Menambah Section Baru
Tambahkan section baru sebelum footer:
```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title">Portfolio Saya</h2>
        <!-- Konten portfolio -->
    </div>
</section>
```

### Mengubah Gradient
Edit gradient di `style.css`:
```css
--gradient: linear-gradient(135deg, #warna1 0%, #warna2 100%);
```

## Tips Personalisasi

1. **Foto Profil**: Gunakan foto professional dengan background netral
2. **Warna**: Pilih warna yang mencerminkan profesionalisme (biru, ungu, hijau)
3. **Konten**: Fokus pada prestasi dan pengalaman yang relevan dengan akuntansi
4. **Keahlian**: Prioritaskan software akuntansi dan analytical skills
5. **Pengalaman**: Sertakan magang, organisasi, atau proyek akademik

## Deploy ke Web

Anda bisa deploy portfolio ini ke:
- **GitHub Pages** (Gratis)
- **Netlify** (Gratis)
- **Vercel** (Gratis)
- **000webhost** (Gratis)

## Support

Jika ada pertanyaan atau butuh bantuan kustomisasi, silakan hubungi developer.

## Lisensi

Free to use untuk keperluan pribadi.

---

**Selamat menggunakan portfolio Anda! 🎓**
