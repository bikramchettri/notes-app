import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/notes" replace />,
  },
  {
    path: '/notes',
    element: <NotesPage />,
  },
  {
    path: '/notes/:noteId',
    element: <NoteDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
