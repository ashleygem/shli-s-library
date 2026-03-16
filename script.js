/* ═══════════════════════════════════════════════
   ARCANE LIBRARY — app.js
   ═══════════════════════════════════════════════ */

/* ─── DATA ─────────────────────────────────────── */

const books = [
  {
    id: 0,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fiction",
    genreColor: "#C8883A",
    rating: "4.8",
    pages: 387,
    copies: 3,
    year: 2011,
    isbn: "978-0385534635",
    tags: ["Magic", "Romance", "Competition"],
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80",
    grad: "linear-gradient(155deg,#1B3A28,#0D2B1F)",
    desc: "A breathtaking tale of two young illusionists locked in a mysterious competition set within a magical black-and-white circus that only appears at night. A story of obsession, wonder, and the magic found in darkness.",
  },
  {
    id: 1,
    title: "Mythos",
    author: "Stephen Fry",
    genre: "Mythology",
    genreColor: "#D9A84B",
    rating: "4.9",
    pages: 416,
    copies: 2,
    year: 2017,
    isbn: "978-1452163253",
    tags: ["Greek Myths", "Retelling", "Wisdom"],
    img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&q=80",
    grad: "linear-gradient(155deg,#3D1A0A,#1C1208)",
    desc: "A dazzling retelling of the Greek myths — filled with magic, passion, and profound wisdom from the ancient world. Fry breathes new life into tales that have shaped Western civilization.",
  },
  {
    id: 2,
    title: "Cosmos",
    author: "Carl Sagan",
    genre: "Science",
    genreColor: "#2EC4A0",
    rating: "5.0",
    pages: 365,
    copies: 4,
    year: 1980,
    isbn: "978-0345539434",
    tags: ["Astronomy", "Philosophy", "History"],
    img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&q=80",
    grad: "linear-gradient(155deg,#0E2A40,#071222)",
    desc: "A personal voyage through the grandeur of the universe, exploring science, history, and the nature of human curiosity. Sagan's magnum opus remains one of the most beloved science books ever written.",
  },
  {
    id: 3,
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    genreColor: "#9B76D4",
    rating: "4.8",
    pages: 254,
    copies: 5,
    year: 180,
    isbn: "978-0812968255",
    tags: ["Stoicism", "Self-Improvement", "History"],
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80",
    grad: "linear-gradient(155deg,#2A1050,#140828)",
    desc: "The private thoughts of one of history's great minds — a timeless guide to living with wisdom, clarity, and virtue. Written for himself, shared with the world for two millennia.",
  },
  {
    id: 4,
    title: "Labyrinth",
    author: "Kate Mosse",
    genre: "Mystery",
    genreColor: "#4EC88A",
    rating: "4.6",
    pages: 515,
    copies: 1,
    year: 2005,
    isbn: "978-0425211410",
    tags: ["Historical", "Grail", "France"],
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80",
    grad: "linear-gradient(155deg,#0A3025,#051510)",
    desc: "Two women, separated by eight centuries, are drawn to the mysteries of the labyrinth and the Holy Grail in the south of France. A gripping dual-timeline mystery.",
  },
  {
    id: 5,
    title: "The Iliad",
    author: "Homer",
    genre: "Mythology",
    genreColor: "#D9A84B",
    rating: "4.7",
    pages: 683,
    copies: 3,
    year: -750,
    isbn: "978-0140275360",
    tags: ["Epic", "War", "Ancient Greece"],
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80",
    grad: "linear-gradient(155deg,#4A1E08,#1C0C04)",
    desc: "The legendary epic of the Trojan War — of rage and glory, heroism and hubris, and the immortal deeds of Achilles. The foundational text of Western literature.",
  },
  {
    id: 6,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fiction",
    genreColor: "#C8883A",
    rating: "4.9",
    pages: 688,
    copies: 2,
    year: 1965,
    isbn: "978-0441013593",
    tags: ["Sci-Fi", "Desert", "Politics"],
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80",
    grad: "linear-gradient(155deg,#4A1A06,#1C0A02)",
    desc: "An epic saga set on the desert planet Arrakis — a story of politics, religion, ecology, and the messianic hero Paul Atreides. The best-selling sci-fi novel of all time.",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Y.N. Harari",
    genre: "History",
    genreColor: "#E87060",
    rating: "4.7",
    pages: 443,
    copies: 3,
    year: 2011,
    isbn: "978-0062316097",
    tags: ["Anthropology", "Evolution", "Culture"],
    img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300&q=80",
    grad: "linear-gradient(155deg,#3A0825,#180312)",
    desc: "A sweeping narrative of humanity's entire history — how Homo Sapiens conquered the world and became the dominant species on Earth.",
  },
  {
    id: 8,
    title: "The Raven",
    author: "Edgar Allan Poe",
    genre: "Poetry",
    genreColor: "#9B76D4",
    rating: "5.0",
    pages: 124,
    copies: 6,
    year: 1845,
    isbn: "978-0743482615",
    tags: ["Gothic", "Dark", "Verse"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    grad: "linear-gradient(155deg,#1A0640,#080215)",
    desc: "A haunting collection of Poe's most celebrated dark verse — where sorrow, beauty, and the sublime intertwine. The definitive edition of Gothic poetry.",
  },
  {
    id: 9,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fiction",
    genreColor: "#C8883A",
    rating: "4.8",
    pages: 662,
    copies: 2,
    year: 2007,
    isbn: "978-0756404079",
    tags: ["Fantasy", "Magic", "Epic"],
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&q=80",
    grad: "linear-gradient(155deg,#1A0E30,#0A0618)",
    desc: "The masterful tale of Kvothe, a legendary wizard-bard recounting the story of his life — filled with magic, music, and adventure in a richly realized world.",
  },
  {
    id: 10,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    genreColor: "#2EC4A0",
    rating: "4.6",
    pages: 212,
    copies: 4,
    year: 1988,
    isbn: "978-0553380163",
    tags: ["Physics", "Cosmology", "Black Holes"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    grad: "linear-gradient(155deg,#0A2040,#040C1C)",
    desc: "From the Big Bang to black holes, Hawking's landmark work on the structure, origin, development and eventual fate of the Universe — accessible to all.",
  },
  {
    id: 11,
    title: "Crime & Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Mystery",
    genreColor: "#4EC88A",
    rating: "4.7",
    pages: 545,
    copies: 3,
    year: 1866,
    isbn: "978-0143107637",
    tags: ["Classic", "Psychological", "Russian"],
    img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&q=80",
    grad: "linear-gradient(155deg,#0D2518,#040E09)",
    desc: "Raskolnikov, an impoverished student, commits a terrible crime and must confront the psychological consequences in this penetrating portrait of guilt and redemption.",
  },
];

const shelfBooks = [
  { title: "1984",        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&q=80",  progress: 78 },
  { title: "Foundation",  img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&q=80",  progress: 45 },
  { title: "Hamlet",      img: "https://images.unsplash.com/photo-1553729784-e91953dec042?w=200&q=80",  progress: 90 },
  { title: "Neuromancer", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&q=80", progress: 20 },
  { title: "Don Quixote", img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=200&q=80", progress: 55 },
  { title: "Ulysses",     img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=200&q=80", progress: 10 },
];

/* ─── STATE ─────────────────────────────────────── */

let bookings      = [];    // { book, dueDate, status:'active'|'returned', bookedAt }
let history       = [];
let currentTab    = 'active';
let currentBook   = null;
let filteredBooks = [...books];
let currentFilter = 'All';
let currentQuery  = '';

/* ─── INIT ──────────────────────────────────────── */

window.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  renderShelf();
  setDefaultReturnDate();

  // Animated hero counters
  setTimeout(() => {
    animateCount(document.getElementById('c-volumes'), 12847);
    animateCount(document.getElementById('c-authors'),  3290);
    animateCount(document.getElementById('c-genres'),     48);
  }, 500);

  // Staggered card reveal on initial load
  observeCards();
});

/* ─── INTERSECTION OBSERVER (card reveal) ───────── */

function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.book-card').forEach(c => observer.observe(c));
}

/* ─── DEFAULT RETURN DATE ───────────────────────── */

function setDefaultReturnDate() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  const yyyy = date.getFullYear();
  const mm   = String(date.getMonth() + 1).padStart(2, '0');
  const dd   = String(date.getDate()).padStart(2, '0');
  const el   = document.getElementById('returnDate');
  if (el) {
    el.value = `${yyyy}-${mm}-${dd}`;
    el.min   = new Date().toISOString().split('T')[0];
  }
}

/* ─── RENDER BOOKS GRID ─────────────────────────── */

function renderBooks(filter = 'All', query = '') {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = '';

  filteredBooks = books.filter(b => {
    const matchGenre = filter === 'All' || b.genre === filter;
    const matchQuery = !query
      || b.title.toLowerCase().includes(query.toLowerCase())
      || b.author.toLowerCase().includes(query.toLowerCase());
    return matchGenre && matchQuery;
  });

  document.getElementById('resultCount').textContent =
    `Showing ${filteredBooks.length} volume${filteredBooks.length !== 1 ? 's' : ''}`;

  if (filteredBooks.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;
        font-family:'IM Fell English',serif;font-style:italic;color:var(--text-faint);">
        No volumes found in the archives for this search.
      </div>`;
    return;
  }

  filteredBooks.forEach((book, i) => {
    const booked = isBooked(book.id);
    const avail  = book.copies > 0;
    const card   = document.createElement('div');
    card.className = 'book-card';
    card.style.transitionDelay = `${i * 0.06}s`;

    let qaBtnClass = 'can-book';
    let qaBtnText  = 'Reserve';
    if (booked)       { qaBtnClass = 'booked-btn';  qaBtnText = '✓ Reserved'; }
    else if (!avail)  { qaBtnClass = 'unavail-btn'; qaBtnText = 'Unavailable'; }

    card.innerHTML = `
      <div class="book-inner">
        <div class="book-face">
          <div class="book-cover"
               style="background:${book.grad};
                      background-image:url(${book.img});
                      background-size:cover;
                      background-position:center;">
          </div>
          <div class="book-overlay"></div>
          <div class="book-shine"></div>
          <div class="b-available ${avail ? 'avail' : 'unavail'}">
            ${avail ? `${book.copies} avail.` : 'Out of stock'}
          </div>
          <div class="b-rating">★ ${book.rating}</div>
          <div class="book-info">
            <div class="b-genre"  style="color:${book.genreColor}">${book.genre.toUpperCase()}</div>
            <div class="b-title">${book.title}</div>
            <div class="b-author">${book.author}</div>
          </div>
          <div class="book-quick-action">
            <button class="bqa-btn ${qaBtnClass}"
                    onclick="handleQuickBook(event,${book.id})">
              ${qaBtnText}
            </button>
          </div>
        </div>
      </div>
      <div class="book-glow"></div>
    `;

    card.addEventListener('click', () => openModal(book));
    grid.appendChild(card);
  });

  observeCards();
}

/* ─── RENDER READING SHELF ──────────────────────── */

function renderShelf() {
  const row = document.getElementById('shelfRow');

  shelfBooks.forEach(book => {
    const r      = 11;
    const circ   = 2 * Math.PI * r;
    const offset = circ - (book.progress / 100) * circ;
    const item   = document.createElement('div');
    item.className = 'shelf-item';

    item.innerHTML = `
      <div class="s-book">
        <img src="${book.img}" alt="${book.title}">
        <div class="s-progress-ring">
          <svg viewBox="0 0 28 28">
            <circle class="s-ring-bg"
                    cx="14" cy="14" r="${r}"
                    stroke-dasharray="${circ}"
                    stroke-dashoffset="0"/>
            <circle class="s-ring-fill"
                    cx="14" cy="14" r="${r}"
                    stroke="#D9A84B"
                    stroke-dasharray="${circ}"
                    stroke-dashoffset="${offset}"/>
          </svg>
        </div>
      </div>
      <span class="s-title">${book.title}</span>
    `;

    row.appendChild(item);
  });
}

/* ─── FILTER & SEARCH ───────────────────────────── */

function filterBooks(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.fpill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderBooks(cat, currentQuery);
}

function handleSearch(q) {
  currentQuery = q;
  renderBooks(currentFilter, q);
}

/* ─── BOOKING LOGIC ─────────────────────────────── */

function isBooked(bookId) {
  return bookings.some(b => b.book.id === bookId && b.status === 'active');
}

function bookBook(book, dueDate) {
  if (!book.copies || book.copies <= 0) {
    showToast('This volume is currently unavailable.', 'warn');
    return false;
  }
  if (isBooked(book.id)) {
    showToast(`"${book.title}" is already reserved.`, 'info');
    return false;
  }

  book.copies--;
  bookings.push({
    book,
    dueDate:  dueDate || getDefaultDue(),
    status:   'active',
    bookedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
  });

  updateBadge();
  updatePanel();
  updatePickCard();
  renderBooks(currentFilter, currentQuery);
  showToast(`"${book.title}" has been reserved!`, 'success');
  return true;
}

function returnBook(bookId) {
  const idx = bookings.findIndex(b => b.book.id === bookId && b.status === 'active');
  if (idx === -1) return;

  bookings[idx].book.copies++;
  history.push({
    ...bookings[idx],
    status:     'returned',
    returnedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
  });
  bookings.splice(idx, 1);

  updateBadge();
  updatePanel();
  updatePickCard();
  renderBooks(currentFilter, currentQuery);
  showToast('Volume returned successfully. Thank you!', 'info');
}

function handleQuickBook(e, bookId) {
  e.stopPropagation();
  const book = books.find(b => b.id === bookId);
  if (!book) return;
  if (isBooked(bookId)) { openModal(book); return; }
  bookBook(book, getDefaultDue());
}

function bookPickOfSeason() {
  const b = books[0];
  if (isBooked(b.id)) { togglePanel(); return; }
  bookBook(b, getDefaultDue());
}

function bookFromModal() {
  if (!currentBook) return;
  const due    = document.getElementById('returnDate').value;
  const result = bookBook(currentBook, formatDate(due));
  if (result) closeModal();
}

function getDefaultDue() {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return formatDate(d.toISOString().split('T')[0]);
}

function formatDate(iso) {
  if (!iso) return getDefaultDue();
  const [y, m, d] = iso.split('-');
  const months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d} ${months[parseInt(m) - 1]} ${y}`;
}

function confirmAllBookings() {
  showConfirm(
    'Return All Active Loans',
    `Are you sure you want to return all ${bookings.length} active volume${bookings.length > 1 ? 's' : ''}?`,
    () => {
      const ids = bookings.map(b => b.book.id);
      ids.forEach(id => returnBook(id));
      showToast('All volumes returned. Thank you!', 'success');
    }
  );
}

/* ─── UPDATE UI ─────────────────────────────────── */

function updateBadge() {
  const count  = document.getElementById('badgeCount');
  const active = bookings.filter(b => b.status === 'active').length;
  count.textContent = active;
  document.getElementById('activeBookings').textContent = active;

  count.classList.remove('bump');
  void count.offsetWidth; // force reflow to restart animation
  count.classList.add('bump');
}

function updatePanel() {
  const bpList    = document.getElementById('bpList');
  const bpEmpty   = document.getElementById('bpEmpty');
  const bpConfirm = document.getElementById('bpConfirmBtn');

  const data = currentTab === 'active'
    ? bookings.filter(b => b.status === 'active')
    : history.filter(b => b.status === 'returned');

  bpEmpty.style.display = data.length === 0 ? 'flex' : 'none';
  bpList.innerHTML = '';

  data.forEach(entry => {
    const item     = document.createElement('div');
    item.className = 'booking-item';
    const isActive = entry.status === 'active';

    item.innerHTML = `
      <div class="bi-img">
        <img src="${entry.book.img}" alt="${entry.book.title}">
      </div>
      <div class="bi-info">
        <div class="bi-title">${entry.book.title}</div>
        <div class="bi-author">${entry.book.author}</div>
        <div class="bi-meta">
          <div class="bi-due">
            ${isActive
              ? '⏰ Due: ' + entry.dueDate
              : '✓ Returned: ' + (entry.returnedAt || entry.dueDate)}
          </div>
          <div class="bi-status ${entry.status}">
            ${isActive ? '● Active Loan' : '✓ Returned'}
          </div>
        </div>
      </div>
      ${isActive ? `
      <div class="bi-actions">
        <button class="bi-btn bi-return" onclick="confirmReturn(${entry.book.id})">Return</button>
        <button class="bi-btn bi-remove" onclick="confirmRemove(${entry.book.id})">Cancel</button>
      </div>` : ''}
    `;

    bpList.appendChild(item);
  });

  // Update summary footer
  const activeCount = bookings.filter(b => b.status === 'active').length;
  document.getElementById('bps-active').textContent =
    `${activeCount} volume${activeCount !== 1 ? 's' : ''}`;

  const dueDates = bookings.filter(b => b.status === 'active').map(b => b.dueDate);
  document.getElementById('bps-due').textContent = dueDates.length ? dueDates[0] : '—';

  bpConfirm.disabled = activeCount === 0;
}

function updatePickCard() {
  const b      = books[0];
  const btn    = document.getElementById('pickBookBtn');
  const copies = document.getElementById('pickCopies');
  if (!btn || !copies) return;

  copies.textContent = b.copies > 0 ? `${b.copies} Available` : 'Out of Stock';

  if (isBooked(b.id)) {
    btn.textContent = '✓ Reserved — View Bookings';
    btn.disabled    = false;
  } else if (b.copies === 0) {
    btn.textContent = 'Out of Stock';
    btn.disabled    = true;
  } else {
    btn.textContent = 'Reserve This Volume';
    btn.disabled    = false;
  }
}

function switchTab(tab, el) {
  currentTab = tab;
  document.querySelectorAll('.bp-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  updatePanel();
}

/* ─── BOOK DETAIL MODAL ─────────────────────────── */

function openModal(book) {
  currentBook = book;
  setDefaultReturnDate();

  document.getElementById('m-img').src                  = book.img;
  document.getElementById('m-title').textContent        = book.title;
  document.getElementById('m-author').textContent       = book.author;
  document.getElementById('m-desc').textContent         = book.desc;

  const genreEl           = document.getElementById('m-genre');
  genreEl.textContent     = book.genre;
  genreEl.style.color     = book.genreColor;
  genreEl.style.borderColor = book.genreColor + '55';
  genreEl.style.background  = book.genreColor + '18';

  const stars = '★'.repeat(Math.round(book.rating));
  document.getElementById('m-stars').textContent = `${stars} ${book.rating} / 5`;

  document.getElementById('m-tags').innerHTML =
    book.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('m-meta').innerHTML = `
    <div class="mm-item">
      <span class="mm-label">Pages</span>
      <span class="mm-value">${book.pages.toLocaleString()}</span>
    </div>
    <div class="mm-item">
      <span class="mm-label">Year</span>
      <span class="mm-value">${book.year < 0 ? Math.abs(book.year) + ' BC' : book.year}</span>
    </div>
    <div class="mm-item">
      <span class="mm-label">ISBN</span>
      <span class="mm-value" style="font-size:0.75rem">${book.isbn}</span>
    </div>
  `;

  const availEl = document.getElementById('m-avail');
  const dot     = availEl.querySelector('.avail-dot');
  const txt     = availEl.querySelector('span');
  if (book.copies > 0) {
    dot.className      = 'avail-dot green';
    txt.textContent    = 'Available';
    txt.style.color    = '#6EE7A0';
  } else {
    dot.className      = 'avail-dot red';
    txt.textContent    = 'Unavailable';
    txt.style.color    = '#FCA5A5';
  }
  document.getElementById('m-copies').textContent =
    `${book.copies} cop${book.copies !== 1 ? 'ies' : 'y'} in stock`;

  const btn     = document.getElementById('m-book-btn');
  const dateRow = document.getElementById('dateRow');

  if (isBooked(book.id)) {
    btn.textContent = '✓ Already Reserved';
    btn.className   = 'modal-book-btn already-booked';
    btn.disabled    = false;
    dateRow.style.display = 'none';
  } else if (book.copies === 0) {
    btn.textContent = 'Currently Unavailable';
    btn.className   = 'modal-book-btn';
    btn.disabled    = true;
    dateRow.style.display = 'none';
  } else {
    btn.textContent = 'Reserve This Volume';
    btn.className   = 'modal-book-btn';
    btn.disabled    = false;
    dateRow.style.display = 'flex';
  }

  document.getElementById('detailModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('open');
  document.body.style.overflow = '';
  currentBook = null;
}

function handleModalClick(e) {
  if (e.target === document.getElementById('detailModal')) closeModal();
}

/* ─── BOOKINGS PANEL ────────────────────────────── */

function togglePanel() {
  const panel   = document.getElementById('bookingsPanel');
  const overlay = document.getElementById('panelOverlay');
  const isOpen  = panel.classList.contains('open');

  if (!isOpen) {
    updatePanel();
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ─── CONFIRM HELPERS ───────────────────────────── */

let pendingConfirmAction = null;

function confirmReturn(bookId) {
  const b = bookings.find(x => x.book.id === bookId);
  if (!b) return;
  showConfirm(
    'Return Volume',
    `Return "${b.book.title}" by ${b.book.author}?`,
    () => returnBook(bookId)
  );
}

function confirmRemove(bookId) {
  const b = bookings.find(x => x.book.id === bookId);
  if (!b) return;
  showConfirm(
    'Cancel Reservation',
    `Cancel your reservation of "${b.book.title}"?`,
    () => {
      returnBook(bookId);
      showToast('Reservation cancelled.', 'info');
    }
  );
}

function showConfirm(title, msg, onYes) {
  document.getElementById('cd-title').textContent = title;
  document.getElementById('cd-msg').textContent   = msg;
  pendingConfirmAction = onYes;
  document.getElementById('confirmDialog').classList.add('open');
}

function closeConfirm() {
  document.getElementById('confirmDialog').classList.remove('open');
  pendingConfirmAction = null;
}

document.getElementById('cd-yes').addEventListener('click', () => {
  if (pendingConfirmAction) pendingConfirmAction();
  closeConfirm();
});

/* ─── TOAST NOTIFICATIONS ───────────────────────── */

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast     = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ─── ANIMATED COUNTERS ─────────────────────────── */

function animateCount(el, target) {
  let current  = 0;
  const step   = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current >= target) clearInterval(interval);
  }, 20);
}

/* ─── KEYBOARD SHORTCUTS ────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;

  closeModal();

  const panel = document.getElementById('bookingsPanel');
  if (panel.classList.contains('open')) togglePanel();

  closeConfirm();
});
