# phase1Project

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style2.css">
    <link rel="stylesheet" href="styleForm.css">
</head>
<body>
    <header>
        <nav id="top">
            <h1 id="logo">PLay & Learn</h1>
        </nav>
        <!-- <nav id="bottom">
            <button id="searchTutor">Search for a Tutor</button>
            <button class="topNavbtn">Upcoming Events for Kids</button>
        </nav> -->
    </header>
        
    <main>
        <section id="parentSignUp">
            <h3>Under Construction</h3>
            <button class="topNavbtn">Upcoming Events for Kids</button>
            <h4>For Parents</h4>
            <button id="parentsSignUp">Create Account</button>
            <h4>Or</h4>
            <button id="parentLogin">Log In</button>
        </section>

        <section id="display">
            <div id="filterSearch">
                <label for="searchTutorBtn">Select Tutor by Subject:</label>
            <select type="text" id="searchTutorBtn" name="Subjects">
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Kiswahili">Kiswahili</option>
                <option value="French">French</option>
                <option value="Science">Science</option>
                <option value="Social Studies">Social Studies</option>
                <option value="Computer Studies">Computer Studies</option>
                <option value="Religious Studies">Religious Studies</option>
            </select>

            <button type="text" id="submitSelect">Search</button>
            </div>

            <div id="aboutUs">
                <p id="aboutus">At PLay & Learn, we understand that the early years of education are crucial for a child's development. That’s why we’ve created a bridge between parents and dedicated educators who are passionate about nurturing young minds. Our mission is to empower families with access to high-quality preschool tutoring that fosters creativity, critical thinking, and a love for learning.
                    We believe that every child deserves a strong educational foundation, which is why we curate a diverse range of qualified tutors who are equipped with innovative teaching methods and up-to-date curricula. Whether you’re looking for personalized one-on-one sessions or engaging group activities, our platform makes it easy to find the perfect match for your child's unique learning needs.
                    Affordability is key, and we are committed to ensuring that quality education is accessible to all families. That’s why we offer competitive pricing and flexible options that work within your budget — because we know that every penny counts!
                    Join us on our mission to revolutionize preschool education. Connect with dedicated tutors, enhance your child’s learning experience, and set them on a path to success. Together, we can shape brighter futures!
                    Thank you for choosing us. Let’s embark on this exciting journey of discovery and growth together!
                    </p>
            </div>

            <div id="gallery">
                <div id="inforGrid"><h4>Select A Tutor</h4></div>
            </div>


            <!-- <img src="./images/tutor pic.jpg" alt=""> -->
        </section>
        <section id="tutorSignup">
            <div id="btnPlaceholder">
                <button id="tutorRegister">Become A Tutor & Earn</button>
            </div>
            <div id="formPlaceholder">
                <form action="#" id="tutorSignUpForm" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required>

                    <label>Gender:</label>
                    <div class="gender">
                        <input type="radio" id="male" name="gender" value="Male">
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female">
                        <label for="female">Female</label>
                    </div>

                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required>

                    <label for="image">Upload Photo:</label>
                    <input type="url" id="image" name="image" required>

                    <label for="rate">Rate/Hour:</label>
                    <input type="number" id="rate" name="rate" placeholder="Rate/hour" required>

                    <label for="contact">Contact:</label>
                    <input type="tel" id="contact" name="contact" required>

                    <button type="submit" id="formBtb">Submit</button>
                </form>
            </div>
        </section>
    </main>
    <script src="style.js"></script>

</body>
</html>
