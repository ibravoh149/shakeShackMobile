import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  StyleSheet,
  Platform,
  TextInput,
  FlatList
} from 'react-native';
// import Geolocation from "react-native-geolocation-service";
import {colors} from '../asset/colors';
import {basicModalStyle} from '../asset/styles/basicModalStyle';
import {BottomContainer} from '../Component/BottomContainer';
import {fonts} from '../asset/font';
import {ButtonPrimary} from '../Component/UIComponent/Button';
import {BackButton} from '../Component/UIComponent/backButton';
import {Header, MiniHeader} from '../Component/UIComponent/Header';
import { ListItemServiceProvider } from "../Component/ListItem";

import IosBackIcon from 'react-native-vector-icons/Ionicons';
import AndroidBackIcon from 'react-native-vector-icons/Feather';
import {inputStyle} from '../asset/styles/inputTextStyle';

import SearchIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon2 from 'react-native-vector-icons/FontAwesome5';
import EyeGlassIcon from 'react-native-vector-icons/SimpleLineIcons';

const searchIcon = (
  <SearchIcon
    size={20}
    name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
  />
);

const searchIcon2 = <SearchIcon2 name ="searchengin" size={100} color="#1222"/>

const glassIcon = <EyeGlassIcon name ="eyeglass" size={30} color={colors.primary}/>


export class SearchServiceProviderScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      onFocusTextInput:false,
     
      data:[
        {
          _id:"1",
          name:"Adlevo Capita",
          address:"some adress called 12345 at some point",
          businessDays:[
            {day:"mon", openingHour:"24pm", closingHour:"10pm"},
            {day:"tue", openingHour:"24am", closingHour:"2pm"},
            {day:"wed", openingHour:"10am", closingHour:"11pm"},
            {day:"thur", openingHour:"9am", closingHour:"10pm"},
          ]
        },
        {
          _id:"2",
          name:"Andela Capita",
          address:"some adress called 12345 at some point",
          businessDays:[
            {day:"mon", openingHour:"24pm", closingHour:"10pm"},
            {day:"tue", openingHour:"24am", closingHour:"2pm"},
            {day:"thur", openingHour:"10am", closingHour:"11pm"},
            {day:"fri", openingHour:"9am", closingHour:"10pm"},
          ]
        }, {
          _id:"3",
          name:"Sela Capita",
          address:"some adress called 12345 at some point",
          businessDays:[
            {day:"tue", openingHour:"24pm", closingHour:"10pm"},
            {day:"sat", openingHour:"24am", closingHour:"2pm"},
            {day:"sun", openingHour:"10am", closingHour:"11pm"},
            {day:"mon", openingHour:"9am", closingHour:"10pm"},
          ]
        }, {
          _id:"4",
          name:"Ikooba Capita",
          address:"some adress called 12345 at some point",
          businessDays:[
            {day:"mon", openingHour:"24pm", closingHour:"10pm"},
            {day:"wed", openingHour:"24am", closingHour:"2pm"},
            {day:"fri", openingHour:"10am", closingHour:"11pm"},
            {day:"sat", openingHour:"9am", closingHour:"10pm"},
          ]
        }, {
          _id:"5",
          name:"Fireworks Capita",
          address:"some adress called 12345 at some point",
          businessDays:[
            {day:"tue", openingHour:"24pm", closingHour:"10pm"},
            {day:"fri", openingHour:"24am", closingHour:"2pm"},
            {day:"sat", openingHour:"10am", closingHour:"11pm"},
            {day:"sun", openingHour:"9am", closingHour:"10pm"},
          ]
        }
      ]
    };
    this._onFindShackClick = this._onFindShackClick.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);

  }

  componentDidMount() {
    this.setState({onFocusTextInput:true})
    // Platform.OS==="android" &&(
    //   Geolocation.getCurrentPosition((position)=>
    // {
    //   alert(JSON.stringify(position))
    // }, (error)=>{
    //   alert(error.message)
    // },
    // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // ))
  }

  _onFindShackClick() {
    this.setState({
      hasLocation: !this.state.hasLocation,
    });
  }

  _handleSearchChange(text) {
    this.setState({searchString: text});
  }

  



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Find a Shack"
          iconRight={searchIcon}
          onIconLeftClick={() => this.props.navigation.goBack()}
          headerBottomContent={
            <TextInput
              style={inputStyle.container}
              value={this.state.searchString}
              onChangeText={text => {
                this._handleSearchChange(text);
              }}
              placeholder="Search city, state, or location"
              // onFocus={() => this.props.navigation.goBack()}
              autoFocus
            />
          }
        />
        <MiniHeader title="Nearby" icon={glassIcon}/>
        
        {/* <FlatList
          data={this.state.data}
          renderItem={({item})=><ListItemServiceProvider 
          data={item} 
          onStartOrderClick={()=>alert(new Date().toUTCString())}/>}
          keyExtractor={item=>item._id}
        /> */}

        <View style={styles.placeholderSearchIcon}>
         {searchIcon2}
         <Text style={styles.placeholderSearchText}>Looking for a specific Shack? </Text>
         <Text style={styles.placeholderSearchText}>Start Searching! </Text>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  placeholderSearchIcon:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
  },

  placeholderSearchText:{
    color:"#1234"
  }

});
