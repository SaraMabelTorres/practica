const categoryImages = {
    "bob-esponja": ["bobesponja.jpg", "bobesponja1.jpg", "bobesponja2.jpg"],
    "rebelde": ["rbd.jpg", "rb2.jpg", "rb3.jpg"],
    "one-direction": ["1d.jpg", "1d1.jpg", "1d2.jpg"]
};

const categorySelect = document.getElementById("category-select");
const imageSelect = document.getElementById("image-select");
const selectedImage = document.getElementById("selected-image");
const memeTextInput = document.getElementById("meme-text-input");
const authorInput = document.getElementById("author-input");
const backgroundColorInput = document.getElementById("background-color-input");
const generateMemeBtn = document.getElementById("generate-meme-btn");
const memeText = document.getElementById("meme-text");
const memeAuthor = document.getElementById("meme-author");
const memeContainer = document.querySelector(".meme-container");

categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    const images = categoryImages[selectedCategory];
    
    imageSelect.innerHTML = "";
    
    
    images.forEach(image => {
        const option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
});

generateMemeBtn.addEventListener("click", function () {
    const selectedImageUrl = imageSelect.value;
    selectedImage.src = selectedImageUrl;
    
    const memeTextValue = memeTextInput.value;
    const authorValue = authorInput.value;
    const backgroundColorValue = backgroundColorInput.value;
    
    memeText.textContent = memeTextValue;
    memeText.style.backgroundColor = backgroundColorValue;
    memeText.classList.remove("hidden");
    
    memeAuthor.textContent = `- ${authorValue}`;
    memeAuthor.classList.remove("hidden");
    
    memeContainer.style.backgroundColor = backgroundColorValue;
    memeContainer.style.display = "block";
});
