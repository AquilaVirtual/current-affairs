import React from "react";
import NavBar from './NavBar';

class SearchResults extends React.Component {

  render() {
      console.log("I'm lost", this.props.search)
      let news =  this.props.search ? (
        <div className="contain  black">
            <div className="post">
                <div className="title">This is some title</div>
                <div className="content">
                    this is some content
                </div>
            </div>
        </div>
      ):(
          null
      );
    return <div>
        {/* <NavBar /> */}
        {news}
        </div>;
  }
}
export default SearchResults;
