function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

window.toggleTheme = function () {
    const isDark = document.body.classList.contains('dark-mode');

    if (isDark) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
};

function updateThemeButton() {
    const btn = document.getElementById('themeBtn');

    if (!btn) return;

    btn.textContent =
        document.body.classList.contains('dark-mode')
            ? 'Light Mode'
            : 'Dark Mode';
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

    applyTheme(isDark ? 'light' : 'dark');

    localStorage.setItem(
        'theme',
        isDark ? 'light' : 'dark'
    );
};

applyTheme(localStorage.getItem('theme') || 'light');
