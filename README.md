DecentralizedBank

How to Run the Program
Follow these steps to configure, deploy, and run the project:

1. Add Your Private Key and Sepolia URL
Before running the program, you need to set up your environment variables:

Open the .env file in the root of the project.

Add your Ethereum private key and the Sepolia testnet URL (e.g., from Alchemy or Infura) in the following format:

PRIVATE_KEY=your_private_key_here

ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_key_here

Replace your_private_key_here with your wallet's private key.
Replace your_alchemy_key_here with your Sepolia RPC URL.

⚠️ Important: Keep your .env file private and never share your private key.

2. Deploy the Smart Contract
To deploy the contract:

Run the deployment script using Hardhat:

npx hardhat run scripts/deploy.js --network sepolia
Once deployed, you will see the contract address in the console. Copy this address for the next step.

3. Update the Frontend with the Contract Information
After deploying the contract, update the frontend configuration:

Add the Contract Address:

Open src/utils/contract.js (or contract.ts if using TypeScript).
Replace the placeholder CONTRACT_ADDRESS with the deployed contract address:

const contractAddress = "<YOUR_CONTRACT_CODE>"; // Substitua pelo endereço do contrato
Update the ABI:

Replace the existing ABI in CONTRACT_ABI with the ABI generated during deployment.
You can find the ABI in the artifacts/contracts/YourContractName.json file, under the abi field.

4. Run the Frontend
Start the frontend application:

Install dependencies if not already done:

npm install
Start the development server:

npm start
Open the application in your browser at http://localhost:3000.

By following these steps, you should be able to deploy and run the project successfully. If you encounter any issues, feel free to reach out!

