import { ethers } from "ethers";
import { BABYDOGE_TOKEN } from "./constants";
import ERC20_ABI from "./erc20Abi";

const getAccount = async () => {
  let value = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  await changeNetwork();
  return value;
};

const changeNetwork = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: "0x61" }],
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      console.log(error)
    }
  }
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

export const getBNBBalance = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);
    const balanceInBNB = ethers.utils.formatEther(balance);
    return balanceInBNB;
  } catch (error) {
    console.log("Error getting BNB balance:", error);
    return null;
  }
};

export const getTokenBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let tokenContract;

  tokenContract = new ethers.Contract(
    BABYDOGE_TOKEN.address,
    ERC20_ABI,
    signer
  );
  const signerAdd = await signer.getAddress();
  console.log(signerAdd);
  const balance = await tokenContract.balanceOf(signerAdd);
  const balanceInWei = balance.toString();
  const balActual = ethers.utils.formatEther(balanceInWei);
  return balActual.slice(0, 7);
};