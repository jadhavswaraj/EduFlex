# EduFlex

**EduFlex** is a comprehensive educational technology (ed-tech) platform designed to revolutionize the way users interact with educational content. Built with the MERN stack—ReactJS, NodeJS, MongoDB, and ExpressJS—EduFlex aims to offer a seamless, interactive learning experience for students and a robust platform for instructors to share their expertise globally.

## Table of Contents

- [Project Overview](#project-overview)
- [System Architecture](#system-architecture)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [API Design](#api-design)
- [Deployment](#deployment)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)

## Project Overview 🎓

EduFlex is crafted to enhance educational accessibility and engagement through a dynamic and user-friendly platform. It serves:

- **Students**: Access to a diverse range of courses, interactive content, and personalized learning experiences. 📚
- **Instructors**: A venue to create, manage, and showcase courses, and connect with learners globally. 🧑‍🏫

## System Architecture 🏗️

EduFlex follows a client-server architecture, encompassing three main components:

1. **Front-end**: The user-facing part of the platform. 🖥️
2. **Back-end**: The server-side logic and API services. 🌐
3. **Database**: The data storage solution. 💾

## Front-end 🎨

The front end of EduFlex is built using **ReactJS**, which facilitates the development of dynamic and responsive interfaces. It communicates with the back end through **RESTful APIs**.

### Pages and Features

**For Students:**

- **Homepage**: Introduction to EduFlex with links to courses and user details. 🏠
- **Course List**: Browse available courses with descriptions and ratings. 📖
- **Wishlist**: View and manage courses added to the wishlist. ❤️
- **Cart Checkout**: Complete course purchases and enrollments. 🛒
- **Course Content**: Access course materials, including videos and documents. 🎥
- **User Details**: View and edit account information. 🛠️

**For Instructors:**

- **Dashboard**: Overview of courses, ratings, and feedback. 📊
- **Insights**: Detailed metrics on course performance. 📈
- **Course Management**: Create, update, delete, and manage courses. 📝
- **Profile Management**: View and edit instructor details. 🧑‍🏫

**For Admin (Future Scope):**

- **Dashboard**: Overview of courses, instructors, and students. 📋
- **Insights**: Metrics on platform performance. 📊
- **Instructor Management**: Manage instructor accounts and courses. 🔧
- **User Management**: Handle user accounts and content. 🛠️

**Technologies Used:**

- **ReactJS** for building the UI. ⚛️
- **Tailwind CSS** for styling. 🎨
- **Redux** for state management. 🔄

## Back-end ⚙️

EduFlex's back end is developed using **NodeJS** and **ExpressJS**, providing a scalable and efficient server-side solution.

### Features and Functionalities

- **User Authentication**: Secure login, signup, OTP verification, and password recovery. 🔐
- **Course Management**: CRUD operations for courses, content management, and media handling. 📚
- **Payment Integration**: Course purchases through **Razorpay**. 💳
- **Cloud-Based Media Management**: Media storage via **Cloudinary**. ☁️
- **Markdown Formatting**: Support for Markdown in course content. ✍️

**Technologies Used:**

- **Node.js** for server-side development. 🖥️
- **Express.js** for routing and middleware. 🚦
- **MongoDB** for flexible data storage. 🗄️
- **JWT** for authentication. 🛡️
- **Bcrypt** for password hashing. 🔒
- **Mongoose** for database interactions. 🐍

### Data Models and Database Schema

- **Student Schema**: Contains user details and course information. 🧑‍🎓
- **Instructor Schema**: Includes instructor details and course management data. 🧑‍🏫
- **Course Schema**: Stores course details, media, and ratings. 📖

## API Design 🔧

EduFlex uses **RESTful** principles for API design, enabling smooth interaction between the front end and back end.

### API Endpoints

- **POST /api/auth/signup**: Register a new user (student or instructor). ✉️
- **POST /api/auth/login**: Authenticate users and provide JWT tokens. 🔑
- **POST /api/auth/verify-otp**: Verify OTP for user accounts. 📩
- **POST /api/auth/forgot-password**: Request a password reset. 🔄
- **GET /api/courses**: Retrieve a list of all courses. 📚
- **GET /api/courses/:id**: Fetch details of a specific course. 📜
- **POST /api/courses**: Create a new course. 🆕
- **PUT /api/courses/:id**: Update course details. 🔄
- **DELETE /api/courses/:id**: Remove a course from the platform. ❌
- **POST /api/courses/:id/rate**: Add a rating to a course. ⭐

### Sample API Requests and Responses

**GET /api/courses**

- **Response**: List of all courses. 📋

**GET /api/courses/:id**

- **Response**: Details of a specific course. 📜

**POST /api/courses**

- **Request**: Course details in the request body. 📝
- **Response**: Newly created course. 🎉

**PUT /api/courses/:id**

- **Request**: Updated course details. 🔄
- **Response**: Updated course. ✨

**DELETE /api/courses/:id**

- **Response**: Success message confirming course deletion. ✅
