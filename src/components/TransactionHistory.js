import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import formatAddress from "../utils/formatAddress";

function TransactionHistoryTable({ dogResult }) {
  const columns = [
    {
      dataField: "transactionHash",
      text: "Transaction Hash",
      sort: true,
      formatter: (cell) => formatAddress(cell),
    },
    {
      dataField: "value",
      text: "Value",
      sort: true,
    },
    {
      dataField: "from",
      text: "From",
      sort: true,
      formatter: (cell) => formatAddress(cell),
    },
    {
      dataField: "to",
      text: "To",
      sort: true,
      formatter: (cell) => formatAddress(cell),
    },
    {
      dataField: "blockNumber",
      text: "Block Number",
      sort: true,
    },
  ];

  const options = {
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: dogResult.length,
      },
    ],
    sizePerPage: 10,
    pageStartIndex: 0,
    paginationSize: 3,
    prePage: "Prev",
    nextPage: "Next",
    firstPage: "First",
    lastPage: "Last",
    onPageChange: () => {
      // No action required as we're not using previous and next buttons
    },
  };

  if (!dogResult || dogResult.length === 0) {
    return <div>No transactions found.</div>;
  }

  return (
    <div className="container">
      <div style={{ marginTop: 20 }}>
        <BootstrapTable
          striped
          hover
          keyField="transactionHash"
          data={dogResult}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(options)}
        />
      </div>
    </div>
  );
}

export default TransactionHistoryTable;
