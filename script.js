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