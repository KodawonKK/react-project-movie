import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    //이전값을 계속 배열에 추가 해줌
  };
  console.log(toDos);
  console.log(toDos.map((item, idx) => <li key={idx}>{item}</li>));
  return (
    <div>
      <h1>my toDoList {toDos.length}</h1>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write어쩌고 " />
        <button onClick={onSubmit}>Add To dO</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
