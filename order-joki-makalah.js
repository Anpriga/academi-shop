function beliSekarang() {
    const nama = document.getElementById("nama").value;
    const nirm = document.getElementById("nirm").value;
    const prodi = document.getElementById("prodi").value;
    const fakultas = document.getElementById("fakultas").value;
    const kampus = document.getElementById("kampus").value;
    const judul = document.getElementById("judul").value || "-";
    const voucher = document.getElementById("voucher").value;

    let harga = 100000;

    // Voucher contoh
    if (voucher.toUpperCase() === "DISKON20") {
        harga = 80000;
    }

    const pesan = `
*JOKI MAKALAH*
-----------------------
Nama: ${nama}
NIRM: ${nirm}
Program Studi: ${prodi}
Fakultas: ${fakultas}
Kampus: ${kampus}
Judul Makalah: ${judul}
Voucher: ${voucher || "-"}
Harga: Rp ${harga.toLocaleString("id-ID")}
-----------------------
Saya ingin lanjut pemesanan.
    `;

    const nomorAdmin = "6288245742094";
    const url = "https://wa.me/" + nomorAdmin + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}
