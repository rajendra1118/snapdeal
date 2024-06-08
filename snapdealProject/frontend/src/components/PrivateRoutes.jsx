
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import {Navigate} from"react-router-dom"

function PrivateRoutes({ children }) {
    const {authDetails}= useContext(AuthContext)
 

    if (!authDetails?.isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return children;
  }


  export {PrivateRoutes}