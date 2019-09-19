import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
import {BackButton} from '../../Component/UIComponent/backButton';
import {ButtonPrimary} from '../../Component/UIComponent/Button';
import {inputStyle} from '../../asset/styles/inputTextStyle';
import {fonts} from '../../asset/font';

export class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: false,
      isLoggedIn:true
    };
    this._handleChange = this._handleChange.bind(this);
    this._onBackButtonPress = this._onBackButtonPress.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   if(this.state.isLoggedIn){
  //     this.props.navigation.navigate("Home");
  //   }
  // }

  _handleChange = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  _onBackButtonPress() {
    this.props.navigation.navigate('Home');
  }

  _handleSubmit() {
    if (!this.state.hasAccount) {
      this.props.navigation.navigate('Signup', {
        email: this.state.email,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BackButton onPress={this._onBackButtonPress} />
        <View style={styles.mainContent}>
          <View style={styles.callToActionView}>
            <Text style={styles.callToActionViewTextTop}>Get the goods!</Text>
            <Text style={styles.callToActionViewTextTopBottom}>
              Sign in or create an account.
            </Text>
          </View>

          <View style={styles.formView}>
            <TextInput
              style={inputStyle.container}
              placeholder="Enter Your email"
              onChangeText={text => this._handleChange('email', text)}
              value={this.state.email}
              // textContentType="emailAddress"
            />

            {this.state.hasAccount ? (
              <TextInput
                style={inputStyle.container}
                placeholder="Enter Your Password"
                onChangeText={text => this._handleChange('password', text)}
                value={this.state.password}
                secureTextEntry
                textContentType="password"
              />
            ) : (
              <View></View>
            )}

            <ButtonPrimary
              value={this.state.hasAccount ? 'Login' : 'Continue'}
              onPress={this._handleSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"space-evenly"
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
