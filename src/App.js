import "./App.css";
import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import InfoAndSendTokenForm from "./components/InfoAndSendTokenForm";
import { MyContext } from "../src/contextApi/MyContext";

const App = () => {
  const [account, setAccount] = useState(0);
  return (
    <MyContext.Provider value={{ account, setAccount }}>
      <div className="App">
        <ConnectWallet />
        <InfoAndSendTokenForm />
      </div>
    </MyContext.Provider>
  );
};

export default App;
