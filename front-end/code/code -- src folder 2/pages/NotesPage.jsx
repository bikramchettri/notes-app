import { useContext, useState } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import { NotesList } from '../components/NotesList';
import { Modal } from '../components/Modal';
import { NewNoteForm } from '../components/NewNoteForm';
import { ConfirmDeleteNoteForm } from '../components/ConfirmDeleteNoteForm';

export const NotesPage = () => {
  const { notes, createNote, deleteNote } = useContext(NotesContext);

  const [newNoteModalIsOpen, setNewNoteModalIsOpen] = useState(false);
  const [currentlyDeletingNoteId, setCurrentlyDeletingNoteId] = useState('');

  return (
    <>
      <Modal
        isOpen={newNoteModalIsOpen}
        onRequestClose={() => setNewNoteModalIsOpen(false)}
      >
        <h1>Create Note</h1>
        <NewNoteForm
          onSubmit={(title) => {
            createNote(title);
            setNewNoteModalIsOpen(false);
          }}
        />
      </Modal>

      <Modal
        isOpen={!!currentlyDeletingNoteId}
        onRequestClose={() => setCurrentlyDeletingNoteId()}
      >
        <ConfirmDeleteNoteForm
          onConfirm={() => {
            deleteNote(currentlyDeletingNoteId);
            setCurrentlyDeletingNoteId('');
          }}
          onDeny={() => {
            setCurrentlyDeletingNoteId('');
          }}
        />
      </Modal>

      <h1>My Notes</h1>
      <NotesList
        notes={notes}
        onRequestDelete={(id) => setCurrentlyDeletingNoteId(id)}
      />
      <button onClick={() => setNewNoteModalIsOpen(true)}>
        + Add a New Note
      </button>
    </>
  );
};
