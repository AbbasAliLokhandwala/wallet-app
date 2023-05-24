import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";

const TransactionAlert = ({ transactionConfirmed }) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (transactionConfirmed) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [transactionConfirmed]);

  return (
    <div className="alert-container">
      {transactionConfirmed && showAlert && (
        <Alert color="primary" className="mt-3">
          Transaction Broadcasted!
        </Alert>
      )}
    </div>
  );
};

export default TransactionAlert;
