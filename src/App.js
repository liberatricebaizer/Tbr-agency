import { Route, Switch, Redirect } from "react-router-dom";
import { HomeBar, NavBar, SignIn, SignUp, Support } from "./components";
import { Booking, TakeRide } from "./container";
import Slider from "./container/about/Slider";
import RentBar from "./container/Rent/RentBar";
import Driver from "./pages/Driver";
import RentForm from "./pages/RentForm";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" exact>
            <HomeBar />
          </Route>

          <Route path="/Ride">
            <TakeRide />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
          <Route path="/Rent">
            <RentBar />
          </Route>
          <Route path="/Help">
            <Support />
          </Route>
          <Route path="/About us">
            <Slider />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/RentForm">
            <RentForm />
          </Route>
          <Route path="/Driver">
            <Driver />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
