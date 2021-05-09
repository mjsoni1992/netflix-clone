
import Home from "./components/pages/Home";
import SignIn from "./components/pages/Signin";
import SignUp from "./components/pages/Signup";
import Browse from "./components/pages/browse/Browse";
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";

function App() {


  return (
    <>

      <AuthProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/browse" component={Browse} />
        </Switch>
      </AuthProvider>


    </>
  );
}

export default App;
