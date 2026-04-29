const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Dim all cards, highlight the one in view
      cards.forEach((card) => card.classList.add('dimmed'));
      entry.target.classList.remove('dimmed');
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

// Initial state: first card visible, rest dimmed
cards.forEach((card, index) => {
  if (index === 0) {
    card.classList.add('visible');
  } else {
    card.classList.add('dimmed');
  }
  observer.observe(card);
});
