


import { createStore, combineReducers } from 'redux'
import servicesReducer from '../reducers'

const initStore = () => {

  const serviceApp = combineReducers({
    services: servicesReducer
  })

  const reduxBrowser = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, reduxBrowser)

  return store
}



export default initStore
