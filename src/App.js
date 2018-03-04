import React from 'react';
import Popular from './Popular';
import Battle from './Battle';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
      return (
        <Router>
          <div className='container'>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/battle" component={Battle} />
              <Route path='/popular' component={Popular} />
              <Route render={() => <p> Not Found </p>} />
            </Switch>
          </div>
        </Router>
      )
  }
}

export default App;
