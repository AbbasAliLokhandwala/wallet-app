import React, { useContext } from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import SendToken from "./components/SendToken";
import { WalletContext } from "./context/WalletContext";

const App = () => {
  const { address } = useContext(WalletContext);

  return <div className="app">{!address ? <ConnectWallet /> : <SendToken />}</div>;
};

export default App;
