import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../contexts/NotesContext';
import { NoteNotFoundPage } from './NoteNotFoundPage';
import ReactMarkdown from 'react-markdown';

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
          className="full-width space-below"
          placeholder="Enter a title"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
          className="full-width space-below"
          placeholder="Type your note"
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
        <div className="evenly-spaced">
          <button
            className="full-width space-below"
            onClick={() => {
              setUpdatedTitle(note.title);
              setUpdatedContent(note.content);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
          <button className="full-width space-below" onClick={saveChanges}>
            Save Changes
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>{note.title}</h1>
      {note.content ? (
        <ReactMarkdown>{note.content}</ReactMarkdown>
      ) : (
        <p className="weak">This note currently has no content.</p>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
};
