require("dotenv").config();
const { ethers } = require("ethers");
const { FlashbotsBundleProvider } = require("@flashbots/ethers-provider-bundle");
const readline = require("readline-sync");

console.log("\n=================================");
console.log("🚀 Created by LEMON");
console.log("📢 Follow me on Twitter: @Rosla_Ahemed");
console.log("=================================\n");

async function main() {
    // Prompt user for inputs
    const privateKey = readline.question("🔑 Enter your private key: ", { hideEchoBack: true });
    const rpcUrl = readline.question("🌐 Enter the RPC URL: ");
    const contractAddress = readline.question("📜 Enter the airdrop contract address: ");
    const recipientAddress = readline.question("🏦 Enter your safe wallet address: ");
    const tokenAddress = readline.question("🪙 Enter the token contract address: ");
    const tokenAmount = readline.question("💰 Enter the amount of tokens to transfer: ");
    const claimFunction = readline.question("⚡ Enter the claim function name (default: claimAirdrop): ", { defaultInput: "claimAirdrop" });
    
    // Set up providers and wallet
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);
    const flashbotsProvider = await FlashbotsBundleProvider.create(provider, wallet);

    console.log(`✅ Connected to wallet: ${wallet.address}`);

    // Airdrop & Token contract ABIs (update with actual ABIs)
    const airdropABI = [
        `function ${claimFunction}() public`,
        "function transfer(address to, uint256 amount) public returns (bool)"
    ];
    const tokenABI = [
        "function transfer(address to, uint256 amount) public returns (bool)"
    ];

    const airdropContract = new ethers.Contract(contractAddress, airdropABI, wallet);
    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, wallet);

    console.log("⏳ Estimating gas...");
    const gasEstimate = await airdropContract[claimFunction].estimateGas();

    console.log("🚀 Creating Flashbots transaction...");
    const claimTx = await airdropContract.populateTransaction[claimFunction]();
    const transferTx = await tokenContract.populateTransaction.transfer(recipientAddress, ethers.parseUnits(tokenAmount, 18));

    const signedBundle = await flashbotsProvider.signBundle([
        { signer: wallet, transaction: { ...claimTx, gasLimit: gasEstimate } },
        { signer: wallet, transaction: { ...transferTx, gasLimit: gasEstimate } }
    ]);

    console.log("📡 Sending bundle to Flashbots...");
    const result = await flashbotsProvider.sendRawBundle(signedBundle, await provider.getBlockNumber() + 1);
    console.log("✅ Flashbots transaction submitted!");
}

main().catch(console.error);
