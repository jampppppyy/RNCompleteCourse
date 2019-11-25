import React, { Component } from 'react'
import { CardSection } from './common/';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation, Platform, UIManager } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions/index';


if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
class LibraryItem extends Component {

    componentDidUpdate() {
        LayoutAnimation.linear()
    }

    renderDescription = () => {
        const { expanded, library } = this.props;
        const { description } = library;

        if (expanded) {
            return (
                <CardSection>
                    <Text>{description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { library, selectLibrary } = this.props;
        const { title, id } = library;
        return (
            <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = ({ selectionId }, ownProps) => {
    const expanded = ownProps.library.id === selectionId;
    return {
        expanded,
    }
}

export default connect(mapStateToProps, actions)(LibraryItem);