import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE } from '../type'

import * as api from '../API'

export const fetchServices = () => dispatch =>
   api
    .fetchServices()
    .then(services => dispatch(
      {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    )
  )


export const fetchServiceById = id => (dispatch, getState) => {
  const lastService = getState().selectedService.item
  if (lastService.id && lastService.id === id) { return Promise.resolve() }

  dispatch({type: REQUEST_SERVICE})
  return api
    .fetchServiceById(id)
    .then(service => dispatch(
      {
        type: FETCH_SERVICE_SUCCESS,
        service
      }
    )
  )
}
