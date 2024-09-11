import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("keyword");
  }, [keyword]);
  useEffect(() => {
    console.log("counter");
  }, [counter]);
  useEffect(() => {
    console.log("keword&counter");
  }, [keyword, counter]);
  return (
    <div>
      <input type="text" placeholder="Search here" value={keyword} onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
