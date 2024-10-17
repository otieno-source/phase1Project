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


function openGallery(){
  const gallery = document.querySelector('#gallery');
  if (gallery.style.display === 'none' || getComputedStyle(gallery).display === 'none') {
      gallery.style.display = "block";
  } else {
      gallery.style.display = "none";
  }
}

const openGalleryBtn = document.querySelector('#searchTutorBtn');
openGalleryBtn.addEventListener('click', openGallery);



// // fetching from my local json

// async function fectchTutors() {
//   try{
//     const response = await fetch('http://localhost:3000/tutors');
//     if (!response.ok) {
//       throw new Error('unable to fetch');
//     }
//     const data = await response.json();
  
//     data.forEach(element => {
//       const displyedGallarey = document.querySelector('#inforGrid');
//       displyedGallarey.innerHTML = element.image;
//     });
//   }
//   catch(error){
//     console(error)
//   }
// }

// fectchTutors();







const handleClick = (newTutor) => {
const tutorDisplay = document.querySelector('#inforGrid');

// const bookBtn = document.createElement('button');
// bookBtn.innerText = 'Book'


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
    const newTutor = {
        name,
        age,
        male,
        subject,
        image,
        fees,
    };

    // Display the image in the #inforGrid div
    const display = document.querySelector('#inforGrid'); // getting the html div for gallery

    const newTutorImage = document.createElement('img'); // creating img tag here
    newTutorImage.src = newTutor.image;
    newTutorImage.alt = newTutor.name;
    newTutorImage.style.width = '100%';
    newTutorImage.style.height = 'auto';
    newTutorImage.style.cursor = 'pointer';
    newTutorImage.margin = '10px 0';

   
    
    

    // Adding event listener so that clicking the new tutor image shows its info
    newTutorImage.addEventListener('click', () => handleClick(newTutor));

    display.appendChild(newTutorImage); // adding the new tutor image here
  

    // Clear the form fields
    alert('Your Details has been submitted');
    inptform.reset();
});
};

addSubmitListener();

// document.addEventListener('DOMContentLoaded', fectchTutors)