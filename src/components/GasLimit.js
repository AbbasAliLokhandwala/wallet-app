import React from "react";
import { Col, Input, Row } from "reactstrap";
import { BsChevronDown } from "react-icons/bs";

const GasLimit = ({ showGasLimitInput, toggleGasLimitInput, gasLimit, setGasLimit }) => {
  return (
    <Row>
      <Col xs={12} className="heading">
        <div className="gas-limit-container">
          <div className="gas-limit-toggle" onClick={toggleGasLimitInput}>
            Set Gas Limit <BsChevronDown />
          </div>
          {showGasLimitInput && (
            <Input
              className="inputValue"
              placeholder="Gas Limit"
              type="number"
              value={gasLimit}
              onChange={(e) => setGasLimit(e.target.value)}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default GasLimit;
