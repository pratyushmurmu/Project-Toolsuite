function updateThemeButton() {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('dark-mode')
        ? 'LIGHT MODE'
        : 'DARK MODE';
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateThemeButton();
}

window.toggleTheme = function () {
    const isDark = document.body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
};

function getSystemTheme() {
    // Check if browser supports prefers-color-scheme media query
    if (window.matchMedia) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    return 'light'; // Fallback if not supported
}

function initTheme() {
    // Priority: 1) localStorage (user preference) 2) system preference 3) light (fallback)
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || getSystemTheme();
    applyTheme(theme);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
