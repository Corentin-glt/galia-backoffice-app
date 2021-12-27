import { Route, Routes } from 'react-router-dom';

import NavBar from '../Components/NavBar';
import WinesView from './WinesView';
import WineView from './WineView';
import WineyardsView from './WineyardsView';

function AdminGalia() {
  return (
    <div className="h-full p-8 pb-0 space-y-8 flex flex-col justify-start content-center">
      <div className="flex-4 bg-white p-4 rounded-md flex flex-nowrap justify-start space-x-20">
        <NavBar />
      </div>
      <div className="flex-1">
        <Routes>
          <Route index element={<WinesView />} />
          <Route path="wines" element={<WinesView />} />
          <Route path="wines/:wineId" element={<WineView />} />
          <Route path="wineyards" element={<WineyardsView />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminGalia;
