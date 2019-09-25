import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Header, MiniHeader} from '../Component/UIComponent/Header';
import {CatSelector, CatSelectors} from '../Component/ShackCategorySelector';
import Icon from 'react-native-vector-icons/Ionicons';
import SortIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../asset/colors';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ShackCard } from "../Component/shackCard";

export class Shack extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* <Header title="Shack" onIconLeftClick={()=>this.props.navigation.goBack()}
        headerBottomContent={}
        /> */}

        <Header customize>
          <View style={styles.customizableHeader}>
            <View style={styles.customizableHeaderTop}>
                <TouchableOpacity style={{marginHorizontal:15}} onPress={()=>this.props.navigation.goBack()}>
                  <Icon name="ios-arrow-back" size={20}/>
                </TouchableOpacity>
                <View style={{flexGrow:1}}>
                  <Text style={{fontSize:13, color:"#999"}}>Pick up from</Text>
                  <Text style={{fontWeight:"bold", fontSize:20}}>Pick up from</Text>
                </View>
                <View>
                  <SortIcon name="sort" size={20}/>
                </View>
            </View>
            <CatSelectors />
          </View>
        </Header>

        <ScrollView style={styles.mainContent}>
          <ShackCard/>
          <ShackCard/>
          <ShackCard/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  customizableHeader: {
    display: 'flex',
  },
  customizableHeaderTop: {
    flexDirection: 'row',
    justifyContent:"space-between"
  },

  mainContent:{
    marginHorizontal:15,
    marginTop:10
  }
});
