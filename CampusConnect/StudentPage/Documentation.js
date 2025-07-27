const documents = [
  { name: "Nhlanhla Sibiya - ID Copy", file: "docs/id-nhlanhla.pdf" },
  { name: "Nhlanhla Sibiya - Timetable", file: "docs/timetable.pdf" },
  { name: "Ofentse Ramasodi - ID Copy", file: "docs/id-ofentse.pdf" },
  { name: "Ofentse Ramasodi - Timetable", file: "docs/timetable.pdf" },
  { name: "Lebo Mokoena - Proof of Registration", file: "docs/proof-lebo.pdf" },
  { name: "Zanele Khumalo - Matric Certificate", file: "docs/zanele-matric.pdf" },
  { name: "Sifiso Dlamini - Assignment 1", file: "docs/sifiso-assign1.pdf" },
  { name: "Thabo Ndlovu - Admission Letter", file: "docs/admission-thabo.pdf" },
  { name: "Ayanda Ntuli - Results Slip", file: "docs/results-ayanda.pdf" },
  { name: "Nandi Mthembu - Proof of Address", file: "docs/address-nandi.pdf" },
  { name: "Sipho Maseko - Course Outline", file: "docs/course-sipho.pdf" },
  { name: "Nomsa Nkosi - Academic Transcript", file: "docs/nomsa-transcript.pdf" },
];

const docContainer = document.getElementById("docContainer");
const searchInput = document.getElementById("searchInput");

function renderDocs(filter = "") {
  docContainer.innerHTML = "";
  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(filter.toLowerCase())
  );

  filteredDocs.forEach(doc => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.innerHTML = `
      <p>${doc.name}</p>
      <a href="${doc.file}" download>Download</a>
    `;
    docContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  renderDocs(searchInput.value);
});

renderDocs();
