// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll Active Link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

// Skill Bar Animation
const skillFills = document.querySelectorAll('.fill');
window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const parent = fill.parentElement.parentElement;
    const top = parent.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      fill.style.width = fill.style.width;
    }
  });
});


// Dark Mode Persistent with localStorage
const darkMode = localStorage.getItem('theme');
if(darkMode === 'dark'){
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});

// Animated Counters
const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.dataset.target;
          const count = +counter.innerText;
          const increment = target / speed;

          if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
      counterObserver.disconnect(); // run only once
    }
  });
}, { threshold: 0.5 });

if(counters.length){
  counterObserver.observe(document.querySelector('#counters'));
}


// Contact Form Validation
const form = document.getElementById('contact-form');
const responseMsg = document.querySelector('.form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  responseMsg.textContent = 'Message sent successfully!';
  form.reset();
});

// Project Filtering
const filterBtns = document.querySelectorAll('.project-filters button');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projects.forEach(project => {
      if (filter === 'all' || project.dataset.category === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
