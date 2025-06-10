require('dotenv').config();
const express = require('express');
const Web3 = require('web3');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to blockchain
const web3 = new Web3('http://localhost:8545'); // or Infura/Alchemy for testnet

const contractABI = require('./build/contracts/MedicineContract.json').abi;
const contractAddress = '0x...'; // Fill in deployed address

const contract = new web3.eth.Contract(contractABI, contractAddress);
let defaultAccount; // set below

web3.eth.getAccounts().then(accounts => {
  defaultAccount = accounts[0];
});

// Routes
app.post('/manufacturer/register', async (req, res) => {
  const { name, location, account } = req.body;
  try {
    await contract.methods.registerManufacturer(name, location).send({ from: account });
    res.send({ message: 'Manufacturer registered' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/medicine/create', async (req, res) => {
  const { name, batchId, account } = req.body;
  try {
    await contract.methods.createMedicine(name, batchId).send({ from: account });
    res.send({ message: 'Medicine created' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/medicine/verify/:batchId', async (req, res) => {
  const { batchId } = req.params;
  try {
    const data = await contract.methods.verifyMedicine(batchId).call();
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
