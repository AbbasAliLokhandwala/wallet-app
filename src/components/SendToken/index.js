import React, { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import { WalletContext } from "../../context/WalletContext";
import { sendTransaction } from "../../utils/sendTransaction";
import GasDetails from "../GasDetails";
import TokenDropdown from "../TokenDropdown";
import TransactionAlert from "../TransactionAlert";
import WalletDetails from "./WalletDetails";

const SendToken = () => {
  const { address, tokenBal, bnbBal, disconnectWallet } = useContext(WalletContext);
  const [amount, setAmount] = useState(0);
  const [receiversAddress, setReceiversAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [transactionConfirmed, setTransactionConfirmed] = useState(null);

  const [gasLimit, setGasLimit] = useState(42000);
  const [selectedToken, setSelectedToken] = useState("BNB");
  const [invalidAmount, setInvalidAmount] = useState(false);

  const handleSelectToken = (token) => {
    setSelectedToken(token);
  };

  const checkInvalidAmount = () => {
    const validateAmount = parseFloat(amount);
    switch (selectedToken) {
      case "BNB":
        return validateAmount > parseFloat(bnbBal);
      case "BabyDoge":
        return validateAmount > parseFloat(tokenBal);
      default:
        return validateAmount < 0;
    }
  };

  const handleSendTransaction = async () => {
    setInvalidAmount(checkInvalidAmount());
    try {
      setLoading(true);
      await sendTransaction(amount, receiversAddress, gasLimit, selectedToken);
      setTransactionConfirmed(true);
    } catch (error) {
      console.log("Error sending transaction:", error);
    } finally {
      setLoading(false);
      setTransactionConfirmed(false);
    }
  };

  return (
    <>
      <Card style={{ width: "400px", fontWeight: "bold", margin: "auto" }}>
        <CardBody>
          <WalletDetails />
          <TokenDropdown selectedToken={selectedToken} onSelectToken={handleSelectToken} />
          <Row>
            <Col xs={12} className="heading">
              <Input
                className="inputValue"
                placeholder="Address"
                type="text"
                onChange={(e) => setReceiversAddress(e.target.value)}
              />
            </Col>
          </Row>
          <GasDetails gasLimit={gasLimit} setGasLimit={setGasLimit} />
          <Row>
            <Col xs={8}>
              <Input
                placeholder="Amount"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                  setInvalidAmount(false);
                }}
              />
              {invalidAmount && <div style={{ color: "red" }}>Amount is negative or greater than balance </div>}
            </Col>
            <Col xs={4}>
              <Button
                color="primary"
                block
                onClick={handleSendTransaction}
                disabled={loading || invalidAmount === true}>
                {loading ? <BeatLoader size={8} color="#ffffff" loading={loading} /> : "Send"}
              </Button>
            </Col>
          </Row>
          <Button color="primary" block onClick={() => disconnectWallet()}>
            Disconnect Wallet
          </Button>
        </CardBody>
      </Card>
      <TransactionAlert transactionConfirmed={transactionConfirmed} />
    </>
  );
};

export default SendToken;
