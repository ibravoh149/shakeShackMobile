import React from 'react';
import { TouchableOpacity} from 'react-native';
import {drawerButtonStyle} from '../asset/styles/drawerButtonStyles';
import DrawerIcon from 'react-native-vector-icons/Ionicons';

export const Drawer = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.openDrawer()}
      style={drawerButtonStyle.drawerButton}>
      <DrawerIcon
        name="ios-menu"
        size={20}
        style={drawerButtonStyle.DrawerIcon}
      />
    </TouchableOpacity>
  );
};
