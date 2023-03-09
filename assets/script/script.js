// Mengganti navbar color ketika scroll dengan menambah class .scrolling-active
const navBar = document.querySelector(".nav__container");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", positionWindow);
});
// END
// ********************
// ********************
// ********************
// MENGUBAH ACTIVE TAB NAVBAR DARI ACTIVE DAN LINE-nya
const links = document.querySelectorAll(".nav__container .links a");
const line = document.querySelector("#line");

// Menambahkan event listener untuk setiap link yang ada dalam var links
// Saat link diklik, class "active" akan ditambahkan pada link tersebut
// Serta ukuran dan posisi line akan disesuaikan dengan ukuran dan posisi link yang diklik
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    const linkWidth = link.offsetWidth;
    const linkLeft = link.offsetLeft;

    line.style.width = `${linkWidth}px`;
    line.style.left = `${linkLeft}px`;
  });
});

// definisi elemen article sebagai var sections
const sections = document.querySelectorAll("article");

// Mendefinisikan pengaturan untuk IntersectionObserver sebagai var options
// root: null artinya viewport akan menjadi root, dan threshold 0.7 artinya 70% bagian dari elemen harus berada dalam viewport
const options = {
  root: null,
  threshold: 0.7,
};

// Membuat instance dari IntersectionObserver dan menentukan aksi yang akan dilakukan saat ada elemen yang berubah tampilan
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // definisikan elemen yang akan dirubah tampilan
    const id = entry.target.id;
    const link = document.querySelector(`.links a[href="#${id}"]`);

    // Jika elemen yang berubah tampilan berada dalam viewport
    if (entry.isIntersecting) {
      // Maka semua link akan kehilangan class "active"
      // Dan link yang sesuai dengan elemen yang berubah tampilan akan memiliki class "active"
      links.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");

      const linkWidth = link.offsetWidth;
      const linkLeft = link.offsetLeft;

      line.style.width = `${linkWidth}px`;
      line.style.left = `${linkLeft}px`;
    }
  });
}, options);

// Mengobservasi setiap elemen dalam var sections
sections.forEach((section) => observer.observe(section));

// END CHANGE DISPLAY NAVBAR
// ********************
// ********************
// ********************
// TESTIMONI CAROUSEL/SLIDER tanpa library
var slideIndex = 1;
showSlides(slideIndex); // manggil showSlides dg parameter slideIndex

// plusSlides menambah slideindex
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// CurrentSlide untuk menentukan slide saat ini
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Fungsi showSlides untuk menampilkan slide
function showSlides(n) {
  // definisi variabel dan ambil element
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // Jika nilai n lebih besar dari jumlah slide, maka slideIndex diberikan nilai 1
  // Jika nilai n lebih kecil dari 1, maka slideIndex diberikan nilai jumlah slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // loop untuk menjadikan slide lain display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop untuk mengubah semua dot menjadi tidak active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Menampilkan slide dan dots sesuai slideIndex
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// set loop interval dalam ... detik
setInterval(function () {
  plusSlides(1);
}, 4000);
// END TESTIMONI CAROUSEL/SLIDER
