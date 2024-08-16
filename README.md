# Real Estate Investment Website

This project is a **Real Estate Investment Website** developed using **React.js** with **Vite** as the build tool. The website showcases properties, provides information about the company, displays the latest news, and offers a contact form for inquiries.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Structure

The project follows a standard React.js structure with Vite for fast builds and development. Below is an overview of the main directories:

```sh
real-estate-website/
├── node_modules/ # Node.js dependencies
├── public/ # Static files like images, favicon
├── src/ # Source files
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable components
│ ├── pages/ # Page components
│ ├── App.css # Global styles
│ ├── App.jsx # Main app component
│ ├── index.css # Global styles entry point
│ └── main.jsx # App entry point
├── .gitignore # Files to be ignored by Git
├── index.html # Main HTML file
├── package.json # Project configuration and dependencies
├── README.md # Project documentation
└── vite.config.js # Vite configuration
```

## Features

- **Home Page**: Displays featured properties, services, testimonials, and a footer.
- **About Page**: Provides an overview of the company and its team.
- **News Page**: Lists the latest news articles related to real estate.
- **Contact Page**: Includes a contact form, contact information, and a map.

## Installation

To get a local copy of the project up and running, follow these simple steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/real-estate-website.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd real-estate-website
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

To start the development server and view the project in the browser:

```bash
npm run dev
```
This will start the Vite development server. Open your browser and go to http://localhost:5173 to see the website in action.

Available Scripts
npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run preview: Previews the production build locally.
npm run lint: Lints the project using ESLint (if ESLint is set up).
Deployment
The website can be deployed to any static site hosting service, such as Netlify, Vercel, or GitHub Pages.
