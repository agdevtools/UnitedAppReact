import React, { Component } from 'react';
import Logo from './logo2.png';
import {
  Link
} from "react-router-dom";


class MyHeader extends Component {
  render() {
        return (

        <div class="header">
        <img src={Logo}   width="150" height="125" align="left" alt='website logo' />
         <a href="#default" class="logo" >UnitedApp</a>
              <div class="header-right">
                      <Link to="/"> <a class="active"> Home </a> </Link>
                      <Link to="/team"> <a> Team </a> </Link>
                      <Link to="/contact"> <a>Contact</a> </Link>
              </div>
        </div>

        )
        }

        }

export default MyHeader;