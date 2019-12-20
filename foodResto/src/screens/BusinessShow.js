import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import yelp from '../api/yelp';
import {Spinner} from 'native-base';
const BusinessShow = ({navigation}) => {
  const [data, setData] = useState(null);
  const id = navigation.getParam('id');

  let PHOTOS = data ? data.photos : null;

  useEffect(() => {
    getBusiness(id);
  }, [id]);

  const getBusiness = async ID => {
    try {
      const response = await yelp.get(`/${ID}`);
      setData(response.data);
    } catch (e) {
      console.log('error: ', e);
    }
  };

  const renderImages = photos => {
    if (photos) {
      return photos.map(images => {
        return (
          <Image source={{uri: images}} style={{width: 300, height: 200}} />
        );
      });
    }
  };

  return <View>{renderImages(PHOTOS)}</View>;
};

export {BusinessShow};
