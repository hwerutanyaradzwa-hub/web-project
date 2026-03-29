// Theme toggle script: toggles between 'light' and 'dark', persists in localStorage
(function() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (toggle) {
            // show a friendly label with icon
            toggle.textContent = theme === 'dark' ? '🌙 Dark' : '☀️ Light';
        }
    }

    // initialize from storage or prefers-color-scheme
    const stored = localStorage.getItem('theme');
    if (stored) {
        setTheme(stored);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(current);
            localStorage.setItem('theme', current);
        });
    }
})();
