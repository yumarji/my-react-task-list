import { BiEdit, BiTrash } from "react-icons/bi";

export default function TasksCard(props) {
  const { id, name, completed, onCheckTaskClick, isSelected } = props;

  function handleClick() {
    console.log("Imprime: ", name);
    onCheckTaskClick(name);
  }

  return (
    <div className="boxTask">
      <span>
        <button onClick={handleClick}>{isSelected ? "◉" : "◯"}</button>
        {id} - {name} - {completed}
      </span>
      <span>
        <BiEdit className="icon1" />
        <BiTrash className="icon2" />
      </span>
    </div>
  );
}
