import React from "react";

class SearchResults extends React.Component {
  render() {
    console.log("I'm lost", this.props.search);
    let news = this.props.search ? (
      <div className="contain  black">
        <div className="post">
          <div className="title" />
          <div className="content" />
        </div>
      </div>
    ) : null;
    return <div>{news}</div>;
  }
}
export default SearchResults;
