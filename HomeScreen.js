import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity, Button, Linking } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import BoldText from './BoldText';
import landscapeLowres from './img/landscape-lowres.jpg';
import me3 from './img/me3.png';
import settings1 from './img/settings3.png';

class HomeScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      hireMePress: false
    }
  }

  handleHireMe = () => {
      if (this.state.hireMePress === false) {
      this.setState({hireMePress: !this.state.hireMePress}, ()=>{
        Linking.openURL('mailto:aalzubidy@crimson.ua.edu?subject=Hire Me')
      });
    } else {
      this.setState({hireMePress: !this.state.hireMePress});
    }
  }

    render () {
      const { navigation } = this.props;
        return (
          <SafeAreaView style={styles.main}>
            <ScrollView>
                <ImageBackground style={styles.bgImg} source={landscapeLowres}>
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                      <Image style={{width: 50, height: 50, marginTop: vh(9), marginLeft: vh(2)}} source={settings1} />
                    </TouchableOpacity>
                        <Image 
                         style={styles.personalImg}
                         source={me3}
                        />
                    <View style={styles.innerSection}>
                        <Text style={styles.textGeneral}>
                          Hi, my name is Ahmed! I'm a <BoldText>Software Engineer</BoldText> at <BoldText>Itential</BoldText>.
                          I design and develop solutions to automate networks for large enterprises.
                          I also have a <BoldText>PhD in Computer Science</BoldText> from the University of Alabama, and I'm passionate about solving <BoldText>Software Engineering, Empirical Software Engineering, and User Experience</BoldText> issues. I like travelling, music, sports, and pizza!
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.hireMeBtn} activeOpacity={0.6} onPress={this.handleHireMe} onPressOut={this.handleHireMe}>
                      <Text style={styles.textGeneral, {alignSelf:"center", fontSize: 25}}><BoldText>{this.state.hireMePress ?  '👍' : 'Hire Me!'}</BoldText></Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: "column"
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center"
  },
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
  },
  personalImg: {
    width: 200,
    height: 200,
    marginTop: vh(2),
    alignSelf: "center"
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