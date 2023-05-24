import { ethers } from "ethers";

export const sendTransaction = async (amount, receiversAddress) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const parsedAmount = ethers.utils.parseEther(amount.toString());
    const tx = await signer.sendTransaction({
      to: receiversAddress,
      value: parsedAmount,
    });

    console.log("Transaction sent:", tx);
  } catch (error) {
    console.log("Error sending transaction:", error);
  }
};
