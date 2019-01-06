import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

import axios from "axios";

import SearchResults from "./SearchResults";
import "../css/Search.css";

let key = process.env.REACT_APP_NEWSAPIKEY;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
      category: null,
      search: null,
      countries: [
        { name: "Afghanistan", iso: "AF" },
        { name: "Åland Islands", iso: "AX" },
        { name: "Albania", iso: "AL" },
        { name: "Algeria", iso: "DZ" },
        { name: "American Samoa", iso: "AS" },
        { name: "Andorra", iso: "AD" },
        { name: "Angola", iso: "AO" },
        { name: "Anguilla", iso: "AI" },
        { name: "Antarctica", iso: "AQ" },
        { name: "Antigua and Barbuda", iso: "AG" },
        { name: "Argentina", iso: "AR" },
        { name: "Armenia", iso: "AM" },
        { name: "Aruba", iso: "AW" },
        { name: "Australia", iso: "AU" },
        { name: "Austria", iso: "AT" },
        { name: "Azerbaijan", iso: "AZ" },
        { name: "Bahamas", iso: "BS" },
        { name: "Bahrain", iso: "BH" },
        { name: "Bangladesh", iso: "BD" },
        { name: "Barbados", iso: "BB" },
        { name: "Belarus", iso: "BY" },
        { name: "Belgium", iso: "BE" },
        { name: "Belize", iso: "BZ" },
        { name: "Benin", iso: "BJ" },
        { name: "Bermuda", iso: "BM" },
        { name: "Bhutan", iso: "BT" },
        {
          name: "Bolivia (Plurinational State of)",
          iso: "BO"
        },
        {
          name: "Bonaire, Sint Eustatius and Saba",
          iso: "BQ"
        },
        { name: "Bosnia and Herzegovina", iso: "BA" },
        { name: "Botswana", iso: "BW" },
        { name: "Bouvet Island", iso: "BV" },
        { name: "Brazil", iso: "BR" },
        {
          name: "British Indian Ocean Territory",
          iso: "IO"
        },
        { name: "Brunei Darussalam", iso: "BN" },
        { name: "Bulgaria", iso: "BG" },
        { name: "Burkina Faso", iso: "BF" },
        { name: "Burundi", iso: "BI" },
        { name: "Cabo Verde", iso: "CV" },
        { name: "Cambodia", iso: "KH" },
        { name: "Cameroon", iso: "CM" },
        { name: "Canada", iso: "CA" },
        { name: "Cayman Islands", iso: "KY" },
        { name: "Central African Republic", iso: "CF" },
        { name: "Chad", iso: "TD" },
        { name: "Chile", iso: "CL" },
        { name: "China", iso: "CN" },
        { name: "Christmas Island", iso: "CX" },
        { name: "Cocos (Keeling) Islands", iso: "CC" },
        { name: "Colombia", iso: "CO" },
        { name: "Comoros", iso: "KM" },
        { name: "Congo", iso: "CG" },
        {
          name: "Congo (Democratic Republic of the)",
          iso: "CD"
        },
        { name: "Cook Islands", iso: "CK" },
        { name: "Costa Rica", iso: "CR" },
        { name: "Côte d'Ivoire", iso: "CI" },
        { name: "Croatia", iso: "HR" },
        { name: "Cuba", iso: "CU" },
        { name: "Curaçao", iso: "CW" },
        { name: "Cyprus", iso: "CY" },
        { name: "Czechia", iso: "CZ" },
        { name: "Denmark", iso: "DK" },
        { name: "Djibouti", iso: "DJ" },
        { name: "Dominica", iso: "DM" },
        { name: "Dominican Republic", iso: "DO" },
        { name: "Ecuador", iso: "EC" },
        { name: "Egypt", iso: "EG" },
        { name: "El Salvador", iso: "SV" },
        { name: "Equatorial Guinea", iso: "GQ" },
        { name: "Eritrea", iso: "ER" },
        { name: "Estonia", iso: "EE" },
        { name: "Eswatini", iso: "SZ" },
        { name: "Ethiopia", iso: "ET" },
        {
          name: "Falkland Islands (Malvinas)",
          iso: "FK"
        },
        { name: "Faroe Islands", iso: "FO" },
        { name: "Fiji", iso: "FJ" },
        { name: "Finland", iso: "FI" },
        { name: "France", iso: "FR" },
        { name: "French Guiana", iso: "GF" },
        { name: "French Polynesia", iso: "PF" },
        {
          name: "French Southern Territories",
          iso: "TF"
        },
        { name: "Gabon", iso: "GA" },
        { name: "Gambia", iso: "GM" },
        { name: "Georgia", iso: "GE" },
        { name: "Germany", iso: "DE" },
        { name: "Ghana", iso: "GH" },
        { name: "Gibraltar", iso: "GI" },
        { name: "Greece", iso: "GR" },
        { name: "Greenland", iso: "GL" },
        { name: "Grenada", iso: "GD" },
        { name: "Guadeloupe", iso: "GP" },
        { name: "Guam", iso: "GU" },
        { name: "Guatemala", iso: "GT" },
        { name: "Guernsey", iso: "GG" },
        { name: "Guinea", iso: "GN" },
        { name: "Guinea-Bissau", iso: "GW" },
        { name: "Guyana", iso: "GY" },
        { name: "Haiti", iso: "HT" },
        {
          name: "Heard Island and McDonald Islands",
          iso: "HM"
        },
        { name: "Holy See", iso: "VA" },
        { name: "Honduras", iso: "HN" },
        { name: "Hong Kong", iso: "HK" },
        { name: "Hungary", iso: "HU" },
        { name: "Iceland", iso: "IS" },
        { name: "India", iso: "IN" },
        { name: "Indonesia", iso: "ID" },
        {
          name: "Iran (Islamic Republic of)",
          iso: "IR"
        },
        { name: "Iraq", iso: "IQ" },
        { name: "Ireland", iso: "IE" },
        { name: "Isle of Man", iso: "IM" },
        { name: "Israel", iso: "IL" },
        { name: "Italy", iso: "IT" },
        { name: "Jamaica", iso: "JM" },
        { name: "Japan", iso: "JP" },
        { name: "Jersey", iso: "JE" },
        { name: "Jordan", iso: "JO" },
        { name: "Kazakhstan", iso: "KZ" },
        { name: "Kenya", iso: "KE" },
        { name: "Kiribati", iso: "KI" },
        {
          name: "Korea (Democratic People's Republic of)",
          iso: "KP"
        },
        { name: "Korea (Republic of)", iso: "KR" },
        { name: "Kuwait", iso: "KW" },
        { name: "Kyrgyzstan", iso: "KG" },
        {
          name: "Lao People's Democratic Republic",
          iso: "LA"
        },
        { name: "Latvia", iso: "LV" },
        { name: "Lebanon", iso: "LB" },
        { name: "Lesotho", iso: "LS" },
        { name: "Liberia", iso: "LR" },
        { name: "Libya", iso: "LY" },
        { name: "Liechtenstein", iso: "LI" },
        { name: "Lithuania", iso: "LT" },
        { name: "Luxembourg", iso: "LU" },
        { name: "Macao", iso: "MO" },
        {
          name: "Macedonia (the former Yugoslav Republic of)",
          iso: "MK"
        },
        { name: "Madagascar", iso: "MG" },
        { name: "Malawi", iso: "MW" },
        { name: "Malaysia", iso: "MY" },
        { name: "Maldives", iso: "MV" },
        { name: "Mali", iso: "ML" },
        { name: "Malta", iso: "MT" },
        { name: "Marshall Islands", iso: "MH" },
        { name: "Martinique", iso: "MQ" },
        { name: "Mauritania", iso: "MR" },
        { name: "Mauritius", iso: "MU" },
        { name: "Mayotte", iso: "YT" },
        { name: "Mexico", iso: "MX" },
        {
          name: "Micronesia (Federated States of)",
          iso: "FM"
        },
        { name: "Moldova (Republic of)", iso: "MD" },
        { name: "Monaco", iso: "MC" },
        { name: "Mongolia", iso: "MN" },
        { name: "Montenegro", iso: "ME" },
        { name: "Montserrat", iso: "MS" },
        { name: "Morocco", iso: "MA" },
        { name: "Mozambique", iso: "MZ" },
        { name: "Myanmar", iso: "MM" },
        { name: "Namibia", iso: "NA" },
        { name: "Nauru", iso: "NR" },
        { name: "Nepal", iso: "NP" },
        { name: "Netherlands", iso: "NL" },
        { name: "New Caledonia", iso: "NC" },
        { name: "New Zealand", iso: "NZ" },
        { name: "Nicaragua", iso: "NI" },
        { name: "Niger", iso: "NE" },
        { name: "Nigeria", iso: "NG" },
        { name: "Niue", iso: "NU" },
        { name: "Norfolk Island", iso: "NF" },
        { name: "Northern Mariana Islands", iso: "MP" },
        { name: "Norway", iso: "NO" },
        { name: "Oman", iso: "OM" },
        { name: "Pakistan", iso: "PK" },
        { name: "Palau", iso: "PW" },
        { name: "Palestine, State of", iso: "PS" },
        { name: "Panama", iso: "PA" },
        { name: "Papua New Guinea", iso: "PG" },
        { name: "Paraguay", iso: "PY" },
        { name: "Peru", iso: "PE" },
        { name: "Philippines", iso: "PH" },
        { name: "Pitcairn", iso: "PN" },
        { name: "Poland", iso: "PL" },
        { name: "Portugal", iso: "PT" },
        { name: "Puerto Rico", iso: "PR" },
        { name: "Qatar", iso: "QA" },
        { name: "Réunion", iso: "RE" },
        { name: "Romania", iso: "RO" },
        { name: "Russian Federation", iso: "RU" },
        { name: "Rwanda", iso: "RW" },
        { name: "Saint Barthélemy", iso: "BL" },
        {
          name: "Saint Helena, Ascension and Tristan da Cunha",
          iso: "SH"
        },
        { name: "Saint Kitts and Nevis", iso: "KN" },
        { name: "Saint Lucia", iso: "LC" },
        {
          name: "Saint Martin (French part)",
          iso: "MF"
        },
        { name: "Saint Pierre and Miquelon", iso: "PM" },
        {
          name: "Saint Vincent and the Grenadines",
          iso: "VC"
        },
        { name: "Samoa", iso: "WS" },
        { name: "San Marino", iso: "SM" },
        { name: "Sao Tome and Principe", iso: "ST" },
        { name: "Saudi Arabia", iso: "SA" },
        { name: "Senegal", iso: "SN" },
        { name: "Serbia", iso: "RS" },
        { name: "Seychelles", iso: "SC" },
        { name: "Sierra Leone", iso: "SL" },
        { name: "Singapore", iso: "SG" },
        { name: "Sint Maarten (Dutch part)", iso: "SX" },
        { name: "Slovakia", iso: "SK" },
        { name: "Slovenia", iso: "SI" },
        { name: "Solomon Islands", iso: "SB" },
        { name: "Somalia", iso: "SO" },
        { name: "South Africa", iso: "ZA" },
        {
          name: "South Georgia and the South Sandwich Islands",
          iso: "GS"
        },
        { name: "South Sudan", iso: "SS" },
        { name: "Spain", iso: "ES" },
        { name: "Sri Lanka", iso: "LK" },
        { name: "Sudan", iso: "SD" },
        { name: "Suriname", iso: "SR" },
        { name: "Svalbard and Jan Mayen", iso: "SJ" },
        { name: "Sweden", iso: "SE" },
        { name: "Switzerland", iso: "CH" },
        { name: "Syrian Arab Republic", iso: "SY" },
        { name: "Taiwan, Province of China", iso: "TW" },
        { name: "Tajikistan", iso: "TJ" },
        {
          name: "Tanzania, United Republic of",
          iso: "TZ"
        },
        { name: "Thailand", iso: "TH" },
        { name: "Timor-Leste", iso: "TL" },
        { name: "Togo", iso: "TG" },
        { name: "Tokelau", iso: "TK" },
        { name: "Tonga", iso: "TO" },
        { name: "Trinidad and Tobago", iso: "TT" },
        { name: "Tunisia", iso: "TN" },
        { name: "Turkey", iso: "TR" },
        { name: "Turkmenistan", iso: "TM" },
        { name: "Turks and Caicos Islands", iso: "TC" },
        { name: "Tuvalu", iso: "TV" },
        { name: "Uganda", iso: "UG" },
        { name: "Ukraine", iso: "UA" },
        { name: "United Arab Emirates", iso: "AE" },
        {
          name: "United Kingdom of Great Britain and Northern Ireland",
          iso: "GB"
        },
        {
          name: "United Kingdom",
          iso: "GB"
        },
        {
          name: "Great Britain",
          iso: "GB"
        },
        { name: "United States of America", iso: "US" },
        { name: "United States", iso: "US" },
        {
          name: "United States Minor Outlying Islands",
          iso: "UM"
        },
        { name: "Uruguay", iso: "UY" },
        { name: "Uzbekistan", iso: "UZ" },
        { name: "Vanuatu", iso: "VU" },
        {
          name: "Venezuela",
          iso: "VE"
        },
        { name: "Viet Nam", iso: "VN" },
        { name: "Virgin Islands", iso: "VG" },
        { name: "Virgin Islands", iso: "VI" },
        { name: "Wallis and Futuna", iso: "WF" },
        { name: "Western Sahara", iso: "EH" },
        { name: "Yemen", iso: "YE" },
        { name: "Zambia", iso: "ZM" },
        { name: "Zimbabwe", iso: "ZW" }
      ]
    };
  }

  
    handleSearch = (event) => {   
      event.preventDefault(); 
    let countryName = this.state.country;
    //checking if user entered a text or not
    if (countryName !== null) {
      let targetCountry = this.state.countries.filter(country => {
        if (country.name.toLowerCase() === countryName[0].toLowerCase().trim()) {
          return country.name;
        }
      });
      //checking if our returned value is an empty array or undefined
      if (targetCountry !== undefined && targetCountry.length !== 0) {
        let countryCode = targetCountry[0]["iso"];
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=politics&apiKey=${key}`            
          )
          .then(res => {
            console.log("News", res.data.articles);
            this.setState({
              search: res.data.articles
            });       
          })
          .then(()=> {
            // setTimeout(()=> {
            //   this.props.history.push('/results');
            // }, 300)
          })
          .catch(err => {
            console.log(err);
          });
        } else {
          //a placeholer for modal
          alert("There is no country by that name.");
        }
      } else {
        //a placeholer for modal
        alert("Please enter a country to search for.");
      }
    };
    
    handleInputChange = e => {
      this.setState({ [e.target.name]: [e.target.value] });
    };
    render() {
      console.log("Outside here", this.state.search);
      return (
      <div className="search-container">
        {/* <SearchResults search={this.state.search} /> */}
        <div className="search-body">
          <div className="headline">
            Search. Learn. <span className="last-word">Know.</span>
          </div>
          <div className="center-search">
            <div className="search-input-left">
              <input
                disabled
                autoComplete="off"
                placeholder="News title, Keyword"
                className="input-left"
                type="text"
                name="newsTitle"
                value={this.state.newsTitle}
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
           <NavLink to="/results"> <button onClick={this.handleSearch} className="btn-main-cta">
              Search
            </button></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
