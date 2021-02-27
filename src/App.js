import Header from './Components/Header';
import Form from './Components/Form'
import Login from './Components/Login';
import Section from './Components/Section';
import Home from './Components/Home';
import View from './Components/MyProfile/View';
import { Edit } from './Components/MyProfile/Edit';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";



const App = () => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path ="/register" component={Form} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/" component={Home} />      
          <Route exact path ="/profile/view" component={View} />
          <Route exact path ="/profile/edit" component={Edit} />  
        </Switch>
      </Router>
      

    </div>
  )
}

export default App
