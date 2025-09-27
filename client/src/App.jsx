import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainLayout from './layout/MainLayout';
import {Suspense} from 'react';

const App = () => {
  return (
    <Suspense fallback={'Loading ...!'}>
      <Routes element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
