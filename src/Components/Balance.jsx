import React, { useContext } from "react";
import { GlobalContext } from "./../Context/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, cur) => acc + cur, 0).toFixed(2);

  const sign = total < 0 ? "-" : "";
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
}

export default Balance;
