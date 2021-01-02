import React, { Component } from 'react';
import Navbar from './NavBar';
import MyFooter from './MyFooter';
import logo from './logo2.png';
import ole from './ole.jpg';
import HeaderText from './HeaderText';
import FormCard from './FormCard';
import TableComponent from './LeagueTableComponent';
import FormTable from './FormTable';
import NextMatch from './NextMatch';
import MatchDate from './MatchDate';
import {
  Link
} from "react-router-dom";

class Homepage extends Component {

    render() {

        return (
             <div>
              <Navbar/>
              <div class="header-img">
                 <h2a>The United App <Link to="/playerlist"> </Link> </h2a>
              </div>
              <div class="home-container">
              <p2><img src={logo} className='logo-home' alt='logo' />
              <p><br></br></p>
              <p><br></br></p>
               <blockquote align="right">Winning isn’t everything. There should be no conceit in victory and no despair in defeat.
               At Manchester United we strive for perfection and if we fail we might just have to settle for excellence</blockquote>
              <cite>Sir Matt Busby</cite></p2>
              </div>

               <div class="team-container"  style={{paddingBottom :"5rem" }}>
                <TableComponent/>
               </div>

            <div class="home-container">
            <p2><img src={ole} className='logo-home' alt='logo' />
            <p><br></br></p>
            <p><br></br></p>
             <blockquote align="right">At Man United, we play without fear, we play with courage. Go out there and express your skills. Be the kids that love to play football and go out and play in front of the best fans in the world</blockquote>
            <cite>Ole Gunnar Solskjaer</cite></p2>
            </div>
            <p><br></br></p>

<<<<<<< HEAD

            </div>
=======
          <div class="home-container" style={{paddingTop :"5rem" }}>

          <HeaderText text="Upcoming Fixtures" />
          <MatchDate/>
           <FormTable/>
           </div>

         <div class="home-container" style={{paddingTop :"5rem" }}>

          </div>






              </div>
>>>>>>> master



        )
    }
}

export default Homepage
