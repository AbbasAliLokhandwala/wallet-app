import { ethers } from "ethers";
export const getAccount = async () => {
  let value = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return value;
};

export const getSignerAddress = async () => {
  const signerAddressArray = await getAccount();
  let signerAddress = await signerAddressArray[0];
  return signerAddress;
};

export const isValidAddress = (receiversAddress) => {
  try {
    ethers.utils.getAddress(receiversAddress);
    return true;
  } catch (error) {
    return false;
  }
};

export const disconnectAccount = async () => {

    const provider =new  ethers.providers.Web3Provider();
console.log(provider);
    // if (provider.isMetaMask) {
    //   provider.disconnect(); // Disconnect from MetaMask
    //   console.log("Disconnected from MetaMask.");
    // } else {
    //   console.log("MetaMask is not the current provider.");
    // }
  
};
