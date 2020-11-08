import React from 'react'
import Player from './Player'
import Loading from './Loading'
import { useGlobalContext } from '../context2'
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

export default function PlayerList() {
  const { players, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (players.length < 1) {
    return (
      <h2 className='section-title'>
        no players matched your search criteria
      </h2>
    )
  }
  return (
    <div className="container">
     <MyHeader/>
      <h2new className='section-title'>Meet the Players</h2new>
      <div className='cocktails-center'>
        {players.map((item) => {
          return <Player key={item.id} {...item} />
        })}
      </div>
          <MyFooter/>
    </div>

  )
}
