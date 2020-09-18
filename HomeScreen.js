import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import BoldText from './BoldText';
import landscapeLowres from './img/landscape-lowres.jpg';
import me3 from './img/me3.png';

class HomeScreen extends Component{
    render () {
        return (
          <SafeAreaView style={styles.main}>
            <ScrollView>
                <ImageBackground style={styles.bgImg} source={landscapeLowres}>
                    <View style={styles.innerSection}>
                        <Image 
                         style={styles.personalImg}
                         source={me3}
                        />
                        <Text style={styles.textGeneral}>
                          Hi, my name is Ahmed! I'm a <BoldText>Software Engineer</BoldText> at <BoldText>Itential</BoldText>.
                          I design and develop solutions to automate networks for large enterprises.
                          I also have a <BoldText>PhD in Computer Science</BoldText> from the University of Alabama, and I'm passionate about solving <BoldText>Software Engineering, Empirical Software Engineering, and User Experience</BoldText> issues. I like travelling, music, sports, and pizza!
                        </Text>
                    </View>
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
    //   shadowOffset: { width: 10, height: 10 },
    //   shadowColor: 'black',
    //   shadowOpacity: 1,
      elevation: 2,
    //   alignSelf: 'center',
      marginTop: vh(6),
      marginBottom: vh(6),
      width: vw(96),
      alignSelf: "center",
  },
  personalImg: {
      width: 250,
      height: 250,
      marginTop: vh(3),
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
  }
});

export default HomeScreen;