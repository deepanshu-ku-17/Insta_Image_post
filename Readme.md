# 📸 Insta Post Project

A simple Instagram-style Post Upload application built while learning Backend Development using the MERN stack.

> **Note:** This project was created mainly to practice backend concepts. The UI is kept minimal and was not the primary focus.

---

## 🚀 Features

- Upload an image with a post
- Store post details in MongoDB
- Image upload using ImageKit
- REST API using Express.js
- File upload using Multer
- React frontend with Axios
- MongoDB integration with Mongoose

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit
- dotenv
- CORS

---

## 📁 Project Structure

```
Insta Post Project/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   ├── model/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/insta-post-project.git
```

Go to the project folder

```bash
cd insta-post-project
```

### Install Frontend

```bash
cd Frontend
npm install
```

### Install Backend

```bash
cd ../Backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGODB_URI=your_mongodb_uri

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## ▶️ Run Backend

```bash
cd Backend
node server.js
```

---

## ▶️ Run Frontend

```bash
cd Frontend
npm run dev
```

---

## 📚 What I Learned

- Express.js server setup
- REST API development
- MongoDB & Mongoose
- File upload using Multer
- Image hosting with ImageKit
- Environment variables using dotenv
- Connecting React with Backend using Axios

---

## 🔮 Future Improvements

- Better UI/UX
- Authentication (JWT)
- Like & Comment functionality
- User Profiles
- Responsive Design
- Delete & Update Posts

---

## 👨‍💻 Author

**Deepanshu Kumar**

Learning MERN Stack & Backend Development.