

import './App.css';
import Home from './Home';
import Aboutus from './About';
import Gallery from './gallery';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigat from './nav';

function App() {
  return (
    <div >

      <Router>
        <Navigat/>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Aboutus} />
        <Route exact path="/gallery" component={Gallery} />
      </Router>

      {/* <Home/>
      <Aboutus/>
      <Gallery/> */}
    </div>
  );
}

export default App;
