import logo from './logo.svg';
import Header from './Components/Header';
import Form from './Components/Form'
import Login from './Components/Login';
import Section from './Components/Section';
import { Switch } from '@material-ui/core';
import SwitchBase from '@material-ui/core/internal/SwitchBase';
import { Route, Router } from 'react-router';
import Home from './Components/Home';


const App = () => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path ="/register" component={Form} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/Home" component={Home} />          
        </Switch>
      </Router>
      

      <Header />
      <Section />
    </div>
  )
}

export default App
