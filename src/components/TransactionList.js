import { useEffect, useState } from "react";
import TransactionHistoryTable from "./TransactionHistory";

function TransactionList() {
  const [transactionList, setTransactionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.bscscan.com/api?module=account&action=txlist&address=0xF426a8d0A94bf039A35CEE66dBf0227A7a12D11e&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZFJVQFPYD1P3JBPWVZFTYNKSY17JIQSCKA"
    )
      .then((response) => response.json())
      .then((data) => {
        const transactionData = data.result.map((item) => ({
          transactionHash: item.hash,
          value: parseFloat(item.value) / 1e18, // Convert wei to ether
          from: item.from,
          to: item.to,
          blockNumber: item.blockNumber,
        }));
        setTransactionList(transactionData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <TransactionHistoryTable dogResult={transactionList} />;
}

export default TransactionList;
