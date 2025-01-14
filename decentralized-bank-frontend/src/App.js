import React from "react";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import "./App.css";

function App() {
    return (
        <div className="containers-wrapper">
            {/* Container da esquerda */}
            <div className="app-container">
                <h1>Decentralized Bank</h1>
                <Balance />
                <Deposit />
                <Withdraw />
            </div>

            {/* Container da direita */}
            <div className="app-container-right">
                <h1>Additional Features</h1>
                <p>Here you can see our new and upcoming features.</p>
                <button>Explore</button>
            </div>
        </div>
    );
}

export default App;
