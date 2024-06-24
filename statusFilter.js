import { displayInspections } from './js/modules/inspections.js';

export function setupStatusFilter(inspections) {
  const statusFilter = document.getElementById("status-filter");
  const orderFilter = document.getElementById("order-filter");

  statusFilter.addEventListener("change", function () {
    filterAndSortInspections(inspections, statusFilter.value, orderFilter.value);
  });

  orderFilter.addEventListener("change", function () {
    filterAndSortInspections(inspections, statusFilter.value, orderFilter.value);
  });
}

function filterAndSortInspections(inspections, selectedStatus, selectedOrder) {
  let filteredInspections = inspections;

  if (selectedStatus !== "all") {
    filteredInspections = inspections.filter(
      (inspection) => inspection.status === selectedStatus
    );
  }

  if (selectedOrder !== "none") {
    filteredInspections.sort((a, b) => {
      if (selectedOrder === "asc") {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });
  }

  displayInspections(filteredInspections);
}
