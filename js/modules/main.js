import { displayInspections } from './inspections.js';
import { setupStatusAndOrderFilters } from '../../filters.js';

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayInspections(data.inspections);
      setupStatusAndOrderFilters(data.inspections);
    })
    .catch((error) => console.log("error fetching data: ", error));
});