import React, {Component} from "react";
import { View, Text, SafeAreaView } from "react-native";
import {Header, MiniHeader} from '../Component/UIComponent/Header';
import { CatSelector } from "../Component/ShackCategorySelector";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../asset/colors";




export class Shack extends Component{

  render(){
    return(
      <SafeAreaView>
        <Header title="Shack" onIconLeftClick={()=>this.props.navigation.goBack()}
        headerBottomContent={<CatSelector icon={<Icon name="hamburger" size={30} color={colors.primary}/>}/>}/>
         <View><Text>shack screen</Text></View>

      </SafeAreaView>
    )
  }
}