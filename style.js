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
    gallery.style.display = "block"; // Always show gallery
}

// Fetching tutors from local JSON.
async function fetchTutors() {
    try {
        const response = await fetch('https://phase1project-somk.onrender.com/tutors');
        if (!response.ok) {
            throw new Error('Unable to fetch tutors');
        }
        const data = await response.json();

        const openGalleryBtn = document.querySelector('#submitSelect');
        openGalleryBtn.addEventListener('click', () => {
            const select = document.querySelector('#searchTutorBtn');
            const selectedSubject = select.value; // Getting user input.value from select

            // Am Clearing existing information
            clearTutorDisplay();

            // Check if there are any tutors that match the selected subject
            const matchingTutors = data.filter(element => selectedSubject === element.subject);

            if (matchingTutors.length > 0) {
                matchingTutors.forEach(tutor => displayTutor(tutor)); // DisplayTutor for each found tutor
                openGallery(); // Show gallery if matches were found
            } else {
                alert('No tutor found for the selected subject.'); // Alert for no matches
            }
        });
    } catch (error) {
        console.error(error);
    }
}

// Function to handle displaying tutor information
const displayTutor = (newTutor) => {
    const tutorDisplay = document.querySelector('#inforGrid');

    // Create a container for each tutor
    const tutorContainer = document.createElement('div');
    tutorContainer.style.border = "1px solid #ccc";
    tutorContainer.style.padding = "10px";
    tutorContainer.style.marginTop = "10px";

    // Display the tutor information
    tutorContainer.innerHTML = `
        <strong>Name:</strong> ${newTutor.name} <br />
        <strong>Age:</strong> ${newTutor.age} <br />
        <strong>Subject:</strong> ${newTutor.subject} <br />
        <strong>Rate:</strong> ${newTutor.rate} <br />
        <strong>Contact:</strong> ${newTutor.contact} <br />
        <strong>Gender:</strong> ${newTutor.male ? 'Male' : 'Female'} <br />
        <img src="${newTutor.image}" alt="${newTutor.name}" style="width: 150px; height: 150px;" />
    `;

    // Add click listener to display more detailed information when the tutor is clicked
    tutorContainer.addEventListener('click', () => handleClick(newTutor));
    tutorDisplay.appendChild(tutorContainer); // Add the tutor container to the display
};

const clearTutorDisplay = () => {
    const tutorDisplay = document.querySelector('#inforGrid');
    tutorDisplay.innerHTML = '<h4>Select A Tutor</h4>'; // Clear the previous results
};

// displaying tutors information through image click. Function invoked in addsubmitListner.
const handleClick = (newTutor) => {
    const tutorDisplay = document.querySelector('#inforGrid');
    tutorDisplay.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
            <strong>Name:</strong> ${newTutor.name} <br />
            <strong>Age:</strong> ${newTutor.age} <br />
            <strong>Subject:</strong> ${newTutor.subject} <br />
            <strong>Rate:</strong> ${newTutor.rate} <br />
            <strong>Contact:</strong> ${newTutor.contact} <br />
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
        const rate = formData.get('rate');
        const contact = formData.get('contact');

        // Creating an object from the form values
        const newTutor = { name, age, male, subject, image, rate, contact };

        try {
            // Send a POST request to add the new tutor to the database
            const response = await fetch('https://phase1project-somk.onrender.com/tutors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTutor)
            });

            if (!response.ok) {
                throw new Error('Failed to add new tutor');
            }

            alert('Your Details have been successfully submitted!');
            inputForm.reset();
            

        } catch (error) {
            console.error(error);
            alert('There was an error submitting your details. Please try again.');
        }
    });
};

// using a main function to invoke the other functions 
function run() {
    fetchTutors();
    addSubmitListener();
}

// Call run function once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', run);