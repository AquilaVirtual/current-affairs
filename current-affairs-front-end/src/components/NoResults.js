import React from "react";

import "../css/NoResults.css"
const NoResults = () => {
  return (
  <div className="main-container">
    <div className="container-body">
    <i style={{fontSize: "60px", color: "#3c483fc4", marginTop: "200px"}} className="fas fa-exclamation-triangle"></i>
  <div className="no-results">
    <h1 style={{fontSize: "24px"}}>No Results</h1>
    <br/>  
    <p>There was no results for the country or news category you entered.</p>
    <p>For categories, try using keyword like Politics, Science, Technology, Entertainment, etc.</p>
  </div>
  </div>
  </div>
  )
};

export default NoResults;
