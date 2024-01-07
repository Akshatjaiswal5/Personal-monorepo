import { createSignal } from "solid-js";
import "./App.css";

function App() {
  const [items, setItems] = createSignal([]);
  let newItem;

  function addToItems() {
    let newItems = [...items(), newItem.value];
    setItems(newItems);
    newItem.value = "";
  }

  return (
    <>
    <ul>
      {items().map((item) => (
        <li>{item}</li>
      ))}
      </ul>
        <input type="text" ref={newItem}/>
        <button onClick={addToItems}>
          Add
        </button>
     
    </>
  );
}

export default App;
