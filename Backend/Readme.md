# Backend

This folder contains the backend of the Insta Post Project.

## Features

- Express.js Server
- MongoDB Integration
- REST API
- Image Upload
- Multer Middleware
- ImageKit Integration
- Environment Variables
- CORS Support

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit
- dotenv
- CORS

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
MONGODB_URI=your_mongodb_uri

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## Run Server

```bash
node server.js
```

or

```bash
npm start
```

---

## API Endpoint

### Create Post

```
POST /create-post
```

---

## Folder Structure

```
Backend
│
├── controllers
├── models
├── routes
├── services
├── middleware
├── server.js
└── package.json
```

---

## What I Learned

- Express Routing
- MongoDB & Mongoose
- Multer Middleware
- Image Upload
- Environment Variables
- Backend Architecture
