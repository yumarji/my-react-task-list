export default function Footer(props) {
  const { onDeleteList, pendingToDo } = props;

  function handleClearClick() {
    onDeleteList();
  }

  return (
    <div className="footer">
      <p>You have {pendingToDo} pending tasks</p>
      <button className="buttonClear" onClick={handleClearClick}>
        Clear All
      </button>
    </div>
  );
}
