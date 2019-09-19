import React, {Component} from 'react';
import {View, Text, SafeAreaView, Modal, StyleSheet, Platform} from 'react-native';
import {colors} from '../asset/colors';
import {basicModalStyle} from '../asset/styles/basicModalStyle';
import {BottomContainer} from '../Component/BottomContainer';
import { fonts } from "../asset/font";
import { ButtonPrimary } from "../Component/UIComponent/Button";
import { BackButton } from "../Component/UIComponent/backButton";

import IosBackIcon from 'react-native-vector-icons/Ionicons';
import AndroidBackIcon from 'react-native-vector-icons/Feather';

const iosIcon = <IosBackIcon size={18}  
// style={{margin:12}} 
name="ios-arrow-down"/>

const androidIcon = <AndroidBackIcon
 size={20} 
//  style={{margin:12}} 
 name="arrow-down"/>


export class ListServiceProviderScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLocation: true,
    };
    this._onFindShackClick=this._onFindShackClick.bind(this);
    this._notNotClick=this._notNotClick.bind(this);
  }

  _onFindShackClick(){
    this.setState({
      hasLocation:!this.state.hasLocation
    })
  }

  _notNotClick(){
    // this.setState({hasLocation:!this.state.hasLocation})
    this.props.navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <View>
          <Text>Service providers screen</Text>
        </View>

        {/* modal component */}
        <Modal style visible={this.state.hasLocation} transparent>
          <View style={basicModalStyle.container}>
            <View style={{marginTop:20}}>
               <BackButton onPress={this._onFindShackClick} icon={Platform.OS==="ios"?iosIcon:androidIcon}/>
            </View>
            <BottomContainer>
            <View style={styles.modalContent}>
              <View style={styles.modalContentTop}>
                <Text style={styles.modalContentTopHeading}>Find a Shack</Text>
                <Text style={styles.modalContentTopText}>Enable location services to automatically find the nearest Shacks</Text>
              </View>

              <View style={styles.modalContentBottom}>
              <ButtonPrimary value="Find Shacks" onPress={this._onFindShackClick}/>
              <ButtonPrimary  value="Not Now" onPress={this._notNotClick} backgroundColor={colors.white} textColor="#000" borderColor="#1222"/>
            </View>
            </View>
            </BottomContainer>
          </View>
        </Modal>
        {/* modal component */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  modalContent:{
    backgroundColor:colors.white,
    paddingVertical:20,
    paddingHorizontal:15
  },

  modalContentTop:{
    marginVertical:5
  },
  modalContentTopHeading:{
    fontFamily:Platform.OS==="ios"?fonts.primary_ios:fonts.primary_android,
    fontSize:20,
    fontWeight:"bold"
  },
  modalContentTopText:{
    fontSize: 13,
    color: '#999',
  },
  modalContentBottom:{
    // width:"100%",
    marginVertical:10
  }
});
