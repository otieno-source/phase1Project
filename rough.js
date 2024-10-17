// index.js

// Callbacks
const handleClick = (ramen) => {
    const itemName = document.querySelector('.name');
    const itemRestaurant = document.querySelector('.restaurant');
    const itemImage = document.querySelector('.detail-image');
    const rating = document.querySelector('#rating-display');
    const comment = document.querySelector('#comment-display');
    itemName.innerHTML = ramen.name;
    itemRestaurant.innerHTML = ramen.restaurant;
    rating.innerHTML = ramen.rating;
    comment.innerHTML = ramen.comment;
    itemImage.src = ramen.image;
  };
  
  const addSubmitListener = () => {
    const inptform = document.querySelector('#new-ramen');
    inptform.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(inptform);
  
      //getting user inputs from the form here.
      const newName = formData.get('name'); 
      const restaurant = formData.get('restaurant'); 
      const newImage = formData.get('image'); 
      const newRating = formData.get('rating'); 
      const newComment = formData.get('new-comment'); 
  
      //trying to create an object from the form values.
      const newRamen = {
        name: newName,
        restaurant: restaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      }; 
  
    
      // want to display only the image to the #ramen-menu div like the api ones.
  
      const display = document.querySelector('#ramen-menu'); // getting the html div for display.
  
      const newItem = document.createElement('img'); // am creating img tag here
      newItem.src = newRamen.image;
      newItem.alt = newRamen.name;
      newItem.style.width = '150px';
      newItem.style.height = '150px';
      newItem.style.cursor = 'pointer';
  
      // Adding event listener so that clicking the new ramen image shows its info
      newItem.addEventListener('click', () => handleClick(newRamen));
  
      display.appendChild(newItem); // adding my new ranem image here
  
      // Clear the form fields
      inptform.reset();
    });
  }
  
  const displayRamens = async () => {
    try {
      const response = await fetch('http://localhost:3000/ramens');
      if (!response.ok) {
        throw new Error('unable to fetch ramen');
      }
      const data = await response.json();
      const seeRamen = document.querySelector('#ramen-menu');
      seeRamen.innerHTML = '';
      data.forEach(ramen => {
        const image = document.createElement('img');
        image.src = ramen.image;
        image.alt = ramen.name;
        seeRamen.appendChild(image);
        
        image.addEventListener('click', () => handleClick(ramen));
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const main = () => {
    displayRamens(); // Invoke displayRamens here
    addSubmitListener(); // Invoke addSubmitListener here
  }
  
  document.addEventListener('DOMContentLoaded', main);
  
  // Export functions for testing
  export {
    displayRamens,
    addSubmitListener,
    handleClick,
    main,
  };