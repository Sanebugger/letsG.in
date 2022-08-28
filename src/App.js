
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';


function App() {
  return (
    <>
    <Router>
      <Header/> 
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/contact" component={Contact}></Route>

      </Switch>
      
    </Router>

  </>
  );
}

export default App;
