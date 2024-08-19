// import React from 'react'
// import Card from '../components/Card'
// import  '../styles/Market.css'

// function Market({nfts}) {
//     return (
//         <div className='market'> 
//                 {nfts && nfts.map((nft) => (
//                     <Card
//                     key={nft.tokenID}
//                     tokenID={nft.tokenID}
//                     name={nft.name}
//                     description={nft.description}
//                     src={nft.image}
//                     price={nft.price}
//                     />
//                 ))
//                 }
//         </div>
//     )
// }

// export default Market



import Home from "./marketplace";




const style = {
  wrapper: `relative `,
  container: ` mx-auto p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`,
  button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text-[#282b2f] font-semibold mt-4`,
  cardsize: `px-6 py-1`,
  bigFont: `text-[#D37506]-700 font-bold text-xl mb-2`,
  smallFont: `text-gray-700 text-base`,
  bigButton: `text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`,
};

function Market() {
  return (
    <div className="mrkt">
      {/* <Navbar/> */}

      <div className="mrkt `{style.wrapper}`">
   
        <nav className={`${style.container} border-b p-10`}>
       
          <p className="text-5xl py-12 text-white font-medium">Marketplace Hub</p>
          <Home/>
        </nav>
      </div>
    </div>
  );
}

export default Market;