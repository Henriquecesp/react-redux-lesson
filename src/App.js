import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Logout from "./components/Logout";
import User from "./components/User";

function App() {

  return (
    <div className="App">
      <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container>
    </div>
  );
}

export default App;
