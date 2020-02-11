


import { createStore, combineReducers } from 'redux'


const initStore = () => {

  const serviceApp = combineReducers({
    services: () => ({testingData: 'Hello World', testingNumber: 10})
  })
  const store = createStore(serviceApp)

  return store
}



export default createStore













const services = [{
  id: '2asd8sa7d98',
  user: 'some_id_1',
  category: 'mathematics',
  title: 'How to pick up girls in espressohouse',
  description: 'I am teaching highschool mathematics, algebra, triogometry. I can teach you anything!',
  price: 10, //per hour
  image: 'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}, {
  id: 'ssa9d789as7',
  user: 'some_id_2',
  category: 'programming',
  title: 'I will teach you Programming fast!',
  description: 'I am teaching C++, C#, JS ...',
  price: 10, //per hour
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}]



export const getServices = () => [...services]
