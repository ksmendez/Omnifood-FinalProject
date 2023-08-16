// =========================================================
// Set current year
// =========================================================
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// =========================================================
// Make mobile navigation work
// =========================================================
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// =========================================================
// Smooth scrolling animation
// =========================================================

const allLinksEl = document.querySelectorAll('a:link');
allLinksEl.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const hrefEl = link.getAttribute('href');

    // Scroll back to the top
    if (hrefEl === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    // Scroll to other links
    if (hrefEl !== '#' && hrefEl.startsWith('#')) {
      const sectionEl = document.querySelector(hrefEl);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// =========================================================
// Sticky header nav
// =========================================================
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    //   In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);

// =========================================================
// Safari Flexbox Gap Fix
// =========================================================
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
