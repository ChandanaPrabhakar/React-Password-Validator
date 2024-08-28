
<img width="451" alt="Screenshot 2024-08-28 at 17 21 29" src="https://github.com/user-attachments/assets/1e7d8af4-2f36-4b6d-889d-d99d17b5b1d2">

# React Password Validator

This is a simple React application that checks the strength of a user's password based on several criteria using the `validator` library. The application provides real-time feedback on whether the entered password is strong or not.

## Features

- **Real-time Password Validation:** The application checks if the entered password meets the following criteria:
  - Minimum length of 8 characters.
  - At least one lowercase letter.
  - At least one uppercase letter.
  - At least one number.
  - At least one symbol.

- **User Feedback:** Displays a message indicating whether the password is strong or not based on the above criteria.

## Project Structure

- **`index.html`**: The HTML file that serves as the entry point for the React application. It contains a root div where the React components are rendered.
- **`index.js`**: The entry point for the React application where the `App` component is rendered.
- **`app.js`**: The main React component that handles the password validation logic and displays feedback to the user.
- **`app.css`**: The CSS file that styles the application, ensuring a clean and modern look.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ChandanaPrabhakar/react-password-validator.git
