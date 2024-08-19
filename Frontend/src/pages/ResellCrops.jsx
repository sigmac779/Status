import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { marketplaceAddress } from '../config';
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

import { CovalentClient } from "@covalenthq/client-sdk";
export default function ResellNFT() {
  const [formInput, updateFormInput] = useState({ price: '', image: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const { id, tokenURI } = new URLSearchParams(location.search); // Extracting query parameters

  useEffect(() => {
    fetchNFT();
  }, [id]);

  async function fetchNFT() {
    if (!tokenURI) return;
    const meta = await axios.get(tokenURI);
    updateFormInput(state => ({ ...state, image: meta.data.image }));
  }

  async function listNFTForSale() {
    if (!formInput.price) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(formInput.price, 'ether');
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    const transaction = await contract.resellToken(id, priceFormatted, { value: listingPrice });
    await transaction.wait();

    alert('Successfully created NFT, Now wait for the covalent txn to be added');
    
    const client = new CovalentClient("cqt_rQVXFd7kyYchKkkxcTjQPh9jPXBg");
    const resp = await client.TransactionService.getTransactionSummary("scroll-sepolia-testnet","0x2f9Eb56e3B8E7208d5562feB95d1Bc5EF432F232");
    const txn = resp.data.items[0].latest_transaction.tx_hash;

    let addData = await contract.updateData("RE SELL",txn);

    await addData.wait();

    alert('Successfully Added txn');

    navigate('/marketplace');
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          value={formInput.price}
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        {formInput.image && (
          <img className="rounded mt-4" width="350" src={formInput.image} alt="NFT" />
        )}
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          List NFT
        </button>
      </div>
    </div>
  );
}
