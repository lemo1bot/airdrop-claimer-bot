# 🚀 Airdrop Claimer Bot (Secure & Flashbots Protected)

This bot allows users to **claim airdrops securely** from compromised wallets while avoiding hacker sweeper bots using **Flashbots private transactions.**

---

## 📌 Features
✅ **Bypass sweeper bots** (Flashbots sends private transactions)  
✅ **Claim airdrops & instantly transfer funds** to a safe wallet  
✅ **Works on all EVM-compatible chains** (Ethereum, BSC, Polygon, etc.)  
✅ **Simple & Automated** (User just enters details, bot handles the rest)  
✅ **Secure** (Uses `.env` for private key storage)

---

## 📦 Installation

### **1️⃣ Install Node.js** (if not installed)
Download & install Node.js (v16 or higher):  
🔗 [https://nodejs.org/](https://nodejs.org/)

Check if Node.js is installed:
```sh
node -v
```

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/lemo1bot/airdrop-claimer-bot.git
cd airdrop-claimer-bot
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Create a `.env` File** (For Secure Private Key Storage)
Create a `.env` file in the project folder and add:
```ini
PRIVATE_KEY=your_private_key_here
RPC_URL=https://your_rpc_url_here
CONTRACT_ADDRESS=your_airdrop_contract_here
SAFE_WALLET=your_safe_wallet_here
TOKEN_ADDRESS=your_token_contract_here
TOKEN_AMOUNT=amount_to_transfer
```
> **⚠️ Security Warning:** NEVER share your `.env` file with anyone!

---

## 🚀 Usage
Run the bot:
```sh
node airdrop-bot.js
```

### **User Prompts**
The bot will ask for:
- **Your private key** (hidden for security)
- **Blockchain RPC URL** (Ethereum, BSC, Polygon, etc.)
- **Airdrop contract address**
- **Your safe wallet address**
- **Token contract address**
- **Amount of tokens to transfer**

### **How It Works**
1️⃣ Uses **Flashbots** to send the transaction privately (bypasses hacker bots).  
2️⃣ **Claims the airdrop** and **instantly transfers it** in one transaction.  
3️⃣ **Your assets are moved to safety before a hacker can react.**  

---

## 📜 License
MIT License - Feel free to modify and improve!

---

## 📢 Follow the Creator
💡 Created by **LEMON**  
🐦 Twitter: [@Rosla_Ahemed](https://twitter.com/Rosla_Ahemed)

