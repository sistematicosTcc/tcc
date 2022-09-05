import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";

const PrivateRouter = ({ children }) => {

  const { userLogado } = useContext(UserContext);

  if (!userLogado) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }

};

export default PrivateRouter;
