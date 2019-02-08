import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

 const store = createStore(rootReducer);

 const AppInstance = () => (
    <Provider store={store}>
        <App/>
    </Provider>
 );

ReactDOM.render(<BrowserRouter><AppInstance /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
