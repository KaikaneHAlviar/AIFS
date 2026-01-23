
// EVENT CARDS
const events = [
    {
        title: "Careers in AI Panel",
        date: "Tuesday, 2026-01-21",
        time: "05:30PM - 06:30PM",
        location: "TBD",
        image: "https://picsum.photos/seed/aifs-event-1/900/600",
        url: "#",
    },
    {
        title: "Build Night: Your First AI App",
        date: "Thursday, 2026-02-27",
        time: "05:30PM - 07:00PM",
        location: "TBD",
        image: "https://picsum.photos/seed/aifs-event-2/900/600",
        url: "#",
    },
    {
        title: "RSO Meeting",
        date: "Recurring Weekly on Wednesdays",
        time: "05:30PM - 07:00PM",
        location: "MOR 220",
        image: "https://picsum.photos/seed/aifs-event-2/900/600",
        url: "#",
    },
];

// RENDER EVENTS
function renderEvents() {
    const grid = document.getElementById("eventsGrid");
    if (!grid) return;

grid.innerHTML = events
    .map(
        (e) => `
        <article class="card">
            <div class="card__media">
            <img src="${e.image}" alt="${e.title} poster" loading="lazy" />
            </div>
            <div class="card__body">
            <h3 class="card__title">${e.title}</h3>
            <ul class="card__meta">
                <li>📅 ${e.date}</li>
                <li>🕒 ${e.time}</li>
                <li>📍 ${e.location}</li>
            </ul>
            <a class="btn btn--secondary" href="${e.url}">More Info →</a>
            </div>
        </article>
    `
    )
    .join("");
}

// MOBILE MENU
function setupMobileMenu() {
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        const isOpen = !menu.hasAttribute("hidden");
        if (isOpen) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        } else {
        menu.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        }
});

  // Close menu when click a link
menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
    menu.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
    }
});
}

function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
}

renderEvents();
setupMobileMenu();
setYear();
