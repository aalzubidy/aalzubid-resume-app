import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import InnerSection from './InnerSection';
import MainBackground from './MainBackground';
import BoldText from './BoldText'

class Publications extends Component {
    static defaultProps = {
        publicationsInfo: [
            {
                'id': 'p8',
                'title': 'Identification and prioritization of SLR search tool requirements: an SLR and a survey',
                'venue': 'Empirical Software Engineering',
                'year': '2019',
                'url': 'https://link.springer.com/article/10.1007/s10664-018-9626-5'
            },
            {
                'id': 'p7',
                'title': 'Vision for SLR tooling infrastructure: Prioritizing value-added requirements',
                'venue': 'Information and Software Technology',
                'year': '2017',
                'url': 'https://www.sciencedirect.com/science/article/pii/S0950584916304645'
            },
            {
                'id': 'p6',
                'title': 'Introducing IJam Wireless De-authentication Attack Tool',
                'venue': 'ACM SouthEast Conference',
                'year': '2017',
                'url': 'https://dl.acm.org/doi/abs/10.1145/3077286.3077316'
            },
            {
                'id': 'p5',
                'title': 'The search phase of software engineering systematic literature review: barriers and solutions',
                'venue': 'The University of Alabama',
                'year': '2017',
                'url': 'http://ir.ua.edu/handle/123456789/3428'
            },
            {
                'id': 'p4',
                'title': 'A (Updated) Review of Empiricism at the SIGCSE Technical Symposium',
                'venue': 'ACM SIGCSE',
                'year': '2016',
                'url': 'https://dl.acm.org/doi/abs/10.1145/2839509.2844601'
            },
            {
                'id': 'p3',
                'title': 'Identification of SLR tool needs–results of a community workshop',
                'venue': 'Information and Software Technology',
                'year': '2016',
                'url': 'https://www.sciencedirect.com/science/article/pii/S0950584915001779'
            },
            {
                'id': 'p2',
                'title': 'Review of Systematic Literature Review Tools',
                'venue': 'University of Alabama',
                'year': '2014',
                'url': 'http://carver.cs.ua.edu/Papers/TechnicalReports/2014/SERG-2014-03.pdf'
            },
            {
                'id': 'p1',
                'title': 'Proposed Design and Implementation for RESTful Web Server',
                'venue': 'Journal of Software',
                'year': '2014',
                'url': 'https://www.ammanu.edu.jo/English/pdf/StaffResearch/IT/749/Proposed%20Design%20and%20Implementation%20for.pdf'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    handlePublications = (item) => {
        item = item.item;
        return (
            <InnerSection>
                <View style={styles.container}>
                    <Text style={styles.publicationTitle}>"{item.title}"</Text>
                    <Text style={styles.publicationVenueDate}>{item.venue}, {item.year}</Text>
                    <TouchableOpacity style={styles.readMoreBtn} activeOpacity={0.6} onPress={() => Linking.openURL(item.url)}>
                        <Text style={styles.readMoreText}><BoldText>Read More</BoldText></Text>
                    </TouchableOpacity>
                </View>
            </InnerSection>
        )
    }

    render() {
        return (
            <MainBackground {...this.props}>
                <FlatList
                    data={this.props.publicationsInfo}
                    renderItem={this.handlePublications}
                    keyExtractor={item => item.id}
                />
            </MainBackground>
        );
    }
}

export default Publications;

const styles = StyleSheet.create({
    container: {
        marginTop: vh(1),
        marginBottom: vh(1),
        alignItems: 'center'
    },
    publicationTitle: {
        alignItems: 'center',
        margin: vh(2),
        textAlign: 'justify',
        fontSize: 18
    },
    publicationVenueDate: {
        alignItems: 'center',
        marginLeft: vh(2),
        fontSize: 14
    },
    readMoreBtn: {
        backgroundColor: 'rgba(103, 195, 253, 0.9)',
        borderRadius: 4,
        padding: 3,
        marginTop: vh(1),
        marginBottom: vh(1),
        width: vw(40),
        height: 30,
        alignItems: "center"
    },
    readMoreText: {
        fontSize: 18
    }
});
