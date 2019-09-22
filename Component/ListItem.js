import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import {Collapsible} from '../Component/UIComponent/Accordion';
import {colors} from '../asset/colors';
import {fonts} from '../asset/font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ButtonPrimary} from './UIComponent/Button';

export const ListItemServiceProvider = ({data, onStartOrderClick}) => {
  const CollapsibleHeader = () => {
    return (
      <View>
        <Text style={styles.collapsibleHeaderHeadingTop}>{data.name}</Text>
        <Text style={styles.collapsibleHeaderHeadingBottom}>
          {data.address}
        </Text>
      </View>
    );
  };

  const CollapsibleFooter = () => {
    return (
      <View style={styles.collapsibleFooter}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={{flexGrow: 1, alignSelf: 'center'}}>
            Next Available : ASAP
          </Text>
          <View>
            <ButtonPrimary
              onPress={onStartOrderClick}
              textColor="#000"
              backgroundColor="#fff"
              borderColor="#1222"
              value="Start Order"
            />
          </View>
        </View>
      </View>
    );
  };

  const CollapsibleContent = () => {
    return (
      <View>
        <Text>{JSON.stringify(data.businessDays)}</Text>
      </View>
    );
  };

  return (
    <Collapsible
      collapsibleContent={<CollapsibleContent />}
      collapsibleFooter={<CollapsibleFooter />}
      collapsibleHeader={<CollapsibleHeader />}
    />
  );
};

const styles = StyleSheet.create({
  collapsibleHeaderHeadingTop: {
    fontFamily:
      Platform.OS === 'ios' ? fonts.primary_ios : fonts.primary_android,
    fontSize: 20,
    fontWeight: 'bold',
  },
  collapsibleHeaderHeadingBottom: {
    fontSize: 13,
    color: '#999',
  },

  collapsibleFooter: {
    flex: 1,
    // width:Dimensions.get("window").width
  },
});
