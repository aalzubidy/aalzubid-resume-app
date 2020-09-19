import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import InnerSection from './InnerSection';
import MainBackground from './MainBackground';
import gmailImg from './img/socialMediaIcons/gmail.png';
import lastfmImg from './img/socialMediaIcons/lastfm.png';
import linkedinImg from './img/socialMediaIcons/linkedin.png';
import researchgateImg from './img/socialMediaIcons/researchgate.jpeg';
import skypeImg from './img/socialMediaIcons/skype.png';
import twitterImg from './img/socialMediaIcons/twitter2.png';
import websiteImg from './img/socialMediaIcons/website.png';

class Social extends Component {
    static defaultProps = {
        socialMediaInfo: [
            {
                'id': 'website',
                'img': websiteImg,
                'url': 'http://aalzubidy.com/'
            },
            {
                'id': 'gmail',
                'img': gmailImg,
                'url': 'mailto:aalzubidy@crimson.ua.edu?subject=Let\'s Connect'
            },
            {
                'id': 'linkedin',
                'img': linkedinImg,
                'url': 'https://www.linkedin.com/in/aalzubidy'
            },
            {
                'id': 'researchgate',
                'img': researchgateImg,
                'url': 'https://www.researchgate.net/profile/Ahmed_Al-Zubidy'
            },
            {
                'id': 'skype',
                'img': skypeImg,
                'url': 'skype:aalzubidy?call'
            },
            {
                'id': 'twitter',
                'img': twitterImg,
                'url': 'https://twitter.com/aj2102'
            },
            {
                'id': 'lastfm',
                'img': lastfmImg,
                'url': 'http://www.last.fm/user/aj2102'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSocialMedia = (item) => {
        item = item.item;
        return (
            <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={() => Linking.openURL(item.url)}>
                <Image source={item.img} style={styles.img} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <MainBackground {...this.props}>
                <InnerSection>
                    <View style={styles.container}>
                        <FlatList
                            data={this.props.socialMediaInfo}
                            renderItem={this.handleSocialMedia}
                            keyExtractor={item => item.id}
                            numColumns={3}
                            horizontal={false}
                        />
                    </View>
                </InnerSection>
            </MainBackground>
        );
    }
}

export default Social;

const styles = StyleSheet.create({
    container: {
        marginTop: vh(3),
        marginBottom: vh(3),
        alignItems: 'center'
    },
    img: {
        width: 60,
        height: 60
    },
    btn: {
        backgroundColor: 'rgba(103, 195, 253, 0.9)',
        margin: vh(1),
    }
});
