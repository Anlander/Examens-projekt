import { FETCH_SERVICES } from '../type'
import db from '../db'

import firebase from 'firebase/app'
import 'firebase/firestore'


const services = [{
  id: '2asd8sa7d98',
  user: 'some_id_1',
  category: 'mathematics',
  title: 'How to pick be mature',
  description: 'I am teaching highschool mathematics, algebra, triogometry. I can teach you anything!',
  price: 10,
  image: 'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}, {
  id: 'ssa9d789as7',
  user: 'some_id_2',
  category: 'programming',
  title: 'I will teach you Programming fast!',
  description: 'I am teaching C++, C#, JS ...',
  price: 10,
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}]




export const fetchServices = () => {
// console.log(db + 'fuck detta');

  db.collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => doc.data())
      console.log(services);
      return {
        type: FETCH_SERVICES,
        services
      }
    })
}
