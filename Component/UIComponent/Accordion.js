import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Touchab} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons"

const iconUp = <Icon name="arrow-up" size={10}/>
const iconDown = <Icon name="arrow-down" size={10}/>

const CollapsibleContent = ({children}) => {
  return <View>{children}</View>;
};

export const Collapsible = ({collapsibleHeader, collapsibleContent, collapsibleFooter}) => {
  const [expand, toggleExpand] = useState(false);
  return (
    <View style={styles.collapsible}>
      <TouchableOpacity style={styles.collapsibleHeader} onPress={() => toggleExpand(!expand)}>
        {collapsibleHeader}
        {expand ? iconUp:iconDown}
      </TouchableOpacity>
      {expand && <CollapsibleContent>{collapsibleContent}</CollapsibleContent>}
      {collapsibleFooter&&(collapsibleFooter)}
    </View>
  );
};

const styles = StyleSheet.create({
  collapsible:{
    paddingHorizontal:20,
    borderBottomColor:"#1222",
    borderBottomWidth:1,
    paddingTop:20,
    paddingBottom:30,
  },

  collapsibleHeader:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
