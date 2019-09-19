import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const BottomContainer = props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    minHeight:20,
    // backgroundColor:"blue"
    // padding:20
  }
})