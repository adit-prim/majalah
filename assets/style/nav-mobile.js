/* nav-mobile.js — IMAGINARIUM Hamburger Navigation
   Tambahkan script ini ke setiap halaman HTML sebelum </body>:
   <script src="../../assets/js/nav-mobile.js"></script>
   (sesuaikan path relatif)
*/

(function () {
  var header  = document.querySelector('.magazine-header');
  var navMenu = document.querySelector('.nav-menu');
  if (!header || !navMenu) return;

  /* Buat tombol hamburger dan masukkan ke header */
  var btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Buka menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML =
    '<span class="garis"></span>' +
    '<span class="garis"></span>' +
    '<span class="garis"></span>';
  header.appendChild(btn);

  /* Buat overlay gelap */
  var overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  /* --- Fungsi buka / tutup --- */
  function tutupMenu() {
    btn.classList.remove('aktif');
    navMenu.classList.remove('aktif');
    overlay.classList.remove('aktif');
    document.body.style.overflow = '';
    btn.setAttribute('aria-label', 'Buka menu');
    btn.setAttribute('aria-expanded', 'false');
  }

  function bukaMenu() {
    btn.classList.add('aktif');
    navMenu.classList.add('aktif');
    overlay.classList.add('aktif');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-label', 'Tutup menu');
    btn.setAttribute('aria-expanded', 'true');
  }

  /* --- Event listeners --- */
  btn.addEventListener('click', function () {
    btn.classList.contains('aktif') ? tutupMenu() : bukaMenu();
  });

  overlay.addEventListener('click', tutupMenu);

  /* Tutup menu saat link diklik (navigasi antar halaman) */
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', tutupMenu);
  });

  /* Tutup menu saat tombol Escape ditekan */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') tutupMenu();
  });

  /* Tutup menu saat resize ke desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) tutupMenu();
  });
})();