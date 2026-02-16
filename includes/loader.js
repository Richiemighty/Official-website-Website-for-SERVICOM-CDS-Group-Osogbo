// ========================================
// GENERAL HEADER AND FOOTER LOADER
// Absolute links from root
// ========================================

// Header HTML
const headerHTML = `
<header>
    <div class="header-container">
        <div class="logo-section">
            <img src="/images/industrial-court-upholds-nysc-preliminary-objection-national-youth-service-corps-11562998099jxdao7r2ez-removebg-preview.png" 
                 alt="NYSC Logo" class="header-logo" 
                 onerror="console.error('NYSC logo failed to load')">
            <img src="/images/servicom-logo-removebg-preview.png" 
                 alt="SERVICOM Logo" class="header-logo" 
                 onerror="console.error('SERVICOM logo failed to load')">
            <div class="logo-text">
                <h1>SERVICOM CDS</h1>
                <p>Osogbo, Osun State</p>
            </div>
        </div>
        
        <nav class="main-nav">
            <ul id="nav-menu">
                <li><a href="/index.html" class="nav-link">Home</a></li>
                <li><a href="/index.html#about" class="nav-link">About Us</a></li>
                <li><a href="/index.html#services" class="nav-link">Services</a></li>
                <li><a href="/index.html#team" class="nav-link">Current Excos</a></li>
                <li><a href="/index.html#events" class="nav-link">Events</a></li>

                <li><a href="/index.html#contact" class="nav-link">Contact</a></li>
                <li><a href="/archive/archive.html" class="nav-link">Archive</a></li>
            </ul>
        </nav>
    </div>
</header>
`;

// Footer HTML
const footerHTML = `
<footer>
    <div class="footer-container">
        <div class="footer-logo">
            <img src="/images/servicom-logo-removebg-preview.png" alt="SERVICOM Logo">
        </div>
        <div class="footer-links">
            <a href="/index.html">Home</a>
            <a href="/index.html#about">About</a>
            <a href="/index.html#services">Services</a>
            <a href="/index.html#team">Team</a>
            <a href="/index.html#events">Events</a>
            <a href="/archive/archive.html">Archive</a>
            <a href="/index.html#contact">Contact</a>
        </div>
        <div class="footer-social">
            <a href="https://www.tiktok.com/@nysc.osogbo.servi" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/nyscosogboservicom/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
        <div class="copyright">
            <p>&copy; 2025 SERVICOM CDS Group, NYSC Osogbo. All Rights Reserved.</p>
            <p>Website created by
                <a href="https://richiemighty.vercel.app" target="_blank" rel="noopener noreferrer">Richie Mighty</a>
            </p>
        </div>
    </div>
</footer>

<div class="social-icons-fixed">
    <a href="https://www.instagram.com/nyscosogboservicom/" target="_blank" rel="noopener noreferrer" class="social-icon instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.tiktok.com/@nysc.osogbo.servi" target="_blank" rel="noopener noreferrer" class="social-icon tiktok">
        <i class="fab fa-tiktok"></i>
    </a>
    <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" class="social-icon whatsapp">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="mailto:nyscosogboservicom@gmail.com" class="social-icon email">
        <i class="fas fa-envelope"></i>
    </a>
</div>
`;

// Insert header and footer after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    highlightActivePage();
});

// Highlight active page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.toggle('show');
}
