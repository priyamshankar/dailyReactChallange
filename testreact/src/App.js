import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
// import {Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Auth from './components/auth';
import Signup from './components/signup';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Route>

    </Route>
    {/* <Route exact path="/">
    <Home/>
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/logout">
    <Logout/>
    </Route>

    <Route path="/auth">
    <Auth/>
    </Route>

    <Route path="/signup">
    <Signup/>
    </Route> */}
    </>
  );
}

export default App;