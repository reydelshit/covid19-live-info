import React from 'react'
import { Link } from 'react-router-dom'

const ListCountry = ({countryName}) => {
  return (
    <Link to={`/countries/${countryName}`}>{countryName}</Link>
  )
}

export default ListCountry