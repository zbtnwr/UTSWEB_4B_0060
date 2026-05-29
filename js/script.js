$(document).ready(function() {
    // 1. Perbesar / Normalkan Ukuran Huruf
    $('#btn-teks-besar').click(function() {
        $('body').css('font-size', '18px'); // Huruf membesar
    });
    $('#btn-teks-normal').click(function() {
        $('body').css('font-size', '16px'); // Huruf kembali normal
    });
});