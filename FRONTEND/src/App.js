import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import {store} from './store';
import { Provider } from 'react-redux'; 
import ListEmployee from './pages/ListEmplyee';

function App() {
  return (
<Provider store={store}>
    <Router>
      
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add_employee' element={<AddEmployee/>}/>
        <Route path='/list_employee' element={<ListEmployee/>}/>
        <Route path='/*' element={<Navigate replace to='/home' />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
