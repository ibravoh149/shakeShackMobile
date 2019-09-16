import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import BuggerIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../asset/colors";


export const ButtonPrimary = ({backgroundColor, textColor, onPress, value}) => {


  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color:textColor}]}>{value}</Text>
    </TouchableOpacity>
  );
};


ButtonPrimary.defaultProps={
  backgroundColor:colors.primary_button,
  textColor:colors.white,
  value:"Click me",
  onPress:()=>{
    Alert.alert(
  'Alert Title',
  'A button has been clicked',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
  }
}

export const ButtonWithIcon = ({onPress, textColor, backgroundColor, icon, value}) =>{

  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { backgroundColor, flexDirection:"row", borderStyle:"solid",borderWidth:1, borderColor:"#1222"}]}>
      {icon}
    <Text style={styles.text, {color:textColor, marginLeft:5}}>{value}</Text>
    </TouchableOpacity>
  )
}

ButtonWithIcon.defaultProps={
  backgroundColor:colors.primary_button,
  textColor:colors.white,
  icon: <BuggerIcon name="hamburger" size={20} color={colors.primary} />,
  value:"Click Me",
  onPress:()=>{
    Alert.alert(
  'Alert Title',
  'A button has been clicked',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    borderRadius:50,
    padding:10,
    // width:120,
    minHeight:40,
    minWidth:100,
    marginVertical:5
  },

  text:{
    fontSize:12
  }
})


