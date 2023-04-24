import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import ToDo from './page/ToDo';
import Home from './page/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='todo' element={<ToDo />} />
    </Routes>
  );
}

export default App;
