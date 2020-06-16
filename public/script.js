// Form
const form_title = document.getElementById("f-title");
const form_desc = document.getElementById("f-desc");
const form_price = document.getElementById("f-price");
const form_surface = document.getElementById("f-surface");
const form_streetAddress = document.getElementById("f-streetAddress");
const form_postal = document.getElementById("f-postal");
const form_city = document.getElementById("f-city");

// Preview
const preview_title = document.getElementById("p-title");
const preview_desc = document.getElementById("p-desc");
const preview_price = document.getElementById("p-price");
const preview_surface = document.getElementById("p-surface");

/* EVENT LISTENERS */
form_title.addEventListener("input", () => {
	preview_title.innerText = form_title.value;
});

form_desc.addEventListener("input", () => {
	preview_desc.innerText = form_desc.value;
});

form_price.addEventListener("input", () => {
	preview_price.innerText = form_price.value;
});

form_surface.addEventListener("input", () => {
	preview_surface.innerText = form_surface.value;
});
