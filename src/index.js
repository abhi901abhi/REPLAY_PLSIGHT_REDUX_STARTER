import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './index.css';
import './styles/styles.css'; // Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseAction';
import {loadAuthors} from './actions/authorAction';

import configureStore from './store/configureStore';

const store = configureStore();
//On Page load , load all below items
store.dispatch(loadCourses());
store.dispatch(loadAuthors());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
 </Provider>,
document.getElementById('root'));
registerServiceWorker();
