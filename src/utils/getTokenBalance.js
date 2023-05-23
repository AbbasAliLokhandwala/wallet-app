import { ethers } from "ethers";
import ERC20_ABI from "./erc20Abi";
import { BABYDOGE_TOKEN } from "./tokenInfoConstants";

const getTokenBalance = async (setTokenBal) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let tokenContract;

  tokenContract = new ethers.Contract(
    BABYDOGE_TOKEN.address,
    ERC20_ABI,
    signer
  );
  const signerAdd = await signer.getAddress();
  const balance = await tokenContract.balanceOf(signerAdd);
  const balanceInWei = balance.toString();
  const balActual = ethers.utils.formatEther(balanceInWei);
  setTokenBal(balActual.slice(0, 7));
};

export default getTokenBalance;
