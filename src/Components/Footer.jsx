export default function Footer(props) {
  const { onDeleteList, pendingToDo, completedToDo } = props;

  function handleClearClick() {
    onDeleteList();
  }

  return (
    <div className="footer">
      <p className="msj-pending">Pending: {pendingToDo} </p>
      <p>Completed: {completedToDo} </p>
      <button className="buttonClear" onClick={handleClearClick}>
        Clear All
      </button>
    </div>
  );
}
