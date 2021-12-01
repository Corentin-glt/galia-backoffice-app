import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminGaliaView from './Views/AdminGaliaView';

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <Router>
        <Routes>
          <Route path="*" element={<AdminGaliaView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
