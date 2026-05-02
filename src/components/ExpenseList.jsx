import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense, search } = useContext(ExpenseContext);

  const filteredExpenses = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filteredExpenses.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", marginTop: "20px" }}>
          No expenses found
        </p>
      ) : (
        filteredExpenses.map((e) => (
          <div key={e.id} className="expense-card">
            <div className="expense-info">
              <strong>{e.title}</strong>
              <p>₹{parseFloat(e.amount).toFixed(2)} | {e.category}</p>
            </div>
            <button className="delete-btn" onClick={() => deleteExpense(e.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;