// Konfigurasi Supabase untuk upload foto + QR.
// Kosongkan SUPABASE_URL / SUPABASE_ANON_KEY untuk mode offline (hanya SAVE LOCAL).
// PENTING: pakai anon / publishable key saja. JANGAN pernah taruh service_role / secret key di sini.
window.FOG_GLASS_CONFIG = {
    SUPABASE_URL: 'https://fxgodohilfqabqkwrkre.supabase.co',        // contoh: 'https://abcdefghijkl.supabase.co'
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Z29kb2hpbGZxYWJxa3dya3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczMjYxNDMsImV4cCI6MjA4MjkwMjE0M30.9wgs6w6buzkYVsEVVJnQ6HqM2MDlzWg0eilDqVAwfTE',   // Project Settings > API Keys > anon / publishable key
    BUCKET: 'fog-glass',
    FOLDER: 'photos',
    // QR selalu mengarah ke photo.html?p=<path>, lalu photo.html mengambil fotonya dari Supabase Storage.
    // Kosongkan = otomatis pakai photo.html di folder yang sama dengan index.html
    //            (cocok kalau index.html sudah di-hosting, misal GitHub Pages).
    // Isi manual kalau index.html dijalankan lokal (localhost/file), karena HP tidak bisa membuka localhost.
    // Contoh: 'https://username.github.io/computer-vision/Fog%20Glass/photo.html'
    VIEWER_URL: ''
};
