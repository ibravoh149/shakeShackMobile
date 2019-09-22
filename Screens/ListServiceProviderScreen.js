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
import {Header} from '../Component/UIComponent/Header';
import { ListItemServiceProvider } from "../Component/ListItem";

import IosBackIcon from 'react-native-vector-icons/Ionicons';
import AndroidBackIcon from 'react-native-vector-icons/Feather';
import {inputStyle} from '../asset/styles/inputTextStyle';

import SearchIcon from 'react-native-vector-icons/Ionicons';

const searchIcon = (
  <SearchIcon
    size={20}
    name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
  />
);

const iosIcon = (
  <IosBackIcon
    size={18}
    // style={{margin:12}}
    name="ios-arrow-down"
  />
);

const androidIcon = (
  <AndroidBackIcon
    size={20}
    //  style={{margin:12}}
    name="arrow-down"
  />
);

export class ListServiceProviderScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLocation: false,
      searchString: '',
      latitude: null,
      longitude: null,
      data:[
        {
          _id:"1",
          name:"Adlevo Capita",
          address:"some adress called 12345 at some point",
          businessDays:[{
            mon:{open:"24pm", close:"10pm"},
            tue:{open:"24am", close:"2pm"},
            wed:{open:"10am", close:"11pm"},
            fri:{open:"9am", close:"10pm"},
          }]
        },
        {
          _id:"2",
          name:"Andela Capita",
          address:"some adress called 12345 at some point",
          businessDays:[{
            mon:{open:"24pm", close:"10pm"},
            tue:{open:"24am", close:"2pm"},
            wed:{open:"10am", close:"11pm"},
            fri:{open:"9am", close:"10pm"},
          }]
        }, {
          _id:"3",
          name:"Sela Capita",
          address:"some adress called 12345 at some point",
          businessDays:[{
            mon:{open:"24pm", close:"10pm"},
            tue:{open:"24am", close:"2pm"},
            wed:{open:"10am", close:"11pm"},
            fri:{open:"9am", close:"10pm"},
          }]
        }, {
          _id:"4",
          name:"Ikooba Capita",
          address:"some adress called 12345 at some point",
          businessDays:[{
            mon:{open:"24pm", close:"10pm"},
            tue:{open:"24am", close:"2pm"},
            wed:{open:"10am", close:"11pm"},
            fri:{open:"9am", close:"10pm"},
          }]
        }, {
          _id:"5",
          name:"Fireworks Capita",
          address:"some adress called 12345 at some point",
          businessDays:[{
            mon:{open:"24pm", close:"10pm"},
            tue:{open:"24am", close:"2pm"},
            wed:{open:"10am", close:"11pm"},
            fri:{open:"9am", close:"10pm"},
          }]
        }
      ]
    };
    this._onFindShackClick = this._onFindShackClick.bind(this);
    this._notNotClick = this._notNotClick.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._listItems=this._listItems.bind(this);

  }

  componentDidMount() {
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

  _notNotClick() {
    // this.setState({hasLocation:!this.state.hasLocation})
    this.props.navigation.goBack();
  }

 _listItems(){
  return 
 }

  render() {
    return (
      <SafeAreaView style={{width: '100%', height: '100%'}}>
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
              placeholder="Search city, state,or location"
              onFocus={() => this.props.navigation.goBack()}
            />
          }
        />
        
        <FlatList
          data={this.state.data}
          renderItem={({item})=><ListItemServiceProvider data={item} onStartOrderClick={()=>alert(`${item.name} is clicked`)}/>}
          keyExtractor={item=>item._id}
        />

        {/* modal component */}
        <Modal style visible={this.state.hasLocation} transparent>
          <View style={basicModalStyle.container}>
            <View style={{marginTop: 20}}>
              <BackButton
                onPress={this._onFindShackClick}
                icon={Platform.OS === 'ios' ? iosIcon : androidIcon}
              />
            </View>
            <BottomContainer>
              <View style={styles.modalContent}>
                <View style={styles.modalContentTop}>
                  <Text style={styles.modalContentTopHeading}>
                    Find a Shack
                  </Text>
                  <Text style={styles.modalContentTopText}>
                    Enable location services to automatically find the nearest
                    Shacks
                  </Text>
                </View>

                <View style={styles.modalContentBottom}>
                  <ButtonPrimary
                    value="Find Shacks"
                    onPress={this._onFindShackClick}
                  />
                  <ButtonPrimary
                    value="Not Now"
                    onPress={this._notNotClick}
                    backgroundColor={colors.white}
                    textColor="#000"
                    borderColor="#1222"
                  />
                </View>
              </View>
            </BottomContainer>
          </View>
        </Modal>
        {/* modal component */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  modalContentTop: {
    marginVertical: 5,
  },
  modalContentTopHeading: {
    fontFamily:
      Platform.OS === 'ios' ? fonts.primary_ios : fonts.primary_android,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContentTopText: {
    fontSize: 13,
    color: '#999',
  },
  modalContentBottom: {
    // width:"100%",
    marginVertical: 10,
  },
});
