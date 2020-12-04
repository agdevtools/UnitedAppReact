import React from 'react'
import { Link } from 'react-router-dom'
export default function Player({ image, name, id, team, position }) {
  return (
    <article className='player'>
      <div className='img-container'>
        <img src={image} alt={name} width="100%"/>
      </div>
      <div className='player-footer'>
        <h3>{name}</h3>
        <p>{team}</p>
        <p>{position}</p>
        <Link to={`/player/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}