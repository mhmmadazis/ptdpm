var images = ["assets/bg1.jpg", "assets/pic-1.jpg", "assets/pic-3.jpg"];
      var currentImageIndex = 0;
      var slideshowHeader = document.querySelector(".header");

      function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        var imageUrl = images[currentImageIndex];
        slideshowHeader.style.backgroundImage =
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" +
          imageUrl +
          ")";
      }
      setInterval(changeBackgroundImage, 5000);

      function showArticle(article) {
        var articleText = "";

        if (article === "a") {
          articleText = "Artikel A";
          document.getElementById("about").style.backgroundImage =
            "url('assets/pic-1.jpg')";
        } else if (article === "b") {
          articleText = "Artikel B";
          document.getElementById("about").style.backgroundImage =
            "url('assets/pic-2.jpg')";
        } else if (article === "c") {
          articleText = "Artikel C";
          document.getElementById("about").style.backgroundImage =
            "url('assets/pic-3.jpg')";
        } else if (article === "d") {
          articleText = "Artikel D";
          document.getElementById("about").style.backgroundImage =
            "url('assets/pic-4.jpeg')";
        }

        document.getElementById("article").textContent = articleText;
      }

      function showVisimisi(visimisi, button) {
        var visimisiContent = "";
        switch (visimisi) {
          case "a":
            visimisiContent =
              "<ul><li>Menjadikan PT. Danapati Mulia perusahaan Jasa Konstruksi terbaik dan professional untuk bersaing di dalam maupun luar negeri</li><li> Memberikan hasil produk Jasa Konstruksi yang terbaik kepada pelanggan dengan jaminan mutu, jaminan keamanan dan jaminan kelestarian lingkungan</li><li>Menerapkan Kebijakan K3</li></ul>";
            break;
          case "b":
            visimisiContent =
              "<ul><li>Meningkatkan pelayanan terhadap pelanggan</li><li>  Mengerjakan jasa konstruksi secara profesional</li><li>Meningkatkan kualitas sarana dan prasarana secara terus-menerus</li><li> Meningkatkan kesadaran pekerja akan kesehatan dan keselamatan kerja</li><li>Meningkatkan kualitas sumber daya manusia, pendapatan perusahaan dan kesejahteraan pekerja</li><li>Memajukan pembangunan pemerintah di bidang infrastruktur guna tercapainya kesejahteraan masyarakat, bangsa dan negara</li><li>Perusahaan ingin mencapai zero accident dan penyakit yang timbul akibat kerja</li></ul>";
            break;
          default:
            visimisiContent = "No visimisi found.";
        }
        document.getElementById("visimisi").innerHTML = visimisiContent;

        var buttons = document.getElementsByClassName("button1");

        // Menghapus kelas "active" dari semua tombol
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active");
        }

        // Menambahkan kelas "active" pada tombol yang diklik
        button.classList.add("active");
      }
      $(".logo-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      });