import React, {useState} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import {fetchRestaurants} from '../actions/restaurantActions'

const Results = props => {
  const [formData, setFormData] = useState({
    location: ""
  })

  const {location} = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault()
    props.fetchRestaurants(location)

    // const cityAPI = `http://opentable.herokuapp.com/api/restaurants?city=${location}`
    // console.log(cityAPI)
    //
    // try {
    //   const res = await axios.get(cityAPI);
    //
    //
    //
    //
    //
    // } catch(err) {
    //   console.log(err)
    // }
    //

  }


  const list = props.restaurants.restaurants.map(restaurant => {
    return (
      <div key={restaurant.id}>
      <h2>name: {restaurant.name}</h2>
      <p>address: {restaurant.address}, {restaurant.city}, {restaurant.state}</p>
      <p>price: {restaurant.price}</p>
      </div>
    )
  })

  return (

    <div>
      <h1>Pick a city!</h1>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group" >
          <input type="text" placeholder="Toronto" name="location" value={location} onChange={e=>onChange(e)} />
        </div>
        <input type="submit" className="btn" value="Register"/>
      </form>
      {/* {console.log(props.restaurants)} */}
      <div>
        {!props.restaurants.restaurants.length > 0 ? <h1>Find a restaurant!</h1> : list}
      </div>
    </div>
  );
};

Results.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
})

export default  connect(mapStateToProps, {fetchRestaurants})(Results);
