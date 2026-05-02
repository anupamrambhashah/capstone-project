import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="expense-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
            alt="expense"
          />
        </div>

        <h1>Expense Tracker</h1>
        <Dashboard />
        <ExpenseForm />
        <SearchBar />
        <ExpenseList />
      </div>
    </>
  );
};

export default Home;