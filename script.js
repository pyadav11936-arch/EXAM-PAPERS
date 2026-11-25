// Previous Year Paper PDF List
// Apne PDF links yahan add karna hai.

const papers = [
  // Example:
  // {
  //   title: "AKTU 2025 Physics Paper",
  //   url: "papers/physics-2025.pdf"
  // }
];

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("paperSearch");
const searchMessage = document.getElementById("searchMessage");
const paperResults = document.getElementById("paperResults");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Show papers
function renderPapers(items) {

  if (!items.length) {
    paperResults.innerHTML = `
      <span>📚</span>
      <p>No matching papers found.</p>
    `;
    return;
  }

  paperResults.innerHTML = items.map(paper => `
    <p class="paper-result">
      <a href="${paper.url}" target="_blank">
        ${paper.title} ↗
      </a>
    </p>
  `).join("");
}

// Search papers
searchForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchMessage.textContent =
      "Please enter a paper name to search.";
    return;
  }

  const matches = papers.filter(paper =>
    paper.title.toLowerCase().includes(query)
  );

  if (papers.length) {
    searchMessage.textContent =
      `${matches.length} paper(s) found.`;

    renderPapers(matches);

  } else {
    searchMessage.textContent =
      "Add PDF links in script.js to show search results.";
  }

  document.getElementById("paper-library")
    .scrollIntoView({ behavior: "smooth" });

});

// Mobile Menu
menuToggle.addEventListener("click", function() {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});

// Close menu after clicking link
navLinks.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function() {

    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});

// PREVIOUS YEAR PAPERS DATABASE

const papers = [
    {
        title: "Engineering Mathematics",
        subject: "mathematics",
        semester: "1",
        year: "2025",
        file: "papers/maths-2025.pdf"
    },
    {
        title: "Engineering Physics",
        subject: "physics",
        semester: "1",
        year: "2025",
        file: "papers/physics-2025.pdf"
    },
    {
        title: "Engineering Chemistry",
        subject: "chemistry",
        semester: "1",
        year: "2025",
        file: "papers/chemistry-2025.pdf"
    },
    {
        title: "Basic Electrical Engineering",
        subject: "electrical",
        semester: "1",
        year: "2025",
        file: "papers/electrical-2025.pdf"
    }
];

// DISPLAY PAPERS

const container = document.getElementById("papersContainer");
const searchInput = document.getElementById("paperSearch");
const subjectFilter = document.getElementById("subjectFilter");
const semesterFilter = document.getElementById("semesterFilter");
const noPapers = document.getElementById("noPapers");

function displayPapers() {

    const search = searchInput.value.toLowerCase();
    const subject = subjectFilter.value;
    const semester = semesterFilter.value;

    const filtered = papers.filter(paper => {

        const matchesSearch =
            paper.title.toLowerCase().includes(search) ||
            paper.year.includes(search) ||
            paper.subject.toLowerCase().includes(search);

        const matchesSubject =
            subject === "all" || paper.subject === subject;

        const matchesSemester =
            semester === "all" || paper.semester === semester;

        return matchesSearch && matchesSubject && matchesSemester;
    });

    container.innerHTML = "";

    noPapers.hidden = filtered.length !== 0;

    filtered.forEach(paper => {

        const card = document.createElement("div");
        card.className = "paper-card";

        const heading = document.createElement("h3");
        heading.textContent = paper.title;

        const icon = document.createElement("div");
        icon.className = "pdf-icon";
        icon.textContent = "📄";

        const description = document.createElement("p");
        description.textContent = "AKTU Previous Year Question Paper";

        const subjectLabel = document.createElement("span");
        subjectLabel.className = "paper-label";
        subjectLabel.textContent = paper.subject.toUpperCase();

        const yearLabel = document.createElement("span");
        yearLabel.className = "paper-label";
        yearLabel.textContent = paper.year;

        const semesterLabel = document.createElement("span");
        semesterLabel.className = "paper-label";
        semesterLabel.textContent = "Semester " + paper.semester;

        const actions = document.createElement("div");
        actions.className = "paper-actions";

        const view = document.createElement("a");
        view.className = "view-btn";
        view.href = paper.file;
        view.target = "_blank";
        view.rel = "noopener";
        view.textContent = "View PDF";

        const download = document.createElement("a");
        download.className = "download-btn";
        download.href = paper.file;
        download.download = "";
        download.textContent = "Download";

        actions.append(view, download);

        card.append(
            icon,
            heading,
            description,
            subjectLabel,
            yearLabel,
            semesterLabel,
            actions
        );

        container.appendChild(card);
    });
}

// SEARCH AND FILTER EVENTS

searchInput.addEventListener("input", displayPapers);
subjectFilter.addEventListener("change", displayPapers);
semesterFilter.addEventListener("change", displayPapers);

// INITIAL DISPLAY

displayPapers();
