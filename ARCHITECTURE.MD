
## Backend

- **server.js**: Entry point. Sets up Express, connects to MongoDB, loads routes.
- **models/Feedback.js**: Mongoose schema/model for feedback documents.
- **routes/feedback.js**: REST API endpoints for submitting and retrieving feedback.

### API Endpoints

#### `GET /feedback`

- **Description:** Retrieve all feedback submissions.
- **Query Parameters:**  
  - (optional) `category`: Filter feedback by category.
- **Response:**  
  - `200 OK`: Array of feedback objects.

#### `POST /feedback`

- **Description:** Submit new feedback.
- **Request Body:**  
  - `name` (string, required)
  - `email` (string, required)
  - `category` (string, required)
  - `message` (string, required)
- **Response:**  
  - `201 Created`: Created feedback object.
  - `400 Bad Request`: Validation error.

## Frontend

- **src/App.js**: Main app component. Loads feedback, handles submission.
- **src/components/FeedbackForm.js**: Form for submitting feedback.
- **src/components/FeedbackDashboard.js**: Displays feedback list with filtering/sorting.
- **src/services/api.js**: Axios API client for backend communication.

## Data Flow

1. User submits feedback via form.
2. Frontend sends POST request to backend.
3. Backend saves feedback to MongoDB.
4. Frontend fetches and displays updated feedback list.

## Environment Variables

- **Backend:**  
  - `MONGO_URI`: MongoDB connection string  
  - `PORT`: Server port (default 5000)
- **Frontend:**  
  - `REACT_APP_API_URL`: Backend API base URL

## Notes

- CORS is enabled for local development.
- Uses modern React (hooks) and ES modules throughout.