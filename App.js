import React from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ActivityIndicator } from 'react-native';
import { Images, Profiles } from './App/Themes';
// import ProfileCard from './App/Components/ProfileCard'

const { height } = Dimensions.get('window');
var paddingTop = height * 0.025

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      harold: {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation,
      },
    };
  }

  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.verticalmarginbox, styles.navigationBar]}>
          <Image style={styles.smallIcon} source={require("./App/Images/settings.png")} /> 
          <View style={styles.centerSpacing}>
            <Image style={styles.tinderIcon}
              source={require("./App/Images/tinder-logo.png")}
            />
          </View>
          <Image style={styles.smallIcon}
            source={require("./App/Images/chatting.png")}
          />
          <Text style={styles.hr}></Text>
        </View>
        <View style={styles.center}>
          <View style={styles.horizontalmarginbox}/>
          <View style={styles.insideCenter}>
            <Image style={styles.pictureIcon}
                source={this.state.harold.profileImage}
            />
            <View style={styles.textBox}>
              <Text>{this.state.harold.name}, {this.state.harold.age}</Text>
              <Text style={styles.profession}>{this.state.harold.occupation}</Text>  
              </View>
              </View>
          <View style={styles.horizontalmarginbox}/>
        </View>
        <View style={[styles.verticalmarginbox, styles.rowImages]}>
          <Image style={[styles.rowIcon, styles.smallRowIcon]}
            source={require("./App/Images/rewind.png")}
          />
          <Image style={[styles.rowIcon, styles.largeRowIcon]}
            source={require("./App/Images/nope.png")}
          />
          <Image style={[styles.rowIcon, styles.smallRowIcon]}
            source={require("./App/Images/boost.png")}
          />
          <Image style={[styles.rowIcon, styles.largeRowIcon]}
            source={require("./App/Images/like.png")}
          />
          <Image style={[styles.rowIcon, styles.smallRowIcon]}
            source={require("./App/Images/super-like.png")}
          />
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalmarginbox: {
    margin: paddingTop,
    borderWidth: 0,
    borderRadius: 0,
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderColor: '#000',
    borderBottomWidth: 1,
    height: Platform.OS === 'ios' ? 56 : 44,
  },
  center: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideCenter: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  horizontalmarginbox: {
    flex: 1,
  },
  rowImages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  smallIcon: {
    width: 30,
    height: 30,
    tintColor: "#C5C5C5",
  },
  centerSpacing: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tinderIcon: {
    width: "30%",
    height: 70,
    resizeMode: "contain",
  },
  pictureIcon: {
    width: 500,
    height: "60%",
    resizeMode: "contain",
  },
  rowIcon:{
    resizeMode: "contain",
    padding: 20,
    borderRadius: 20,
  },
  textBox:{
    backgroundColor: 'white',
    width: 200,
  },
  profession:{
    color: '#DCDCDC',
  },
  smallRowIcon: {
    width: 30,
    height: 30,
  },
  largeRowIcon: {
    width: 40,
    height: 40,
  },
});
