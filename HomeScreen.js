import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import landscapeLowres from './img/landscape-lowres.jpg';
import me3 from './img/me3.png';


class HomeScreen extends Component{
    render () {
        return (
            <View style={styles.main}>
                <ImageBackground style={styles.bgImg} source={landscapeLowres}>
                    <View style={styles.innerSection}>
                        <Image 
                         style={styles.personalImg}
                         source={me3}
                        />
                    </View>
                    {/* <Text style={styles.text}>Hello</Text> */}
                </ImageBackground>
            </View>
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
      backgroundColor: 'rgba(240, 240, 240, 0.9)',
    //   shadowOffset: { width: 10, height: 10 },
    //   shadowColor: 'black',
    //   shadowOpacity: 1,
      elevation: 20,
    //   alignSelf: 'center',
      marginTop: vh(10),
      width: vw(96),
      alignSelf: "center"
  },
  personalImg: {
      width: 250,
      height: 250,
      marginTop: 3,
      alignSelf: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    // fontWeight: "bold"
  }
});

export default HomeScreen;