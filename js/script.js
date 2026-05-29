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
});