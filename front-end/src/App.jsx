import { AppRoutes } from './AppRoutes';
import './App.css';
import { NotesProvider } from './providers/NotesProvider';

export const App = () => {
  return (
    <NotesProvider>
      <AppRoutes />
    </NotesProvider>
  );
};
