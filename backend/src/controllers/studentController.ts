import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '../data/students.json');

export const getStudents = (req: Request, res: Response) => {
  try {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const students = JSON.parse(jsonData);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Laden der Schülerdaten', error });
  }
};