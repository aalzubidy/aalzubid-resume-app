import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import MainBackground from './MainBackground';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <MainBackground {...this.props}>
                <View>
                    <Text>hi</Text>
                </View>
            </MainBackground>
        );
    }
}
 
export default Education;