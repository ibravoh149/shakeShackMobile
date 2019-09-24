import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import  {DrawerNav} from "./Component/DrawerNav";
import {
  WelcomeScreen as Welcome,
  AuthLoadingScreen as AuthLoading,
  MapViewScreen as MapView,
  ListServiceProviderScreen as ListServiceProviders,
  SearchServiceProviderScreen as SearchServiceProvider,
  Shack
} from './Screens';

import {SigninScreen as Signin} from './Screens/AuthenticationScreens/Signin';
import {SignupScreen as Signup} from './Screens/AuthenticationScreens/Signup/Signup';

const WelcomeStack = createDrawerNavigator(
  {
    Home: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
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

const MainStack = createStackNavigator({
  Home: {screen: WelcomeStack, navigationOptions: {header: null}},

  ServiceProviders: {
    screen: ListServiceProviders,
    navigationOptions: {
      header: null,
    },
  },

  SearchServiceProviders: {
    screen: SearchServiceProvider,
    navigationOptions: {
      header: null,
    },
  },

  Shack: {
    screen: Shack,
    navigationOptions: {
      header: null,
    },
  },

  Map: {
    screen: MapView,
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

  WelcomeStack: WelcomeStack,

  Main: MainStack,
});

const navigate = createAppContainer(Navigator);

export default navigate;
