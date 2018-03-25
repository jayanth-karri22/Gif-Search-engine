import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      term: "abc"
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
    this.props.onTermChange(e.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.onInputChange}/>
        </div>
      </div>
    );
  }
}

export default Search;
