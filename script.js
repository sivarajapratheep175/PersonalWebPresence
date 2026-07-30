    // ── Mobile nav toggle ──

alert("Hello !!!");

    const toggle   = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const icon     = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      icon.className = isOpen ? 'fa fa-times' : 'fa fa-bars';
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        icon.className = 'fa fa-bars';
      });
    });

    // ── Scroll reveal ──
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target); // fire once
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));

    // ── Active nav link on scroll ──
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
          });
        }
      });
    }, { threshold: 0.4 });



    sections.forEach(s => sectionObserver.observe(s));
