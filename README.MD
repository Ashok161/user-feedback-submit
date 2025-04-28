# User Feedback System

A full-stack web application for collecting and managing user feedback. Built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features

- Submit feedback with name, email, category, and message
- View all feedback submissions in a dashboard
- Filter and sort feedback by category and date
- Responsive, modern UI

## Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Other:** dotenv, CORS

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/user-feedback-system.git
cd user-feedback-system
```

#### 2. Backend

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` folder (see `.env.example` for format):

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

- Start the backend server:

```sh
npm run start
```

#### 3. Frontend

```sh
cd ../frontend
npm install
```

- Ensure `.env` contains:

```
REACT_APP_API_URL=http://localhost:5000
```

- Start the frontend:

```sh
npm start
```

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

See [ARCHITECTURE.md](ARCHITECTURE.md) for details.

