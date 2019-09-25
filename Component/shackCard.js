import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";


export const ShackCard=()=>{
  return(
<TouchableOpacity style={styles.container}>
<View style={styles.cardTop}>
<Image
    source={require("../asset/images/home-banner.jpg")}
    style={{height:"100%", width:"100%", borderTopLeftRadius:10, borderTopRightRadius:10}}
  />
</View>

<View style={styles.cardBottom}>
    
</View>
</TouchableOpacity>
  )
}



const styles= StyleSheet.create({
  container:{
    borderRadius:10,
    minHeight:50,
    shadowColor: '#1222',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    marginVertical:10
  },

  cardTop:{
    height:200,
  },

  cardBottom:{
    height:200,
    backgroundColor:"#fff",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10

  }
})