import Home from "./components/pages/Home";
import SignIn from "./components/pages/Signin";
import SignUp from "./components/pages/Signup";
import Browse from "./components/pages/Browse";
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/browse" component={Browse} />
      </Switch>


    </>
  );
}

export default App;
