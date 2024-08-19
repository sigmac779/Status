import React, { useEffect, useState } from 'react';

import CreateNFT from './pages/CreateNFT';
import Market from './pages/Market';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './BaseRouter.css'

import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import NoNftScreen from './NoNftScreen';
import { Link } from 'react-router-dom';


import { ethers } from 'ethers'

import CreateItem from './pages/CreateNFT';



import { notification } from 'antd';


import {
  marketplaceAddress
} from './config'

import NFTMarketplace from './artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'





export default function BaseRouter({children}) {

  useEffect(() => {
 
  }, [])

  
  return (
    <>
      <div className="cnt">
    {children}
    </div>
    </>
  );
    
}

