import React from "react";
import "../css/SearchResults.css";
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  componentDidMount = () => {
    this.setState({
      results: this.props.search
    });
  };
  render() {
    console.log("I'm lost in SeachResults", this.props.search);
    console.log("State SeachResults", this.state.results);
    let news = this.props.search ? (
      <div className="container data">
       { this.props.search.map((article) => {
         return (
         <div>{<img alt="" src={article.urlToImage}/>}</div>
         )
       })}
       </div>
    ) : (
      <div className="post">Loading results...</div>
    );
    return <div className="main-container">{news}</div>;
  }
}
export default SearchResults;
