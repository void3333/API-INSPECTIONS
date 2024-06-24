
import { displayInspections } from './inspections.js';

export function setupStatusFilter(inspections) {
  const statusFilter = document.getElementById("status-filter");

  statusFilter.addEventListener("change", function () {
    const selectedStatus = statusFilter.value;

    if (selectedStatus === "all") {
      displayInspections(inspections); // Show all inspections
    } else {
      const filteredInspections = inspections.filter(
        (inspection) => inspection.status === selectedStatus
      );
      displayInspections(filteredInspections); // Show inspections of selected status
    }
  });
}
