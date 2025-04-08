const newsData = [
  {
    title: "GBLC",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "gbldc",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  ",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  
  {
    title: "Lorem213",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/481448069_972518898356668_2822715038654521351_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHcDmnWXv73wZfcfLgU_a3Mz77pjpFSwX7PvumOkVLBft9IiVipkALYyaNJwRf2HA-99uSaT-Pms0tA5g0v8A-9&_nc_ohc=4O_FNeRnJRcQ7kNvwFKr5nC&_nc_oc=AdmRIF6tOmfmKSxGEEHV1_fOvuEXlNmH_vyJq7QZXDdT4UGa0C6uefviZho-eyUznXb-0lQFd_-1LaTWQwEYXLDN&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=tLkwuvklJqSONum1xiU4Dw&oh=00_AfGBWzZBlL4hZF8qRkqlmILo8SbwtplrPvlo6k8HZ2Nw4Q&oe=67FB26F3",
  },
  {
    title: "gbldc",
    desc: "Welcoming new cooperative members!",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Financial Literacy Training",
    desc: "Equipping members with smart money skills.",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Community Outreach Program",
    desc: "Serving the barangay together.",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Co-op Tech Upgrade 2025",
    desc: "Digital transformation is underway!",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
  },
  {
    title: "Awards Night Highlights",
    desc: "Recognizing outstanding co-op contributors.",
    img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/486562548_990291136579444_2551544951720052057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccLl0HLmb1Tb6_JXykzL8Sbz2o0fRoFZJvPajR9GgVrt40Sujrv-j0SG1KIj4oDpa-2OYehtHTNic35Sn6W4b&_nc_ohc=IQO4nHA_PE0Q7kNvwE5LpTu&_nc_oc=Adkx6JZ8TXyFjby6o2hQ9XSx-wAj6WVkoTfAvss91saToNsOoDvn0EUTERntmWZbbzwiNQU7PMXhYGu3hhZrD3Pw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=qQHNWEY6bjK8UAGSk08Pxw&oh=00_AfH2oyG2v2wSVViy7X4M07-6aVCxaSqKMMg3KI2V6HNadQ&oe=67FB14F6",
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
    container.innerHTML += `
        <div class="space-y-4">
          <img src="${item.img}" alt="${item.title}" class="rounded-sm shadow-md w-full h-auto object-cover">
          <h3 class="text-lg font-semibold text-center text-gray-800">${item.title}</h3>
          <p class="text-center text-gray-600 text-sm">${item.desc}</p>
        </div>
      `;
  });
}

function renderPaginationButtons() {
  const container = document.getElementById("pagination-buttons");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    container.innerHTML += `
        <button onclick="goToPage(${i})" class="w-8 h-8 ${
      i === currentPage
        ? "bg-gray-800 text-white font-medium rounded-sm"
        : "hover:text-yellow-900"
    }">${i}</button>
      `;
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

// Initial Render
renderNewsItems();
renderPaginationButtons();
