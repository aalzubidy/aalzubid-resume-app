import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity, Button, Linking } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import MainBackground from './MainBackground';
import BoldText from './BoldText';
import me3 from './img/me3.png';
import InnerSection from './InnerSection';

class HomeScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      hireMePress: false
    }
  }

  handleHireMe = () => {
    if (this.state.hireMePress === false) {
      this.setState({ hireMePress: !this.state.hireMePress }, () => {
        Linking.openURL('mailto:aalzubidy@crimson.ua.edu?subject=Hire Me')
      });
    } else {
      this.setState({ hireMePress: !this.state.hireMePress });
    }
  }

  render() {
    return (
      <MainBackground scrollViewOn {...this.props}>
        <Image style={styles.personalImg} source={me3} />
        <InnerSection>
          <Text style={styles.textGeneral}>
            Hi, my name is Ahmed! I'm a <BoldText>Software Engineer</BoldText> at <BoldText>Itential</BoldText>.
                I design and develop solutions to automate networks for large enterprises.
                I also have a <BoldText>PhD in Computer Science</BoldText> from the University of Alabama, and I'm passionate about solving <BoldText>Software Engineering, Empirical Software Engineering, and User Experience</BoldText> issues. I like travelling, music, sports, and pizza!
              </Text>
        </InnerSection>
        <TouchableOpacity style={styles.hireMeBtn} activeOpacity={0.6} onPress={this.handleHireMe} onPressOut={this.handleHireMe}>
          <Text style={styles.textGeneral, { alignSelf: "center", fontSize: 25 }}><BoldText>{this.state.hireMePress ? '👍' : 'Hire Me!'}</BoldText></Text>
        </TouchableOpacity>
      </MainBackground>
    )
  }
}

const styles = StyleSheet.create({
  personalImg: {
    width: 200,
    height: 200,
    marginTop: vh(2),
    alignSelf: "center",
    zIndex: 3
  },
  textGeneral: {
    color: "black",
    fontSize: 20,
    textAlign: "justify",
    // width: vw(90)
    marginLeft: vw(4),
    marginRight: vw(4),
    marginTop: vh(4),
    marginBottom: vh(4),
    // fontWeight: "bold"
  },
  hireMeBtn: {
    backgroundColor: 'rgba(103, 195, 253, 0.9)',
    borderRadius: 10,
    alignSelf: "center",
    marginLeft: vw(1),
    marginRight: vw(1),
    marginBottom: vh(4),
    width: vw(60),
    height: vh(6),
    justifyContent: "center"
  }
});

export default HomeScreen;