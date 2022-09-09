//logo
import Logo from "../../../images/logo_crp.png";
import React from "react";
//react router
import { useParams } from "react-router-dom";

export const Emailsent = () => {
  const {userEmail} = useParams();
  return (
      <div>
          <div
          style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "transparent",
              width: "100%",
              padding: "15px",
              display: "flex",
              justifyContent: "flex-start",
              }}
          >
              <img src={Logo} alt="logo"/>
              </div>
                  <h1 size={65}>Account Confirmation</h1>
                  <p>An email with your account confirmation link has been sent to your 
                  email: <b>{userEmail}</b></p>
                  <h3>
                      Check your email and come back to proeed!
                  </h3>
                  <div>
                      <button to={`/login/${userEmail}`}>
                          Proceed
                      </button>
                  </div>
      </div>
  );
};

export default Emailsent;