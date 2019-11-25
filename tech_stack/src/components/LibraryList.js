import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
    renderItem = ({ item, index }) => <LibraryItem library={item} />

    render() {
        const { libraries } = this.props;
        return (
            <View>
                <FlatList
                    data={libraries}
                    renderItem={this.renderItem}
                    keyExtractor={library => library.id.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ libraries }) => {
    return {
        libraries,
    }
}

export default connect(mapStateToProps)(LibraryList);