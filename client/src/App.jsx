import {Route, Routes} from 'react-router-dom';
import {CartProvider} from './Contexts/CartContext';

import Home from './Pages/Home/Home';
import MainLayout from './layout/MainLayout';

import {Suspense} from 'react';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Menu from './Pages/Dashboard/Pages/Menu/Menu';
import Orders from './Pages/Dashboard/Pages/Orders/Orders';
import Ingredients from './Pages/Dashboard/Pages/Ingredients/Ingredients';
import Event from './Pages/Dashboard/Pages/Events/Events';
import Customers from './Pages/Dashboard/Pages/Customers/Customers';
import Staff from './Pages/Dashboard/Pages/Staff/Staff';
import Roles from './Pages/Dashboard/Pages/Roles/Roles';
import Login from './Pages/Login/Login';
import EventRequest from './Pages/EventRequest/EventRequest';

// Promotions
import Promotions
  from './Pages/Dashboard/Pages/Promotions/Promotions/Promotions';
import AddPromo from './Pages/Dashboard/Pages/Promotions/Components/AddPromo';
import EditPromo from './Pages/Dashboard/Pages/Promotions/Components/EditPromo';
import Tables from './Pages/Dashboard/Pages/Tables/Tables';
import Checkout from './Pages/Checkout/Checkout';
import Successful from './Pages/Successful/Successful';

const App = () => {
  return (
    <Suspense fallback={'Loading ...!'}>
      <Routes>
        {/* Main */}
        <Route
          path="/"
          element={
            <CartProvider>
              <MainLayout />
            </CartProvider>
          }
        >
          <Route index element={<Home />} />
          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Successful */}
          <Route path="/successful" element={<Successful />} />
          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* Event Request */}
          <Route path="/event" element={<EventRequest />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="tables" element={<Tables />} />
          <Route path="menu" element={<Menu />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="events" element={<Event />} />
          <Route path="customers" element={<Customers />} />
          <Route path="staff" element={<Staff />} />
          <Route path="roles" element={<Roles />} />
          <Route path="promotions">
            <Route index element={<Promotions />} />
            <Route path="new" element={<AddPromo />} />
            <Route path="edit/:id" element={<EditPromo />} />
          </Route>
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
