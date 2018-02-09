import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addUser } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chat from './reducers'

const store = createStore(chat)

// Register current user as present in the chat
store.dispatch(addUser('Me'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
