import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, Button, Input, Label } from "reactstrap";
import { MyContext } from "../contextApi/Context";
import trimAddress from "../utils/trimAddress";
import {
  isValidAddress,
  disconnectAccount,
  getBNBBalance,
} from "../utils/ethersUtils";
import { sendTransaction } from "../utils/sendTransaction";

const InfoAndSendTokenForm = () => {
  const [amount, setAmount] = useState(0);
  const [receiversAddress, setReceiversAddress] = useState(0);
  const { account, tokenBal, setAccount } = useContext(MyContext);
  const [walletBNBBal, setWalletBNBBal] = useState(0);

  useEffect(() => {
    const fetchBNBBalance = async () => {
      if (isValidAddress(account)) {
        const balance = await getBNBBalance(account);
        setWalletBNBBal(balance);
      }
    };

    fetchBNBBalance();
  }, [account]);

  const trimmedAccount = isValidAddress(account.toString())
    ? trimAddress(account)
    : "0x00";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "400px", fontWeight: "bold" }}>
        <CardBody>
          <div className="bal-container">
            <div
              className="account-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#158DE8",
              }}
            >
              <div className="tag">Account:</div>{" "}
              <div style={{ color: "#6A6A6A" }}>{trimmedAccount}</div>
            </div>
            <div
              className="babyDoge-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#158DE8",
              }}
            >
              <div className="tag">BabyDoge Balance:</div>{" "}
              <div style={{ color: "#6A6A6A" }}>{tokenBal}</div>
            </div>
            <div
              className="bnb-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#158DE8",
              }}
            >
              <div className="tag">BNB Balance:</div>
              <div style={{ color: "#6A6A6A" }}>{walletBNBBal}</div>
            </div>
          </div>
          <div className="send-bnb">
            <Label
              style={{
                display: "flex",
                marginTop: "8vh",
                color: "#158DE8",
              }}
              for="exampleEmail"
            >
              Send BNB:
            </Label>
            <Input
              style={{ backgroundColor: "#EBEBEB" }}
              placeholder="Address"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div style={{ display: "flex", margin: "1vh" }}>
              <Input
                style={{ backgroundColor: "#EBEBEB", marginRight: "1vh" }}
                placeholder="Amount"
                value={receiversAddress}
                onChange={(e) => setReceiversAddress(e.target.value)}
              />
              <Button
                onClick={() => sendTransaction(amount, receiversAddress)}
                style={{ backgroundColor: "#158DE8" }}
              >
                Send
              </Button>
            </div>
          </div>

          <Button
            onClick={()=>disconnectAccount(setAccount)}
            style={{
              width: "350px",
              backgroundColor: "#158DE8",
              marginTop: "8vh",
            }}
          >
            Disconnect Wallet
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoAndSendTokenForm;
