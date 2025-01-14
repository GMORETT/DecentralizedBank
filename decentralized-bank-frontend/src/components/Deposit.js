import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract";

function Deposit() {
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleDeposit = async () => {
        setIsLoading(true); 
        setSuccessMessage(""); 
        try {
            const contract = await getContract();
            const tx = await contract.deposit({ value: ethers.parseEther(amount) });
            await tx.wait();
            setSuccessMessage("Deposit made successfully!"); 
        } catch (error) {
            console.error(error);
            alert("Error making deposit!");
        } finally {
            setIsLoading(false); 
        }
    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(""); 
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <div>
            <h2>Deposit</h2>
            <input
                type="text"
                placeholder="Value in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleDeposit} disabled={isLoading}>
                {isLoading ? "Deposit" : "Deposit"}
            </button>

            {/* Modal de carregamento */}
            {isLoading && (
                <div className="overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}

            {/* Modal de sucesso */}
            {successMessage && (
                <div className="overlay">
                    <p className="success-modal">{successMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Deposit;
