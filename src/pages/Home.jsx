import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <Navbar />

      <img
        src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
        alt="expense"
        style={{ display: "block", margin: "20px auto", width: "80px" }}
      />

      <div className="container">
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