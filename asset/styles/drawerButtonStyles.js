import { StyleSheet } from "react-native";
import { colors } from "../colors";
export const drawerButtonStyle =StyleSheet.create({
drawerButton:{
  backgroundColor:colors.white,
  width:40,
  height:40,
  marginVertical:15,
  marginHorizontal:15,
  borderRadius:20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  
  // padding:12
}, 
DrawerIcon:{
  margin:12
}
});