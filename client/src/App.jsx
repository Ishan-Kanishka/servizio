import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainLayout from './layout/MainLayout';

import {Suspense} from 'react';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Menu from './Pages/Dashboard/Menu/Menu';
import Orders from './Pages/Dashboard/Orders/Orders';
import Ingredients from './Pages/Dashboard/Ingredients/Ingredients';
import Event from './Pages/Dashboard/Events/Events';
import Customers from './Pages/Dashboard/Customers/Customers';
import Staff from './Pages/Dashboard/Staff/Staff';
import Roles from './Pages/Dashboard/Roles/Roles';

const App = () => {
  return (
    <Suspense fallback={'Loading ...!'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menu" element={<Menu />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="events" element={<Event />} />
          <Route path="customers" element={<Customers />} />
          <Route path="staff" element={<Staff />} />
          <Route path="roles" element={<Roles />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-screen">
                <h2 className="text-4xl font-bold">Not Found</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
