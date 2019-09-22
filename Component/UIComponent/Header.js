import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { fonts } from "../../asset/font";
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = ({
  title,
  iconLeft,
  iconRight,
  headerBottomContent,
  onIconLeftClick,
  onIconRightClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={onIconLeftClick} style={{flex: 1}}>{iconLeft}</TouchableOpacity>
        <View style={{flex:2}}>
        <Text style={styles.title}>{title}</Text>
        </View>
        {iconRight && <TouchableOpacity>{iconRight}</TouchableOpacity>}
      </View>

      {headerBottomContent && (
        <View style={styles.headerBottom}>
          {headerBottomContent}
        </View>
      )}
    </View>
  );
};

Header.defaultProps = {
  iconLeft:
    Platform.OS === 'android' ? (
      <Icon name="md-arrow-back" size={20} />
    ) : (
      <Icon size={20} name="ios-arrow-back" />
    ),

  onIconLeftClick:()=>{}
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
    minHeight: 40,
    borderBottomWidth:1,
    borderBottomColor:"#1222"
    // marginBottom:1
  },
  headerTop: {
    flexDirection: 'row',
  },

  headerBottom: {
    marginTop: 20,
  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    fontFamily:Platform.OS==="ios"?fonts.primary_ios:fonts.primary_android
  }
});
