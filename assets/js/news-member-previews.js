// Keep the preview outside scrolling news tables so it cannot be clipped.
document.addEventListener('DOMContentLoaded', () => {
  const preview = document.createElement('div');
  preview.className = 'news-member-preview';
  preview.hidden = true;
  preview.setAttribute('aria-hidden', 'true');
  const portrait = document.createElement('img');
  portrait.alt = '';
  preview.append(portrait);
  document.body.append(preview);
  const hide = () => { preview.hidden = true; };
  const show = link => {
    portrait.src = link.dataset.portrait;
    const rect = link.getBoundingClientRect();
    preview.hidden = false;
    const size = preview.getBoundingClientRect();
    preview.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - size.width - 8))}px`;
    preview.style.top = `${rect.top >= size.height + 16 ? rect.top - size.height - 8 : Math.min(rect.bottom + 8, innerHeight - size.height - 8)}px`;
  };
  document.querySelectorAll('.news-member').forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (matchMedia('(hover: hover)').matches) show(link);
    });
    link.addEventListener('mouseleave', hide);
    link.addEventListener('focus', () => show(link));
    link.addEventListener('blur', hide);
  });
  portrait.addEventListener('error', hide);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  document.addEventListener('scroll', hide, true);
  window.addEventListener('resize', hide);
});
