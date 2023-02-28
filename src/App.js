import './css/App.css';
import './css/body.css';
import './css/aside.css';
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
  render(){
    return(
      <Router >
        <div>
          <Home />
          {/* <Route path="/home" component={Home} /> */}

          {/* <Route path="/AnswerCreatePage" component={AnswerCreatePage} /> */}
        </div>
      </Router>
      )
     
}
}

export default App;
