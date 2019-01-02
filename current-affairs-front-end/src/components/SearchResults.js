import React from "react";
import "../css/SearchResults.css";
class SearchResults extends React.Component {
  render() {
    console.log("I'm lost", this.props.search);
    let news = this.props.search ? (
  <div>Fuck this</div>
    ) : null;
    return (
     <div className="main-container">{news}</div>
  )
  }
}
export default SearchResults;
