document.addEventListener("DOMContentLoaded", function() {
    Object.assign(document.body.style, {
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    });

    const container = document.querySelector(".container");
    Object.assign(container.style, {
        backgroundColor: "#000000",
        padding: "30px 25px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)",
        width: "500px",
        textAlign: "center",
    });

    const midtermSelectionBarLabel = document.querySelector('label[for="term"]');
    const midtermSelect = document.getElementById('term');
    Object.assign(midtermSelectionBarLabel.style, {
        display: "block",
        marginBottom: "5px",
        fontSize: "16px",
    });
    Object.assign(midtermSelect.style, {
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "#2c2c2c",
        border: "1px solid #ffffff",
        color: "#ffffff",
        borderRadius: "5px",
        fontSize: "16px",
        boxSizing: "border-box",
        appearance: "none", 
        cursor: "pointer",
    });


    const subjectsList = document.querySelector(".subjects-list");
    Object.assign(subjectsList.style, {
        listStyle: "none",
        padding: "0",
    });

    const subjects = document.querySelectorAll(".subjects-list li");
    subjects.forEach(subject => {
        Object.assign(subject.style, {
            backgroundColor: "#2c2c2c",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            fontSize: "16px",
        });

        subject.addEventListener("mouseenter", function() {
            subject.style.backgroundColor = "#4CAF50";
        });
        subject.addEventListener("mouseleave", function() {
            if (!subject.classList.contains('selected')) {
                subject.style.backgroundColor = "#2c2c2c";
            }
        });

        subject.addEventListener('click', function() {
            subjects.forEach(s => {
                s.classList.remove('selected');
                s.style.backgroundColor = "#2c2c2c";
            });

            this.classList.add('selected');
            this.style.backgroundColor = "#4CAF50";

            backToSubjectsBtn.style.display = 'inline-block';
        });
    });

    const backToSubjectsBtn = document.getElementById('back-to-subjects');
    Object.assign(backToSubjectsBtn.style, {
        backgroundColor: "#555555",
        color: "white",
        padding: "10px 20px",
        marginTop: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s",
        display: "none", 
    });

    backToSubjectsBtn.addEventListener("mouseenter", function() {
        backToSubjectsBtn.style.backgroundColor = "#777777";
    });
    backToSubjectsBtn.addEventListener("mouseleave", function() {
        backToSubjectsBtn.style.backgroundColor = "#555555";
    });

    midtermSelect.addEventListener('change', function() {
        if (this.value === "") {
            subjects.forEach(s => {
                s.classList.remove('selected');
                s.style.backgroundColor = "#2c2c2c";
            });
            backToSubjectsBtn.style.display = 'none';
        }
    });

    subjects.forEach(subject => {
        subject.addEventListener('click', function() {
            const selectedSubject = this.getAttribute('data-subject');
            const selectedMidterm = midtermSelect.value;

            if (!selectedMidterm) {
                alert("Please select a MID first.");
                return;
            }
            window.location.href = `cseques.html?subject=${encodeURIComponent(selectedSubject)}&midterm=${encodeURIComponent(selectedMidterm)}`;
        });
    });

    backToSubjectsBtn.addEventListener('click', function() {
        midtermSelect.value = "";

        subjects.forEach(s => {
            s.classList.remove('selected');
            s.style.backgroundColor = "#2c2c2c";
        });

        backToSubjectsBtn.style.display = 'none';
    });

    const backtodash = document.getElementById('back-to-dash');

    Object.assign(backtodash.style, {
        backgroundColor: "#555555",
        color: "white",
        padding: "10px 20px",
        marginTop: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s",
    });

    backtodash.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer'; 
    });

    backtodash.addEventListener('click', function(){
        window.location.href= `dashboard.html`;
    });

});
