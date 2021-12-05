import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Spinner from './Components/Spinner';

const AdminGaliaView = lazy(() => import('./Views/AdminGaliaView'));

function App() {
  return (
    <div className="min-h-screen bg-gray-200 pb-4">
      <Router>
        <Suspense fallback={<Spinner text="Loading components..." />}>
          <Routes>
            <Route path="*" element={<AdminGaliaView />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
