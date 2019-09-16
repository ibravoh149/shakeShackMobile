import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import  {DrawerNav} from "./Component/DrawerNav";
import {
  WelcomeScreen as Welcome,
  AuthLoadingScreen as AuthLoading,
} from './Screens';

import { SigninScreen as Signin } from "./Screens/AuthenticationScreens/Signin";
import { SignupScreen as Signup } from "./Screens/AuthenticationScreens/Signup/Signup";

const MainStack = createDrawerNavigator(
  {
    Home: {screen: Welcome,
      navigationOptions: {
          header: null,
      },
    },
    // Signin: {
    //   screen: Signin,
    //   // navigationOptions: {
    //   //     header: null,
    //   // },
    // },
  },
  // {
  //     contentComponent: DrawerNav
  // }
);

const AuthStack = createStackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: {
        header: null,
    },
  },

  Signup: {
    screen: Signup,
    navigationOptions: {
        header: null,
    },
  },
});

const Navigator = createSwitchNavigator({
  // Splash: {
  //     screen: AuthLoading,
  //     navigationOptions: {
  //         header: null,
  //     },
  // },
  // Drawer: Drawer,
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: {
        header: null,
    },
  },

  Auth: AuthStack,

  Main: MainStack,
});

const navigate = createAppContainer(Navigator);

export default navigate;
