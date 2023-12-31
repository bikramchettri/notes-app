import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { NotesContext } from '../contexts/NotesContext';

const fakeNotes = [
  {
    id: '123',
    title: 'My First Note',
    content: '*Hello my dear friends*',
  },
];

export const NotesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  axios.defaults.baseURL = `http://localhost:8080`;

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await axios.get('/notes');
        setNotes(response.data);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    loadNotes();
  }, []);

  const createNote = async (title) => {
    try {
      const response = await axios.post('/notes', {
        title,
      });
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = (id, { title, content }) => {
    setNotes(
      notes.map((note) => (note.id === id ? { id, title, content } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider
      value={{ notes, isLoading, createNote, updateNote, deleteNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
