function openTutorSignupForm() {
    const formDisplay = document.querySelector('#formPlaceholder');
    
    
    if (formDisplay.style.display === 'none' || getComputedStyle(formDisplay).display === 'none') {
        formDisplay.style.display = "block";
    } else {
        formDisplay.style.display = "none";
    }
}

const tutorSignupBtn = document.querySelector('#tutorRegister');
tutorSignupBtn.addEventListener('click', openTutorSignupForm);