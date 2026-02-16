// ========================================
// GENERAL HEADER AND FOOTER LOADER
// ========================================

// Header HTML (with mobile toggle!)
const headerHTML = `
<header>
  <div class="header-container">
    <div class="logo-section">
      <img src="/images/industrial-court-upholds-nysc-preliminary-objection-national-youth-service-corps-11562998099jxdao7r2ez-removebg-preview.png" 
           alt="NYSC Logo" class="header-logo">
      <img src="/images/servicom-logo-removebg-preview.png" 
           alt="SERVICOM Logo" class="header-logo">
      <div class="logo-text">
        <h1>SERVICOM CDS</h1>
        <p>Osogbo, Osun State</p>
      </div>
    </div>

    <!-- ✅ MOBILE HAMBURGER TOGGLE -->
    <div class="menu-toggle" id="menuToggle">
      <i class="fas fa-bars"></i>
    </div>

    <nav class="main-nav">
      <ul id="navMenu"> <!-- ⚠️ ID changed to match CSS -->
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

// Footer HTML (unchanged)
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

// Insert header/footer AND initialize mobile menu
document.addEventListener('DOMContentLoaded', () => {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }

  // ✅ Initialize mobile menu AFTER header is in DOM
  initMobileMenu();

  // Highlight active page
  highlightActivePage();
});

// ✅ Mobile menu toggle (runs after DOM insertion)
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu'); // matches CSS

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
}

// Highlight active page
function highlightActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;

    // Handle both /index.html and /index.html#section
    const linkPage = linkHref
      .replace(/^\/+/, '') // remove leading slashes
      .split('#')[0]       // ignore hash
      .split('?')[0];      // ignore query params

    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}