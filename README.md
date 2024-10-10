# Rick and Morty Character Explorer

This project is part of the frontend technical test to participate in the hackathon organized by Barcelona Activa. It is an Angular 18 web application that consumes the Rick and Morty API and displays character cards. The application allows searching by character name and viewing a detailed page of each character.

**Live Demo**: [Rick and Morty Character Explorer](https://rick-morty-lovat.vercel.app/)

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The **Rick and Morty Character Explorer** is a web application built with Angular 18. It fetches data from the [Rick and Morty API](https://rickandmortyapi.com/documentation) and displays a list of characters with their images and basic information. Users can search for characters by name and navigate to a detailed view of each character to see more in-depth information.

This project aims to demonstrate frontend development skills using Angular and serves as part of the evaluation for the hackathon.

## Installation

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 20.14.0)
- [Angular CLI](https://angular.io/cli) (version 18.0.3)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/guifreribas/rick_morty.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rick-morty-explorer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/`.

## Usage

- **Home Page**: Displays a list of characters with their images and names.
- **Character Details Page**: Clicking on a character card navigates to a detailed view with more information about that character.
- **Search Functionality**: Use the search bar on the home page to search for characters by their name.
- **Theme Toggle**: Toggle between light and dark themes using the theme switch button in the top-right corner of the page.

## Features

- Responsive design optimized for both desktop and mobile devices.
- Dark and light theme toggle.
- Consumes the Rick and Morty API for fetching character data.

## Project Structure

The project consists of the following main components:

- **Home Page**: Displays a list of all characters.
- **Character Card Component**: A reusable card component for displaying character information.
- **Character Detail Page**: Displays detailed information of a selected character.

## API Documentation

The application uses the [Rick and Morty API](https://rickandmortyapi.com/documentation) for fetching character data. Refer to the API documentation for more details on the available endpoints and response structure.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. All contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
