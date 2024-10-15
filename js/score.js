document.addEventListener("DOMContentLoaded", function() {
    Object.assign(document.body.style, {
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        minHeight: "100vh",
    });


    const scoreContainer = document.querySelector(".score-container");
    const scoreText = document.getElementById('score-text');
    const detailedResults = document.getElementById('detailed-results');
    const backToDashboardBtn = document.getElementById('back-to-dashboard');

    Object.assign(scoreContainer.style, {
        backgroundColor: "#000000",
        padding: "30px 25px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)",
        width: "800px",
        textAlign: "center",
        maxHeight: "90vh",
        overflowY: "auto",
    });

    const heading = scoreContainer.querySelector('h1');
    Object.assign(heading.style, {
        fontSize: "36px",
        marginBottom: "20px",
    });

    Object.assign(scoreText.style, {
        fontSize: "20px",
        marginBottom: "30px",
    });

    Object.assign(detailedResults.style, {
        textAlign: "left",
        marginBottom: "30px",
    });

    function createResultElement(result, index) {
        const resultDiv = document.createElement('div');
        Object.assign(resultDiv.style, {
            backgroundColor: "#2c2c2c",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "5px",
        });

        const questionP = document.createElement('p');
        questionP.textContent = `${index + 1}. ${result.question}`;
        questionP.style.fontSize = "18px";
        questionP.style.marginBottom = "10px";
        resultDiv.appendChild(questionP);

        const userAnswerP = document.createElement('p');
        userAnswerP.textContent = `Your Answer: ${result.userAnswer}`;
        Object.assign(userAnswerP.style, {
            color: result.isCorrect ? "#28a745" : "#dc3545",
            marginBottom: "5px",
        });
        resultDiv.appendChild(userAnswerP);

        if (!result.isCorrect) {
            const correctAnswerP = document.createElement('p');
            correctAnswerP.textContent = `Correct Answer: ${result.correctAnswer}`;
            Object.assign(correctAnswerP.style, {
                color: "#28a745",
            });
            resultDiv.appendChild(correctAnswerP);
        }

        return resultDiv;
    }

    Object.assign(backToDashboardBtn.style, {
        backgroundColor: "#555555",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
    });

    backToDashboardBtn.addEventListener("mouseenter", function() {
        backToDashboardBtn.style.backgroundColor = "#777777";
    });
    backToDashboardBtn.addEventListener("mouseleave", function() {
        backToDashboardBtn.style.backgroundColor = "#555555";
    });

    const score = localStorage.getItem('userScore');
    const total = localStorage.getItem('totalQuestions');
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));

    if (score !== null && total !== null) {
        scoreText.textContent = `You scored ${score} out of ${total}.`;
    } else {
        scoreText.textContent = "No score available.";
    }

    if (quizResults && Array.isArray(quizResults)) {
        quizResults.forEach((result, index) => {
            const resultElement = createResultElement(result, index);
            detailedResults.appendChild(resultElement);
        });
    }

    backToDashboardBtn.addEventListener('click', function() {
        window.location.href = 'cse.html'; 
    });

    // Optional: Clear localStorage after displaying results
    localStorage.removeItem('userScore');
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('quizResults');
});
