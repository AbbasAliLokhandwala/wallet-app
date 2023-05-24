import React from "react";
import { Col, Input } from "reactstrap";
import { BsChevronDown } from "react-icons/bs";

const GasLimit = ({ showGasLimitInput, toggleGasLimitInput, gasLimit, setGasLimit }) => {
  return (
    <Col xs={8} className="heading">
      <div className="gas-limit-container">
        <div className="gas-limit-toggle" onClick={toggleGasLimitInput}>
          <BsChevronDown />
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
  );
};

export default GasLimit;
