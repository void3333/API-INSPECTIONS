import { displayInspections } from './inspections.js';

export function setupStatusAndOrderFilters(inspections) {
  const statusFilter = document.getElementById("status-filter");
  const orderFilter = document.getElementById("order-filter");

  function handleFiltersChange() {
    filterAndSortInspections(inspections, statusFilter.value, orderFilter.value);
  }

  statusFilter.addEventListener("change", handleFiltersChange);
  orderFilter.addEventListener("change", handleFiltersChange);
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
