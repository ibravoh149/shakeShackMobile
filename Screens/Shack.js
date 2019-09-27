import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Header, MiniHeader} from '../Component/UIComponent/Header';
import {CatSelectors} from '../Component/ShackCategorySelector';
import Icon from 'react-native-vector-icons/Ionicons';
import SortIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../asset/colors';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ShackCard } from "../Component/shackCard";


import sampleImage from "../asset/images/home-banner.jpg"

export class Shack extends Component {

  state={
    data:[
      {
        _id:"1",
        image:sampleImage,
        name:"ShackBurger",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },
      {
        _id:"2",
        image:sampleImage,
        name:"BurgerShack",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },
      {
        _id:"3",
        image:sampleImage,
        name:"ShackKing",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },

      {
        _id:"4",
        image:sampleImage,
        name:"BurgerKing",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },

      {
        _id:"5",
        image:sampleImage,
        name:"ShackMorning",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },

      {
        _id:"6",
        image:sampleImage,
        name:"MorningBurger",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },

      {
        _id:"7",
        image:sampleImage,
        name:"MorningBurger",
        description:"Cheeseburger topped with lettuce, tomato and ShakeSauce",
        price:5.79,
        cal:530
      },
    ]
  }

  render() {
    return (
      <SafeAreaView style={{width:"100%", height:"100%"}}>
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

        <View style={styles.mainContent}>
            <FlatList
                data={this.state.data}
                renderItem={({item})=><ShackCard item={item}/>}
                keyExtractor={item=>item._id}
            />
        </View>
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
    marginTop:10,
    marginBottom:50,
    // flex:1
  }
});
