import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleAuth from './pages/GoogleAuth';
import CallbackGoogle from './pages/CallbackGoogle';
import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
      //route without navbar
          <Route path='/auth/google' element={<GoogleAuth />} />
          <Route path='/callbackGoogle' element={<CallbackGoogle />} />

      //route with navbar
          <Route index path='/' element={<Home />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
