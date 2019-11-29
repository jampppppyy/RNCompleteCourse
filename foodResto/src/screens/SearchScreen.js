import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useBusiness from '../hooks/useBusiness';
import {SearchBar, BusinessList} from '../components';
import {Spinner} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchApi, results, errorMsg, isLoading] = useBusiness();

  const filterByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <View>
      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={() => searchApi(query)}
      />
      {isLoading ? <Spinner /> : null}
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text style={styles.text}>Found {results.length} results</Text>
      <ScrollView>
        <BusinessList data={filterByPrice('$')} title="Cost Effective" />
        <BusinessList data={filterByPrice('$$')} title="Bit Pricier" />
        <BusinessList data={filterByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

export {SearchScreen};
