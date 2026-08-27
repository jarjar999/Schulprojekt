import express from 'express';
import cors from 'cors';
import { getStudents } from './controllers/studentController';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// API-Endpunkt
app.get('/api/students', getStudents);

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});