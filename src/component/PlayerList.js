import React from 'react'
import Player from './Player'
import Navbar from './NavBar';
import MyFooter from './MyFooter';

export default function PlayerList() {

        var players = [{id: "10", name: "Marcus Rashford",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/05/13/Marcus-Rashford.jpg",team:"Manchester United",position:"Striker"},
                        {id: "18", name: "Bruno Fernandes",image:"https://i2-prod.manchestereveningnews.co.uk/sport/football/article18307658.ece/ALTERNATES/s1200b/1_Bruno-Fernandes.jpg",team:"Manchester United",position:"Midfielder"},
                        {id: "7", name: "Edinson Cavani",image:"https://assets-cms.thescore.com/uploads/image/file/425975/cropped_GettyImages-1284403932.jpg",team:"Manchester United",position:"Striker"},
                        {id: "2", name: "Victor Linedlof",image:"https://i2-prod.manchestereveningnews.co.uk/incoming/article16874308.ece/ALTERNATES/s615/0_GettyImages-1162813117.jpg",team:"Manchester United",position:"Defender"},
                        {id: "17", name: "Fred",image:"https://i2-prod.manchestereveningnews.co.uk/incoming/article18554261.ece/ALTERNATES/s615/0_GettyImages-1254242926-1.jpg",team:"Manchester United",position:"Midfielder"},
                        {id: "5", name: "Harry Maguire",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200821122040-maguire-tease.jpg",team:"Manchester United",position:"Defender"}
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
    <Navbar/>
    <div className="container">
    <p></p>
      <h2new className='section-title'> Meet the Players</h2new>
    </div>
      <div> <p></p> </div>
    <div className="container">
      <div className='player-center'>
        {players.map((item) => {
          return <Player key={item.id} {...item} />
        })}
      </div>
      </div>
          <MyFooter/>
      </div>

  )
}
