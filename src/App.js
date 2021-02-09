import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [input, setInput] = useState({ name: "", gender: "", age: 0 });
  const [items, setItems] = useState([]);
  //load locationStorage
  useEffect(() => {
    const item = localStorage.getItem("items");
    // ...
    if (item) {
      setItems(JSON.parse(item));
    }
  }, []);
  useEffect(() => {
    console.log(items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            onChange={(e) => {
              setInput({ ...input, name: e.currentTarget.value });
            }}
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) => {
              setInput({ ...input, gender: e.currentTarget.value });
            }}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 30"
            onChange={(e) => {
              setInput({ ...input, age: e.currentTarget.value });
            }}
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => {
            setItems([...items, input]);
          }}
        >
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        {items.map((item) => {
          return (
            <ItemTable name={item.name} gender={item.gender} age={item.age} />
          );
        })}
        <p>Kamonpat Sunthonpong 620610771</p>
      </div>
    </div>
  );
}

export default App;
