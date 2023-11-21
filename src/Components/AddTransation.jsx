import React, { useContext, useState } from "react";
import { GlobalContext } from "./../Context/GlobalState";
import { v4 as uuidv4 } from "uuid";
function AddTransation() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction, transactions } = useContext(GlobalContext);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount,
    };
    setText("");
    setAmount("");
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransation;
