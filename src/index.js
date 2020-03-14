import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ItemProvider } from './context';

ReactDOM.render(
    <ItemProvider>
        <Router>
            <App />
        </Router>
    </ItemProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
