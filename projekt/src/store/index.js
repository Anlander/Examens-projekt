import { createStore, combineReducers } from 'redux'
import servicesReducer from '../reducers'


const addLoggerToDispatch = store => {
  const dispatch = store.dispatch

  return action => {
    const returnValue = dispatch(action)
    return returnValue
  }
}

const addPromiseToDispatch = store => {
  const dispatch = store.dispatch

  return action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch)
    }

    return dispatch(action)
  }
}


const initStore = () => {

  const serviceApp = combineReducers({
    services: servicesReducer
  })

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggerToDispatch(store)
  }

  store.dispatch = addPromiseToDispatch(store)

  return store
}

export default initStore
