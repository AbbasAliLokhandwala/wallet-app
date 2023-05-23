import React, { useContext } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { connectWalletHandler } from "../utils/connectWalletHander";
import { MyContext } from "../contextApi/Context";

const ConnectWallet = () => {
  const { setAccount, setTokenBal, cardVisible, setCardVisible } =
    useContext(MyContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      {cardVisible ? (
        <Card style={{ width: "400px" }}>
          <CardBody>
            <Button
              onClick={() =>
                connectWalletHandler(setAccount, setTokenBal, setCardVisible)
              }
              style={{
                width: "350px",
                backgroundColor: "#158DE8",
                fontWeight: "bold",
              }}
            >
              Connect Wallet
            </Button>
          </CardBody>
        </Card>
      ) : null}
    </div>
  );
};

export default ConnectWallet;
