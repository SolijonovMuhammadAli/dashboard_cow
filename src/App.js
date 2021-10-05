import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sut from "./Components/Sut/Sut";
import Yem from "./Components/Yem/Yem";
import Mollar from "./Components/Mollar/Mollar";
import Ishchilar from "./Components/Ishchilar/Ishchilar";
import Axborot from "./Components/Axborot/Axborot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Dashboard>
            <Route exact path="/sut" component={Sut} />
            <Route exact path="/yem" component={Yem} />
            <Route exact path="/mollar" component={Mollar} />
            <Route exact path="/ishchilar" component={Ishchilar} />
            <Route exact path="/axborot" component={Axborot} />
          </Dashboard>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
