import React, { Component } from 'react';
import Navbar from './NavBar';
import MyFooter from './MyFooter';
import logo from './logo2.png';
import ole from './ole.jpg';
import HeaderText from './HeaderText';
import FormCard from './FormCard';
import TableComponent from './LeagueTableComponentNoNav';
import FormTable from './FormTable';
import NextMatch from './NextMatch';
import MatchDate from './MatchDate';
import {
  Link
} from "react-router-dom";

class Homepage extends Component {

constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

    render() {

    const { width } = this.state;
    const isMobile = width <= 500;
      // the rest is the same...

if (isMobile) {
        return (
             <div>
              <Navbar/>
              <div class="header-img">
                 <h2a>The United App <Link to="/playerlist"> </Link> </h2a>
              </div>
              <div class="container" style={{height :"400px" }}>
                <p2><img src={logo} className='logo-home' alt='logo' style={{height :"400px" }} /></p2>
              </div>
           <div class="container" style={{paddingBottom :"5rem" }}>
              <p2> <blockquote align="left">" Winning isn’t everything. There should be no conceit in victory and no despair in defeat.
               At Manchester United we strive for perfection and if we fail we might just have to settle for excellence."</blockquote>
              <cite>Sir Matt Busby</cite></p2>
              </div>

               <div class="team-container">
                <TableComponent/>
               </div>

               <div class="home-container"  style={{paddingLeft :"0rem" }} style={{height :"800px" }} >
                  <div class="container" style={{height :"400px" }} style={{paddingLeft :"0rem" }}>
                                   <p2><img src={ole} className='logo-home' alt='logo' align='left' />
                                   <p><br></br></p>
                                   <p><br></br></p></p2>
                                   </div>
                                   <div class="container" style={{paddingBottom :"5rem" }}>
                                    <p2><blockquote align="left"  >" At Man United, we play without fear, we play with courage. Go out there and express your skills. Be the kids that love to play football and go out and play in front of the best fans in the world."</blockquote>
                                   <cite>Ole Gunnar Solskjaer</cite></p2>
                                   </div>
                                   </div>
                                   <p><br></br></p>

               <div class="home-container" style={{paddingTop :"5rem" }} style={{paddingLeft :"0rem" }} style={{height :"800px" }}>

                                 <HeaderText text="Upcoming Fixtures" />
                                  <FormTable />
                                             <div>
                                                         <p><br></br></p>
                                                         <p><br></br></p>
                                              </div>
                                  </div>

            </div>

        )

} else {

        return (
                     <div>
                      <Navbar/>
                      <div class="header-img">
                         <h2a>The United App <Link to="/playerlist"> </Link> </h2a>
                      </div>
                      <div class="home-container" style={{paddingBottom :"10rem" }}>
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
                     <blockquote align="right"  >At Man United, we play without fear, we play with courage. Go out there and express your skills. Be the kids that love to play football and go out and play in front of the best fans in the world</blockquote>
                    <cite>Ole Gunnar Solskjaer</cite></p2>
                    </div>
                    <p><br></br></p>

                  <div class="home-container" style={{paddingTop :"5rem" }} style={{float :"left" }} style={{height :"800px" }}>

                  <HeaderText text="Upcoming Fixtures" />
                                <div class="home-container" style={{paddingLeft :"9rem" }} >
                                 <FormTable />
                                 </div>
                              <div>
                                          <p><br></br></p>
                                          <p><br></br></p>
                               </div>
                   </div>

                      </div>

                )

}

    }
}

export default Homepage
