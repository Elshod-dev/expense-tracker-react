import React, { useContext } from "react";
import Transaction from "./Transaction.jsx";
import { GlobalContext } from "./../Context/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
