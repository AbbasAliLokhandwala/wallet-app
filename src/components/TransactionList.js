import { useEffect, useState } from "react";
import TransactionHistoryTable from "./TransactionHistory";
import { SyncLoader } from "react-spinners";

function TransactionList() {
  const [transactionList, setTransactionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTransactionList(currentPage);
  }, [currentPage]);

  const fetchTransactionList = (page) => {
    setIsLoading(true);
    fetch(
      `https://api.bscscan.com/api?module=account&action=txlist&address=0xF426a8d0A94bf039A35CEE66dBf0227A7a12D11e&startblock=0&endblock=99999999&page=${page}&sort=asc&apikey=ZFJVQFPYD1P3JBPWVZFTYNKSY17JIQSCKA`
    )
      .then((response) => response.json())
      .then((data) => {
        const transactionData = data.result.map((item) => ({
          transactionHash: item.hash,
          value: parseFloat(item.value) / 1e18,
          from: item.from,
          to: item.to,
          blockNumber: item.blockNumber,
        }));
        setTransactionList(transactionData);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading<SyncLoader /></p>
      </section>
    );
  }

  return <TransactionHistoryTable dogResult={transactionList} />;
}

export default TransactionList;
