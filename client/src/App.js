import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
   <Provider store={store}>
    
    <BrowserRouter>
     <div className='App'>
      <Navbar/>
    
    <Routes>
    
      
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
    
    </Routes>
    </div>
    </BrowserRouter>
   </Provider>
    
    
   
  )
}

export default App
