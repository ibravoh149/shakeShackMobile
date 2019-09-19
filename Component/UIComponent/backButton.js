import React from 'react';
import {TouchableOpacity, StyleSheet,Platform} from 'react-native';
import { colors } from "../../asset/colors";
import IosBackIcon from 'react-native-vector-icons/Ionicons';
import AndroidBackIcon from 'react-native-vector-icons/MaterialIcons';

const iosIcon = <IosBackIcon size={20}  
// style={{margin:12}} 
name="ios-arrow-back"/>

const androidIcon = <AndroidBackIcon
 size={20} 
//  style={{margin:2}} 
 name="arrow-back"/>

export const BackButton = ({onPress, icon}) => {
  

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      >
        {icon}
    </TouchableOpacity>
  );
};

BackButton.defaultProps={
  icon:Platform.OS==="ios"?iosIcon:androidIcon
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    // width: Platform.OS==="ios"? 40:60,
    // height: Platform.OS==="ios"? 40:60,
    width:40,
    height:40,
    marginVertical:15,
    marginHorizontal:15,
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    borderRadius:20,
    // borderRadius:Platform.OS==="ios"? 20:30,
    shadowColor: '#1222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    paddingHorizontal:Platform.OS==="ios"?15: 10,
    paddingVertical:10
  }
})


