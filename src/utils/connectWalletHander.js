import { getAccount } from "./ethersUtils";

export const connectWalletHandler = async (setAccount) => {
  try {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const acc = await getAccount();
      console.log("acc address: "+acc);
      setAccount(acc);
    
    }
  } catch (err) {
    console.log(err);
  }
};
