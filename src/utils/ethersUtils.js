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
export const getBNBBalance = async (address) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInBNB = ethers.utils.formatEther(balance);
    return balanceInBNB;
  } catch (error) {
    console.log("Error getting BNB balance:", error);
    return null;
  }
};

export const disconnectAccount = async (setAccount) => {

  if (window.ethereum && window.ethereum.disconnect) {
    try {
      await window.ethereum.disconnect();
      setAccount = 0;
    } catch (error) {
      console.error("Error disconnecting MetaMask:", error);
    }
  }
  
};
