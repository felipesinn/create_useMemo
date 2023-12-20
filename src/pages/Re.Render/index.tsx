import { useState } from "react";

interface ShowValueProps {
  value: string;
}

function ShowValue({ value }: ShowValueProps) {
  console.log(`ShowValue render, ${value}`);

  return <div className="value">{value}</div>;
}

export function ReRender() {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<string>("ON");

  console.log(`ReRender re-render, ${counter}`);

  const changeCounter = () => {
    setCounter(counter + 1);
  };

  const changeValue = () => {
    setValue(value === "ON" ? "OFF" : "ON");
  };

  return (
    <div className="container">
      <h1>React Memo na prática</h1>
      <div className="items">
        <ShowValue value={value} />
      </div>
      <div className="actions">
        <button onClick={changeCounter} className="btn btn-teal">
          Re-render
        </button>

        <button onClick={changeValue} className="btn btn-sky">
          Change Value
        </button>
      </div>
    </div>
  );
}
