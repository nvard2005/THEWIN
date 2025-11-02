document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all others
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Toggle current
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});