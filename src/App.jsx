import Header from "./Components/Header.jsx";
import "./App.css";
import Balance from "./Components/Balance.jsx";
import IncomeExpenses from "./Components/IncomeExpenses.jsx";
import TransactionList from "./Components/TransactionList.jsx";
import AddTransation from "./Components/AddTransation.jsx";
import { GlobalProvider } from "./Context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
