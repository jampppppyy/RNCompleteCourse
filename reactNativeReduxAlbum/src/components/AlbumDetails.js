import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailContainer,
    textContainer,
    titleStyle,
    imageContainer,
    imageStyle
  } = style;
  return (
    <Card>
      <CardSection>
        <View style={imageContainer}>
          <Image style={thumbnailContainer} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={titleStyle} key={title}>
            {title}
          </Text>
          <Text key={artist}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <Button onPress={() => Linking.openURL(url)}>BUY NOW</Button>
    </Card>
  );
};

const style = {
  textContainer: {
    justifyContent: "space-around"
  },
  thumbnailContainer: {
    height: 50,
    width: 50
  },
  imageContainer: {
    marginHorizontal: 10
  },
  titleStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
