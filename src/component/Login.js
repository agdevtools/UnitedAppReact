import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Link
} from "react-router-dom";

const Login = () => {

  const { loginWithRedirect } = useAuth0();

        return (
              <div class="header-img">
                 <h2a>The United App <button className="btn btn-primary btn-details" onClick={() => loginWithRedirect()}>Log In</button> </h2a>
                  </div>
        )

}

export default Login