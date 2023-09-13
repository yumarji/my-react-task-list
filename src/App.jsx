import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

const toDoList = [
  { id: 1, name: "Lavar la ropa", completed: true },
  { id: 2, name: "Hacer mercado", completed: false },
  { id: 3, name: "Pagar facturas", completed: true },
];

function App() {
  return (
    <div className="mainBox">
      <Header />
      <TaskList list={toDoList} />
      <span className="finalBox">
        <p className="finalText">You have 2 pending task</p>
        <button className="buttonClear">Clear All</button>
      </span>
    </div>
  );
}

export default App;
