import React, { Component } from "react";

interface MyProps {
  searches: string[];
}

export default class SearchBar extends Component<MyProps, { search: string }> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: "",
    };
  }

  updateInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  getSuggestions = (): string[] => {
    let searches = this.props.searches;
    let result = searches.filter((searchItem) => {
      const isNotEmpty = this.state.search !== "";
      const found = searchItem.toLowerCase().includes(this.state.search);
      return found && isNotEmpty;
    });
      
    return result;
  };

  render = () => {
    const suggestions: string[] = this.getSuggestions();    
    const inputState = suggestions.length === 0 ? "" : "active";

    let suggestionsUI: React.ReactElement[]
    suggestionsUI = suggestions.map((sug, i) => <div key={i} className="suggestion">{sug}</div>)

    return (
      <div className="search-container">
        <div className={"search " + inputState}>
          <input
            onChange={this.updateInput}
            autoFocus
            autoComplete="off"
            aria-label="search"
            placeholder="Search Projects"
            type="text"
          ></input>
          <div className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="suggestions">{suggestionsUI}</div>
      </div>
    );
  };
}
