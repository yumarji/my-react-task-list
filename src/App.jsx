import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import "./App.css";

const todoList = [
  { thing: "Lavar los platos" },
  { thing: "Lavar los dientes" },
  { thing: "Planchar la ropa" },
];

function App() {
  return (
    <div className="box">
      <Header />

      <div className="input">
        <input className="add" placeholder="Add to do" />
        <button className="buttonAdd">+</button>
      </div>

      <TaskList list={todoList} />
    </div>
  );
}

export default App;
