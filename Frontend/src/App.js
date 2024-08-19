import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseRouter from "./routes";

import MainLayout from "./pages/MainLayout";
import './App.css'
import CreateItem from "./pages/CreateNFT";
import Home from "./pages/marketplace";


import MyCrops from "./pages/Purchase";
import CreatorDashboard from "./pages/dashboard";
import ResellNFT from "./pages/ResellCrops";
import Review from "./pages/comment";

import Analysis from "./pages/Analysis";
function App({children}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   onLogin();
  //   checkLoggedIn();
  // }, []);
  



  return (
    <div className='App'>
      <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/create-nft" element={<CreateItem />} />
          <Route path="/Purchase" element={<MyCrops />} />
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/RsellCrops" element={<ResellNFT />} />
          <Route path="/comment" element={<Review />} />
          <Route path="/Analysis" element={<Analysis />} />
          
        </Routes>
      </MainLayout>
    </BrowserRouter>


    </div>
  );
}

export default App;

