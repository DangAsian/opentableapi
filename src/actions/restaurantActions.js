import { FETCH_RESTAURANTS } from './types'
import axios from 'axios'

export const fetchRestaurants = (location) => async dispatch => {
  try {
    const res = await axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${location}`)
    dispatch({
      type: FETCH_RESTAURANTS,
      payload: res.data.restaurants
    })
  } catch (err) {
    console.log(err)
  }
}
