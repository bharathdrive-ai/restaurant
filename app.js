// ===== MENU DATA =====
const menuItems = [
  {
    name: "Idli Sambar",
    desc: "Soft steamed rice cakes served with piping hot sambar and three chutneys — coconut, tomato & mint.",
    price: "₹60",
    emoji: "🫓",
    tag: "Breakfast Special"
  },
  {
    name: "Masala Dosa",
    desc: "Crispy golden crepe stuffed with spiced potato masala, served with sambar and coconut chutney.",
    price: "₹90",
    emoji: "🥞",
    tag: "Bestseller"
  },
  {
    name: "Rava Upma",
    desc: "Fluffy semolina cooked with mustard, curry leaves, onions, green chillies and topped with cashews.",
    price: "₹55",
    emoji: "🍚",
    tag: "Breakfast"
  },
  {
    name: "Pongal",
    desc: "Comfort in a bowl — rice and moong dal slow-cooked with ghee, pepper, cumin and ginger.",
    price: "₹70",
    emoji: "🥘",
    tag: "Winter Favourite"
  },
  {
    name: "Medu Vada",
    desc: "Crispy-on-the-outside, fluffy-on-the-inside lentil doughnuts. Best dunked in sambar.",
    price: "₹50",
    emoji: "🍩",
    tag: "Snack"
  },
  {
    name: "Uttapam",
    desc: "Thick, soft pancake topped with onions, tomato, coriander and green chillies. Mildly tangy.",
    price: "₹80",
    emoji: "🫔",
    tag: "Hearty"
  },
  {
    name: "Poha",
    desc: "Flattened rice tossed with turmeric, onion, lemon and fresh coriander. Light yet satisfying.",
    price: "₹45",
    emoji: "🍛",
    tag: "Light Bite"
  },
  {
    name: "Rava Dosa",
    desc: "Thin, crispy, lace-like semolina crepe with onions, green chillies and black pepper.",
    price: "₹85",
    emoji: "🫓",
    tag: "Crispy"
  },
  {
    name: "Pesarattu",
    desc: "Andhra-style green moong dal crepe, protein-rich and earthy, paired with ginger chutney.",
    price: "₹75",
    emoji: "🥗",
    tag: "Healthy"
  },
  {
    name: "Appam with Stew",
    desc: "Lacy fermented rice hoppers with a Kerala-style coconut milk vegetable stew — gently fragrant.",
    price: "₹95",
    emoji: "🫕",
    tag: "Kerala Special"
  },
  {
    name: "Plain Dosa",
    desc: "Classic thin and crispy fermented rice crepe, golden on the outside, served with sambar and coconut chutney.",
    price: "₹40",
    emoji: "🫓",
    tag: "Classic"
  },
  {
    name: "Poori",
    desc: "Soft, fluffy deep-fried wheat puffs served with spiced potato curry — a timeless breakfast favourite.",
    price: "₹65",
    emoji: "🫔",
    tag: "Breakfast"
  },
  {
    name: "Chapathi",
    desc: "Soft whole wheat flatbread served with vegetable kurma or dal — wholesome, light and satisfying.",
    price: "₹55",
    emoji: "🫓",
    tag: "Light Meal"
  },
  {
    name: "Vada Curry",
    desc: "Crispy lentil vadas dunked in a rich, spiced onion-tomato curry — a Chennai street food classic.",
    price: "₹45",
    emoji: "🍲",
    tag: "Street Special"
  }
];

// ===== RENDER MENU =====
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <div class="card-img">
        <div class="card-img-placeholder">${item.emoji}</div>
        <div class="veg-badge"><div class="veg-dot"></div> VEG</div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${item.price}</span>
          <a href="#contact" class="card-order">Order →</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ORDER FORM =====
const form = document.getElementById('orderForm');
const success = document.getElementById('orderSuccess');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const slot = document.getElementById('slot').value;
  if (!name || !phone || !slot) {
    alert('Please fill in your name, phone number, and a time slot.');
    return;
  }
  form.classList.add('hidden');
  success.classList.remove('hidden');
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// ===== CARD ENTER ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 60}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.menu-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setTimeout(observeCards, 50);
});

// Inject visible state via JS since we can't add CSS class transition start in stylesheet
const style = document.createElement('style');
style.textContent = `.menu-card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

renderMenu();
