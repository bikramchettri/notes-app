import { XButton } from './XButton';

const getWordCount = (str) => {
  if (!str) return 0;
  return str.split(' ').length;
};

export const NotesList = ({ notes, onRequestDelete, onClickItem }) => {
  return (
    <>
      {notes.map((note) => (
        <div
          className="notes-list-item"
          onClick={() => onClickItem(note.id)}
          key={note.id}
        >
          <div style={{ flex: 1 }}>
            <h3>{note.title}</h3>
            <p>{getWordCount(note.content)} word(s)</p>
          </div>
          <XButton
            onClick={(e) => {
              e.stopPropagation();
              onRequestDelete(note.id);
            }}
          />
          {/* <div className="evenly-spaced" style={{ paddingBottom: '8px' }}> */}
          {/* <button onClick={() => onRequestDelete(note.id)}>Delete</button> */}
          {/* <Link to={`/notes/${note.id}`}>
            <button className="full-width">View</button>
          </Link> */}
          {/* </div> */}
        </div>
      ))}
    </>
  );
};
