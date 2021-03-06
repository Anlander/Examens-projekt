import { createStore } from 'redux'
import serviceApp from '../reducers'


const logger = store => nextDispatch => action => {
  console.group(action.type)
  console.log(store.getState())
  console.log(action)
  const returnValue = nextDispatch(action)
  console.log(store.getState())
  console.groupEnd(action.type)
  return returnValue
}



const promise = store => nextDispatch => action => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch)
  }

  return nextDispatch(action)
}



const applyMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}


const initStore = () => {
  const middlewares = [promise]

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  applyMiddlewares(store, middlewares)

  return store
}

export default initStore
