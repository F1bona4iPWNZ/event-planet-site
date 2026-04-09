const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const data = [
  "Spa",
  "Massage",
  "Relax therapy",
  "Body care",
  "Facial treatment",
  "Hair styling"
];

searchInput.addEventListener("input", function() {

  const value = this.value.toLowerCase();

  searchResults.innerHTML = "";

  if (value === "") {
    searchResults.style.display = "none";
    return;
  }

  const filtered = data.filter(item =>
    item.toLowerCase().includes(value)
  );

  filtered.forEach(item => {

    const regex = new RegExp(`(${value})`, "gi");

    const highlighted = item.replace(
      regex,
      `<span class="highlight">$1</span>`
    );

    const div = document.createElement("div");

    div.classList.add("search-item");
    div.innerHTML = highlighted;

    searchResults.appendChild(div);

  });

  searchResults.style.display = "block";

});
