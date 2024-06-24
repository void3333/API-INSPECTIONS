// js/modules/inspections.js
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

  const locationPara = document.createElement("p");
  locationPara.textContent = `Local: ${inspection.location}`;
  card.appendChild(locationPara);

  applyStatusStyle(card, inspection.status);

  return card;
}

export function applyStatusStyle(card, status) {
  let backgroundColor, textColor;

  switch (status) {
    case "Concluído":
      backgroundColor = "green";
      textColor = "white";
      break;
    case "Em andamento":
      backgroundColor = "orange";
      textColor = "white";
      break;
    case "Aguardando liberação":
      backgroundColor = "red";
      textColor = "white";
      break;
    default:
      backgroundColor = "gray";
      textColor = "black";
      break;
  }

  setCardStyle(card, backgroundColor, textColor);
}

export function setCardStyle(card, backgroundColor, textColor) {
  card.style.backgroundColor = backgroundColor;
  card.style.color = textColor;

  // Set text color for all child elements (h2, p, etc.)
  card.querySelectorAll("h2, p").forEach((element) => {
    element.style.color = textColor;
  });
}
