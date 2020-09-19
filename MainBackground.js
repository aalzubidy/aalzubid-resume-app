import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import landscapeLowres from './img/landscape-lowres.jpg';
import settings1 from './img/settings3.png';

class MainBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main}>
                <ImageBackground style={styles.bgImg} source={landscapeLowres}>
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                      <Image style={{width: 50, height: 50, marginTop: vh(9), marginLeft: vh(2)}} source={settings1} />
                    </TouchableOpacity>
                    {this.props.scrollViewOn ? <ScrollView>{this.props.children}</ScrollView> : this.props.children}
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bgImg: {
    // flex: 1,
    // resizeMode: "cover",
    // width: vw(100),
    height: '100%'
  }
});

export default MainBackground;
