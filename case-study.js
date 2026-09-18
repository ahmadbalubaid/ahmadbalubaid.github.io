/* Ahmed Balubaid — Portfolio
   Shared behaviour for case-study pages: click-to-enlarge screenshots. */
(function () {
  function openLightbox(src, alt) {
    var overlay = document.getElementById('lightbox-overlay');
    var img = document.getElementById('lightbox-image');
    if (!overlay || !img) return;
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        var img = el.querySelector('img');
        if (img) openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
      });
    });

    var overlay = document.getElementById('lightbox-overlay');
    if (overlay) overlay.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  });
})();
