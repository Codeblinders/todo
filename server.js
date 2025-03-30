import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import toDoRoutes from './routes/ToDoRoutes.js';

dotenv.config({ path: './.env' }); 

console.log(process.env.DB_URL); // Debugging: Check if DB_URL is loaded correctly

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/todo', toDoRoutes);

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB Connected Successfully!"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
