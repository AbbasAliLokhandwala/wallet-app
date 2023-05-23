import React, { useContext } from "react";
import { Card, CardBody, Button, Input, Label } from "reactstrap";
import { MyContext } from "../contextApi/MyContext";
import trimAddress from "../utils/trimAddress";
import { isValidAddress, disconnectAccount } from "../utils/ethersUtils";

const InfoAndSendTokenForm = () => {
  const { account } = useContext(MyContext);
  const trimmedAccount = isValidAddress(account)
    ? trimAddress(account)
    : trimAddress(account);
  console.log("aaaaa: " + trimmedAccount);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Card style={{ width: "400px" }}>
        <CardBody>
          <div className="bal-container">
            <div
              className="account-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#6A6A6A",
              }}
            >
              <div className="tag">Account: </div> <div>{trimmedAccount}</div>
            </div>
            <div
              className="babyDoge-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#6A6A6A",
              }}
            >
              <div className="tag">BabyDoge Balance: </div> <div>bal</div>
            </div>
            <div
              className="bnb-bal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#6A6A6A",
              }}
            >
              <div className="tag">BNB Balance: </div> <div>bal</div>
            </div>
          </div>
          <div className="send-bnb">
            <Label for="exampleEmail">Send BNB: </Label>
            <Input
              style={{ backgroundColor: "#EBEBEB" }}
              placeholder="Address"
              type="text"
            />
            <div>
              {" "}
              <Input
                style={{ backgroundColor: "#EBEBEB" }}
                placeholder="Amount"
                type="text"
              />
              <Button
                style={{ backgroundColor: "#158DE8", fontWeight: "bold" }}
              >
                Send{" "}
              </Button>
            </div>
          </div>

          <Button
            onClick={disconnectAccount}
            style={{
              width: "350px",
              backgroundColor: "#158DE8",
              fontWeight: "bold",
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
