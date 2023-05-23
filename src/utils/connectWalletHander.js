import { getAccount } from "./ethersUtils";
import  getTokenBalance  from "./getTokenBalance"; // Import the getTokenBalance function

export const connectWalletHandler = async (setAccount, setTokenBal, setCardVisible) => {
  try {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const acc = await getAccount();
      setAccount(acc);
      await getTokenBalance(setTokenBal); // Retrieve the token balance
      setCardVisible(false);
    }
  } catch (err) {
    console.log(err);
  }
};
