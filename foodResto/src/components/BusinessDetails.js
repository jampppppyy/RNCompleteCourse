import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BusinessDetails = ({data}) => {
  return (
    <View>
      <Image source={{uri: data.image_url}} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.childView}>
        <Text style={styles.details}>{data.rating} Stars, </Text>
        <Text style={styles.details}>{data.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childView: {
    flexDirection: 'row',
  },
  image: {
    borderRadius: 4,
    height: 120,
    width: 250,
    marginRight: 15,
  },
  name: {
    // textAlign: 'center',
    fontWeight: 'bold',
    width: 250,
  },
  details: {
    color: 'rgb(40,40,40)',
    // margin: 5,
    // fontStyle: 'italic',
  },
});

export default BusinessDetails;
