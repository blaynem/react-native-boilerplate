import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import MainApp from './MainApp';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
	)
)

const Main = () => (
  <Provider store={store}>
    <MainApp />
   </Provider> 
)

export default Main