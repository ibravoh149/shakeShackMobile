import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';

import {BackButton} from '../../../Component/UIComponent/backButton';
import {ButtonPrimary} from '../../../Component/UIComponent/Button';
import {inputStyle} from '../../../asset/styles/inputTextStyle';
import {fonts} from '../../../asset/font';
import Icon from 'react-native-vector-icons/Entypo';

export const StepTwo = ({handleChange, backPress, continuePress, values}) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={backPress} />
      <View style={styles.mainContent}>
        <View style={styles.callToActionView}>
          <Text style={styles.callToActionViewTextTop}>Set a password</Text>
        </View>

        <View style={styles.formView}>
          <TextInput
            style={inputStyle.container}
            placeholder="create password"
            onChangeText={text => handleChange('password', text)}
            value={values.firstName}
            secureTextEntry
            textContentType="password"
          />

          <View style={{marginVertical: 5}}>
            <Text
              style={[
                styles.callToActionViewTextTopBottom,
                {marginVertical: 5},
              ]}>
              <Icon name="circle-with-cross" size={13} color="#999" /> Atleast 8
              characters
            </Text>
            <Text
              style={[
                styles.callToActionViewTextTopBottom,
                {marginVertical: 5},
              ]}>
              <Icon name="circle-with-cross" size={13} color="#999" /> Must contain letters
            </Text>
            <Text
              style={[
                styles.callToActionViewTextTopBottom,
                {marginVertical: 5},
              ]}>
              <Icon name="circle-with-cross" size={13} color="#999" /> One number or special character
            </Text>
          </View>

          <ButtonPrimary value={'Continue'} onPress={continuePress} />
        </View>
      </View>
    </View>
  );
};

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
