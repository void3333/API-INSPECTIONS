import { applyStatusStyle, setCardStyle } from './utils.js';

export function displayInspections(inspections) {
  const inspectionsList = document.getElementById("inspections-list");
  inspectionsList.innerHTML = ""; // Clear the list before adding new items

  inspections.forEach((inspection) => {
    const card = createCard(inspection);
    inspectionsList.appendChild(card);
  });
}

export function createCard(inspection) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = `Contêiner: ${inspection.number}`;
  card.appendChild(h2);

  const statusPara = document.createElement("p");
  statusPara.textContent = `Status: ${inspection.status}`;
  card.appendChild(statusPara);

  applyStatusStyle(card, inspection.status);

  // Add click event to navigate to container details
  card.addEventListener("click", () => {
    navigateToDetailsPage(inspection.id);
  });

  return card;
}

function navigateToDetailsPage(id) {
  window.location.href = `container-details.html?id=${id}`;
}

