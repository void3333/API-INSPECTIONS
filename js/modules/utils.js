// js/modules/utils.js

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
