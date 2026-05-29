$(document).ready(function() {
    // 1. Perbesar / Normalkan Ukuran Huruf
    $('#btn-teks-besar').click(function() {
        $('body').css('font-size', '18px'); // Huruf membesar
    });
    $('#btn-teks-normal').click(function() {
        $('body').css('font-size', '16px'); // Huruf kembali normal
    });

     // 2. Ubah Warna Judul dengan Double Click

    $('.judul-bisa-diklik').dblclick(function() {
        // Mengubah CSS warna tulisan menjadi biru
        $(this).css('color', '#0d6efd'); 
    });

    // 3. Ganti Gambar Saat Mouse Masuk (Hover Image)

    $('#gambar-profil').hover(
        function() { // Saat mouse masuk
            $(this).attr('src', 'logo Awura 2.png');
        }, 
        function() { // Saat mouse keluar
            $(this).attr('src', 'logo Awura.png');
        }
    );

    // 4. Cegah Klik Kanan Pada Gambar
    
    $('.cegah-klik-kanan').bind('contextmenu', function(e) {
        e.preventDefault(); // Muncu pop up
        alert('Maaf, gambar ini tidak boleh disimpan sembarangan.');
    });
});