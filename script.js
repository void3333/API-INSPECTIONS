// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to get URL parameter value
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // Fetch container details based on ID from URL parameter
  const containerId = getUrlParameter("id");
  fetch("data.json") // Replace with your actual data source
    .then((response) => response.json())
    .then((data) => {
      const container = data.inspections.find((inspection) => inspection.id === parseInt(containerId));
      if (container) {
        displayContainerDetails(container);
      } else {
        displayErrorMessage();
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      displayErrorMessage();
    });

  // Function to display container details
  function displayContainerDetails(container) {
    const containerDetails = document.getElementById("container-details");
    containerDetails.innerHTML = `
      <div class="card">
        <h2>Contêiner: ${container.number}</h2>
        <p>Status: ${container.status}</p>
        <p>Local: ${container.location}</p>
        <p>Produto: ${container.product}</p>
      </div>
    `;
  }

  // Function to display error message if container not found
  function displayErrorMessage() {
    const containerDetails = document.getElementById("container-details");
    containerDetails.innerHTML = "<p>Container not found.</p>";
  }
});
