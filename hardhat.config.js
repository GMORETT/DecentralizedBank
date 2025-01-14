require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Importa o dotenv para carregar variáveis do .env

module.exports = {
    solidity: "0.8.20", // Certifique-se de usar a versão correta
    networks: {
        sepolia: {
            url: process.env.ALCHEMY_API_URL, // Lê a URL da API do Alchemy
            accounts: [process.env.PRIVATE_KEY.startsWith("0x") 
                ? process.env.PRIVATE_KEY 
                : `0x${process.env.PRIVATE_KEY}`], // Certifique-se de que a chave privada inclui o prefixo "0x"
        },
    },
};
