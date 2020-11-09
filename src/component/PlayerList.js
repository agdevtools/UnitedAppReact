import React from 'react'
import Player from './Player'
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

export default function PlayerList() {

        var players = [{id: "10", name: "Marcus Rashford",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/05/13/Marcus-Rashford.jpg",team:"Manchester United",position:"Striker"},
                        {id: "18", name: "Bruno Fernandes",image:"https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/06/19223555/Bruno-Fernandes-Man-Utd-celebration.jpg",team:"Manchester United",position:"Midfielder"},
                        {id: "10", name: "Marcus Rashford",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/05/13/Marcus-Rashford.jpg",team:"Manchester United",position:"Striker"},
                        {id: "18", name: "Bruno Fernandes",image:"https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/06/19223555/Bruno-Fernandes-Man-Utd-celebration.jpg",team:"Manchester United",position:"Midfielder"},
                        {id: "10", name: "Marcus Rashford",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/05/13/Marcus-Rashford.jpg",team:"Manchester United",position:"Striker"},
                        {id: "18", name: "Bruno Fernandes",image:"https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/06/19223555/Bruno-Fernandes-Man-Utd-celebration.jpg",team:"Manchester United",position:"Midfielder"}
                        ]

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
