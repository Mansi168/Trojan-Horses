import React from 'react';  
 import { useState } from 'react'; 

import './App.css';       

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import DataProvider from './context/DataProvider';

import Home from './pages';
import SigninPage from './pages/signIn';
import Login from './Components/account/Login';

// import Sidebar from './Sidebar';
// import Searchbar from './Components/Searchbar';

// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

const PrivateRoute = ({isAuthenticated, ...props}) => {
  return isAuthenticated ?
    <>
    <Outlet/>
    </>
    : <Navigate replace to = '/login' />
} 

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);


  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          
          {/* <Route exact path="/signIn" element={<SigninPage/>}/> */}
         
          <Route exact path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
          </Route>
    {/* <Sidebar/> */}
    
        </Routes>
      </BrowserRouter>
    </DataProvider>
    {/* <div className='App'>
      <Searchbar placeholder="Search" />
    </div> */}
    </>
  );
}

export default App;