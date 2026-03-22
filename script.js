// Ensure components are loaded when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  injectFloatingIcons();
  injectChatbot();
  initAnimations();
});

function injectHeader() {
  const headerHtml = `
    <header id="main-header">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <!-- SpotRize Logo Text -->
          <span>Spot</span>Rize
        </a>
        <nav class="nav-links" id="nav-links">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="about.html">About</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="career.html">Career</a>
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
        </nav>
        <button class="mobile-menu-btn" id="mobile-menu-btn">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHtml);

  // Set active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function injectFooter() {
  const footerHtml = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="index.html" class="logo" style="color: white; margin-bottom: 1rem; display: inline-block;">
              <span style="color: var(--secondary)">Spot</span>Rize
            </a>
            <p>Elevating businesses with innovative digital solutions. From web development to AI integration and visa services, we are your trusted technology partner.</p>
          </div>
          <div class="footer-col">
            <h3>Quick Links</h3>
            <div class="footer-links">
              <a href="about.html">About Us</a>
              <a href="services.html">Our Services</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="career.html">Careers</a>
              <a href="faq.html">FAQ</a>
            </div>
          </div>
          <div class="footer-col">
            <h3>Services</h3>
            <div class="footer-links">
              <a href="services.html">Web Development</a>
              <a href="services.html">App Development</a>
              <a href="services.html">Digital Marketing</a>
              <a href="services.html">IT Solutions</a>
              <a href="services.html">Visa & Immigration</a>
            </div>
          </div>
          <div class="footer-col">
            <h3>Contact Us</h3>
            <ul class="footer-contact">
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>123 Innovation Drive, Tech City, TX 75001</span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span>hello@spotrize.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} SpotRize Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
}

function injectFloatingIcons() {
  const iconsHtml = `
    <div class="floating-socials">
      <a href="#" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="#" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', iconsHtml);
}

function injectChatbot() {
  const chatbotHtml = `
    <div class="chatbot-icon" aria-label="Open Chatbot">
      <i class="fa-solid fa-message"></i>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', chatbotHtml);
  
  // Basic interaction for mockup
  setTimeout(() => {
    const chatbot = document.querySelector('.chatbot-icon');
    if(chatbot) {
      chatbot.addEventListener('click', () => {
        alert('Welcome to SpotRize Support! The chat window would open here.');
      });
    }
  }, 100);
}

function initAnimations() {
  // Add fade-in-up class to elements we want to animate
  const sections = document.querySelectorAll('.section-header, .card, .training-card, .portfolio-item, .testimonial-card');
  sections.forEach(el => el.classList.add('fade-in-up'));

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}
