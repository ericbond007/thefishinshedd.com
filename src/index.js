import React from 'react';
import  { hydrate, render } from 'react-dom';
import './bootstrap.min.css';
import './animate.min.css';
import './font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


registerServiceWorker();
