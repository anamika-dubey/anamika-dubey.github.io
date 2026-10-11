// Keep the preview outside scrolling news tables so it cannot be clipped.
document.addEventListener('DOMContentLoaded', () => {
  const preview = document.createElement('div');
  preview.className = 'news-member-preview';
  preview.hidden = true;
  preview.setAttribute('aria-hidden', 'true');
  document.body.append(preview);
  let request = 0;
  const hide = () => { request += 1; preview.hidden = true; };
  const show = async link => {
    hide();
    const current = request;
    // Decode a fresh image before exposing it, never the previous member's pixels.
    const portrait = document.createElement('img');
    portrait.alt = '';
    portrait.src = link.dataset.portrait;
    try { await portrait.decode(); } catch { return; }
    // Leaving, scrolling, or entering another name invalidates pending loads.
    if (current !== request) return;
    preview.replaceChildren(portrait);
    const rect = link.getBoundingClientRect();
    preview.hidden = false;
    const size = preview.getBoundingClientRect();
    preview.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - size.width - 8))}px`;
    preview.style.top = `${rect.top >= size.height + 16 ? rect.top - size.height - 8 : Math.min(rect.bottom + 8, innerHeight - size.height - 8)}px`;
  };
  document.querySelectorAll('.news-member').forEach(link => {
    link.addEventListener('pointerenter', event => {
      // Some embedded browsers report hover:none even for an actual mouse.
      if (event.pointerType === 'mouse') show(link);
    });
    link.addEventListener('pointerleave', hide);
    link.addEventListener('focus', () => show(link));
    link.addEventListener('blur', hide);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  document.addEventListener('scroll', hide, true);
  window.addEventListener('resize', hide);
});
