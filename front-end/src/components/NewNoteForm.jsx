import { useState } from 'react';

export const NewNoteForm = ({ onSubmit = () => {} }) => {
  const [title, setTitle] = useState('');
  return (
    <>
      <h3>Add a New Note</h3>
      <input
        className="full-width space-below"
        placeholder="Enter a new title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="full-width" onClick={() => onSubmit(title)}>
        Create
      </button>
    </>
  );
};
