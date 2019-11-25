import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Input, Item, Icon } from 'native-base';
class SearchableInput extends Component {
    state = {
        text: '',
        isSuggestionShown: true,
    }

    showSuggestions = (input) => {
        const users = ['user@gmail.com', 'dev.1@yopmail.com', 'qa@yahoo.com']
        const list = users.filter(text => text.includes(input.toLowerCase()));
        return (
            <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
                {this.renderList(list)}
            </View>
        )
    }

    renderList = (list) => {
        return list.map((item, index) =>
            (
                <TouchableOpacity key={index} onPress={() => this.setState({ text: item, isSuggestionShown: false })}>
                    <Text style={{ fontSize: 12 }}>{item}</Text>
                </TouchableOpacity>
            ))
    }

    render() {
        const { text, isSuggestionShown } = this.state;
        return (
            <View>
                <Item>
                    <Input
                        onEndEditing={() => console.log('HEY')}
                        value={text}
                        onChangeText={text => {
                            this.setState({ text, isSuggestionShown: true })
                        }}
                        placeholder="user@yopmail.com"
                        floatingLabel="Username"
                    />
                </Item>
                <View>
                    {text.length > 0 && isSuggestionShown ? this.showSuggestions(text) : null}
                </View>
            </View>
        )
    }
}


export { SearchableInput };