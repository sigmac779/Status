import { ethers } from "ethers";


import lighthouse from '@lighthouse-web3/sdk'
import axios from 'axios';


import { Modal, Input, Tooltip } from 'antd'
import { notification } from 'antd';
const apiKey = "b3b18111.271ba6addd39409a80ac3fee4d78070c" 


let walletprovider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const {ethereum} =window;
    walletprovider = new  ethers.providers.Web3Provider(
      ethereum
    )
} else {
  
}





const Buy = ({ state }) => {

  const buyChai = async (event) => {
    
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    console.log(name, message, contract);
  ;

    const amount = { value: ethers.utils.parseEther("0.001") };

    const data = JSON.stringify({
      name,
    message,
    amount
    });

    const LightHouseresponse = await lighthouse.uploadText(data, apiKey, "Uploaded Image")

      const cid1 = LightHouseresponse.data.Hash;

    

    const transaction = await contract.buyChai(name, message,cid1,amount);
    await transaction.wait();

  

    console.log("Transaction is done");
    
  };
  

  return (
    <>
 
      <div name = "contact" className = "   pb-2 p-6">
        
        <div className = "flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
            <div className = " pl-1 pb-81">
                <p className = "text-4xl font-bold text-center  flex items-center justify-center">Report !!
                  {/* <Image src = {Coffee} height="50" width="50" className = "mx-3 transform flip-horizontal" /> */}
                </p>
                <p className = "py-6 text-center text-xl font-semibold">Register a Case .</p>
            </div>

            <div className = "flex pl-12   justify-center items-center">
                <form  onSubmit={buyChai} className = "flex flex-col w-full ">
                    <input type = "text" id = "name" placeholder = "Enter Item name" className = " w-full p-4 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <textarea placeholder = "Enter your Review Message" id = "message" rows = "8" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <button  type="submit"
                  disabled={!state.contract} className = " btn btn-primary px-6 py-6 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white  font-semibold" >Complete Review and Get Noticed </button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
