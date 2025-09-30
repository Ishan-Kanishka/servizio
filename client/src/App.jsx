import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainLayout from './layout/MainLayout';

import {Suspense} from 'react';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Suspense fallback={'Loading ...!'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<div>Order</div>} />
          <Route path="menu" element={<div>Menu</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
