import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const port = 8080;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   client
//     .search({
//       location: '90026',
//       // offset: '0',
//       limit: '5',
//     })
//     .then((response) => {
//       console.log(JSON.stringify(response.jsonBody));
//       res.send(response.jsonBody.businesses);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });
app.use('/api', userRoutes);
app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`));
