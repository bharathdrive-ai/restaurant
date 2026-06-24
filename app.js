// ===== MENU DATA =====
const menuItems = [
  {
    name: "Idli Sambar",
    desc: "Soft steamed rice cakes served with piping hot sambar and three chutneys — coconut, tomato & mint.",
    price: "₹60",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7La-HBYa26--Kr9X16-Yz-PeUpKGAZ_4ALnOr8we5WQ&s=10",
    tag: "Breakfast Special"
  },
  {
    name: "Masala Dosa",
    desc: "Crispy golden crepe stuffed with spiced potato masala, served with sambar and coconut chutney.",
    price: "₹90",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80",
    tag: "Bestseller"
  },
  {
    name: "Rava Upma",
    desc: "Fluffy semolina cooked with mustard, curry leaves, onions, green chillies and topped with cashews.",
    price: "₹55",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
    tag: "Breakfast"
  },
  {
    name: "Pongal",
    desc: "Comfort in a bowl — rice and moong dal slow-cooked with ghee, pepper, cumin and ginger.",
    price: "₹70",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    tag: "Winter Favourite"
  },
  {
    name: "Medu Vada",
    desc: "Crispy-on-the-outside, fluffy-on-the-inside lentil doughnuts. Best dunked in sambar.",
    price: "₹50",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oBFg7AN8Y8evYHjnGXp98l2307r9TES8SSSZtVzHLQ&s=10",
    tag: "Snack"
  },
  {
    name: "Uttapam",
    desc: "Thick, soft pancake topped with onions, tomato, coriander and green chillies. Mildly tangy.",
    price: "₹80",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    tag: "Hearty"
  },
  {
    name: "Poha",
    desc: "Flattened rice tossed with turmeric, onion, lemon and fresh coriander. Light yet satisfying.",
    price: "₹45",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
    tag: "Light Bite"
  },
  {
    name: "Rava Dosa",
    desc: "Thin, crispy, lace-like semolina crepe with onions, green chillies and black pepper.",
    price: "₹85",
    img: "https://moonrice.net/wp-content/uploads/2021/05/IMG_0938-2.jpg",
    tag: "Crispy"
  },
  {
    name: "Pesarattu",
    desc: "Andhra-style green moong dal crepe, protein-rich and earthy, paired with ginger chutney.",
    price: "₹75",
    img: "https://cdn1.foodviva.com/static-content/food-images/andhra-recipes/pesarattu/pesarattu.jpg",
    tag: "Healthy"
  },
  {
    name: "Appam with Stew",
    desc: "Lacy fermented rice hoppers with a Kerala-style coconut milk vegetable stew — gently fragrant.",
    price: "₹95",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
    tag: "Kerala Special"
  },
  {
    name: "Plain Dosa",
    desc: "Classic thin and crispy fermented rice crepe, golden on the outside, served with sambar and coconut chutney.",
    price: "₹40",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    tag: "Classic"
  },
  {
    name: "Poori",
    desc: "Soft, fluffy deep-fried wheat puffs served with spiced potato curry — a timeless breakfast favourite.",
    price: "₹65",
    img: "https://images.unsplash.com/photo-1626132827177-54b050e0ee4e?w=600&q=80",
    tag: "Breakfast"
  },
  {
    name: "Chapathi",
    desc: "Soft whole wheat flatbread served with vegetable kurma or dal — wholesome, light and satisfying.",
    price: "₹55",
    img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
    tag: "Light Meal"
  },
  {
    name: "Vada Curry",
    desc: "Crispy lentil vadas dunked in a rich, spiced onion-tomato curry — a Chennai street food classic.",
    price: "₹45",
    img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80",
    tag: "Street Special"
  },
  {
    name: "Coffee",
    desc: "Freshly brewed South Indian filter coffee — frothy, aromatic, and the perfect companion to your tiffin.",
    price: "₹30",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    tag: "Beverages"
  }
];

// ===== RENDER MENU =====
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="card-img-placeholder" style="display:none">${item.name[0]}</div>
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
