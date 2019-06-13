import React from 'App/node_modules/react';
import ReactDOM from 'App/node_modules/react-dom';
import { BrowserRouter as Router } from 'App/node_modules/react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
