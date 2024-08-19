

![Screenshot from 2024-07-18 20-24-31](https://github.com/user-attachments/assets/78cdc50b-38e0-4e83-9574-eb7f1069654a)



# Frontend Deploy Link: https://get-money.vercel.app/

# Frame: https://warpcast.com/~/developers/frames?url=https%3A%2F%2Fget-money-89gq.vercel.app%2Fapi

  

## Introduction 

GetMOney is a revolutionary platform that allows users to monetize their work , resell work, and anyone can share their experiences in a dedicated dashboard. This platform eliminates intermediaries, empowering users to manage their WORK seamlessly.

## Contract Info ->  The  smart contract  is deployed on scroll sepolia



Contract Address: 0x980C3fFb37CD7C92E3CebbE1BB69Bc5E3dCa0419

https://sepolia.scrollscan.com/address/0x980C3fFb37CD7C92E3CebbE1BB69Bc5E3dCa0419


![Screenshot from 2024-07-18 20-28-22](https://github.com/user-attachments/assets/991ff272-a3bd-43e7-8a27-343772d96c6b)


## Subgraph source code : https://github.com/Vikash-8090-Yadav/GetMoney/tree/main/getfarm

## Working Flow !!

- **Monetize Content**: Users can easily monetize their content/ work .

- **Unique Digital Assets**: Each ticket is represented as a unique digital asset called an NFT (non-fungible token), ensuring it has its own digital identity that can't be replicated or divided.

- **Buy and Resell**: Anyone can buy these content/work products from the   owner, and once someone owns an NFT, they can resell it to others.

- **Experience Gather**: Participant can  share  their experience  after the events ends. So that other users can get  the idea  of the user work 


## Graph integeration Fracster  Frames 


![Screenshot from 2024-06-23 05-13-56](https://github.com/Omega12Pirme/Monetizedo/assets/105157723/7f6723f6-dfaa-4657-a33e-d6fb0b5f1857)


### Graph Query 

```
  const query = `
  {
    donations(first: 10, orderBy: id) {
      from
      id
      message
      name
      timestamp
    }
  }
  `;
```

The query code used in the Frame can be found here: https://github.com/Vikash-8090-Yadav/GetMoney/blob/main/Frame/api/index.tsx#L102


## The Graph Integration in Frontend Dapp


I created subgraph for this prroject and query  to make various dashboard like  Marketplace, Dashboard, Experience cebtre

### Here's the Link of the subgraph-> https://thegraph.com/studio/subgraph/getfarm/playground



# Graph query 

###  The code for Montezing the content  is in: https://github.com/Vikash-8090-Yadav/GetMoney/blob/main/Frontend/src/pages/marketplace.js#L33

###  The code for sharing experience can be found here : https://github.com/Vikash-8090-Yadav/GetMoney/blob/main/Frontend/src/components/Memos.jsx#L14

### The code for the History of the txns: https://github.com/Vikash-8090-Yadav/GetMoney/blob/main/Frontend/src/components/AnalysisReposrt.jsx#L14


# Working flow 

## Marketpace 

- Any user can buy the work  of others in the form  of nft 

![Screenshot from 2024-07-18 20-35-35](https://github.com/user-attachments/assets/d736e74d-f78c-48da-bc9a-682d449d1623)



## MOneztize work  

- Any  owner can monetize their work in the form of NFT they will get METT tokens as a reward 

![Screenshot from 2024-07-18 20-36-45](https://github.com/user-attachments/assets/dbf88db6-0010-414d-9ac5-08a84caa62f2)


## Re sell 

- Any user who buys the work  can re sell it to the one who needs it



## Experience share 

- Any member can share their after event experience

![Screenshot from 2024-07-18 20-38-18](https://github.com/user-attachments/assets/41c41652-d53a-424e-94c5-6d57a57ff143)




 

## 🛠️Technologies we used

[![Powered by Filecoin](https://img.shields.io/badge/Powered_by-Filecoin-0174F2?logo=filecoin)](https://filecoin.io/)
[![Powered by Lighthouse](https://img.shields.io/badge/Powered_by-Lighthouse-ff69b4?logo=lighthouse)](https://lighthouse.filecoin.io/)
[![Built with React.js](https://img.shields.io/badge/Built_with-React.js-61DAFB?logo=react)](https://reactjs.org/)
[![Developed in Motoko](https://img.shields.io/badge/Developed_in-Motoko-2196F3?logo=dfinity)](https://sdk.dfinity.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology        | Description                                                | Official Website                                     |
|-------------------|------------------------------------------------------------|------------------------------------------------------|
| React.js          | JavaScript library for building user interfaces, often used for server-rendered or statically-generated applications | [React.js](https://reactjs.org/)                      |
| Tailwind CSS      | Utility-first CSS framework for building custom designs   | [Tailwind CSS](https://tailwindcss.com/)              |
| Solidity | Programming language used for smart contract development on the Ethereum blockchain | https://docs.soliditylang.org/ |
|LightHouse | Store file Secure, Reliable, & Lightning-Fast with Lighthouse. |https://www.lighthouse.storage/|
|ChainLLink | Chainlink is the decentralized computing platform powering the verifiable web| https://chain.link/|
|The Graph| The Graph is a decentralized protocol for indexing and querying blockchain data. The Graph makes it possible to query data that is difficult to query directly.|https://thegraph.com/ | 
|Warpcast| Warpcast is a client for Farcaster, a decentralized social network. It is a paid-for social media platform that allows users to create a profile, post public messages, and connect with others. Unlike traditional social media apps, Warpcast is built on the blockchain, making it open, permissionless, and decentralized. | https://warpcast.com/|




