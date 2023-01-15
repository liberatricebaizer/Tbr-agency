import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Booking from "./components/NavBar/Booking";
import TakeRide from "./components/NavBar/TakeRide";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>

          <Route path="/Ride">
            <TakeRide />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/About us">
            <AboutUs />
          </Route>
          <Route path="/Signin">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
