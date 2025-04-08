document.addEventListener("DOMContentLoaded", function () {
    const creditScore = 40; // Change this value to test different scores
    const circle = document.getElementById("credit-score-circle");
    const scoreText = document.getElementById("credit-score-text");
    
    // Set color based on score
    if (creditScore < 50) {
        circle.setAttribute("stroke", "#f87171"); // Red for low score
    } else {
        circle.setAttribute("stroke", "#22c55e"); // Green for good score
    }

    // Update text
    scoreText.textContent = `${creditScore}%`;
});