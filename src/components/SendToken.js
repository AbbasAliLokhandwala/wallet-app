import React, { useContext, useState } from "react";
import { Card, CardBody, Button, Input, Row, Col } from "reactstrap";
import { WalletContext } from "../context/WalletContext";
import formatAddress from "../utils/formatAddress";
import { sendTransaction } from "../utils/sendTransaction";
import { BeatLoader } from "react-spinners";
import TokenDropdown from "./TokenDropdown";
import TransactionAlert from "./TransactionAlert";
import GasLimit from "./GasLimit";
import GasPrice from "./GasPrice";

const SendToken = () => {
  const { address, tokenBal, bnbBal, disconnectWallet } =
    useContext(WalletContext);
  const trimmedAccount = formatAddress(address);
  const [amount, setAmount] = useState(0);
  const [receiversAddress, setReceiversAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [transactionConfirmed, setTransactionConfirmed] = useState(null);
  const [showGasLimitInput, setShowGasLimitInput] = useState(false);
  const [gasLimit, setGasLimit] = useState(42000);
  const [selectedToken, setSelectedToken] = useState("BNB");
  // const [currentGasPrice,setCurrentGasPrice]= useState();
  const handleSelectToken = (token) => {
    setSelectedToken(token);
  };
  const handleSendTransaction = async () => {
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
  const toggleGasLimitInput = () => {
    setShowGasLimitInput(!showGasLimitInput);
  };

  return (
    <>
      <Card style={{ width: "400px", fontWeight: "bold" }}>
        <CardBody>
          <Row>
            <Col sm={6} className="heading">
              Account:
            </Col>
            <Col sm={6} className="value">
              {trimmedAccount}
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="heading">
              BNB Balance:
            </Col>
            <Col sm={6} className="value">
              {bnbBal}
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="heading">
              BabyDoge Balance:
            </Col>
            <Col sm={6} className="value">
              {tokenBal}
            </Col>
          </Row>

          <TokenDropdown
            selectedToken={selectedToken}
            onSelectToken={handleSelectToken}
          />

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
          <GasLimit
            showGasLimitInput={showGasLimitInput}
            toggleGasLimitInput={toggleGasLimitInput}
            gasLimit={gasLimit}
            setGasLimit={setGasLimit}
          />
          <Row>
            <Col xs={8}>
              <Input
                placeholder="Amount"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Col>
            <Col xs={4}>
              <Button
                color="primary"
                block
                onClick={handleSendTransaction}
                disabled={loading}
              >
                {loading ? (
                  <BeatLoader size={8} color="#ffffff" loading={loading} />
                ) : (
                  "Send"
                )}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={{color:"#158DE8"}} xs={9}>Current gas price:</Col>
            <Col style={{color:"#6A6A6A"}}>
              <GasPrice />
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
