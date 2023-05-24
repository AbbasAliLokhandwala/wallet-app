import React, { useContext, useState } from "react";
import { Card, CardBody, Button, Input, Row, Col, Alert } from "reactstrap";
import { WalletContext } from "../context/WalletContext";
import formatAddress from "../utils/formatAddress";
import { sendTransaction } from "../utils/sendTransaction";
import { BeatLoader } from "react-spinners";

const SendToken = () => {
  const { address, tokenBal, walletBNBBal, disconnectWallet } =
    useContext(WalletContext);
  const trimmedAccount = formatAddress(address);
  const [amount, setAmount] = useState(0);
  const [receiversAddress, setReceiversAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);

  const handleSendTransaction = async () => {
    try {
      setLoading(true);
      await sendTransaction(amount, receiversAddress);
      setTransactionConfirmed(true);
    } catch (error) {
      console.log("Error sending transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
            {walletBNBBal}
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="heading">
            WBNB Balance:
          </Col>
          <Col sm={6} className="value">
            {tokenBal}
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="heading">
            Send BNB:
          </Col>
          <Col xs={12} className="heading">
            <Input
              className="inputValue"
              placeholder="Address"
              type="text"
              onChange={(e) => setReceiversAddress(e.target.value)}
            />
          </Col>
        </Row>
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
              disabled={loading || transactionConfirmed}
            >
              {loading ? (
                <BeatLoader size={8} color="#ffffff" loading={loading} />
              ) : (
                "Send"
              )}
            </Button>
          </Col>
        </Row>

        {transactionConfirmed && (
          <Alert color="success" className="mt-3">
            Transaction confirmed!
          </Alert>
        )}

        <Button color="primary" block onClick={() => disconnectWallet()}>
          Disconnect Wallet
        </Button>
      </CardBody>
    </Card>
  );
};

export default SendToken;
