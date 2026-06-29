# InterviewIQ.AI

InterviewIQ.AI is a full-stack AI mock interview platform built with the MERN stack. It helps users practice role-based interviews, upload resumes for AI-assisted analysis, answer timed interview questions, receive feedback and scores, and purchase extra interview credits through Razorpay.

## Features

- Google sign-in using Firebase Authentication
- Secure backend authentication with JWT stored in cookies
- Resume upload and PDF text extraction
- AI-powered resume analysis
- AI-generated interview questions based on role, experience, projects, skills, and resume content
- Timed interview flow with answer submission and evaluation
- Interview scoring with confidence, communication, and correctness metrics
- Interview history and detailed report pages
- Credit-based usage system
- Razorpay payment integration for buying more credits

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS
- Axios
- Firebase Auth
- Recharts
- jsPDF

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- PDF.js
- OpenRouter API
- Razorpay

## Project Structure

```text
AI-mern/
├── client/   # React + Vite frontend
├── server/   # Express + MongoDB backend
└── README.md
```

## Main User Flow

1. User signs in with Google.
2. Backend creates or finds the user and stores a JWT cookie.
3. User uploads a resume PDF.
4. Backend extracts resume text and asks the AI model for structured details.
5. User starts an interview based on resume data and selected settings.
6. AI generates 5 interview questions.
7. User answers timed questions.
8. AI evaluates each answer and returns feedback.
9. Final report shows scores and question-wise analysis.
10. If credits are low, the user can buy more through Razorpay.

## Environment Variables

Create these files locally and do not commit them.

### `client/.env`

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_public_key
```

### `server/.env`

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd AI-mern
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## Run Locally

### Start the backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:3000
```

### Start the frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Overview

### Auth

- `POST /api/auth/google` - Google login
- `GET /api/auth/logout` - Logout user

### User

- `GET /api/user/current-user` - Get logged-in user

### Interview

- `POST /api/interview/resume` - Upload and analyze resume
- `POST /api/interview/generate-questions` - Generate interview questions
- `POST /api/interview/submit-answer` - Submit an answer for evaluation
- `POST /api/interview/finish` - Finish interview and return final report
- `GET /api/interview/get-interview` - Fetch interview history
- `GET /api/interview/report/:id` - Fetch interview report by id

### Payment

- `POST /api/payment/order` - Create Razorpay order
- `POST /api/payment/verify` - Verify Razorpay payment

## Authentication Notes

- Google sign-in is handled on the frontend using Firebase.
- The backend issues a JWT after successful Google auth.
- The JWT is stored in a cookie and used to protect private routes.
- Make sure the frontend origin matches the backend CORS configuration.

## Credits System

- New users are created with default credits.
- Starting an interview deducts credits from the user account.
- Razorpay payments add credits after successful verification.

## Important Setup Notes

- Enable Google authentication in your Firebase project.
- Add `localhost` to Firebase authorized domains.
- Use a valid MongoDB Atlas connection string or local MongoDB URI.
- Add Razorpay test or live keys depending on your environment.
- Add a valid OpenRouter API key for AI question generation and answer evaluation.

## Scripts

### Client

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Server

```bash
npm run dev
npm start
```

## Current Status

This project already includes:

- Landing page
- Authentication flow
- Interview setup
- Interview session UI
- Report page
- Interview history
- Pricing page
- Payment flow

## Future Improvements

- Add interview webcam or voice support
- Add admin dashboard
- Add better error handling and validation
- Add unit and integration tests
- Add deployment configuration
- Add role-based interview templates

## License

This project is for learning and portfolio use unless you choose to add a specific license.
