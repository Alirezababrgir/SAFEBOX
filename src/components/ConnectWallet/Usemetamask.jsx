import { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import { Contract_abi, Contract_address } from "../../services/abis"
export const useMetamask = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);
  const navigate = useNavigate()
  const web3Instance = new Web3(window.ethereum);
  //const rpcProvider = 'https://rpc.ankr.com/polygon_amoy';
  //const web3Provider = new Web3.providers.HttpProvider(rpcProvider);
 // const WEB3 = new Web3(web3Provider);
  const connectMetamask = async () => {

    if (window.ethereum) {
      try {
        setWeb3(web3Instance);
        setIsConnected(true);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
        //CHECKING MY !IMPORTANT
        const amIMember = await safebox.methods.amIMember().call({ "from": accounts[0] });
        if (amIMember) {
          console.log('wellcome to Syber Office! :)')
          navigate("/dashboard")
        } else {
          navigate("/signup")
        }

      } catch (error) {
        console.error(error);
      }
    }
    else {
      alert('Please install MetaMask to use this feature');
    }
  };
  return { isConnected,web3 ,connectMetamask, setIsConnected, web3Instance, setWeb3 };
};