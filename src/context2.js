import React, { useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
      var players = [{id: "10", name: "Marcus Rashford",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/05/13/Marcus-Rashford.jpg",team:"Manchester United",position:"Striker"},
                      {id: "18", name: "Bruno Fernandes",image:"https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/06/19223555/Bruno-Fernandes-Man-Utd-celebration.jpg",team:"Manchester United",position:"Midfielder"}
                      ]


      console.log(players)

  return (
    <AppContext.Provider
      value={{ players }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }