import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Header from "./components/Header";

function App() {
  return (
    <div className="App flex flex-col">
      <Router>
        <Header />
        <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/explore">
        <Explore />
      </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
