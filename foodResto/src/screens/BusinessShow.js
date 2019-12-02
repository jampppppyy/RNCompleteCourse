import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import yelp from '../api/yelp';
import {FlatList} from 'react-native-gesture-handler';
const BusinessShow = ({navigation}) => {
  const [data, setData] = useState(null);
  const id = navigation.getParam('id');

  const getBusiness = async ID => {
    try {
      const response = await yelp.get(`/${ID}`);
      setData(response.data);
    } catch (e) {
      console.log('error: ', e);
    }
  };

  useEffect(() => {
    getBusiness(id);
  }, [id]);

  const renderImages = () => {
    if (data) {
      return data.photos.map(images => {
        return (
          <Image source={{uri: images}} style={{width: 300, height: 200}} />
        );
      });
    }
  };

  return (
    <View>
      {/* <FlatList
        data={data.photos}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: 300, height: 200}} />
        )}
      /> */}
      {renderImages()}
    </View>
  );
};

export {BusinessShow};
