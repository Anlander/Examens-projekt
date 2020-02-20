import { FETCH_SERVICE_SUCCESS } from '../type'


const INITIAL_STATE = {
  item: {}
}


const selectedService = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SERVICE_SUCCESS:
      return {item: action.service}
    default:
      return state
  }
}

export default selectedService 
