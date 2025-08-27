// loan-application.js
function validateStep1(event) {
  event.preventDefault();
  const requiredFields = document.querySelectorAll(
    "input[required], select[required]"
  );
  let allFilled = true;
  let missingFields = [];

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      allFilled = false;
      field.classList.add("border-red-500");
      let label =
        field.closest("div")?.querySelector("label")?.textContent ||
        field.previousElementSibling?.textContent ||
        field.closest("fieldset")?.querySelector("legend")?.textContent ||
        field.name ||
        field.id ||
        "Field";
      label = label.replace("*", "").trim();
      if (!missingFields.includes(label)) missingFields.push(label);
    } else {
      field.classList.remove("border-red-500");
    }
  });

  if (!allFilled) {
    Swal.fire({
      icon: "warning",
      iconColor: "#dc2626",
      color: "#1e2939",
      title: "Missing Required Fields",
      html: `<p>Please fill out the following required fields before proceeding:</p>
                   <ul style="text-align:left; color:#e53e3e;">
                   ${missingFields.map((f) => `<li>• ${f}</li>`).join("")}
                   </ul>`,
      confirmButtonColor: "#16a34a",
    });
  } else {
    // Proceed to the next page
    window.location.href = "applynowstep2.html";
  }
}

function closeModal() {
  // Not needed with SweetAlert2
}

function calculateAge() {
  const birthDateInput = document.getElementById("birthDate");
  const ageInput = document.getElementById("age");
  const birthDateValue = birthDateInput.value;
  if (!birthDateValue) {
    ageInput.value = "";
    return;
  }
  const today = new Date();
  const birthDate = new Date(birthDateValue);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  ageInput.value = age >= 0 ? age : "";
}
// PSGC API base URL
const PSGC_API = "https://psgc.gitlab.io/api";

// Elements
const provinceSelect = document.getElementById("province");
const citySelect = document.getElementById("city");
const barangaySelect = document.getElementById("barangay");

// Load provinces on page load
fetch(`${PSGC_API}/provinces/`)
  .then((res) => res.json())
  .then((provinces) => {
    provinces.forEach((province) => {
      provinceSelect.innerHTML += `<option value="${province.code}">${province.name}</option>`;
    });
  });

// When province changes, load cities/municipalities
provinceSelect.addEventListener("change", function () {
  const provinceCode = this.value;
  citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
  barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
  if (!provinceCode) return;

  fetch(`${PSGC_API}/provinces/${provinceCode}/cities-municipalities/`)
    .then((res) => res.json())
    .then((cities) => {
      cities.forEach((city) => {
        citySelect.innerHTML += `<option value="${city.code}">${city.name}</option>`;
      });
    });
});

// When city/municipality changes, load barangays and set zip code
citySelect.addEventListener("change", function () {
  const cityCode = this.value;
  barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
  document.getElementById("zipCode").value = ""; // Clear zip code
  if (!cityCode) return;

  // Fetch barangays
  fetch(`${PSGC_API}/cities-municipalities/${cityCode}/barangays/`)
    .then((res) => res.json())
    .then((barangays) => {
      barangays.forEach((barangay) => {
        barangaySelect.innerHTML += `<option value="${barangay.code}">${barangay.name}</option>`;
      });
    });

  // Fetch city/municipality details for zip code
  fetch(`${PSGC_API}/cities-municipalities/${cityCode}/`)
    .then((res) => res.json())
    .then((city) => {
      // PSGC API returns postalCode (zip code)
      document.getElementById("zipCode").value = city.postalCode || "";
    });
});
