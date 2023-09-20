// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<h1>Hellos World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);