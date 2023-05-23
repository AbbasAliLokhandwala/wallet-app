import React, { useContext } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { connectWalletHandler } from "../utils/connectWalletHander";
import { MyContext } from "../contextApi/MyContext";

const ConnectWallet = () => {
  const { setAccount } = useContext(MyContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <Card style={{ width: "400px" }}>
        <CardBody>
          <Button
            onClick={() => connectWalletHandler(setAccount)}
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
    </div>
  );
};

export default ConnectWallet;
