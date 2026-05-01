import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense({ title, amount: Number(amount), category });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        placeholder="Expense"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>

      <button>Add</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap"
  }
};

export default ExpenseForm;