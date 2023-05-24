import React, { useContext } from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import SendToken from "./components/SendToken";
import { WalletContext } from "./context/WalletContext";
import TransactionList from "./components/TransactionList";
import { Row, Col } from "reactstrap";

const App = () => {
  const { address } = useContext(WalletContext);

  return (
    <div className="app">
      {!address ? (
        <ConnectWallet />
      ) : (
        <Row>
          <Col xs={12}>
            <SendToken />
          </Col>
          <Col xs={12}>
            <TransactionList />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default App;
