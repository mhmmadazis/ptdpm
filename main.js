//HEADER
var images = ["assets/bg1.jpg", "assets/pic-1.jpg", "assets/pic-3.jpg"];
// Sebuah array yang berisi path gambar untuk slideshow

var currentImageIndex = 0;
// Variabel untuk melacak indeks gambar saat ini

var slideshowHeader = document.querySelector(".header");
// Memilih elemen HTML dengan class "header" sebagai header slideshow

function changeBackgroundImage() {
  // Fungsi untuk mengubah gambar latar belakang pada header slideshow
  currentImageIndex = (currentImageIndex + 1) % images.length;
  // Memperbarui indeks gambar saat ini dengan menambahkannya dan memastikan kembali ke indeks awal jika melebihi jumlah gambar
  var imageUrl = images[currentImageIndex];
  // Mendapatkan URL gambar untuk indeks saat ini
  slideshowHeader.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" +
    imageUrl +
    ")";
  // Mengatur gambar latar belakang pada header slideshow dengan lapisan gradasi linear dan URL gambar saat ini
}

setInterval(changeBackgroundImage, 5000);
// Memanggil fungsi changeBackgroundImage setiap 5 detik untuk menciptakan efek slideshow

//VISI MISI
function showVisimisi(visimisi, button) {
  // Fungsi untuk menampilkan konten visi dan misi berdasarkan pilihan yang dipilih
  var visimisiContent = "";
  switch (visimisi) {
    case "a":
      visimisiContent =
        "<ul><li>Menjadikan PT. Danapati Mulia perusahaan Jasa Konstruksi terbaik dan professional untuk bersaing di dalam maupun luar negeri</li><li>Memberikan hasil produk Jasa Konstruksi yang terbaik kepada pelanggan dengan jaminan mutu, jaminan keamanan dan jaminan kelestarian lingkungan</li><li>Menerapkan Kebijakan K3</li></ul>";
      break;
    case "b":
      visimisiContent =
        "<ul><li>Meningkatkan pelayanan terhadap pelanggan</li><li>Mengerjakan jasa konstruksi secara profesional</li><li>Meningkatkan kualitas sarana dan prasarana secara terus-menerus</li><li>Meningkatkan kesadaran pekerja akan kesehatan dan keselamatan kerja</li><li>Meningkatkan kualitas sumber daya manusia, pendapatan perusahaan dan kesejahteraan pekerja</li><li>Memajukan pembangunan pemerintah di bidang infrastruktur guna tercapainya kesejahteraan masyarakat, bangsa dan negara</li><li>Perusahaan ingin mencapai zero accident dan penyakit yang timbul akibat kerja</li></ul>";
      break;
    default:
      visimisiContent = "Tidak ditemukan visi dan misi.";
  }
  document.getElementById("visimisi").innerHTML = visimisiContent;
  // Mengatur konten HTML pada elemen dengan id "visimisi" untuk menampilkan konten visi dan misi

  var buttons = document.getElementsByClassName("button1");

  // Menghapus kelas "active" dari semua tombol
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Menambahkan kelas "active" pada tombol yang diklik
  button.classList.add("active");
  // Menambahkan kelas "active" pada tombol yang diklik untuk tujuan styling
}
