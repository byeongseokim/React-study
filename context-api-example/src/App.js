import "./App.css";

function App() {
  return (
    <div className="root">
      <h1>Hello World!</h1>
      <Sub1 />
    </div>
  );
}

function Sub1(){
  return (
  <div>
    <h1>Sub1</h1>
    <Sub2 />
  </div>
  );
}

function Sub2() {
  return (
    <div>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  return (
    <div>
      <h1>Sub2</h1>
    </div>
  );
}

export default App;