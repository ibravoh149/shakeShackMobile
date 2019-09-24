import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BuggerIcon from 'react-native-vector-icons/FontAwesome5';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../asset/colors';
import {ButtonPrimary, ButtonWithIcon} from './UIComponent/Button';
import IconArrowRight from 'react-native-vector-icons/Ionicons';


const icon1 = <BuggerIcon name="hamburger" size={40} color={colors.primary} />;

const icon2 = <BuggerIcon name="hamburger" size={20} color={colors.primary} />;

const clock = <Clock name="restore-clock" size={20} color={colors.primary} />;


const loggedIn = true;

const IsLoggedIn = props => {
  return (
    <View>
      <Text style={topContainerStyle.callToActionText}>
        Good Afternoon, Jade
      </Text>
      <Text style={topContainerStyle.welcomeText}>
        Welcome back, time to get shackin'.
      </Text>
    </View>
  );
};

const NotLoggedIn = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
      <Text style={topContainerStyle.callToActionText}>
        Let's get shackin'!
      </Text>
      <Text style={topContainerStyle.welcomeText}>
        Sign in or Create an account
      </Text>
    </TouchableOpacity>
  );
};

const _handleStartPress = props => {
  if (!loggedIn) {
    props.navigation.navigate('Signin');
  } else {
    props.navigation.navigate('ServiceProviders');
  }
};

export const HomeTopContainer = props => {
  return (
    <View style={topContainerStyle.container}>
      {icon1}
      <View style={topContainerStyle.rightContent}>
        {loggedIn ? <IsLoggedIn /> : <NotLoggedIn {...props} />}
      </View>
    </View>
  );
};

export const HomeBottomContainer = props => {
  const {navigation} = props;
  const selectedServiceProvider = navigation.getParam(
    'selectedServoceProvider',
    false,
  );
  const serviceProvider = navigation.getParam('serviceProvider', {});

  return (
    <View style={bottomContainerStyle.container}>
      {selectedServiceProvider && Object.keys(serviceProvider).length > 0 ? (
        <View style={bottomContainerStyle.callToActionView}>
          <View style={bottomContainerStyle.callToActionViewText}>
            <Text style={bottomContainerStyle.callToActionViewTextTop}>
              {serviceProvider.name}
            </Text>
            <Text style={[bottomContainerStyle.callToActionViewTextTopBottom,{flexWrap:"wrap"}]}>
              Pickup at: {serviceProvider.address}
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Shack")}>
                <IconArrowRight name="ios-arrow-forward" size={30}/>
            </TouchableOpacity>
          
          </View>
        </View>
      ) : (
        <View style={bottomContainerStyle.callToActionView}>
          <View style={bottomContainerStyle.callToActionViewText}>
            <Text style={bottomContainerStyle.callToActionViewTextTop}>
              Choose a Shack
            </Text>
            <Text style={bottomContainerStyle.callToActionViewTextTopBottom}>
              Start by choosing a location
            </Text>
          </View>

          <ButtonPrimary
            value="Start"
            backgroundColor={colors.primary_button}
            textColor={colors.white}
            onPress={() => _handleStartPress(props)}
          />
        </View>
      )}

      <View style={bottomContainerStyle.bottomButtonsView}>
        <View style={bottomContainerStyle.bottomButtonsViewButton}>
          <ButtonWithIcon
            value="History"
            icon={clock}
            backgroundColor={colors.white}
            textColor="#000"
          />
        </View>

        <View style={bottomContainerStyle.bottomButtonsViewButton}>
          <ButtonWithIcon
            value="Menu"
            icon={icon2}
            backgroundColor={colors.white}
            textColor="#000"
          />
        </View>
      </View>
    </View>
  );
};

const topContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 20,
    backgroundColor: '#fff',
    padding: 20,
    position: 'relative',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },

  rightContent: {
    flexGrow: 1,
    marginLeft: 20,
  },

  callToActionText: {
    fontFamily: Platform.OS == 'ios' ? 'Baskerville' : 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
  },

  welcomeText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

const bottomContainerStyle = StyleSheet.create({
  container: {
    minHeight: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'relative',
    paddingBottom: 1,
  },

  callToActionView: {
    flex: 1,
    flexDirection: 'row',
  },

  callToActionViewText: {
    flexGrow: 1,
  },

  callToActionViewTextTop: {
    fontFamily: Platform.OS == 'ios' ? 'Baskerville' : 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },

  callToActionViewTextTopBottom: {
    fontSize: 12,
    color: '#999',
  },

  bottomButtonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  bottomButtonsViewButton: {
    width: 160,
  },
});
