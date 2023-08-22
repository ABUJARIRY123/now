import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router';

function App() {
  const title = 'Welcome to our website';
  let visits = 60;
  const link = 'https://www.google.com';
  return (
    <Router> 
    <div className="App">
        <Navbar></Navbar>

      <div className="Content">
<Switch>
  <Route path = "/">
<Home/>
  </Route>
</Switch>
        <h2>{title}</h2>
        <p> It has been visited {visits} times</p>
        <a href={link}> Google </a>
      </div>
    </div>
    </Router>
  );
}

export default App;
