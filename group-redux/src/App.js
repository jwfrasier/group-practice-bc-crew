import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
