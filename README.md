# Designhive - Interior Design Services

Welcome to Designhive, your leading provider of interior design services. This README file provides information about the website, its features, technologies used, and instructions for setup.

## Overview

Designhive is a platform dedicated to delivering top-notch interior design services. Whether you're looking to transform your home, office, or any other space, our expert designers are here to cater to your unique needs and preferences.

## Features

1. **Explore Design Services:**
   - Browse through a variety of interior design services tailored to different styles and preferences.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Styled Components](https://styled-components.com/) for styling

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/) for data storage

- **Authentication:**
  - [JSON Web Tokens (JWT)](https://jwt.io/)

- **Deployment:**
  - [Heroku](https://www.heroku.com/) for hosting

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB set up and running.

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/designhive.git
   cd designhive
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Set up environment variables.
   Create a `.env` file in the root of your project and add the necessary environment variables.

   ```
   REACT_APP_API_BASE_URL=your_backend_api_url
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the development server.
   ```bash
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000).
