import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';
import BoldText from './BoldText';

class EducationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { logo, date, degree, university, description, gpa } = this.props.educationItem;

        console.log(this.props.educationItem);

        return (
            <View style={styles.main}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logoImg} />
                    <BoldText>{date}</BoldText>
                </View>
                <View style={styles.descContainer}>
                    <BoldText>{degree}</BoldText>
                    <Text>{university}</Text>
                    <Text style={styles.universityDesc}>{description}</Text>
                    <Text>GPA: {gpa}</Text>
                </View>
            </View>
        );
    }
}

export default EducationCard;

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
        margin: 12,
        borderRadius: 8
    },
    universityDesc: {
        textAlign: 'justify',
        marginTop: vh(2)
    }
});
