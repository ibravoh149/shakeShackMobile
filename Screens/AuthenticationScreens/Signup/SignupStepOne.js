import React from "react";
import { View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput, } from "react-native";

import {BackButton} from '../../../Component/UIComponent/backButton';
import {ButtonPrimary} from '../../../Component/UIComponent/Button';
import {inputStyle} from '../../../asset/styles/inputTextStyle';
import {fonts} from '../../../asset/font';

  export const StepOne=({handleChange, backPress, continuePress, values})=>{
    return(
      <View style={styles.container}>
        <BackButton onPress={backPress}/>
        <View style={styles.mainContent}>
          <View style={styles.callToActionView}>
            <Text style={styles.callToActionViewTextTop}>Hello!</Text>
            <Text style={styles.callToActionViewTextTopBottom}>
              {`Create an account for ${values.email}`}
            </Text>
          </View>

          <View style={styles.formView}>
            <TextInput
              style={inputStyle.container}
              placeholder="first name"
              onChangeText={(text)=>handleChange('firstName', text)}
              value={values.firstName}
            />

              <TextInput
                style={inputStyle.container}
                placeholder="last name"
                onChangeText={(text)=>handleChange('lastName', text)}
                value={values.lastName}
              />
           

            <ButtonPrimary
              value={'Continue'}
              onPress={continuePress}
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
  