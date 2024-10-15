document.addEventListener("DOMContentLoaded", function() {
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';

    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        loginContainer.style.backgroundColor = '#000000';
        loginContainer.style.padding = '30px 25px';
        loginContainer.style.borderRadius = '10px';
        loginContainer.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.1)';
        loginContainer.style.width = '300px';
        loginContainer.style.textAlign = 'center';
    }

     const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.maxWidth = '150px';
        logo.style.display = 'block';
        logo.style.margin = '0 auto';
    }

    const heading = document.querySelector('h2');
    if (heading) {
        heading.style.color = '#ffffff';
        heading.style.marginBottom = '20px';
        heading.style.fontSize = '22px';
        heading.style.fontWeight = 'bold';
    }

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.display = 'block';
        label.style.textAlign = 'left';
        label.style.marginBottom = '5px';
        label.style.fontSize = '14px';
        label.style.color = '#ffffff';
    });

    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.marginBottom = '15px';
        input.style.backgroundColor = '#2c2c2c';
        input.style.border = '1px solid #ffffff';
        input.style.color = '#ffffff';
        input.style.borderRadius = '5px';
        input.style.fontSize = '14px';
        input.style.boxSizing = 'border-box';
        input.style.transition = 'border 0.3s';

        input.addEventListener('focus', function() {
            input.style.border = '1px solid #4CAF50';
        });

        input.addEventListener('blur', function() {
            input.style.border = '1px solid #ffffff';
        });
    });

    const loginButton = document.querySelector('.login-btn');
    if (loginButton) {
        loginButton.style.backgroundColor = '#4CAF50';
        loginButton.style.color = '#ffffff';
        loginButton.style.padding = '10px 0';
        loginButton.style.border = 'none';
        loginButton.style.borderRadius = '5px';
        loginButton.style.cursor = 'pointer';
        loginButton.style.fontSize = '16px';
        loginButton.style.width = '100%';
        loginButton.style.marginBottom = '15px';
        loginButton.style.transition = 'background-color 0.3s';

        loginButton.addEventListener('mouseover', function() {
            loginButton.style.backgroundColor = '#45a049';
        });

        loginButton.addEventListener('mouseout', function() {
            loginButton.style.backgroundColor = '#4CAF50';
        });
    }

    const extraLinks = document.querySelectorAll('.extra-links a');
    extraLinks.forEach(link => {
        link.style.fontSize = '13px';
        link.style.color = '#4CAF50';
        link.style.textDecoration = 'none';
        link.style.transition = 'color 0.3s';

        link.addEventListener('mouseover', function() {
            link.style.color = '#1a73e8';
            link.style.textDecoration = 'underline';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '#4CAF50';
            link.style.textDecoration = 'none';
        });
    });

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.style.width = '100%';
        select.style.padding = '10px';
        select.style.marginBottom = '15px';
        select.style.border = '1px solid #ccc';
        select.style.borderRadius = '5px';
        select.style.fontSize = '14px';
        select.style.boxSizing = 'border-box';
        select.style.transition = 'border 0.3s';

        select.addEventListener('focus', function() {
            select.style.border = '1px solid #4CAF50';
        });
    });

    const mediaQuery = window.matchMedia("(max-width: 400px)");
    if (mediaQuery.matches) {
        if (loginContainer) {
            loginContainer.style.width = '90%';
            loginContainer.style.padding = '20px';
        }

        const extraLinksContainer = document.querySelector('.extra-links');
        if (extraLinksContainer) {
            extraLinksContainer.style.flexDirection = 'column';
            extraLinksContainer.style.alignItems = 'center';
        }

        extraLinks.forEach(link => {
            link.style.marginBottom = '10px';
        });
    }

    const loginForm = document.querySelector('form');
    const rollnoInput = document.getElementById('rollno');
    const passwordInput = document.getElementById('password');
    const branchSelect = document.getElementById('branch');

    const rollNoRanges = {
        cse: { min: '22NU1A0501', max: '22NU1A05C8' },
        csm: { min: '22NU1A0401', max: '22NU1A04C8' },
        csd: { min: '22NU1A0501', max: '22NU1A05C8' },
        ece: { min: '22NU1A0401', max: '22NU1A04C8' },
        eee: { min: '22NU1A0301', max: '22NU1A03C8' },
        mech: { min: '22NU1A0201', max: '22NU1A02C8' },
        civil: { min: '22NU1A0101', max: '22NU1A01C8' },
    };

    function validateRollNo() {
        const selectedBranch = branchSelect.value;
        const rollno = rollnoInput.value;

        const range = rollNoRanges[selectedBranch];
        if (range) {
            if (rollno < range.min || rollno > range.max) {
                alert(`Roll number for ${selectedBranch.toUpperCase()} should be between ${range.min} and ${range.max}.`);
                return false;
            }
        }
        return true;
    }

    loginForm.addEventListener('submit', function(event) {
        const password = passwordInput.value;

        if (!validateRollNo()) {
            event.preventDefault();
            return;
        }

        const commonPassword = "123";
        if (password !== commonPassword) {
            alert("Incorrect password. Please enter the correct password.");
            event.preventDefault();
            return;
        }

        alert("Login successful!");
    });
});
