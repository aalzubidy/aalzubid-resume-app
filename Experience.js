import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import ExperienceCard from './ExperienceCard';
import InnerSection from './InnerSection';
import MainBackground from './MainBackground';
import ItentialLogo from './img/itentiallogo2020.png';
import UALogo from './img/alabamalogo.jpg';
import GoogleLogo from './img/googlelogo.png';

class Experience extends Component {
    static defaultProps = {
        experienceInfo: [
            {
                'id': 'itential2',
                'logo': ItentialLogo,
                'from': '8/2019',
                'to': 'Present',
                'position': 'Lead Software Engineer',
                'company': 'Itential'
            },
            {
                'id': 'itential1',
                'logo': ItentialLogo,
                'from': '8/2019',
                'to': '8/2017',
                'position': 'Software Engineer',
                'company': 'Itential'
            },
            {
                'id': 'ua2',
                'logo': UALogo,
                'from': '1/2014',
                'to': '8/2017',
                'position': 'Software Engineer Researcher (GRA)',
                'company': 'The University of Alabama'
            },
            {
                'id': 'ua1',
                'logo': UALogo,
                'from': '8/2013',
                'to': '1/2014',
                'position': 'Software Developer (GSA)',
                'company': 'The University of Alabama'
            },
            {
                'id': 'google1',
                'logo': GoogleLogo,
                'from': '9/2012',
                'to': '6/2013',
                'position': 'GSA Internship',
                'company': 'Google'
            }
        ]
    };


    constructor(props) {
        super(props);
        this.state = {}
    }

    handleExperienceCard = (item) => {
        return (
            <InnerSection>
                <ExperienceCard experienceItem={item.item} />
            </InnerSection>
        )
    }

    render() {
        return (
            <MainBackground {...this.props}>
                <FlatList
                    data={this.props.experienceInfo}
                    renderItem={this.handleExperienceCard}
                    keyExtractor={item => item.id}
                />
            </MainBackground>
        );
    }
}

export default Experience;
