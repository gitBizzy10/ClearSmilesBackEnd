import React from 'react';
import Home from './Home/Home.jsx';
import Doctors from './Doctors/Doctors.jsx';
import Map from './Map/Map.jsx';
import Login from './Login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Redirect
} from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/map" component={Map} />
        </div>
      </HashRouter>
    )
  }
}
