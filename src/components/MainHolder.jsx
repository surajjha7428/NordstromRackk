import React from 'react'
import "../components/MainHolder.css"


function MaiHolder (){

    return (
      <div>
        {/* Main Heading div */}
        <div id="main-heading-container">
          <div id="main-heading">
            <p id="main-heading-p">More to Rack, easier and faster.</p>
          </div>
        </div>
        {/* Main Heading div End */}

        {/* SignIn bar start */}
        <div id="sign-in">
          <div id="sign-in-container">
            <button id="sign-in-button">Sign In or Create an Account</button>
          </div>
        </div>
        {/* SignIn bar end */}

        <img id="image-2" src="src/assets/Sale.png" alt=" image-2" />
      </div>
    );
}

export default MaiHolder