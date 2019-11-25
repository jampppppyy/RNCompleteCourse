import React, { Component } from "react";
import axios from "axios";
import { Text, ScrollView } from "react-native";
import AlbumDetails from "./AlbumDetails";

export default class AlbumsList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => {
        this.setState({
          albums: response.data
        });
      });
  }

  renderAlbums = () => {
    const { albums } = this.state;
    const newAlbums = albums.map(album => <AlbumDetails album={album} />);

    return newAlbums;
  };

  render() {
    const { albums } = this.state;
    return <ScrollView >{this.renderAlbums()}</ScrollView>;
  }
}
