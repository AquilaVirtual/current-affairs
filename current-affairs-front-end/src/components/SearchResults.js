import React from "react";
import "../css/SearchResults.css";
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    }
  }
 componentWillReceiveProps({search}) {
    this.setState({ results: search });
   }
  render() {    
    console.log("I'm lost in SeachResults", this.state.results);
    let news = this.state.results ? (
  <div>Some data</div>
    ) : (<div className="post">Loading results...</div>);
    return (
     <div className="main-container">{news}</div>
  )
  }
}
export default SearchResults;
