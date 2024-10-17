//function to open the sign-up form.
function openTutorSignupForm() {
    const formDisplay = document.querySelector('#formPlaceholder');
    formDisplay.style.display = (formDisplay.style.display === 'none' || getComputedStyle(formDisplay).display === 'none') ? "block" : "none";
}

const tutorSignupBtn = document.querySelector('#tutorRegister');
tutorSignupBtn.addEventListener('click', openTutorSignupForm);

// Function to open/collapse the gallery.
function openGallery() {
    const gallery = document.querySelector('#gallery');
    gallery.style.display = (gallery.style.display === 'none' || getComputedStyle(gallery).display === 'none') ? "block" : "none";
}

// Fetching tutors from local JSON.
async function fetchTutors() {
    try {
        const response = await fetch('http://localhost:3000/tutors');
        if (!response.ok) {
            throw new Error('Unable to fetch tutors');
        }
        const data = await response.json();

        const openGalleryBtn = document.querySelector('#submitSelect');
        openGalleryBtn.addEventListener('click', () => {
            const select = document.querySelector('#searchTutorBtn');
            const selectedSubject = select.value;

            let found = false; // To track if we find a tutor

            // Check if there are any tutors that match the selected subject
            data.forEach(element => {
                if (selectedSubject === element.subject) {
                    found = true; // Mark as found
                    handleClick(element); // Call the handleClick function with the tutor data
                }
            });

            if (found) {
                openGallery(); // Show gallery if a match was found
            } else {
                alert('No tutor found for the selected subject.'); // Alert for no matches
            }
        });
    } catch (error) {
        console.error(error); // Fixed error handling
    }
}

// Call to fetch tutors
fetchTutors();

// Function to handle displaying tutor information
const handleClick = (newTutor) => {
    const tutorDisplay = document.querySelector('#inforGrid');

    // Display detailed information about the tutor
    tutorDisplay.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
            <strong>Name:</strong> ${newTutor.name} <br />
            <strong>Age:</strong> ${newTutor.age} <br />
            <strong>Subject:</strong> ${newTutor.subject} <br />
            <strong>Fees:</strong> ${newTutor.fees} <br />
            <strong>Gender:</strong> ${newTutor.male ? 'Male' : 'Female'} <br />
            <img src="${newTutor.image}" alt="${newTutor.name}" style="width: 150px; height: 150px;" />
        </div>
    `;
};

const addSubmitListener = () => {
    const inptform = document.querySelector('#tutorSignUpForm');
    inptform.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(inptform);

        // Getting user inputs from the form here
        const name = formData.get('name');
        const age = formData.get('age');
        const male = formData.get('gender') === 'Male';
        const subject = formData.get('subject');
        const image = formData.get('image');
        const fees = formData.get('fees');

        // Creating an object from the form values
        const newTutor = { name, age, male, subject, image, fees };

        // Display the image in the #inforGrid div
        const display = document.querySelector('#inforGrid'); // getting the html div for gallery

        const newTutorImage = document.createElement('img'); // creating img tag here
        newTutorImage.src = newTutor.image;
        newTutorImage.alt = newTutor.name;
        newTutorImage.style.width = '100%';
        newTutorImage.style.height = 'auto';
        newTutorImage.style.cursor = 'pointer';
        newTutorImage.style.margin = '10px 0';

        // Adding event listener so that clicking the new tutor image shows its info
        newTutorImage.addEventListener('click', () => handleClick(newTutor));

        display.appendChild(newTutorImage); // adding the new tutor image

        // Clear the form fields
        alert('Your Details have been submitted');
        inptform.reset();
    });
};

addSubmitListener();