import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;