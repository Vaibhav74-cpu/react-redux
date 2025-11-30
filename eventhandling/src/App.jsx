import "./App.css";

function App() {
  function handleClick() {
    alert("you click the event");
  }

  function handlehover(e) {
    alert("you are in pragraph tag");
  }

  function handleChange(e) {
    console.log("value till now", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("form submit kr du kya");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* <p onMouseOver={handlehover}>paragraph tag</p> */}

      <button onClick={handleClick}>Click me</button>

      {/* error: avoid immediate invocation */}
      {/* <button onClick={alert("enter the values")}>Click me</button> */}
    </>
  );
}

export default App;
