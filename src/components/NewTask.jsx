import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  let message;

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    } else {
      onAdd(enteredTask);
      setEnteredTask("");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
      />
      {message ? message : undefined}
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}
