import "./App.css";
import { supabase } from "./actions/supabase";
function App() {
  console.log(supabase);
  return (
    <div className="App">
      <h1>Group Project</h1>
    </div>
  );
}

export default App;
