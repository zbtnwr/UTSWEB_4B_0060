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
        e.preventDefault(); // Muncul pop up
        alert('Maaf, gambar ini tidak boleh disimpan sembarangan.');
    });

    // 5. Ubah Ketebalan Garis Saat Diklik menjadi warna biru
    
    $('.kartu-layanan').click(function() {
        $(this).toggleClass('border-primary border-3');
    });

    // 6. Kursor Langsung Aktif Otomatis

    // Jadi ketika halaman web dibuka, kursor langsung ada di kotak "Nama Anda"
    $('#input-nama').focus();

    // 7. Sorot (Highlight warna kunign) Kolom Input Form
  
    $('.input-sorot').focus(function() {
        // Saat diklik/aktif, latar belakang jadi kuning muda
        $(this).css('background-color', '#fff3cd');
    });
    $('.input-sorot').blur(function() {
        // Saat kursor pindah ke tempat lain, latar kembali putih
        $(this).css('background-color', '#ffffff');
    });

    // 8. Ganti Teks Tombol Sementara

    $('#btn-kirim').hover(
        function() {
            // Saat mouse berada di atas tombol
            $(this).text('Yakin mau dikirim?');
        },
        function() {
            // Saat mouse pergi
            $(this).text('Kirim Pesan');
        }
    );

    // 9. Syarat Centang

    $('#cek-setuju').change(function() {
        if ($(this).is(':checked')) {
            // Jika dicentang, hapus attribute "disabled" (tombol nyala)
            $('#btn-kirim').prop('disabled', false);
        } else {
            // Jika tidak dicentang, pasang attribute "disabled" (tombol mati)
            $('#btn-kirim').prop('disabled', true);
        }
    });

    // 10. Tombol Scroll Kembali Ke Atas

    $('#btn-ke-atas').click(function() {
        // Mengubah posisi scroll layar keatas)
        $(window).scrollTop(0);
    });

});