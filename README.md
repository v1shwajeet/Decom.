# AI Resume Analyzer

AI Resume Analyzer is a web application designed to help users analyze and improve their resumes using AI-powered feedback. The application evaluates resumes based on ATS (Applicant Tracking System) compatibility, tone and style, content, structure, and skills, providing actionable tips for improvement.

## Features

- **Resume Upload**: Upload resumes in PDF format for analysis.
- **AI-Powered Feedback**: Get detailed feedback on various aspects of your resume, including ATS compatibility, tone, content, structure, and skills.
- **Score Breakdown**: View scores and tips for each category to understand areas of improvement.
- **Job-Specific Analysis**: Tailor feedback based on the job title and description provided.
- **Interactive UI**: A user-friendly interface built with React and TailwindCSS.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Node.js, Vite
- **AI Integration**: OpenAI API
- **File Handling**: AWS S3 for file storage
- **Build Tool**: Vite
- **Other Tools**: Docker, React Router

## Project Structure

Workspace
(rerun without)
Collecting workspace information

Filtering to most relevant information

. ├── app/ # Main application code │ ├── components/ # Reusable UI components │ ├── routes/ # Application routes │ ├── lib/ # Utility functions │ ├── app.css # Global styles │ └── root.tsx # Root component ├── constants/ # Application constants ├── public/ # Static assets ├── types/ # TypeScript type definitions ├── vite.config.ts # Vite configuration ├── Dockerfile # Docker configuration ├── .env # Environment variables └── README.md # Project documentation


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-resume-analyzer.git
   cd ai-resume-analyzer

2. Install dependencies: npm install

3. Set up environment variables: Create a .env file in the root directory and add the following variables:
DATABASE_URL=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
JWT_SECRET=
OPENAI_API_KEY=
PORT=3000

4. Start the development server:

Open the application in your browser at http://localhost:3000.

Deployment
To deploy the application, you can use Docker:

Build the Docker image: 
docker build -t ai-resume-analyzer .

Run the Docker container:
docker run -p 3000:3000 --env-file .env ai-resume-analyzer

License
This project uses the Apache License 2.0.

Acknowledgments
React Router for routing.
TailwindCSS for styling.
OpenAI for AI-powered resume analysis.
PDF.js for PDF rendering.
Contact
For any inquiries, feel free to reach out via email at vishwajeetgehlot@gmail.com. ```