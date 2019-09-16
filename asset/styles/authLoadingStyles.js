import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../colors";
const {height, width}= Dimensions.get("window");


export const authloadingPageStyle=StyleSheet.create({
  container:{
    backgroundColor:colors.primary,
    height,
    flex:1,
    justifyContent:"center",
    alignContent:'center',
    alignItems:"center"
  },
  iconColor:{
    color:colors.white
  }
});