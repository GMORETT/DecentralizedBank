import { ethers } from "ethers";

const contractAddress = "0xd5ADEFdCecd2C09eFc5d22E5BF3845CC007710F0"; // Substitua pelo endereço do contrato
const contractABI = require("./DecentralizedBankABI.json");

export const getContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum); // Configuração do provedor
        const accounts = await provider.send("eth_requestAccounts", []); // Solicita acesso à conta
        const signer = await provider.getSigner(accounts[0]); // Obtém o signer da conta conectada
        return new ethers.Contract(contractAddress, contractABI, signer); // Retorna o contrato com o signer
    } else {
        alert("MetaMask não encontrada!");
        throw new Error("MetaMask não encontrada!");
    }
};
