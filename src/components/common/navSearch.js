import React, { Component } from "react";

class NavSearch extends Component {
  handleSubmit = e => {
    // prevent the reload default action for now
    e.preventDefault();
  };

  render() {
    const { onSearch } = this.props;
    return (
      <form className="nav_item nav_search" onSubmit={this.handleSubmit}>
        <button type="submit">
          <i className="fa fa-search" />
        </button>
        <input
          type="text"
          placeholder="Search"
          onChange={e => {
            onSearch(e.currentTarget.value);
          }}
        />
      </form>
    );
  }
}

export default NavSearch;
