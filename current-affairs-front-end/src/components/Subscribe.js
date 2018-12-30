import React from "react";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      country: "",
      news: "",

      error: false,
      errorMessage: ""
    };
  }

  render() {
    return <div>Subscribe</div>;
  }
}
export default Subscribe;
