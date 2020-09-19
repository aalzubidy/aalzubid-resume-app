import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

class InnerSection extends Component {
    render() {
        return (
            <View style={styles.innerSection}>
                {this.props.children}
            </View>
        );
    }
}

export default InnerSection;

const styles = StyleSheet.create({
    innerSection: {
        backgroundColor: 'rgba(248, 231, 223, 0.96)',
        //  shadowOffset: { width: 10, height: 10 },
        //  shadowColor: 'black',
        //  shadowOpacity: 1,
        elevation: 2,
        //  alignSelf: 'center',
        marginTop: vh(2),
        marginBottom: vh(2),
        width: vw(96),
        alignSelf: "center",
      }
});