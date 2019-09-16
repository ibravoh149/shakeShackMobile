import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {welcomePageStyle} from '../asset/styles/welcomePageStyles';
import homeBanner from '../asset/images/home-banner.jpg';
import {Drawer} from '../Component/DrawerButton';
import {BottomContainer} from '../Component/BottomContainer';
import {
  HomeBottomContainer,
  HomeTopContainer,
} from '../Component/WelcomeScreenButtonContainers';

export class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={homeBanner}
          style={welcomePageStyle.imageBackground}>

          
          <Drawer {...this.props} />

          <View style={styles.textContainer}>
            <Text style={styles.headingTop}>Sip our new cascara shake!</Text>
            <Text style={styles.headingBottom}>Our new shake is sweet + fruity with notes of cherry + red currant.</Text>
          </View>

        <BottomContainer>
          <HomeTopContainer {...this.props}/>
          <HomeBottomContainer {...this.props}/>
        </BottomContainer>

        </ImageBackground>
        
      </SafeAreaView>
    );
  }
}


const styles=StyleSheet.create({
  textContainer:{
    flex:1, alignItems:"center",  justifyContent:"flex-start",
  },

  headingTop:{
    fontFamily: Platform.OS == 'ios' ? 'Baskerville' : 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    color:"#fff",
    // flexWrap:"wrap",
    maxWidth:200,
    textAlign:"center"
  },

  headingBottom:{
    fontSize: 15,
    color: "#fff",
    maxWidth:250,
    textAlign:"center"
  }
})