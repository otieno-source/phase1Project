// function openTutorSignupForm() {
//     const formPlaceholder = document.querySelector('#formPlaceholder');
//     if (formPlaceholder.style.display === 'none' || formPlaceholder.style.display === '') {
//         // Show the form
//         formPlaceholder.style.display = 'block';// show form
//     } else {
//         formPlaceholder.style.display = 'none';//or hide when open
//     }
// }

// const openningTutorsFormBtn = document.querySelector('#tutorRegister');
// openningTutorsFormBtn.addEventListener('click', openTutorSignupForm);

// openTutorSignupForm();

// // fetching tutors from json to #inforGrid
// // const baseUrl = 
// async function fetchingTutors() {
//     try{
//         const response = await fetch ('http://localhost:3000/tutors');
//         if (!response.ok) {
//             throw new Error('unable to fetch tutors')
//         }
//         const data = await response.json();
//         // get the user select input.
//         const userInput = document.querySelector('#searchTutorBtn');
//         if (userInput.value === data.subject) {
//             const submitBtn = document.querySelector('#submitSelect');
//             submitBtn.addEventListener('click', () => {
//                 const displayDiv = document.querySelector('#gallery');
//                 if (displayDiv.style.display === 'none' || displayDiv.style.display === '') {
//                     // Show the form
//                     displayDiv.style.display = 'block';// show form
//                 } else {
//                     displayDiv.style.display = 'none';//or hide when open

//                     const imageDisplay = document.querySelector('#inforGrid'); // appending image to see it in inforgrid
//                     imageDisplay.innerHTML = data.image;
//                 }
                
//             })
//         }
//     }
//     catch(error){
//         console.error(error)
//     }
// }

// fetchingTutors();





// const handleClick = (newTutor) => {
//     const tutorDisplay = document.querySelector('#inforGrid');

//     // Display detailed information about the tutor
//     tutorDisplay.innerHTML = `
//         <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
//             <strong>Name:</strong> ${newTutor.name} <br />
//             <strong>Subject:</strong> ${newTutor.subject} <br />
//             <strong>Fees:</strong> ${newTutor.fees} <br />
//             <img src="${newTutor.image}" alt="${newTutor.name}" style="width: 150px; height: 150px;" />
//         </div>
//     `;
// };


// const addSubmitListener = () => {
//     const inptform = document.querySelector('#tutorSignUpForm');
//     inptform.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const formData = new FormData(inptform);

//         // Getting user inputs from the form here
//         const name = formData.get('name');
//         const age = formData.get('age');
//         const subject = formData.get('subject');
//         const image = formData.get('image');
//         const fees = formData.get('fees');

//         // Creating an object from the form values
//         const newTutor = { name, age, male, subject, image, fees };

//         // Display the image in the #inforGrid div
//         const display = document.querySelector('#inforGrid'); // getting the html div for gallery

//         const newTutorImage = document.createElement('img'); // creating img tag here
//         newTutorImage.src = newTutor.image;
//         newTutorImage.alt = newTutor.name;
//         newTutorImage.style.width = '100%';
//         newTutorImage.style.height = 'auto';
//         newTutorImage.style.cursor = 'pointer';
//         newTutorImage.style.margin = '10px 0';

//         // Adding event listener so that clicking the new tutor image shows its info
//         newTutorImage.addEventListener('click', () => handleClick(newTutor));

//         display.appendChild(newTutorImage); // adding the new tutor image

//         // Clear the form fields
//         alert('Your Details have been submitted');
//         inptform.reset();
//     });
// };

// addSubmitListener();


// Initialize form display style
document.querySelector('#formPlaceholder').style.display = 'none';

function openTutorSignupForm() {
    const formPlaceholder = document.querySelector('#formPlaceholder');
    if (formPlaceholder.style.display === 'none' || formPlaceholder.style.display === '') {
        formPlaceholder.style.display = 'block';
    } else {
        formPlaceholder.style.display = 'none';
    }
}

const openningTutorsFormBtn = document.querySelector('#tutorRegister');
openningTutorsFormBtn.addEventListener('click', openTutorSignupForm);

// Fetch tutors from JSON to #inforGrid
async function fetchingTutors() {
    try {
        const response = await fetch('http://localhost:3000/tutors');
        if (!response.ok) {
            throw new Error('Unable to fetch tutors');
        }
        const data = await response.json();
        
        // Populate data display logic here instead of solely relying on event listener
        const submitBtn = document.querySelector('#submitSelect');
        
        submitBtn.addEventListener('click', () => {
            const userInput = document.querySelector('#searchTutorBtn');
            const selectedSubject = userInput.value;

            // Filter tutors based on selected subject
            const filteredTutors = data.filter(tutor => tutor.subject === selectedSubject);
            const displayDiv = document.querySelector('#inforGrid');
            displayDiv.innerHTML = ''; // Clear previous results

            filteredTutors.forEach(tutor => {
                const tutorContainer = document.createElement('div');
                tutorContainer.innerHTML = `
                    <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
                        <strong>Name:</strong> ${tutor.name} <br />
                        <strong>Subject:</strong> ${tutor.subject} <br />
                        <strong>Fees:</strong> ${tutor.fees} <br />
                        <img src="${tutor.image}" alt="${tutor.name}" style="width: 150px; height: 150px;" />
                    </div>
                `;
                displayDiv.appendChild(tutorContainer);
            });
            displayDiv.style.display = 'block'; // Show the now-populated display div
        });
    } catch (error) {
        console.error(error);
    }
}

// Initializing fetching of tutors
fetchingTutors();

const addSubmitListener = () => {
    const inptform = document.querySelector('#tutorSignUpForm');
    inptform.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(inptform);

        // Ensure all relevant inputs are included and handled
        const name = formData.get('name');
        const age = formData.get('age');
        const subject = formData.get('subject');
        const image = formData.get('image');
        const fees = formData.get('fees');

        const newTutor = { name, age, subject, image, fees };

        // Display the image in the #inforGrid div
        const display = document.querySelector('#inforGrid'); 
        const newTutorImage = document.createElement('img'); 
        newTutorImage.src = newTutor.image;
        newTutorImage.alt = newTutor.name;
        newTutorImage.style.width = '100%';
        newTutorImage.style.height = 'auto';
        newTutorImage.style.cursor = 'pointer';
        newTutorImage.style.margin = '10px 0';
        display.appendChild(newTutorImage); 

        // Clear the form fields
        alert('Your Details have been submitted');
        inptform.reset();
    });
};

addSubmitListener();