import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount || 0), 0);

  return (
    <div className="dashboard-box">
      <h2>Total Expense</h2>
      <h1>₹{total.toFixed(2)}</h1>
    </div>
  );
};

export default Dashboard;