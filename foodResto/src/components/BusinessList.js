import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BusinessDetails from '../components/BusinessDetails';

const BusinessList = ({ title, data }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            {/* <Text>{data.length}</Text> */}
            <FlatList
                contentContainerStyle={styles.flatlist}
                horizontal
                data={data}
                renderItem={({ item }) => <BusinessDetails data={item} />}
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

export { BusinessList };
