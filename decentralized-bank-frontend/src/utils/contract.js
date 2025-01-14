import { ethers } from "ethers";

const contractAddress = "<YOUR_CONTRACT_CODE>"; // Substitua pelo endereço do contrato
const contractABI = require("./DecentralizedBankABI.json");

export const getContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum); 
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner(accounts[0]); 
        return new ethers.Contract(contractAddress, contractABI, signer); 
    } else {
        alert("MetaMask não encontrada!");
        throw new Error("MetaMask não encontrada!");
    }
};
