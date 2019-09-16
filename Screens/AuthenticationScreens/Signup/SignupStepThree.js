import React from "react";
import { View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput, Switch } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import {BackButton} from '../../../Component/UIComponent/backButton';
import {ButtonPrimary} from '../../../Component/UIComponent/Button';
import {inputStyle} from '../../../asset/styles/inputTextStyle';
import {fonts} from '../../../asset/font';

  export const StepThree=({handleChange, backPress, continuePress, values, toggleCheckBox})=>{
    return(
      <View style={styles.container}>
        <BackButton onPress={backPress}/>
        <View style={styles.mainContent}>
          <View style={styles.callToActionView}>
            <Text style={styles.callToActionViewTextTop}>Let's Keep in Touch!</Text>
            <Text style={styles.callToActionViewTextTopBottom}>
             We'll text you when your order is ready
            </Text>
          </View>

          <View style={styles.formView}>
            <TextInput
              style={inputStyle.container}
              placeholder="phone number"
              onChangeText={(text)=>handleChange('phone', text)}
              value={values.phone}
            />

              <TextInput
                style={inputStyle.container}
                placeholder="zip code(optional)"
                onChangeText={(text)=>handleChange('zipCode', text)}
                value={values.zipCode}
              />

            <View style={{flexDirection:"row", marginVertical:20}}>
              <Text style={{flexGrow:1, fontWeight:"bold", fontSize:15}}>Sign up for promotional emails</Text>

              {Platform.OS==="ios"? <Switch
              value={values.signedForPromotionalEmail}
              onValueChange={toggleCheckBox}
              />:<CheckBox
              value ={values.signedForPromotionalEmail}
              style={{height:30, width:30, borderRadius:15, borderColor:"green"}}
              onValueChange={toggleCheckBox}
            
              />}
            
            </View>
              
           

            <ButtonPrimary
              value={'Create Account'}
              // onPress={continuePress}
            />
          </View>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainContent: {
      flex: 1,
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
      marginVertical: 100,
      paddingHorizontal: 15,
    },
  
    callToActionView: {
      marginVertical: 20,
    },
  
    callToActionViewTextTop: {
      fontFamily:
        Platform.OS === 'ios' ? fonts.primary_ios : fonts.primary_android,
      fontSize: 25,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
  
    callToActionViewTextTopBottom: {
      fontSize: 12,
      color: '#999',
    },
  
    formView: {
      width: '100%',
    },
  });
  