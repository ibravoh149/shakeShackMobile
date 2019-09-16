import React from "react";
import { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { authloadingPageStyle } from "../asset/styles/authLoadingStyles";




export const AuthLoadingScreen=(props)=>{

  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate("Home")
    }, 1000);
  })

  return(
    <View style={authloadingPageStyle.container}>
      <Text><Icon name="hamburger" size={50} color={authloadingPageStyle.iconColor.color} /></Text>
    </View>
  )
}