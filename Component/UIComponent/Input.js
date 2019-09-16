import React from 'react';
import {TouchableOpacity, StyleSheet,Platform, TextInput} from 'react-native';
import { colors } from "../../asset/colors";

let borderColor="#1222";

export const Input = ({onChangeText, multiline, secureTextEntry, value, placeholder}) => {

  const _onFucus=()=>{
    borderColor="green"
  }
  
  return (
    <TextInput
      onChangeText={(text)=>onChangeText(text)}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
      value={value}
      placeholder={placeholder}
      style={styles.container}
      onFocus={()=>_onFucus()}
      />
  );
};



Input.DefultProps={
  multiline:false,
  secureTextEntry:false,
  placeholder:""
}


const styles= StyleSheet.create({
  container:{
    height:40,
    borderRadius:20,
    borderColor:borderColor,
    backgroundColor:"#f5f5f5",
    // borderWidth:1,
    flexDirection:"row",
    // width:"100%",
    padding:10
  }
});