import React from 'react';  
import './App.css';       
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signIn';
// import Sidebar from './Sidebar';
// import Searchbar from './Components/Searchbar';

// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signIn" element={<SigninPage/>}/>
  {/* <Sidebar/> */}
  
      </Routes>
    </BrowserRouter>
    {/* <div className='App'>
      <Searchbar placeholder="Search" />
    </div> */}
    </>
  );
}

export default App;