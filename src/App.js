import Login from "./components/Login";
import Logout from "./components/Logout";
import User from "./components/User";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </header>
    </div>
  );
}

export default App;
