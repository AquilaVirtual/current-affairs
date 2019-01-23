import React from "react";
import "../css/SearchResults.css";

import NewsCard from "./NewsCard";
class SearchResults extends React.Component {
  render() {
    let news =
      this.props.search && this.props.search.length !== 0 ? (
        <div className="container">
          {this.props.search.map((article, i) => {
            return <NewsCard article={article} key={i} />;
          })}
        </div>
      ) : (
        <div className="container-body">
          <i
            style={{ fontSize: "4rem", color: "#3c483fc4", marginTop: "200px" }}
            className="fas fa-exclamation-triangle"
          />
          <div className="no-results">
            <h1 style={{ fontSize: "2rem" }}>No Results</h1>
            <br />
            <p>
              There was no results for the country or news category you entered.
            </p>
            <p>
              For categories, try using a keyword like Politics, Science,
              Technology, Entertainment, etc.
            </p>
          </div>
        </div>
      );
    return (
      <div className="main-container">
        <div className="card-container">{news}</div>
      </div>
    );
  }
}
export default SearchResults;
