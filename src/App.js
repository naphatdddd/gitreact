import useCounter from "./useCounter";

function App() {
  let { counter, add, min } = useCounter();
  return (
    <>
      <h1>Hello React</h1>
      <h1>Count: {counter}</h1>
      <button onClick={add}>+</button>
      <button onClick={min}>-</button>
    </>
  );
}

export default App;
