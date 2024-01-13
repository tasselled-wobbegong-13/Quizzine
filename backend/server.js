import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const port = 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`));
