import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const formDataHandler = (formData) => {
    setExpenses((prev) => {
      return [...prev, formData];
    });
  };
  return (
    <div className="App">
      <NewExpenses
        formDataHandler={formDataHandler}
        setIsActive={setIsActive}
      />
      <Expenses expenses={expenses} isActive={isActive} />
    </div>
  );
}

export default App;
