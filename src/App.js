import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStore } from './state/store';
import { Home } from './screens/Home';
import { Quiz } from './screens/Quiz';
import { Results } from './screens/Results';

const store = makeStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
            <Route path="/quiz" component={Quiz} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
