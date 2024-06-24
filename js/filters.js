// main.js
import { displayInspections } from './modules/inspections.js';
import { displayInspectors } from './modules/inspectors.js';
import { setupStatusAndOrderFilters } from './filters.js';

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayInspections(data.inspections);
      displayInspectors(data.inspectors);
      setupStatusAndOrderFilters(data.inspections);
    })
    .catch((error) => console.log("error fetching data: ", error));
});
