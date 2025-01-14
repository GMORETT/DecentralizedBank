import React, { useState, useEffect } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";

function Balance() {
    const [balance, setBalance] = useState("0");

    const fetchBalance = async () => {
        try {
            const contract = await getContract();

            const signer = await contract.runner.getAddress();
            console.log("Address of logged in user:", signer);

            const userBalance = await contract.getBalance(signer);
            console.log("Balance returned by the contract (in Wei):", userBalance.toString());

            const formattedBalance = ethers.formatEther(userBalance);
            console.log("Formatted balance (in ETH):", formattedBalance);
            setBalance(formattedBalance);
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    useEffect(() => {
        fetchBalance();
    }, []); 

    return (
        <div>
            <h2>Your Balance</h2>
            <p>{balance} ETH</p>
            <button onClick={fetchBalance}>Update Balance</button>
        </div>
    );
}

export default Balance;
