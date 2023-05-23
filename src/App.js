import "./App.css";
import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import InfoAndSendTokenForm from "./components/InfoAndSendTokenForm";
import { MyContext } from "./contextApi/Context";

const App = () => {
  const [account, setAccount] = useState(0);
  const [tokenBal, setTokenBal] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);

  return (
    <MyContext.Provider
      value={{
        account,
        setAccount,
        tokenBal,
        setTokenBal,
        cardVisible,
        setCardVisible,
        
      }}
    >
      <div className="App">
        <ConnectWallet />
        <InfoAndSendTokenForm />
      </div>
    </MyContext.Provider>
  );
};

export default App;
