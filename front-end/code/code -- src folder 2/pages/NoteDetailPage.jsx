import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../contexts/NotesContext';
import { NoteNotFoundPage } from './NoteNotFoundPage';

export const NoteDetailPage = () => {
  const { notes, updateNote } = useContext(NotesContext);

  const { noteId } = useParams();
  const note = notes.find((n) => n.id === noteId);

  const [isEditing, setIsEditing] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState((note && note.title) || '');
  const [updatedContent, setUpdatedContent] = useState(
    (note && note.content) || ''
  );

  const saveChanges = () => {
    updateNote(noteId, { title: updatedTitle, content: updatedContent });
    setIsEditing(false);
  };

  if (!note) {
    return <NoteNotFoundPage />;
  }

  if (isEditing) {
    return (
      <>
        <input
          placeholder="Enter a title"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
          placeholder="Type your note"
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
        <button onClick={saveChanges}>Save Changes</button>
        <button
          onClick={() => {
            setUpdatedTitle(note.title);
            setUpdatedContent(note.content);
            setIsEditing(false);
          }}
        >
          Cancel
        </button>
      </>
    );
  }
  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
};
