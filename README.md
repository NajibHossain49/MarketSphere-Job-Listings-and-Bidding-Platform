# Full-Stack Online Marketplace

A web app for posting jobs, bidding on projects, and managing profiles, providing a seamless experience for job seekers and employers.

## Project Overview

This project is a full-stack web application built to create an online marketplace where users can post job listings, place bids on jobs, and manage their submissions and offers. It integrates both frontend and backend technologies to offer a smooth user experience with real-time interactions.

## Live Demo
You can access the live demo of the project here:  
[Live Demo](https://marketsphere-2d9c0.web.app)

## Purpose

The purpose of this project is to provide a working model of an online job marketplace where users can:
- Post job listings.
- Bid on available jobs.
- Track their posted jobs and bids.
- Manage profiles and job offers.

This project serves as a learning platform to implement various full-stack development techniques including database interaction, form handling, and user authentication.

## Key Features

- **Login & Registration:** Users can register and log in with email/password or Google authentication.
- **Home Page with Categories:** A carousel banner and job categories (e.g., Web Development, Digital Marketing, Graphic Design) for easy job browsing.
- **Job Details & Bidding:** Users can place bids on jobs after reviewing the job details.
- **Job Management:** Employers can add, update, or delete their posted jobs.
- **My Bids:** Users can track their bids and job statuses.
- **Bid Requests:** Employers can view and manage bids for their posted jobs.
- **Private Routes:** Some pages are protected and require users to be logged in.
- **404 Page:** A custom 404 error page for invalid routes.

## Technologies & Concepts Used

- **Frontend:**  
  - React
  - Tailwind CSS
  - React-Router
  - React-Tabs
  - React Toastify

- **Backend:**  
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Firebase for Google Authentication

- **Other Technologies:**  
  - MongoDB for database management
  - Environment Variables for secure key management

## Frontend Concepts

- **Responsive Design:** The app is fully responsive, ensuring a seamless experience on all devices.
- **UI/UX Design:** Focused on creating a visually appealing and intuitive user interface, with user-friendly forms and layouts.
- **State Management:** React state is used to manage the app's dynamic content, such as job listings and user data.
- **Tabs for Job Categories:** The use of `React-Tabs` to implement a tab-based system for browsing job categories.
- **Toast Notifications:** Notifications for actions like job addition, bidding, and updates using React Toastify.

## Backend Concepts

- **REST API:** A RESTful API built using Express.js to handle CRUD operations for jobs, bids, and user data.
- **MongoDB Database:** All job and bid data is stored in MongoDB with schema validation.
- **Authentication:** JWT-based authentication for secure user login and registration.
- **Google Sign-In:** Firebase integration for enabling Google-based authentication.
- **Private Routes:** Certain pages are accessible only by authenticated users, enforced with custom route protection.

## 🧑‍💻 Author

Developed with ❤️ by **Najib Hossain**  
[GitHub](https://github.com/NajibHossain49) | [LinkedIn](www.linkedin.com/in/md-najib-hossain)

## 🌟 Show Your Support

If you like this project, please ⭐ the repository and share it with others!
