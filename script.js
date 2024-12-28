const carouselImages = document.getElementById("carouselImages");
const apiUrl = "https://dog.ceo/api/breeds/image/random";
let images = [];
let currentIndex = 0;
const nombreMascota = [
    "Roco", "Luna", "Toby", "Max", "Lobo", "Zeus", "Nala", 
    "Lola", "Simba", "Rocky", "Coco", "Mia", "Kira", "Thor", "Bruno", "Maya"
];

async function fetchDogImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === "success") {
            addImageToCarousel(data.message);
        } else {
            console.error("Error:", data);
        }
    } catch (error) {
        console.error("Error en la imagen:", error);
    }
}

function addImageToCarousel(imageUrl) {
    images.push(imageUrl);
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const nameElement = document.createElement("p");
    nameElement.innerText = getRandomName();
    imgContainer.appendChild(nameElement);

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "perro";
    imgElement.className = "carousel-img";
    imgContainer.appendChild(imgElement);

    carouselImages.appendChild(imgContainer);

    if (images.length === 1) {
        updateCarousel();
    }
}

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * nombreMascota.length);
    return nombreMascota[randomIndex];
}

function updateCarousel() {
    const imageElements = document.querySelectorAll(".carousel-images .img-container");
    imageElements.forEach((img, index) => {
        img.style.display = index === currentIndex ? "block" : "none";
    });
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

// Cargar imágenes iniciales
for (let i = 0; i < 5; i++) {
    fetchDogImage();
}