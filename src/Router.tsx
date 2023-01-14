import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'screens/Home';
import { Detail } from 'screens/Detail';

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
});
