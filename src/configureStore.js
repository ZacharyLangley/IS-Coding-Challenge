import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import reduxThunk from 'redux-thunk';

import createRootReducer from './domain/reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // Root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // For dispatching history actions
        reduxThunk // Async/Sync Redux Middleware
      ),
    ),
  )

  return store
}