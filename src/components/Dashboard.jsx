import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={styles.box}>
      <h2>Total Expense</h2>
      <h1>₹{total}</h1>
    </div>
  );
};

const styles = {
  box: {
    textAlign: "center",
    background: "#000",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px"
  }
};

export default Dashboard;