(() => {
  const groups = document.querySelectorAll('.profile-milestones');
  if (!groups.length || !window.HTMLDialogElement) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'profile-gallery';
  dialog.setAttribute('aria-label', 'Profile photos');
  dialog.innerHTML = `
    <button type="button" class="gallery-close" aria-label="Close photo viewer">×</button>
    <div class="gallery-image-row">
      <button type="button" class="gallery-prev" aria-label="Previous photo">‹</button>
      <img class="gallery-image" alt="">
      <button type="button" class="gallery-next" aria-label="Next photo">›</button>
    </div>
    <p class="gallery-caption" aria-live="polite"></p>
    <a class="gallery-original" target="_blank" rel="noopener">Open original photo</a>`;
  document.body.append(dialog);

  const image = dialog.querySelector('.gallery-image');
  const caption = dialog.querySelector('.gallery-caption');
  const original = dialog.querySelector('.gallery-original');
  const previous = dialog.querySelector('.gallery-prev');
  const next = dialog.querySelector('.gallery-next');
  let photos = [];
  let index = 0;
  let opener;
  let previousOverflow;

  function showPhoto(position) {
    index = (position + photos.length) % photos.length;
    const photo = photos[index];
    image.src = photo.href;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = `${image.alt} (${index + 1} of ${photos.length})`;
    original.href = photo.href;
    previous.hidden = next.hidden = photos.length < 2;
  }

  groups.forEach(group => {
    const links = Array.from(group.querySelectorAll('.profile-milestone > a'));
    group.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const position = links.findIndex(photo => photo.href === link.href);
        if (position < 0) return;
        event.preventDefault();
        photos = links;
        opener = link;
        showPhoto(position);
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
      });
    });
  });
  previous.addEventListener('click', () => showPhoto(index - 1));
  next.addEventListener('click', () => showPhoto(index + 1));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(index + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    image.removeAttribute('src');
    opener?.focus({preventScroll: true});
  });
})();
