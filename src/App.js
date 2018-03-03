import React from 'react';
import Popular from './Popular';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
      return (
        <Router>
          <div className='container'>
            <Route path='/popular' component={Popular} />
          </div>
        </Router>
      )
  }
}

export default App;
