import React from "react";
import { NavLink } from "react-router-dom";
const RequestError = () => {
  return (
    <div className="RequestError">
      <NavLink to="/" activeClassName="navlink">
        <button>
          Error Back to main page
        </button>
      </NavLink>
    </div>
  );
};

export default RequestError;
