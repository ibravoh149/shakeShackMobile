import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
// import {BackButton} from '../../Component/UIComponent/backButton';
// import {ButtonPrimary} from '../../Component/UIComponent/Button';
// import {inputStyle} from '../../asset/styles/inputTextStyle';
// import {fonts} from '../../asset/font';

import { StepOne } from "./SignupStepOne";
import { StepTwo } from "./SignupStepTwo";
import { StepThree } from "./SignupStepThree";

export class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName:"",
      lastName:"",
      phone:"",
      zipCode:"",
      signedForPromotionalEmail:false,
      step:1
    };
    this._renderSteps=this._renderSteps.bind(this);
    this._onBackPress=this._onBackPress.bind(this);
    this._handleChange=this._handleChange.bind(this);
    this._onContinuePress=this._onContinuePress.bind(this);
    this._toggleCheckBox=this._toggleCheckBox.bind(this)
  }

  componentDidMount(){
    const { navigation } = this.props
        const email = navigation.getParam("email", "john@snow.com");
        this.setState({
            email
        })
  }

  _handleChange = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  _onBackPress(){
      if(this.state.step <=1){
        this.props.navigation.goBack();
      }else{
        this.setState({
          step:this.state.step -1
        })
      }
  }

  _onContinuePress(){
    this.setState({
      step:this.state.step+1
    })
  }

  _toggleCheckBox(){
    this.setState({
      signedForPromotionalEmail:!this.state.signedForPromotionalEmail
    })
  }


  _renderSteps(step){

    const {firstName, lastName, email, phone, zipCode, signedForPromotionalEmail, password}=this.state

    const values={
      firstName,lastName, email, phone, zipCode, signedForPromotionalEmail, password
    }
    switch (step) {
      case 1:
        return <StepOne 
        handleChange={this._handleChange}
        values={values}
        backPress={this._onBackPress}
        continuePress={this._onContinuePress}
        />

      case 2:
        return <StepTwo
        handleChange={this._handleChange} 
        values={values}
        backPress={this._onBackPress}
        continuePress={this._onContinuePress}
        />
      case 3:
          return <StepThree
          handleChange={this._handleChange} 
          values={values}
          backPress={this._onBackPress}
          continuePress={this._onContinuePress}
          toggleCheckBox={this._toggleCheckBox}
          />
      default:
        break;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderSteps(this.state.step)}
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

  // callToActionView: {
  //   marginVertical: 20,
  // },

  // callToActionViewTextTop: {
  //   fontFamily:
  //     Platform.OS === 'ios' ? fonts.primary_ios : fonts.primary_android,
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   letterSpacing: 2,
  // },

  // callToActionViewTextTopBottom: {
  //   fontSize: 12,
  //   color: '#999',
  // },

  // formView: {
  //   width: '100%',
  // },
});
