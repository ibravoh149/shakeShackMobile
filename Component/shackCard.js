import {View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import { fonts } from "../asset/font";

export const ShackCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cardTop}>
        <Image
          source={require('../asset/images/home-banner.jpg')}
          style={styles.image}
        />

      </View>

      <View style={styles.cardBottom}>
        <Text style={styles.shackName}>{item.name}</Text>
        <Text style={styles.shackDescription}>{item.description}</Text>


        <View style={styles.shackPriceAndCal}>
        <Text style={styles.shackPrice}>${item.price}</Text>
        <Text style={styles.shackCal}>{item.cal} cal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    minHeight: 50,
    shadowColor: '#1222',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    marginVertical: 10,
    elevation:5,
    position:"relative",
    borderWidth:0.3,
    borderColor:"#1222",
    borderBottomWidth:0
  },

  cardTop: {
    height: 200,
  },

  cardBottom: {
    height: 200,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // marginTop:10
    paddingHorizontal:10,
    paddingVertical:15
  },

  shackName:{
    fontFamily:Platform.OS==="android"?fonts.primary_android:fonts.primary_ios,
    fontWeight:"bold",
    fontSize:20
  },
  shackDescription:{
    color:"#666",
    marginTop:5,
    fontSize:14
  },
  shackPriceAndCal:{
    flexDirection:"row",
    // marginBottom:-10
    position:"absolute",
    bottom:20,
    left:10,
    flex:1,
    justifyContent:"space-between"
    
  },

  shackPrice:{
    fontWeight:"bold",
    // marginHorizontal:5,
  },
  shackCal:{
    color:"#666",
    marginHorizontal:5,
    fontSize:14
  },
  image:{
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});
