import React from "react";
import "../css/SearchResults.css";

import NewsCard from "./NewsCard";
class SearchResults extends React.Component {
  render() {  
    let news = this.props.search ? (
      <div className="container">
        {this.props.search.map((article, i) => {
          return <NewsCard article={article} key={i} />;
        })}
      </div>
    ) : (
      <div className="post">Loading results...</div>
    );
    return (
      <div className="main-container">
        <div className="card-container">{news}</div>
      </div>
    );
  }
}
export default SearchResults;
