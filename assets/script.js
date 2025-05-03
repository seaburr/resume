// Apply saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    // Scroll animator using IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
  
    document.querySelectorAll('section').forEach(section => observer.observe(section));
  });
  
  // Toggle dark mode and store preference
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  // Trigger print dialog
  function printResume() {
    window.print();
  }
  
  // Keyboard shortcuts
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
  
  // If no preference is saved, use system preference
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (!savedTheme) {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
    }
  
    // Scroll animation setup (unchanged)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
  
    document.querySelectorAll('section').forEach(section => observer.observe(section));
  });