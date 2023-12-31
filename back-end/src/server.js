import express from 'express';
import { v4 as uuid } from 'uuid';
import { corsConfig } from './config/cors';

const app = express();
app.use(express.json());

app.use(corsConfig());

let notes = [
  {
    id: '123',
    title: 'My First Note',
    content: '*Hello my dear friends*',
  },
];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { title } = req.body;

  notes.push({ id: uuid(), title, content: '' });

  res.json(notes);
});

app.put('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  const { title, content } = req.body;

  notes = notes.map((note) =>
    note.id === noteId ? { id: noteId, title, content } : note
  );

  res.json(notes);
});

app.delete('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;

  notes = notes.filter((note) => note.id !== noteId);

  res.json(notes);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080!');
});
