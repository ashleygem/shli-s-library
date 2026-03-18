/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */

const books = [
  { id:'b0', type:'book', title:"The Night Circus", author:"Erin Morgenstern", genre:"Fiction", genreColor:"#C8883A", rating:"4.8", pages:387, copies:3, year:2011, isbn:"978-0385534635", tags:["Magic","Romance","Competition"], img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80", desc:"A breathtaking tale of two young illusionists locked in a mysterious competition set within a magical black-and-white circus that only appears at night." },
  { id:'b1', type:'book', title:"Mythos", author:"Stephen Fry", genre:"Mythology", genreColor:"#D9A84B", rating:"4.9", pages:416, copies:2, year:2017, isbn:"978-1452163253", tags:["Greek","Retelling","Wisdom"], img:"https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&q=80", desc:"A dazzling retelling of the Greek myths filled with magic, passion, and profound wisdom from the ancient world." },
  { id:'b2', type:'book', title:"Cosmos", author:"Carl Sagan", genre:"Science", genreColor:"#2EC4A0", rating:"5.0", pages:365, copies:4, year:1980, isbn:"978-0345539434", tags:["Astronomy","Philosophy","History"], img:"https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&q=80", desc:"A personal voyage through the grandeur of the universe, exploring science, history, and the nature of human curiosity." },
  { id:'b3', type:'book', title:"Meditations", author:"Marcus Aurelius", genre:"Philosophy", genreColor:"#9B76D4", rating:"4.8", pages:254, copies:5, year:180, isbn:"978-0812968255", tags:["Stoicism","Self-Improvement","History"], img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80", desc:"The private thoughts of one of history's great minds — a timeless guide to living with wisdom, clarity, and virtue." },
  { id:'b4', type:'book', title:"Labyrinth", author:"Kate Mosse", genre:"Mystery", genreColor:"#4EC88A", rating:"4.6", pages:515, copies:1, year:2005, isbn:"978-0425211410", tags:["Historical","Grail","France"], img:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80", desc:"Two women, separated by eight centuries, drawn to the mysteries of the labyrinth and the Holy Grail in the south of France." },
  { id:'b5', type:'book', title:"The Iliad", author:"Homer", genre:"Mythology", genreColor:"#D9A84B", rating:"4.7", pages:683, copies:3, year:-750, isbn:"978-0140275360", tags:["Epic","War","Ancient Greece"], img:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80", desc:"The legendary epic of the Trojan War — of rage and glory, heroism and hubris, and the immortal deeds of Achilles." },
  { id:'b6', type:'book', title:"Dune", author:"Frank Herbert", genre:"Fiction", genreColor:"#C8883A", rating:"4.9", pages:688, copies:2, year:1965, isbn:"978-0441013593", tags:["Sci-Fi","Desert","Politics"], img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80", desc:"An epic saga set on the desert planet Arrakis — politics, religion, ecology, and the messianic hero Paul Atreides." },
  { id:'b7', type:'book', title:"Sapiens", author:"Y.N. Harari", genre:"History", genreColor:"#E87060", rating:"4.7", pages:443, copies:3, year:2011, isbn:"978-0062316097", tags:["Anthropology","Evolution","Culture"], img:"https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300&q=80", desc:"A sweeping narrative of humanity's entire history — how Homo Sapiens conquered the world." },
  { id:'b8', type:'book', title:"The Raven", author:"Edgar Allan Poe", genre:"Poetry", genreColor:"#9B76D4", rating:"5.0", pages:124, copies:6, year:1845, isbn:"978-0743482615", tags:["Gothic","Dark","Verse"], img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80", desc:"A haunting collection of Poe's most celebrated dark verse — where sorrow, beauty, and the sublime intertwine." },
  { id:'b9', type:'book', title:"The Name of the Wind", author:"Patrick Rothfuss", genre:"Fiction", genreColor:"#C8883A", rating:"4.8", pages:662, copies:2, year:2007, isbn:"978-0756404079", tags:["Fantasy","Magic","Epic"], img:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&q=80", desc:"The masterful tale of Kvothe, a legendary wizard-bard recounting his life — filled with magic, music, and adventure." },
  { id:'b10', type:'book', title:"A Brief History of Time", author:"Stephen Hawking", genre:"Science", genreColor:"#2EC4A0", rating:"4.6", pages:212, copies:4, year:1988, isbn:"978-0553380163", tags:["Physics","Cosmology","Black Holes"], img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80", desc:"From the Big Bang to black holes — Hawking's landmark work on the structure and fate of the Universe." },
  { id:'b11', type:'book', title:"Crime & Punishment", author:"Fyodor Dostoevsky", genre:"Mystery", genreColor:"#4EC88A", rating:"4.7", pages:545, copies:3, year:1866, isbn:"978-0143107637", tags:["Classic","Psychological","Russian"], img:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&q=80", desc:"Raskolnikov commits a terrible crime and must confront the psychological consequences — a penetrating portrait of guilt." },
];

const films = [
  { id:'f0', type:'film', title:"Inception", author:"Christopher Nolan", genre:"Sci-Fi", genreColor:"#6366F1", rating:"4.9", year:2010, copies:3, tags:["Mind-Bending","Dreams","Heist"], img:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80", desc:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea." },
  { id:'f1', type:'film', title:"Parasite", author:"Bong Joon-ho", genre:"Thriller", genreColor:"#EC4899", rating:"4.9", year:2019, copies:2, tags:["Class","Korean","Twist"], img:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", desc:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
  { id:'f2', type:'film', title:"Pan's Labyrinth", author:"Guillermo del Toro", genre:"Fantasy", genreColor:"#8B5CF6", rating:"4.8", year:2006, copies:4, tags:["Dark Fantasy","War","Mythology"], img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80", desc:"In post-Civil War Spain, a young girl escapes into an eerie but captivating fantasy world." },
  { id:'f3', type:'film', title:"2001: A Space Odyssey", author:"Stanley Kubrick", genre:"Sci-Fi", genreColor:"#6366F1", rating:"5.0", year:1968, copies:2, tags:["Space","AI","Philosophical"], img:"https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80", desc:"Humanity finds a mysterious artifact buried beneath the Lunar surface and sets off to find its origins with the help of HAL 9000." },
  { id:'f4', type:'film', title:"Roma", author:"Alfonso Cuarón", genre:"Drama", genreColor:"#10B981", rating:"4.7", year:2018, copies:3, tags:["Mexico","Family","Neorealism"], img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc:"A year in the life of a middle-class family's maid in Mexico City in the early 1970s." },
  { id:'f5', type:'film', title:"Planet Earth II", author:"David Attenborough", genre:"Documentary", genreColor:"#F59E0B", rating:"5.0", year:2016, copies:5, tags:["Nature","BBC","Wildlife"], img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80", desc:"Sir David Attenborough narrates intimate, previously unseen animal behavior in six unique habitats across the globe." },
];

const music = [
  { id:'m0', type:'music', title:"The Dark Side of the Moon", author:"Pink Floyd", genre:"Rock", genreColor:"#8B5CF6", rating:"5.0", year:1973, copies:3, tags:["Prog Rock","Concept","Psychedelic"], img:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80", desc:"One of the most iconic albums in rock history — themes of conflict, greed, time, mental illness, and death." },
  { id:'m1', type:'music', title:"Kind of Blue", author:"Miles Davis", genre:"Jazz", genreColor:"#06B6D4", rating:"5.0", year:1959, copies:4, tags:["Modal Jazz","Masterpiece","Timeless"], img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", desc:"The best-selling jazz record of all time, featuring an all-star lineup in improvisational modal jazz." },
  { id:'m2', type:'music', title:"Beethoven's 9th Symphony", author:"Ludwig van Beethoven", genre:"Classical", genreColor:"#D9A84B", rating:"5.0", year:1824, copies:6, tags:["Symphony","Choral","Ode to Joy"], img:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", desc:"The culminating achievement of a deaf composer — the Ninth Symphony's Ode to Joy remains humanity's most celebrated melody." },
  { id:'m3', type:'music', title:"Random Access Memories", author:"Daft Punk", genre:"Electronic", genreColor:"#06B6D4", rating:"4.8", year:2013, copies:2, tags:["Disco","Electronic","Funk"], img:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", desc:"A love letter to classic studio recordings, blending electronic music with live instrumentation and nostalgia." },
  { id:'m4', type:'music', title:"Blue", author:"Joni Mitchell", genre:"Folk", genreColor:"#10B981", rating:"4.9", year:1971, copies:3, tags:["Singer-Songwriter","Confessional","Poetry"], img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", desc:"Widely regarded as one of the greatest albums ever made, with its deeply personal and confessional songwriting." },
  { id:'m5', type:'music', title:"In Rainbows", author:"Radiohead", genre:"Rock", genreColor:"#8B5CF6", rating:"4.8", year:2007, copies:3, tags:["Art Rock","Experimental","Electronic"], img:"https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", desc:"Radiohead's most accessible and warmly received album — a meditation on love, anxiety, and digital alienation." },
];

const gaming = [
  { id:'g0', type:'gaming', title:"Elden Ring", author:"FromSoftware", genre:"RPG", genreColor:"#D9A84B", rating:"5.0", year:2022, copies:3, tags:["Open World","Soulslike","Epic"], img:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80", desc:"An action RPG set in a vast world created by Hidetaka Miyazaki and George R.R. Martin — brutal, beautiful, unforgettable." },
  { id:'g1', type:'gaming', title:"Civilization VI", author:"Firaxis Games", genre:"Strategy", genreColor:"#10B981", rating:"4.7", year:2016, copies:4, tags:["4X","History","Addictive"], img:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", desc:"Build an empire to stand the test of time in this iconic turn-based strategy game spanning all of human history." },
  { id:'g2', type:'gaming', title:"Hollow Knight", author:"Team Cherry", genre:"Action", genreColor:"#8B5CF6", rating:"4.8", year:2017, copies:5, tags:["Metroidvania","Indie","Atmospheric"], img:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80", desc:"A challenging 2D action-adventure through a vast ruined kingdom of insects and heroes beneath the earth." },
  { id:'g3', type:'gaming', title:"Stardew Valley", author:"ConcernedApe", genre:"Simulation", genreColor:"#10B981", rating:"4.9", year:2016, copies:6, tags:["Farming","Cozy","Relaxing"], img:"https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&q=80", desc:"You've inherited your grandfather's old farm plot. Armed with hand-me-down tools and a few coins, you begin a new life." },
  { id:'g4', type:'gaming', title:"Disco Elysium", author:"ZA/UM", genre:"RPG", genreColor:"#D9A84B", rating:"4.9", year:2019, copies:2, tags:["Narrative","Detective","Literary"], img:"https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&q=80", desc:"A groundbreaking role-playing game with no combat — just your detective's mind and the ruins of an impossible city." },
  { id:'g5', type:'gaming', title:"StarCraft II", author:"Blizzard Entertainment", genre:"Strategy", genreColor:"#10B981", rating:"4.8", year:2010, copies:3, tags:["RTS","Esports","Competitive"], img:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&q=80", desc:"The definitive real-time strategy game — three races battle across the stars in a story spanning decades." },
];

const allItems = [...books, ...films, ...music, ...gaming];

const shelfBooks = [
  { title:"1984",        img:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&q=80",  progress:78 },
  { title:"Foundation",  img:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&q=80",  progress:45 },
  { title:"Hamlet",      img:"https://images.unsplash.com/photo-1553729784-e91953dec042?w=200&q=80",  progress:90 },
  { title:"Neuromancer", img:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&q=80", progress:20 },
  { title:"Don Quixote", img:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=200&q=80", progress:55 },
  { title:"Ulysses",     img:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=200&q=80", progress:10 },
];

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let bookings        = [];
let historyItems    = [];
let currentTab      = 'active';
let currentItem     = null;
let currentItemType = 'book';
let bookFilter      = 'All';
let filmFilter      = 'All';
let musicFilter     = 'All';
let gamingFilter    = 'All';
let searchQuery     = '';

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  renderFilms();
  renderMusic();
  renderGaming();
  renderShelf();
  setDefaultReturnDate();

  setTimeout(() => {
    animateCount(document.getElementById('c-volumes'), 12847);
    animateCount(document.getElementById('c-authors'),  3290);
    animateCount(document.getElementById('c-genres'),     48);
  }, 500);

  observeCards();
});

/* ═══════════════════════════════════════
   RENDER BOOKS
═══════════════════════════════════════ */
function renderBooks() {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = '';
  const filtered = books.filter(b => {
    const mg = bookFilter === 'All' || b.genre === bookFilter;
    const mq = !searchQuery || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return mg && mq;
  });
  document.getElementById('bookCount').textContent = `Showing ${filtered.length} volume${filtered.length!==1?'s':''}`;
  if (!filtered.length) { grid.innerHTML='<div class="empty-state">No volumes found.</div>'; return; }
  filtered.forEach((book, i) => {
    const booked = isBooked(book.id);
    const avail  = book.copies > 0;
    const card   = document.createElement('div');
    card.className = 'book-card';
    card.style.transitionDelay = `${i*0.05}s`;
    let btnClass = 'can-book', btnText = 'Reserve';
    if (booked)      { btnClass = 'booked-btn';  btnText = '✓ Reserved'; }
    else if (!avail) { btnClass = 'unavail-btn'; btnText = 'Unavailable'; }
    card.innerHTML = `
      <div class="book-inner">
        <div class="book-face">
          <div class="book-cover" style="background-image:url(${book.img})"></div>
          <div class="book-overlay"></div>
          <div class="book-shine"></div>
          <div class="b-available ${avail?'avail':'unavail'}">${avail?book.copies+' avail.':'Out of stock'}</div>
          <div class="b-rating">★ ${book.rating}</div>
          <div class="book-info">
            <div class="b-genre" style="color:${book.genreColor}">${book.genre.toUpperCase()}</div>
            <div class="b-title">${book.title}</div>
            <div class="b-author">${book.author}</div>
          </div>
          <div class="book-quick-action">
            <button class="bqa-btn ${btnClass}" onclick="handleQuickBook(event,'${book.id}')">${btnText}</button>
          </div>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(book,'book'));
    grid.appendChild(card);
  });
  observeCards();
}

/* ═══════════════════════════════════════
   RENDER MEDIA (Films/Music/Gaming)
═══════════════════════════════════════ */
function renderMediaGrid(items, gridId, filter, countId, cardClass, badgeClass) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  const filtered = items.filter(it => {
    const mg = filter === 'All' || it.genre === filter;
    const mq = !searchQuery || it.title.toLowerCase().includes(searchQuery.toLowerCase()) || it.author.toLowerCase().includes(searchQuery.toLowerCase());
    return mg && mq;
  });
  document.getElementById(countId).textContent = `Showing ${filtered.length} item${filtered.length!==1?'s':''}`;
  if (!filtered.length) { grid.innerHTML='<div class="empty-state">No items found.</div>'; return; }
  filtered.forEach((item, i) => {
    const booked = isBooked(item.id);
    const avail  = item.copies > 0;
    const card   = document.createElement('div');
    card.className = `media-card ${cardClass}`;
    card.style.transitionDelay = `${i*0.05}s`;
    let btnClass = 'can-book', btnText = 'Reserve';
    if (booked)      { btnClass = 'booked-btn';  btnText = '✓ Reserved'; }
    else if (!avail) { btnClass = 'unavail-btn'; btnText = 'Unavailable'; }
    card.innerHTML = `
      <img class="mc-thumb" src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="mc-overlay"></div>
      <div class="mc-badge ${badgeClass}">${item.genre}</div>
      <div class="mc-rating">★ ${item.rating}</div>
      <div class="mc-body">
        <div class="mc-genre" style="color:${item.genreColor}">${item.type.toUpperCase()} · ${item.year}</div>
        <div class="mc-title">${item.title}</div>
        <div class="mc-sub">${item.author}</div>
        <button class="mc-borrow-btn ${btnClass}" onclick="handleQuickBook(event,'${item.id}')">${btnText}</button>
      </div>`;
    card.addEventListener('click', (e) => { if (!e.target.classList.contains('mc-borrow-btn')) openModal(item, item.type); });
    grid.appendChild(card);
  });
  observeCards();
}

function renderFilms()  { renderMediaGrid(films,  'filmsGrid',  filmFilter,   'filmCount',   'film-card',   'film'); }
function renderMusic()  { renderMediaGrid(music,  'musicGrid',  musicFilter,  'musicCount',  'music-card',  'music'); }
function renderGaming() { renderMediaGrid(gaming, 'gamingGrid', gamingFilter, 'gamingCount', 'gaming-card', 'gaming'); }

/* ═══════════════════════════════════════
   READING SHELF
═══════════════════════════════════════ */
function renderShelf() {
  const row = document.getElementById('shelfRow');
  shelfBooks.forEach(book => {
    const r=11, circ=2*Math.PI*r, offset=circ-(book.progress/100)*circ;
    const item = document.createElement('div');
    item.className = 'shelf-item';
    item.innerHTML = `
      <div class="s-book">
        <img src="${book.img}" alt="${book.title}">
        <div class="s-progress-ring">
          <svg viewBox="0 0 28 28">
            <circle class="s-ring-bg" cx="14" cy="14" r="${r}" stroke-dasharray="${circ}" stroke-dashoffset="0"/>
            <circle class="s-ring-fill" cx="14" cy="14" r="${r}" stroke="#D9A84B" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/>
          </svg>
        </div>
      </div>
      <span class="s-title">${book.title}</span>`;
    row.appendChild(item);
  });
}

/* ═══════════════════════════════════════
   FILTER & SEARCH
═══════════════════════════════════════ */
function filterSection(type, genre, el, isFilm, isMusic, isGaming) {
  const barId = type==='book'?'bookFilterBar':type==='film'?'filmFilterBar':type==='music'?'musicFilterBar':'gamingFilterBar';
  document.querySelectorAll('#'+barId+' .fpill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  if (type==='book')   { bookFilter=genre;   renderBooks(); }
  if (type==='film')   { filmFilter=genre;   renderFilms(); }
  if (type==='music')  { musicFilter=genre;  renderMusic(); }
  if (type==='gaming') { gamingFilter=genre; renderGaming(); }
}

function handleSearch(q) {
  searchQuery = q;
  renderBooks(); renderFilms(); renderMusic(); renderGaming();
}

/* ═══════════════════════════════════════
   BOOKING LOGIC
═══════════════════════════════════════ */
function isBooked(itemId) { return bookings.some(b=>b.item.id===itemId && b.status==='active'); }

function bookItem(item, dueDate) {
  if (!item.copies || item.copies<=0) { showToast('This item is currently unavailable.','warn'); return false; }
  if (isBooked(item.id)) { showToast(`"${item.title}" is already reserved.`,'info'); return false; }
  item.copies--;
  bookings.push({ item, dueDate:dueDate||getDefaultDue(), status:'active', bookedAt:new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) });
  updateBadge(); updatePanel(); updatePickCard();
  renderBooks(); renderFilms(); renderMusic(); renderGaming();
  showToast(`"${item.title}" reserved!`,'success');
  return true;
}

function returnItem(itemId) {
  const idx = bookings.findIndex(b=>b.item.id===itemId && b.status==='active');
  if (idx===-1) return;
  bookings[idx].item.copies++;
  historyItems.push({...bookings[idx], status:'returned', returnedAt:new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})});
  bookings.splice(idx,1);
  updateBadge(); updatePanel(); updatePickCard();
  renderBooks(); renderFilms(); renderMusic(); renderGaming();
  showToast('Item returned. Thank you!','info');
}

function handleQuickBook(e, itemId) {
  e.stopPropagation();
  const item = allItems.find(it=>it.id===itemId);
  if (!item) return;
  if (isBooked(itemId)) { openModal(item, item.type); return; }
  bookItem(item, getDefaultDue());
}

function bookPickOfSeason() {
  const b = books[0];
  if (isBooked(b.id)) { togglePanel(); return; }
  bookItem(b, getDefaultDue());
}

function bookFromModal() {
  if (!currentItem) return;
  const due = document.getElementById('returnDate').value;
  const result = bookItem(currentItem, formatDate(due));
  if (result) closeModal();
}

function getDefaultDue() { const d=new Date(); d.setDate(d.getDate()+14); return formatDate(d.toISOString().split('T')[0]); }

function formatDate(iso) {
  if (!iso) return getDefaultDue();
  const [y,m,d]=iso.split('-');
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d} ${months[parseInt(m)-1]} ${y}`;
}

function confirmAllBookings() {
  showConfirm('Return All Active Loans',`Return all ${bookings.length} active item${bookings.length>1?'s':''}?`,()=>{
    const ids=bookings.map(b=>b.item.id);
    ids.forEach(id=>returnItem(id));
    showToast('All items returned. Thank you!','success');
  });
}

/* ═══════════════════════════════════════
   UPDATE UI
═══════════════════════════════════════ */
function updateBadge() {
  const count=document.getElementById('badgeCount');
  const active=bookings.filter(b=>b.status==='active').length;
  count.textContent=active;
  document.getElementById('activeBookings').textContent=active;
  count.classList.remove('bump'); void count.offsetWidth; count.classList.add('bump');
}

function updatePanel() {
  const bpList=document.getElementById('bpList');
  const bpEmpty=document.getElementById('bpEmpty');
  const bpConfirm=document.getElementById('bpConfirmBtn');
  const data=currentTab==='active'?bookings.filter(b=>b.status==='active'):historyItems.filter(b=>b.status==='returned');
  bpEmpty.style.display=data.length===0?'flex':'none';
  bpList.innerHTML='';
  data.forEach(entry=>{
    const item=document.createElement('div');
    item.className='booking-item';
    const isActive=entry.status==='active';
    item.innerHTML=`
      <div class="bi-img"><img src="${entry.item.img}" alt="${entry.item.title}"></div>
      <div class="bi-info">
        <div class="bi-title">${entry.item.title}</div>
        <div class="bi-author">${entry.item.author}</div>
        <div class="bi-meta">
          <span class="bi-type-tag ${entry.item.type}">${entry.item.type.toUpperCase()}</span>
          <div class="bi-due">${isActive?'⏰ Due: '+entry.dueDate:'✓ Returned: '+(entry.returnedAt||entry.dueDate)}</div>
          <div class="bi-status ${entry.status}">${isActive?'● Active':'✓ Returned'}</div>
        </div>
      </div>
      ${isActive?`<div class="bi-actions">
        <button class="bi-btn bi-return" onclick="confirmReturn('${entry.item.id}')">Return</button>
        <button class="bi-btn bi-remove" onclick="confirmRemove('${entry.item.id}')">Cancel</button>
      </div>`:''}`;
    bpList.appendChild(item);
  });
  const activeCount=bookings.filter(b=>b.status==='active').length;
  document.getElementById('bps-active').textContent=`${activeCount} item${activeCount!==1?'s':''}`;
  const dueDates=bookings.filter(b=>b.status==='active').map(b=>b.dueDate);
  document.getElementById('bps-due').textContent=dueDates.length?dueDates[0]:'—';
  bpConfirm.disabled=activeCount===0;
}

function updatePickCard() {
  const b=books[0];
  const btn=document.getElementById('pickBookBtn');
  const copies=document.getElementById('pickCopies');
  if(!btn||!copies) return;
  copies.textContent=b.copies>0?`${b.copies} Available`:'Out of Stock';
  if(isBooked(b.id)){btn.textContent='✓ Reserved — View Bookings';btn.disabled=false;}
  else if(b.copies===0){btn.textContent='Out of Stock';btn.disabled=true;}
  else{btn.textContent='Reserve This Volume';btn.disabled=false;}
}

/* ═══════════════════════════════════════
   MODAL
═══════════════════════════════════════ */
function openModal(item, type) {
  currentItem=item; currentItemType=type;
  setDefaultReturnDate();
  document.getElementById('m-img').src=item.img;
  document.getElementById('m-title').textContent=item.title;
  document.getElementById('m-author').textContent=item.author;
  document.getElementById('m-desc').textContent=item.desc;
  const genreEl=document.getElementById('m-genre');
  genreEl.textContent=item.genre;
  genreEl.style.color=item.genreColor;
  genreEl.style.borderColor=item.genreColor+'55';
  genreEl.style.background=item.genreColor+'18';
  const stars='★'.repeat(Math.round(parseFloat(item.rating)));
  document.getElementById('m-stars').textContent=`${stars} ${item.rating} / 5`;
  document.getElementById('m-tags').innerHTML=item.tags.map(t=>`<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('m-meta').innerHTML=`
    <div class="mm-item"><span class="mm-label">${item.pages?'Pages':'Year'}</span><span class="mm-value">${item.pages||item.year}</span></div>
    <div class="mm-item"><span class="mm-label">Year</span><span class="mm-value">${item.year<0?Math.abs(item.year)+' BC':item.year}</span></div>
    <div class="mm-item"><span class="mm-label">Copies</span><span class="mm-value">${item.copies}</span></div>`;
  const availEl=document.getElementById('m-avail');
  const dot=availEl.querySelector('.avail-dot');
  const txt=availEl.querySelector('span');
  if(item.copies>0){dot.className='avail-dot green';txt.textContent='Available';txt.style.color='#34D399';}
  else{dot.className='avail-dot red';txt.textContent='Unavailable';txt.style.color='#FCA5A5';}
  document.getElementById('m-copies').textContent=`${item.copies} cop${item.copies!==1?'ies':'y'} in stock`;
  const btn=document.getElementById('m-book-btn');
  const dateRow=document.getElementById('dateRow');
  if(isBooked(item.id)){btn.textContent='✓ Already Reserved';btn.className='modal-book-btn already-booked';btn.disabled=false;dateRow.style.display='none';}
  else if(item.copies===0){btn.textContent='Currently Unavailable';btn.className='modal-book-btn';btn.disabled=true;dateRow.style.display='none';}
  else{btn.textContent='Reserve This Item';btn.className='modal-book-btn';btn.disabled=false;dateRow.style.display='flex';}
  document.getElementById('detailModal').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('open');
  document.body.style.overflow='';
  currentItem=null;
}

function handleModalClick(e) { if(e.target===document.getElementById('detailModal')) closeModal(); }

/* ═══════════════════════════════════════
   PANEL
═══════════════════════════════════════ */
function togglePanel() {
  const panel=document.getElementById('bookingsPanel');
  const overlay=document.getElementById('panelOverlay');
  const isOpen=panel.classList.contains('open');
  if(!isOpen){updatePanel();panel.classList.add('open');overlay.classList.add('open');document.body.style.overflow='hidden';}
  else{panel.classList.remove('open');overlay.classList.remove('open');document.body.style.overflow='';}
}

function switchTab(tab, el) {
  currentTab=tab;
  document.querySelectorAll('.bp-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  updatePanel();
}

/* ═══════════════════════════════════════
   CONFIRM
═══════════════════════════════════════ */
let pendingConfirmAction=null;

function confirmReturn(itemId) {
  const b=bookings.find(x=>x.item.id===itemId);
  if(!b) return;
  showConfirm('Return Item',`Return "${b.item.title}"?`,()=>returnItem(itemId));
}

function confirmRemove(itemId) {
  const b=bookings.find(x=>x.item.id===itemId);
  if(!b) return;
  showConfirm('Cancel Reservation',`Cancel your reservation of "${b.item.title}"?`,()=>{returnItem(itemId);showToast('Reservation cancelled.','info');});
}

function showConfirm(title,msg,onYes) {
  document.getElementById('cd-title').textContent=title;
  document.getElementById('cd-msg').textContent=msg;
  pendingConfirmAction=onYes;
  document.getElementById('confirmDialog').classList.add('open');
}

function closeConfirm() { document.getElementById('confirmDialog').classList.remove('open'); pendingConfirmAction=null; }

document.getElementById('cd-yes').addEventListener('click',()=>{if(pendingConfirmAction) pendingConfirmAction(); closeConfirm();});

/* ═══════════════════════════════════════
   TOAST
═══════════════════════════════════════ */
function showToast(msg,type='info') {
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');
  t.className=`toast ${type}`;
  t.textContent=msg;
  c.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
function animateCount(el,target) {
  let current=0;
  const step=Math.ceil(target/60);
  const iv=setInterval(()=>{current=Math.min(current+step,target);el.textContent=current.toLocaleString();if(current>=target)clearInterval(iv);},20);
}

function setDefaultReturnDate() {
  const d=new Date(); d.setDate(d.getDate()+14);
  const el=document.getElementById('returnDate');
  if(el){el.value=d.toISOString().split('T')[0];el.min=new Date().toISOString().split('T')[0];}
}

function observeCards() {
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} });
  },{threshold:0.04});
  document.querySelectorAll('.book-card:not(.visible),.media-card:not(.visible)').forEach(c=>obs.observe(c));
}

document.addEventListener('keydown',e=>{
  if(e.key!=='Escape') return;
  closeModal();
  const panel=document.getElementById('bookingsPanel');
  if(panel.classList.contains('open')) togglePanel();
  closeConfirm();
});