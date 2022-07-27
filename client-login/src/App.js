
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {Switch,Route} from "react-router-dom"
import Edit from './components/Edit';
import Detail from './components/Detail';



function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/edit/:id" component={Edit} />
  <Route exact path="/view/:id" component={Detail} />
</Switch>

</>
  );
}

export default App;
