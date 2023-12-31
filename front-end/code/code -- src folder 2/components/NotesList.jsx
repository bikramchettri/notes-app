import { Link } from 'react-router-dom';

const getWordCount = (str) => {
  if (!str) return 0;
  return str.split(' ').length;
};

export const NotesList = ({ notes, onRequestDelete }) => {
  return (
    <>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{getWordCount(note.content)} word(s)</p>
          <button onClick={() => onRequestDelete(note.id)}>Delete</button>
          <Link to={`/notes/${note.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </>
  );
};
