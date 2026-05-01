import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense, search } = useContext(ExpenseContext);

  return (
    <div>
      {expenses
        .filter((e) =>
          e.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((e) => (
          <div key={e.id} style={styles.card}>
            <div>
              <strong>{e.title}</strong>
              <p>₹{e.amount} | {e.category}</p>
            </div>
            <button onClick={() => deleteExpense(e.id)}></button>
          </div>
        ))}
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    background: "#222",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "10px"
  }
};

export default ExpenseList;