// Resume interactions: theme toggle, scroll reveal, keyboard shortcuts, print.
// Initial theme is applied by a small inline script in index.html (defaults to dark).

// Toggle dark mode and store preference.
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Trigger print dialog.
function printResume() {
  window.print();
}

document.addEventListener('DOMContentLoaded', () => {
  // Reveal sections as they scroll into view.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  document.querySelectorAll('section').forEach(section => observer.observe(section));
});

// Keyboard shortcuts.
document.addEventListener('keydown', e => {
  // Ctrl/Cmd + D = toggle dark mode
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
    e.preventDefault(); // prevent browser bookmark behavior
    toggleDarkMode();
  }

  // Shift + P = print
  if (e.shiftKey && e.key.toLowerCase() === 'p') {
    e.preventDefault();
    printResume();
  }
});
