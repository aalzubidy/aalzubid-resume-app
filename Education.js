import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import EducationCard from './EducationCard';
import InnerSection from './InnerSection';
import MainBackground from './MainBackground';
import AAULogo from './img/aaulogo.jpg';
import UALogo from './img/alabamalogo.jpg'

class Education extends Component {
    static defaultProps = {
        educationInfo: [
            {
                'id': 'ua',
                'logo': UALogo,
                'date': '8/2017',
                'degree': 'Ph.D. Computer Science',
                'university': 'The University of Alabama',
                'description': 'Research Interest: Software Engineering, Empirical Software Engineering, User Expereince Research.',
                'gpa': '3.7/4'
            },
            {
                'id': 'aau',
                'logo': AAULogo,
                'date': '3/2013',
                'degree': 'BSc. Software Engineering',
                'university': 'Al-Ahliyya Amman University',
                'description': 'Focus: Software Architecture, Software Testing & Quality, Databases Graduated with First Class Honors.',
                'gpa': '3.7/4 (89.5/100)'
            }
        ]
    };


    constructor(props) {
        super(props);
        this.state = {}
    }

    handleEducationCards = (item) => {
        return (
            <InnerSection>
                <EducationCard educationItem={item.item} />
            </InnerSection>
        )
    }

    render() {
        return (
            <MainBackground {...this.props}>
                <FlatList
                    data={this.props.educationInfo}
                    renderItem={this.handleEducationCards}
                    keyExtractor={item => item.id}
                />
            </MainBackground>
        );
    }
}

export default Education;