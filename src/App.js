import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
function App() {
  const dummyItems = [
    { id: "a1", title: "Book", amount: "29.99", date: new Date(2025, 0, 6) },
    { id: "a2", title: "Pen", amount: "12.99", date: new Date(2025, 1, 2) },
    { id: "a3", title: "Food", amount: "66.22", date: new Date(2025, 2, 3) },
    { id: "a4", title: "Phone", amount: "30.00", date: new Date(2025, 3, 4) },
  ];
  return (
    <div className="App">
      <Expenses dummyItems={dummyItems} />
    </div>
  );
}

export default App;
