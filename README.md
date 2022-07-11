# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:
# install using Yarn
yarn install
```

2. Add secret key from Metamask into .secret file

3. Start the local Hardhat node

```sh
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the app

```
npm run dev