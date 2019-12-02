import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BusinessDetails from '../components/BusinessDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const BusinessList = ({title, data, navigation}) => {
  if (!data.length) return null;
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.flatlist}
        horizontal
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BusinessShow', {id: item.id})
              }>
              <BusinessDetails data={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.seperator} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  view: {
    paddingVertical: 10,
  },
  flatlist: {
    marginLeft: 20,
  },
  seperator: {
    borderBottomWidth: 2,
    marginLeft: 20,
    borderBottomColor: 'grey',
    marginVertical: 5,
  },
});

export default withNavigation(BusinessList);
