import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // 1. Understanding 'this' keyword.
  // 2. Solving Context Issues.
  // We use an arrow function here to bind the this keyword to the instance of the SearchBar class.
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
