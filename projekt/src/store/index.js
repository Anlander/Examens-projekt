


import { createStore, combineReducers } from 'redux'
import servicesReducer from '../reducers'

const addLoggerToDispatch = (store) => {
  const dispatch = store.dispatch
  return (action) => {
    console.group(action.type);
    console.log('prev state', store.getState());
    const returnValue = dispatch(action)
    return returnValue
  }
}

const initStore = () => {

  const serviceApp = combineReducers({
    services: servicesReducer
  })

  const reduxBrowser = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, reduxBrowser)

  store.dispatch = addLoggerToDispatch(store)
  return store
}



export default initStore
