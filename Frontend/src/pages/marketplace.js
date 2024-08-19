import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'


import { createClient } from "urql";
import { notification } from 'antd';
import { CovalentClient } from "@covalenthq/client-sdk";

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'




export default function Home() {
  const [nftTransactions, setNftTransactions] = useState([]);
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [isLoading, setIsLoading] = useState(true); 
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    // loadNFTs()
  }, [])


  const QueryURL = "https://api.studio.thegraph.com/query/67475/getfarm/v0.0.1";

  let query = `
    {
      tokenItems {
      tokenURI
      price
      newTokenId
      transactionHash
      }
    }
  `;

  const client = createClient({
    url: QueryURL
  });

  useEffect(() => {
    const fetchNftTransactions = async () => {
      const covalentClient = new CovalentClient("cqt_rQVXFd7kyYchKkkxcTjQPh9jPXBg");
      let transactions = [];
      
      for (let tokenId = 0; tokenId <= 2; tokenId++) {
        const resp = await covalentClient.NftService.getNftTransactionsForContractTokenId("scroll-sepolia-testnet", "0xc466d29DC75A85173086055212677e9b416201B0", tokenId);
        transactions.push(resp);
      }

      setNftTransactions(transactions);
    };
    
    if (!client) {
      return;
    }

    const getTokens = async () => {  
      
      try {
        const { data } = await client.query(query).toPromise();
        setTokens(data.tokenItems);
        // console.log(data.tokenItems);
        setIsLoading(false); // Data is loaded
        await loadNFTs();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTokens();
    // fetchNftTransactions();
  }, [client]);


  // Covalent implementation for getting latest txn 



  async function test(){
  
// below  one is for
const client = new CovalentClient("cqt_rQVXFd7kyYchKkkxcTjQPh9jPXBg");
    try {
        for await (const resp of client.BaseService.getLogEventsByAddress("scroll-sepolia-testnet","0x2f9Eb56e3B8E7208d5562feB95d1Bc5EF432F232", {"startingBlock": 4070564 })) {
            console.log(resp);
        }
    } catch (error) {
        console.log(error.message);
    }

    //  Beloe one is for  getting the txn

alert("Hey doing the txn")

    // const client = new CovalentClient("cqt_rQVXFd7kyYchKkkxcTjQPh9jPXBg");
    // const resp = await client.TransactionService.getTransactionSummary("scroll-sepolia-testnet","0x2f9Eb56e3B8E7208d5562feB95d1Bc5EF432F232");
    // console.log(resp.data.items[0].latest_transaction.tx_hash);


  }

  async function loadNFTs() {
    // await test();
    
    try {

      const items = await Promise.all(tokens.map(async token => {
        // alert("try")
        const meta = await axios.get(token.tokenURI);
        console.log("The i item is".meta);
        const price = await token.price / 10 ** 18;
        const tokenId = await token.newTokenId;
        // alert("inside try")
        return {
          price,
          tokenId,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
      }));
      
      setNfts(items);
      setLoadingState('loaded');
    } catch (error) {
      console.error("Error loading NFTs:", error);
      setLoadingState('error');
    }
  }

  async function buyNft(nft) {


    console.log("The nft is",nft.tokenId);
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

    // /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    
    alert(nft.newTokenId)
    const newTokenIdAsNumber = parseInt(nft.tokenId, 10);
    const transaction = await contract.createMarketSale(newTokenIdAsNumber, {
      value: price
    })
    await transaction.wait()
    alert('Successfully  Purchased, Now wait for the txn to be added');
    
    const client = new CovalentClient("cqt_rQVXFd7kyYchKkkxcTjQPh9jPXBg");
    const resp = await client.TransactionService.getTransactionSummary("scroll-sepolia-testnet","0xc466d29DC75A85173086055212677e9b416201B0");
    var lastin = resp.data.items.length - 1;
    console.log("The  data is",lastin);
    const txn = resp.data.items[0].latest_transaction.tx_hash;

    let addData = await contract.updateData("BUY",txn);

    await addData.wait();

    alert('Successfully Added txn');
    await loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-white text-3xl">No Item in marketplace</h1>)
  return (
    <div className="flex mrkt  justify-center">
      {/* <Navbar/> */}
      <div className="px-10" style={{ maxWidth: '1600px' }}>
        <div className="grid flex  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 unmrk">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border rounded-t-md  umrkt shadow rounded-xl overflow-hidden">
                <img   height="25px"  className = " w-full rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" src={nft.image} />
                <div className="p-1">
                  <p style={{ height: '100%' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                 
                </div>
                
                <div className="p-1  umrk bg-black">
                  <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                  <button className=" hover:rotate-2 delay-100 transition ease-in-out   text-center border hover:bg-gray-100 hover:shadow-md border-gray-500 rounded-md mt-4 w-full bg-green-500 text-cyan font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
                
              </div>
            ))
          }
        </div>
        
      </div>
      
    </div>
  )
}