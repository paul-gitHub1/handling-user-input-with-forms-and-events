import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList.js";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // this get function takes in two arguments. First argument is the address we want to get a request from (find the root URL (https://api.unsplash.com/) + end point (search/photos)). Second argument is going to be an object that will have a bunch of options to customize this request.
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar userSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
