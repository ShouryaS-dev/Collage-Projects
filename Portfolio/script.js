/**
 * Portfolio Client Script - Shourya Sinha
 * Engineered with vanilla JavaScript: zero dependencies, fast, interactive, and engaging.
 * Features: Interactive Code Runner, Animated Typewriter, Category Filter, and Theme Sync.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Theme Management (Light / Dark Mode with Persistence)
  // =========================================================================
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeBtn?.setAttribute('aria-label', 'Switch to light theme');
    } else {
      root.removeAttribute('data-theme');
      themeBtn?.setAttribute('aria-label', 'Switch to dark theme');
    }
  };

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  let currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  themeBtn?.addEventListener('click', () => {
    currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    try {
      localStorage.setItem('theme', currentTheme);
    } catch (e) {
      console.warn('LocalStorage unavailable for theme storage:', e);
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(currentTheme);
    }
  });

  // =========================================================================
  // 2. Animated Dynamic Typewriter in Hero
  // =========================================================================
  const typewriterText = document.getElementById('typewriterText');
  const phrases = [
    'C++ & Low-Level Systems',
    'Python Scripts & Algorithms',
    'Fast Zero-Framework Web',
    'STL & Memory Concepts',
    'Problem Solving from First Principles'
  ];

  if (typewriterText) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 70;

    const tickTypewriter = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 35;
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 75;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1800; // Pause at end of phrase
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400; // Pause before typing new phrase
      }

      setTimeout(tickTypewriter, typeSpeed);
    };

    tickTypewriter();
  }

  // =========================================================================
  // 3. Interactive Code Runner & Terminal Playground
  // =========================================================================
  const tabBtns = document.querySelectorAll('.window-tabs .tab-btn');
  const codeBodies = document.querySelectorAll('.code-body');
  const runCodeBtn = document.getElementById('runCodeBtn');
  const terminalLogs = document.getElementById('terminalLogs');
  const terminalStatus = document.getElementById('terminalStatus');

  let activeTab = 'cpp';

  // Tab switching
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      codeBodies.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      activeTab = btn.getAttribute('data-tab');

      const targetBody = document.getElementById(`tab-${activeTab}`);
      if (targetBody) targetBody.classList.add('active');

      // Update terminal prompt preview
      if (terminalLogs) {
        if (activeTab === 'cpp') {
          terminalLogs.innerHTML = `
            <span class="term-line prompt">$ g++ -O2 shourya.cpp -o app &amp;&amp; ./app</span>
            <span class="term-line success">&gt;&gt; Code with logic. Build with passion!</span>
            <span class="term-line info">&gt;&gt; Academic Year: 2026 | Location: Ghaziabad, India</span>
          `;
        } else {
          terminalLogs.innerHTML = `
            <span class="term-line prompt">$ python3 profile.py</span>
            <span class="term-line success">&gt;&gt; Shourya Sinha is online and building!</span>
            <span class="term-line info">&gt;&gt; Focus: learncpp.com &amp; STL</span>
          `;
        }
      }
    });
  });

  // Simulated code execution on "Run" click
  if (runCodeBtn && terminalLogs && terminalStatus) {
    runCodeBtn.addEventListener('click', () => {
      runCodeBtn.classList.add('is-running');
      runCodeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span>Running...</span>
      `;
      terminalStatus.textContent = 'Executing...';
      terminalStatus.style.color = 'var(--accent-amber)';

      terminalLogs.innerHTML = `<span class="term-line info">&gt;&gt; [Compiling source code...]</span>`;

      setTimeout(() => {
        if (activeTab === 'cpp') {
          terminalLogs.innerHTML = `
            <span class="term-line prompt">$ g++ -std=c++17 -O2 shourya.cpp -o app &amp;&amp; ./app</span>
            <span class="term-line success">&gt;&gt; [BUILD SUCCESSFUL] 0 warnings, 0 errors</span>
            <span class="term-line success">&gt;&gt; Code with logic. Build with passion!</span>
            <span class="term-line info">&gt;&gt; Student: Shourya Sinha | College: KIET (2026-2030)</span>
            <span class="term-line info">&gt;&gt; Core: C++17, Python, JavaScript</span>
          `;
        } else {
          terminalLogs.innerHTML = `
            <span class="term-line prompt">$ python3 profile.py</span>
            <span class="term-line success">&gt;&gt; [EXECUTION FINISHED IN 0.04s]</span>
            <span class="term-line success">&gt;&gt; Shourya Sinha is online and building!</span>
            <span class="term-line info">&gt;&gt; Current Rabbit Hole: learncpp.com &amp; STL algorithms</span>
          `;
        }

        terminalStatus.textContent = 'Success (0)';
        terminalStatus.style.color = 'var(--accent-emerald)';

        runCodeBtn.classList.remove('is-running');
        runCodeBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Run</span>
        `;
      }, 700);
    });
  }

  // =========================================================================
  // 4. Mobile Drawer Navigation
  // =========================================================================
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');

  const closeMenu = () => {
    mainNav?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  };

  menuBtn?.addEventListener('click', () => {
    const isOpen = mainNav?.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav?.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav?.classList.contains('is-open')) {
      closeMenu();
      menuBtn?.focus();
    }
  });

  // =========================================================================
  // 5. ScrollSpy (Active Section in Navigation)
  // =========================================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const observedSections = document.querySelectorAll('main > section[id]');

  if ('IntersectionObserver' in window && navLinks.length && observedSections.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  // =========================================================================
  // 6. Project Category Filtering
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // =========================================================================
  // 7. One-Click Email Copy Helper
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('emailLink');
  const copyText = document.getElementById('copyText');

  if (copyEmailBtn && emailLink && copyText) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailLink.textContent?.trim() || 'shourya7sinha@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
          copyText.textContent = 'Copied!';
          copyEmailBtn.style.backgroundColor = 'var(--accent-emerald)';
          copyEmailBtn.style.color = '#ffffff';
          setTimeout(() => {
            copyText.textContent = 'Copy';
            copyEmailBtn.style.backgroundColor = '';
            copyEmailBtn.style.color = '';
          }, 2000);
        } else {
          window.location.href = `mailto:${email}`;
        }
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // =========================================================================
  // 8. Contact Form Handling
  // =========================================================================
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form) {
    const fields = {
      name: {
        el: document.getElementById('name'),
        errEl: document.getElementById('name-err'),
        validate: (val) => (val.trim().length >= 2 ? '' : 'Please provide your name (at least 2 characters).')
      },
      email: {
        el: document.getElementById('email'),
        errEl: document.getElementById('email-err'),
        validate: (val) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim()) ? '' : 'Please enter a valid email address.')
      },
      message: {
        el: document.getElementById('message'),
        errEl: document.getElementById('message-err'),
        validate: (val) => (val.trim().length >= 10 ? '' : 'Please enter a message of at least 10 characters.')
      }
    };

    const validateField = (fieldName) => {
      const field = fields[fieldName];
      if (!field?.el) return true;
      const errorMsg = field.validate(field.el.value);
      if (errorMsg) {
        field.el.classList.add('has-error');
        field.el.setAttribute('aria-invalid', 'true');
        if (field.errEl) field.errEl.textContent = errorMsg;
        return false;
      } else {
        field.el.classList.remove('has-error');
        field.el.removeAttribute('aria-invalid');
        if (field.errEl) field.errEl.textContent = '';
        return true;
      }
    };

    Object.keys(fields).forEach((name) => {
      const field = fields[name];
      field.el?.addEventListener('blur', () => validateField(name));
      field.el?.addEventListener('input', () => {
        if (field.el.classList.contains('has-error')) {
          validateField(name);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }

      let isValid = true;
      let firstInvalid = null;

      Object.keys(fields).forEach((name) => {
        const fieldValid = validateField(name);
        if (!fieldValid && !firstInvalid) {
          firstInvalid = fields[name].el;
          isValid = false;
        }
      });

      if (!isValid) {
        firstInvalid?.focus();
        return;
      }

      const senderName = fields.name.el.value.trim();
      const senderEmail = fields.email.el.value.trim();
      const messageText = fields.message.el.value.trim();

      const subject = encodeURIComponent(`Portfolio Note from ${senderName}`);
      const body = encodeURIComponent(
        `Hey Shourya,\n\n${messageText}\n\n---\nFrom: ${senderName} (${senderEmail})`
      );

      if (formStatus) {
        formStatus.textContent = 'Opening your email client with your pre-filled note...';
        formStatus.className = 'form-status success';
      }

      setTimeout(() => {
        window.location.href = `mailto:shourya7sinha@gmail.com?subject=${subject}&body=${body}`;
        form.reset();
      }, 500);
    });
  }
});
