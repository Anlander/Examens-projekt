import { FETCH_SERVICES } from '../type'

const INITINAL_STATE = {
  items: []
}

const servicesReducer = (state = INITINAL_STATE, action) => {
  switch(action.type) {
    case 'FETCH_SERVICES':
    return {...state, items: action.services}
    default:
    return state
  }
}


export default servicesReducer
