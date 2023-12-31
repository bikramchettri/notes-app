import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { NavBar } from './components/NavBar';

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:noteId" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/notes" replace />,
//   },
//   {
//     path: '/notes',
//     element: <NotesPage />,
//   },
//   {
//     path: '/notes/:noteId',
//     element: <NoteDetailPage />,
//   },
//   {
//     path: '*',
//     element: <NotFoundPage />,
//   },
// ]);

// export const Routes = () => {
//   return <RouterProvider router={router} />;
// };
