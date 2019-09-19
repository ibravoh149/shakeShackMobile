import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";


export const Header=({title, iconLeft, iconRight, headerBottom})=>{
  return(
    <View><Text>{title}</Text></View>
  )
}