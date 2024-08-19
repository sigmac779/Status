
import '../styles/Sidebar.css'
// import { InlineIcon } from '@iconify/react';
// import ethereumIcon from '@iconify-icons/mdi/ethereum';
// import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
// import { getPriceFeed } from '../services/priceFeed';
import { Link } from 'react-router-dom';
function Sidebar({children}) {
    const navigate = useNavigate();

    const [latestPrice, setLatestPrice] = useState(0);

    useEffect(async () => {

    }, [])

    return (
        <div className='sidebar'>
           <div className="sidebar__logo flex items-center justify-center py-4">
        <h2 className="text-xlg font-bold text-white">GetMOney</h2>
      </div>
      <div className="sidebar__options">
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/')}>Marketplace</h3>
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/create-nft')}>Create NFT</h3>
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/purchase')}>My Purchase</h3>
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/dashboard')}>My Crops</h3>
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/comment')}>Report</h3>
        <h3 className="text-lg text-white cursor-pointer my-2 hover:text-gray-300" onClick={() => navigate('/Analysis')}>Dashboard</h3>
      </div>

            {/* <div className="sidebar__priceFeed">
                <span>Price feed - Powered by <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="" /></span> 
                <span>MATIC/USD - {latestPrice.toFixed(3)} $</span>
            </div> */}

            

            {/* <button className="show-portis" onClick={showPortis}>Show Account <img src="https://docs.portis.io/_media/logo_bw.svg" alt="powered by portis" /></button> */}
           
        </div>
    )
}

export default Sidebar
