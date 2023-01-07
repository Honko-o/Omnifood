///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
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
    console.log(isSupported);

    if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

document.getElementById('current-year').textContent = new Date().getFullYear();

let navBtn = document.querySelector('.btn-mobile-nav');
let mainHeader = document.querySelector('.header');

navBtn.addEventListener('click', function () {
    mainHeader.classList.toggle('nav-open');
});

/////////////////////////////////////////////////////
// Smooth Scrolling Animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);

        // Scroll Back to top
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
        // Close Mobile Navigation
        if (link.classList.contains('main-nav-link')) {
            mainHeader.classList.toggle('nav-open');
        }
    });
});

///////////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector('.hero-section');

const observer = new IntersectionObserver(
    function (entires) {
        const entr = entires[0];
        console.log(entr);

        if (!entr.isIntersecting) {
            document.body.classList.add('sticky');
        }

        if (entr.isIntersecting) {
            document.body.classList.remove('sticky');
        }
    },
    {
        // That means we will observer the section inside the viewport
        root: null,
        // as soon as 0% of hero section is inside the view port
        threshold: 0,
        // This is Height of .sticky .header
        rootMargin: '-80px',
    }
);

observer.observe(sectionHeroEl);
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
