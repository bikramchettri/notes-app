import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

const fakeNotes = [
  {
    id: '123',
    title: 'My First Note',
    content: '*Hello my dear friends*',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/notes" replace />,
  },
  {
    path: '/notes',
    element: <NotesPage notes={fakeNotes} />,
  },
  {
    path: '/notes/:noteId',
    element: <NoteDetailPage notes={fakeNotes} />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
