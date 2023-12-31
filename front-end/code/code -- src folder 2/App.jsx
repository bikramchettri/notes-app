import { Routes } from './Routes';
import './App.css';
import { NotesProvider } from './providers/NotesProvider';

export const App = () => {
  return (
    <NotesProvider>
      <Routes />
    </NotesProvider>
  );
};
