# form-validation
# Form Validation Project

## Overview
This project is a simple Registration Form developed using HTML, CSS, and JavaScript. The purpose of this project is to validate user input on the client side before the form is submitted. It ensures that users provide valid information and receive immediate feedback when incorrect or incomplete data is entered.

## Features
- Name field validation
- Email field validation
- Password field validation
- Dynamic error messages
- User-friendly interface
- Prevents form submission if validation fails
- Simple and responsive design

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Project Structure

project-folder/

├── index.html

├── style.css

├── script.js

└── README.md

## Validation Rules

### Name
- Cannot be left empty

### Email
- Cannot be left empty
- Must contain the '@' symbol

### Password
- Cannot be left empty
- Must contain at least 6 characters

## How It Works
1. The user enters information into the registration form.
2. When the Register button is clicked, JavaScript validation is triggered.
3. The script checks whether all fields meet the required conditions.
4. If any validation rule fails, an error message is displayed below the respective field.
5. Form submission is prevented until all errors are resolved.
6. Once all inputs are valid, the form is submitted successfully.

## Installation and Usage

1. Download or clone this repository.
2. Open the project folder.
3. Ensure the following files are present:
   - index.html
   - style.css
   - script.js
4. Open index.html in any web browser.
5. Test the validation by entering valid and invalid data.

## Learning Outcomes
Through this project, I learned:
- Client-side form validation
- DOM manipulation using JavaScript
- Event handling
- Using getElementById() to access HTML elements
- Displaying dynamic error messages
- Preventing form submission using event.preventDefault()
- Styling forms using CSS
- Creating a better user experience through validation

## Future Enhancements
- Add regular expression (Regex) validation for email addresses
- Implement password strength checking
- Add confirm password functionality
- Connect the form with PHP and MySQL for database storage
- Make the design fully responsive for mobile devices
- Add success messages after submission

## Author
Badia Asif

Final Year Student – Isra University

Web Development Intern

## License
This project is developed for educational and learning purposes.
