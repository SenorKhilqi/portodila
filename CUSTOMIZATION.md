# 🎨 Panduan Kustomisasi Advanced

## Mengubah Skema Warna

### 1. Gradient Utama
Edit di `style.css` bagian `:root`:

```css
:root {
    /* Gradient Purple-Blue (Default) */
    --gradient-purple: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Alternatif Gradient: */
    
    /* Ocean Blue */
    --gradient-blue: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    
    /* Sunset Pink */
    --gradient-pink: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    
    /* Fresh Green */
    --gradient-green: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    
    /* Dark Professional */
    --gradient-dark: linear-gradient(135deg, #232526 0%, #414345 100%);
}
```

### 2. Mengganti Gradient di Seluruh Website
Cari dan ganti `var(--gradient-purple)` dengan gradient pilihan Anda di file CSS.

## Mengubah Font

### Menggunakan Google Fonts
Tambahkan di `<head>` file `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Lalu update di `style.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Font Recommendations:
- **Modern**: Poppins, Inter, Montserrat
- **Professional**: Roboto, Open Sans, Lato
- **Elegant**: Playfair Display, Crimson Text

## Mengatur Kecepatan Animasi

Edit di `style.css`:

```css
:root {
    /* Lambat */
    --transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Normal (Default) */
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Cepat */
    --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Menonaktifkan Efek Tertentu

### Menonaktifkan Particle Effect
Di `script.js`, comment bagian ini:

```javascript
// createParticles(); // Uncomment untuk disable particles
```

### Menonaktifkan Cursor Trail
Di `script.js`, comment bagian ini:

```javascript
// document.body.appendChild(cursor); // Disable cursor trail
```

### Menonaktifkan Loading Screen
Di `index.html`, hapus:

```html
<!-- <div class="loading-overlay" id="loadingScreen">
    <div class="loading-spinner"></div>
</div> -->
```

## Menambah Section Baru

### Template Section:

```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title" data-text="Portfolio">Portfolio Saya</h2>
        <div class="portfolio-grid">
            <!-- Konten portfolio -->
        </div>
    </div>
</section>
```

### CSS untuk Section Baru:

```css
.portfolio {
    background: var(--light-bg);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

## Mengubah Ukuran & Spacing

### Hero Section Height:
```css
.hero {
    min-height: 100vh; /* Full screen */
    /* atau */
    min-height: 80vh;  /* 80% screen */
}
```

### Section Padding:
```css
section {
    padding: 80px 0; /* Default */
    /* atau */
    padding: 120px 0; /* Lebih besar */
}
```

### Container Width:
```css
.container {
    max-width: 1200px; /* Default */
    /* atau */
    max-width: 1400px; /* Lebih lebar */
}
```

## Mengubah Card Style

### Flat Design (Tanpa Shadow):
```css
.experience-card {
    box-shadow: none;
    border: 2px solid #e0e0e0;
}
```

### Neumorphism Style:
```css
.experience-card {
    background: #f0f0f0;
    box-shadow: 
        20px 20px 60px #d9d9d9,
        -20px -20px 60px #ffffff;
}
```

## Optimasi Performance

### 1. Mengurangi Particles
Di `script.js`:
```javascript
for (let i = 0; i < 30; i++) { // Default: 50
```

### 2. Disable Parallax di Mobile
```css
@media (max-width: 768px) {
    .hero-content {
        transform: none !important;
    }
}
```

### 3. Lazy Load Images
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## Dark Mode Implementation

### Tambahkan di CSS:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #ffffff;
        --text-color: #f0f0f0;
        --light-bg: #1a1a1a;
        --white: #2d2d2d;
    }
}
```

### Toggle Dark Mode dengan JavaScript:
```javascript
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};
```

## Tips & Tricks

1. **Browser DevTools**: Gunakan untuk experiment dengan warna dan spacing
2. **Validator**: Cek HTML di https://validator.w3.org/
3. **PageSpeed Insights**: Test performa di https://pagespeed.web.dev/
4. **Responsive Testing**: Test di berbagai device menggunakan Browser DevTools
5. **Accessibility**: Pastikan contrast ratio minimal 4.5:1 untuk text

## Troubleshooting

### Animasi Tidak Smooth
- Pastikan GPU acceleration enabled
- Reduce particle count
- Disable heavy animations di mobile

### Images Tidak Load
- Check file path (case-sensitive)
- Pastikan format supported (jpg, png, webp)
- Optimize image size (max 500KB per image)

### Layout Broken di Mobile
- Test dengan Browser DevTools
- Check media queries
- Verify viewport meta tag

---

Need more help? Check browser console for errors!
