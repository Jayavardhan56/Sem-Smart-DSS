document.addEventListener("DOMContentLoaded", function() {
    document.body.style.fontFamily = "'Arial', sans-serif";
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "#ffffff";
    document.body.style.margin = "0";

    const header = document.querySelector(".header");
    header.style.backgroundColor = "#000000";
    header.style.padding = "15px";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";

    const headerTitle = document.querySelector(".header-title");
    headerTitle.style.margin = "0";

    const logoutLink = document.querySelector(".logout-link");
    logoutLink.style.color = "#4CAF50";
    logoutLink.style.textDecoration = "none";

    const container = document.querySelector(".container");
    container.style.padding = "20px";

    const introBox = document.querySelector(".intro-box");
    introBox.style.backgroundColor = "#000000";
    introBox.style.padding = "30px";
    introBox.style.borderRadius = "10px";
    introBox.style.boxShadow = "0 8px 20px rgba(255, 255, 255, 0.1)";
    introBox.style.marginBottom = "20px";

    const introContent = document.querySelector(".intro-content");
    introContent.style.display = "flex";
    introContent.style.justifyContent = "space-between";
    introContent.style.alignItems = "center";

    const quizImage = document.querySelector(".quiz-image");
    if (quizImage) {
        quizImage.style.maxWidth = "200px";
        quizImage.style.borderRadius = "5px";
    }

    const featureBoxes = document.querySelector(".feature-boxes");
    featureBoxes.style.display = "grid";
    featureBoxes.style.gridTemplateColumns = "repeat(3, 1fr)";
    featureBoxes.style.gap = "20px";

    const featureBoxList = document.querySelectorAll(".feature-box");
    featureBoxList.forEach(featureBox => {
        featureBox.style.backgroundColor = "#2c2c2c";
        featureBox.style.padding = "15px";
        featureBox.style.borderRadius = "10px";
        featureBox.style.textAlign = "center";
        featureBox.style.cursor = "pointer";
        featureBox.style.transition = "transform 0.2s";

        featureBox.addEventListener("mouseenter", function() {
            featureBox.style.transform = "scale(1.05)";
        });

        featureBox.addEventListener("mouseleave", function() {
            featureBox.style.transform = "scale(1)";
        });
    });

    const branchImages = document.querySelectorAll(".branch-image");
    branchImages.forEach(branchImage => {
        branchImage.style.width = "100%";
        branchImage.style.borderRadius = "5px";
    });

    const footer = document.querySelector(".footer");
    footer.style.backgroundColor = "#000000";
    footer.style.textAlign = "center";
    footer.style.padding = "10px 0";
});
const branchImages = document.querySelectorAll(".branch-image");
branchImages.forEach(branchImage => {
    branchImage.style.width = "100%";
    branchImage.style.height = "150px";
    branchImage.style.objectFit = "cover";
    branchImage.style.borderRadius = "5px"; 
});
