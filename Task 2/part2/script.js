const addBtn = document.getElementById("addBtn");
const imageUrlInput = document.getElementById("imageUrl");
const gallery = document.getElementById("gallery");

// Load images from localStorage on page load
document.addEventListener("DOMContentLoaded", loadImages);

function loadImages() {
    const images = JSON.parse(localStorage.getItem("images")) || [];
    images.forEach(url => addImageToGallery(url));
}

// Add image button
addBtn.addEventListener("click", () => {
    const imageUrl = imageUrlInput.value.trim();

    if (imageUrl === "") {
        alert("Please enter an image URL");
        return;
    }

    addImageToGallery(imageUrl);
    saveImage(imageUrl);
    imageUrlInput.value = "";
});

// Add image to DOM
function addImageToGallery(url) {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const img = document.createElement("img");
    img.src = url;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
        gallery.removeChild(imageCard);
        removeImage(url);
    });

    imageCard.appendChild(img);
    imageCard.appendChild(removeBtn);
    gallery.appendChild(imageCard);
}

// Save image to localStorage
function saveImage(url) {
    const images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(url);
    localStorage.setItem("images", JSON.stringify(images));
}

// Remove image from localStorage
function removeImage(url) {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images = images.filter(img => img !== url);
    localStorage.setItem("images", JSON.stringify(images));
}
