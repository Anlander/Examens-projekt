import { combineReducers } from 'redux'
import services from './services'
import selectedService from '../reducers/selectedService'

const serviceApp = combineReducers({
  services,
  selectedService
})


export default serviceApp
