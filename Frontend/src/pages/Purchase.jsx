import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { marketplaceAddress } from '../config';
import { notification } from 'antd';
import NoNftScreen from '../NoNftScreen';
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import { useNavigate, useLocation } from 'react-router-dom';



export default function MyCrops() {
  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');
 

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          tokenURI,
          cid1:meta.data.cid1,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState('loaded');
  }

  function listNFT(nft) {
    console.log('nft:', nft);
    navigate(`/ResellCrops?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
    // router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
  }

  if (loadingState === 'loaded' && !nfts.length)
    return <h1 className="py-10 px-20  text-white text-3xl">No Items owned</h1>;

  return (
    <div className="flex justify-center">
      
      <div className="p-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden bg-white">
              <img src={nft.image} className="rounded" />
              <div className="p-4">
                <p className="text-2xl text-gray-700 font-bold">Price - {nft.price} ETH</p>
                
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => listNFT(nft)}
                >
                  List
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}