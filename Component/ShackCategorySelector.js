import React,{ useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";




export const CatSelector=({selected, icon})=>{
  return(
    <TouchableOpacity style={styles.catSelector}>
      {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  catSelector:{
    width:50,
    height:50,
    borderRadius:25,
    borderColor:"#1222",
    borderWidth:1,
    padding:9,
  }

})