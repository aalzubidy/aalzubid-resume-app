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

        return (
            <View style={styles.main}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logoImg} />
                    <Text style={styles.textFont}><BoldText>{date}</BoldText></Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.textFont}><BoldText>{degree}</BoldText></Text>
                    <Text style={styles.textFont}>{university}</Text>
                    <Text style={styles.universityDesc}>{description}</Text>
                    <Text style={styles.textFont}>GPA: {gpa}</Text>
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
        marginTop: vh(2),
        fontSize: 18,
        marginBottom: 8
    },
    textFont: {
        fontSize: 18
    }
});
