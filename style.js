// Function to open the sign-up form.
function openTutorSignupForm() {
    const formDisplay = document.querySelector('#formPlaceholder');
    formDisplay.style.display = (formDisplay.style.display === 'none' || getComputedStyle(formDisplay).display === 'none') ? "block" : "none";
}

const tutorSignupBtn = document.querySelector('#tutorRegister'); // Get the button for tutor signup to open form.
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
            const selectedSubject = select.value; // Getting user input.value from select

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
        console.error(error); 
    }
}

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
    const inputForm = document.querySelector('#tutorSignUpForm');
    inputForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(inputForm);

        // Getting user inputs from the form
        const name = formData.get('name');
        const age = formData.get('age');
        const male = formData.get('gender') === 'Male';
        const subject = formData.get('subject');
        const image = formData.get('image');
        const fees = formData.get('fees');

        // Creating an object from the form values
        const newTutor = { name, age, male, subject, image, fees };

        try {
            // Send a POST request to add the new tutor to the database
            const response = await fetch('http://localhost:3000/tutors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTutor)
            });

            if (!response.ok) {
                throw new Error('Failed to add new tutor');
            }

            // add the new tutor to the display as well
            const display = document.querySelector('#inforGrid'); // Getting the HTML div for the gallery

            const newTutorImage = document.createElement('img'); // Creating img tag here
            newTutorImage.src = newTutor.image;
            newTutorImage.alt = newTutor.name;
            newTutorImage.style.width = '100%';
            newTutorImage.style.height = 'auto';
            newTutorImage.style.cursor = 'pointer';
            newTutorImage.style.margin = '10px 0';

            // Adding an event listener so that when you click the new tutor image, it shows more details about it.
            newTutorImage.addEventListener('click', () => handleClick(newTutor));

            display.appendChild(newTutorImage); // Adding the new tutor image

            // Clear the form fields
            alert('Your Details have been successfully submitted!');
            inputForm.reset();
        } catch (error) {
            console.error(error);
            alert('There was an error submitting your details. Please try again.');
        }
    });
};

function run() {
    fetchTutors();
    addSubmitListener();
}

// Call run function once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', run);
