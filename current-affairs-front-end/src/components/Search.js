import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../css/Search.css";

import { countryData} from "../countryData";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
      category: "",
      search: [],
      countries: countryData, 
    };
  }

  handleSearch = () => {
  console.log("Countries Data", countryData)
    let countryName = this.state.country;
    //checking if user entered a text or not
    if (countryName !== null) {
      let targetCountry = this.state.countries.filter(country => {
        if (
          country.name.toLowerCase() === countryName[0].toLowerCase().trim()
        ) {
          return country.name;
        }
        return null;
      });
      //checking if our returned value is an empty array or undefined
      if (targetCountry !== undefined && targetCountry.length !== 0) {
        let countryCode = targetCountry[0]["iso"];
        let category = this.state.category;
        let obj = {
          countryCode: countryCode,
          category: category
        };
        this.props.search(obj);

        this.setState({
          country: "",
          category: ""
        });
      } else {
        //a placeholer for modal
        alert("There is no country by that name.");
      }
    } else {
      //a placeholer for modal
      alert("Please enter a country to search.");
    }
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: [e.target.value] });
  };
  render() {
    return (
      <div className="search-container">
        <div className="search-body">
          <div className="headline">
            Search. Learn. <span className="last-word">Know.</span>
          </div>
          <div className="center-search">
            <div className="search-input-left">
              <input
                autoComplete="off"
                placeholder="News category, Keyword"
                className="input-left"
                type="text"
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
              />
              <i className="fa fa-search" />
            </div>
            <div className="search-input-right">
              <i className="fas fa-map-marker-alt" />
              <input
                autoComplete="off"
                placeholder="Country"
                className="input-right"
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleInputChange}
              />
            </div>
            <button onClick={this.handleSearch} className="btn-main-cta">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
