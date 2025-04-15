---

```markdown
# 📝 Todo App

A simple and intuitive **To-Do List** application built with **React** for the frontend and **Node.js + Express** for the backend. Designed to help users manage their daily tasks efficiently with features like add, edit, delete, and mark tasks as completed.

## 🚀 Features

- Add new tasks with ease
- Edit existing tasks
- Delete tasks you no longer need
- Mark tasks as complete/incomplete
- Clean and responsive UI built with React
- RESTful API using Express.js and Node.js
- MongoDB for persistent task storage

## 🛠️ Tech Stack

### Frontend
- React
- Axios
- Bootstrap (or custom CSS)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

## 📦 Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or yarn
- MongoDB (running locally or accessible via URI)

### Clone the repository
```bash
git clone https://github.com/Codeblinders/todo.git
cd todo
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

### Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm start
```

Frontend will start on `http://localhost:3000`

## 📂 Project Structure

```
todo/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   └── ...
```

## ✨ Screenshots

<!-- Add screenshots here if available -->
<!-- ![Todo App Screenshot](link_to_image) -->

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request
