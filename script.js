// Minimalist Portfolio Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Console welcome message
    console.log('%c🎯 Welcome to Spencer Bergamo\'s Portfolio!',
        'font-family: "Fira Code", monospace; font-size: 16px; color: #DC2626; font-weight: bold;');
    console.log('%cBuilt with minimalism, passion, and growth in mind ✨',
        'font-family: "Fira Code", monospace; font-size: 12px; color: #71717A;');

    const menuItems = document.querySelectorAll('.interactive-menu span');
    const contentSection = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        console.log('showing section', sectionId);

        contentSection.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
        }

        const activeMenuItem = document.querySelector(`[data-section=${sectionId}]`);
        if (activeMenuItem) {
            activeMenuItem.classList.add('active');
        }

    }

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    showSection('projects');

});

// Utility function to handle external links
function openExternalLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Function to copy email to clipboard
function copyEmailToClipboard() {
    const email = 'hello@spencerbergamo.com';

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('Email copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            showNotification('Email copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }

        document.body.removeChild(textArea);
    }
}

// Simple notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 500;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
