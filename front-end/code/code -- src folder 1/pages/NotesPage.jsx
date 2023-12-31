
import { NotesList } from '../components/NotesList';

export const NotesPage = ({ notes }) => {
  return (
    <>
      <h1>My Notes</h1>
      <NotesList notes={notes} />
    </>
  );
};
