const newsData = [
  {
    title: "22nd Annual General Assembly of Greater Bulacan Livelihood Development Cooperative - GBLDC",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "gbldc",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  ",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Lorem213",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "gbldc",
    desc: "Welcoming new cooperative members!",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Financial Literacy Training",
    desc: "Equipping members with smart money skills.",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Community Outreach Program",
    desc: "Serving the barangay together.",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Co-op Tech Upgrade 2025",
    desc: "Digital transformation is underway!",
    img: "/src/path/images/event1.jpg",
  },
  {
    title: "Awards Night Highlights",
    desc: "Recognizing outstanding co-op contributors.",
    img: "/src/path/images/event1.jpg",
  },
];

const itemsPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(newsData.length / itemsPerPage);

function renderNewsItems() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const items = newsData.slice(start, end);

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "space-y-4";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="rounded-sm shadow-md w-full h-auto object-cover">
      <h3 class="text-lg font-semibold text-center text-gray-800">${item.title}</h3>
      <p class="text-center text-gray-600 text-sm">${item.desc}</p>
    `;
    container.appendChild(card);
  });

  animateCards();
}

function renderPaginationButtons() {
  const container = document.getElementById("pagination-buttons");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `w-8 h-8 ${
      i === currentPage
        ? "bg-gray-900 text-white font-medium rounded-sm"
        : "hover:text-yellow-900"
    }`;
    btn.onclick = () => goToPage(i);
    container.appendChild(btn);
  }
}

function goToPage(page) {
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderNewsItems();
  renderPaginationButtons();
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderNewsItems();
    renderPaginationButtons();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderNewsItems();
    renderPaginationButtons();
  }
}

function animateCards() {
  const cards = document.querySelectorAll('#news-container > *');
  cards.forEach((card, i) => {
    card.classList.remove('card-animate');
    setTimeout(() => {
      card.classList.add('card-animate');
    }, 80 * i);
  });
}

// Initial Render
renderNewsItems();
renderPaginationButtons();
