// js/modules/inspectors.js
export function displayInspectors(inspectors) {
  const inspectorsList = document.getElementById("inspectors-list");
  inspectorsList.innerHTML = ""; // Clear the list before adding new items

  inspectors.forEach((inspector) => {
    const card = createInspectorCard(inspector);
    inspectorsList.appendChild(card);
  });
}

export function createInspectorCard(inspector) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = `Nome: ${inspector.name}`;
  card.appendChild(h2);

  const cityPara = document.createElement("p");
  cityPara.textContent = `Cidade: ${inspector.city}`;
  card.appendChild(cityPara);

  const phonePara = document.createElement("p");
  phonePara.textContent = `Fone: ${inspector.phone}`;
  card.appendChild(phonePara);

  return card;
}
