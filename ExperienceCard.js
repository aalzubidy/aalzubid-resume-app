import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';
import BoldText from './BoldText';

class ExperienceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { logo, from, to, position, company } = this.props.experienceItem;

        return (
            <View style={styles.main}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logoImg} />
                    <Text style={styles.textFont}><BoldText>{position}</BoldText></Text>
                    <Text style={styles.textFont}>{company}</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.textFont}><BoldText>{from}</BoldText> - <BoldText>{to}</BoldText></Text>
                </View>
            </View>
        );
    }
}

export default ExperienceCard;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(2)
    },
    logoContainer: {
        alignItems: 'center',
        margin: 8
    },
    descContainer: {
        alignItems: 'center',
        margin: 10
    },
    logoImg: {
        width: 60,
        height: 60,
        margin: 8,
        borderRadius: 8
    },
    textFont: {
        fontSize: 18
    }
});
