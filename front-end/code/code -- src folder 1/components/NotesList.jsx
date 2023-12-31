import { Link } from 'react-router-dom';

const getWordCount = (str) => {
  console.log(str);
  if (!str) return 0;
  return str.split(' ').length;
};

export const NotesList = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{getWordCount(note.content)} word(s)</p>
          <Link to={`/notes/${note.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </>
  );
};
