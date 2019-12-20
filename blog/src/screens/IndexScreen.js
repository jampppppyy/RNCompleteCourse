import React, {useContext} from 'react';
import {Text, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <>
      <Button title="Add" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.title}
      />
    </>
  );
};

export default IndexScreen;
