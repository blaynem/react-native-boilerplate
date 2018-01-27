import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import MainApp from './MainApp';

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk),
	)
)

const Main = () => (
  <Provider store={store}>
    <MainApp />
   </Provider> 
)

export default Main