import React, { useState, useEffect } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";

function Withdraw() {
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleWithdraw = async () => {
        setIsLoading(true); 
        setSuccessMessage("");
        try {
            const contract = await getContract();
            const tx = await contract.withdraw(ethers.parseEther(amount));
            await tx.wait();
            setSuccessMessage("Withdrawal successful!"); 
        } catch (error) {
            console.error(error);
            alert("Error making withdrawal!");
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
            <h2>Withdraw</h2>
            <input
                type="text"
                placeholder="Value in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleWithdraw} disabled={isLoading}>
                {isLoading ? "Cash out" : "Cash out"}
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

export default Withdraw;
