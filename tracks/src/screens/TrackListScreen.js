import React from 'react';
import {Text, Button} from 'react-native';

const TrackListScren = ({navigation}) => {
  return (
    <>
      <Text>TrackListScren</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScren;
