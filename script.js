// Directories data
const directories = [
  {
    "link": "https://superframeworks.com/deals",
    "name": "Best Black Friday Deals | Superframeworks"
  },
  {
    "link": "https://github.com/trungdq88/Awesome-Black-Friday-Cyber-Monday",
    "name": "Tony's list"
  },
  {
    "link": "https://rarebigdeal.com/#category=AI+Tools",
    "name": "Rare Big Deal"
  },
  {
    "link": "https://blackfridaydeals.dev/",
    "name": "BF Deals for Devs and Designers"
  },
  {
    "link": "https://github.com/mRs-/Black-Friday-Deals",
    "name": "Black Friday Deals"
  },
  {
    "link": "https://github.com/great-saas-deals/UltimateSavings-BlackFriday-CyberMonday-Deals-2024",
    "name": "Great SaaS Deals"
  },
  {
    "link": "https://github.com/0x90n/InfoSec-Black-Friday",
    "name": "Infosec deals"
  },
  {
    "link": "https://github.com/twf-nikhila/Awesome-Black-Friday-Cyber-Monday-deals",
    "name": "Nikhil's list"
  },
  {
    "link": "https://indiegoodies.com/blackfriday",
    "name": "Indie Goodies"
  },
  {
    "link": "https://dealhunt.cc/",
    "name": "Deal Hunt"
  },
  {
    "link": "https://creatorblackfriday.com/",
    "name": "Creator Black Friday"
  },
  {
    "link": "https://hub.seofomo.co/deals/seo-black-friday-cyber-monday/",
    "name": "SEOFOMO Deals"
  },
  {
    "link": "https://lifetimo.com/",
    "name": "Lifetimo"
  },
  {
    "link": "https://realsaasdeals.com/",
    "name": "Real SaaS Deals"
  },
  {
    "link": "https://www.indiehackers.com/post/the-ultimate-indie-hackers-black-friday-deal-list-c94a94b76f",
    "name": "Katt's Thread on IH"
  },
  {
    "link": "https://syncsignature.com/saas-black-friday-deals/",
    "name": "SyncSignature BF Deals"
  },
  {
    "link": "https://microlaunch.net/hq/deals",
    "name": "Microlaunch"
  },
  {
    "link": "https://www.apps.deals/",
    "name": "MacOS App Deals"
  },
  {
    "link": "https://productburst.com/",
    "name": "Product Burst"
  },
  {
    "link": "https://shipsquad.space/",
    "name": "Ship Squad"
  },
  {
    "link": "https://blackfridayappdeals.com/",
    "name": "Black Friday App Deals"
  },
  {
    "link": "https://blackfridays25.com/",
    "name": "Black Friday Deals 2025"
  },
  {
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSeYbdtGrlZdPO1RGa9EuZ_-stXQW943hxr77CR3Pd5VfwClfg/viewform",
    "name": "Pixpa Best BFCM Software Deals of 2025 (curated by Ayush)"
  }
];

// Paid submission add-ons
const paidAddOns = [
  {
    "link": "https://aitools.fyi/black-friday",
    "name": "AI Tools FYI",
    "cost": "Paid Add-On"
  },
  {
    "link": "https://blackfridaytimes.com/",
    "name": "Black Friday Times",
    "cost": "Paid Add-On"
  },
  {
    "link": "https://indie.deals/black-friday/",
    "name": "Indie Deals",
    "cost": "Paid Add-On"
  }
];

// Tab Navigation
function initTabs() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');

            // Remove active class from all links and contents
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked link and corresponding content
            link.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Render Directories
function renderDirectories() {
    const directoriesContainer = document.getElementById('directoriesList');

    if (directoriesContainer) {
        directories.forEach((directory, index) => {
            const card = document.createElement('div');
            card.className = 'directory-card';
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <div class="directory-number">${String(index + 1).padStart(2, '0')}</div>
                <h3 class="directory-name">${directory.name}</h3>
                <a href="${directory.link}" target="_blank" rel="noopener noreferrer" class="directory-link">
                    ${directory.link}
                </a>
            `;

            directoriesContainer.appendChild(card);
        });
    }
}

// Render Paid Add-Ons
function renderPaidAddOns() {
    const paidAddOnsContainer = document.getElementById('paidAddOnsList');

    if (paidAddOnsContainer) {
        paidAddOns.forEach((addon, index) => {
            const card = document.createElement('div');
            card.className = 'directory-card paid-addon-card';
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <div class="paid-addon-badge">${addon.cost}</div>
                <h3 class="directory-name">${addon.name}</h3>
                <a href="${addon.link}" target="_blank" rel="noopener noreferrer" class="directory-link">
                    ${addon.link}
                </a>
            `;

            paidAddOnsContainer.appendChild(card);
        });
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe steps
    document.querySelectorAll('.step').forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        step.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(step);
    });
}

// Add hover effect to CTA buttons
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax effect for hero background
function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;

            if (hero.querySelector('::before')) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;

                // Only animate numbers
                if (!isNaN(parseInt(target))) {
                    const updateCount = () => {
                        const current = parseInt(counter.textContent) || 0;
                        const targetNum = parseInt(target);
                        const increment = targetNum / speed;

                        if (current < targetNum) {
                            counter.textContent = Math.ceil(current + increment);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.textContent = target;
                        }
                    };

                    counter.textContent = '0';
                    updateCount();
                }

                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderDirectories();
    renderPaidAddOns();
    initScrollAnimations();
    initCTAButtons();
    initParallax();
    animateCounters();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
