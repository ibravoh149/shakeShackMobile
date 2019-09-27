import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../asset/colors';
// <CatSelector icon={<Icon name="hamburger" size={30} color={colors.primary}/>}/>

export const CatSelector = ({selected, icon, onSelect}) => {
  const backgroundColor = selected ? colors.primary : colors.white;

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.catSelector, {backgroundColor}]}>
      {icon}
    </TouchableOpacity>
  );
};




export const CatSelectors = () => {

  const _toggleIconColor=(selected)=>{
    let color = selected ? "blue" : "yellow";
    return color;
  }

  const [selectors, setSelected] = useState([
    {
      name: 'history',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'burger',
      selected: true,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'chicken',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'fries',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'hotdog',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'icecream',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'drink',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
    {
      name: 'retail',
      selected: false,
      icon: <Icon name="hamburger" size={30} color={colors.primary} />,
    },
  ]);

  

  const _onSelect = name => {
    const catSelectors = [...selectors];

    catSelectors.forEach(selector => {
      if (selector.name !== name) {
        selector.selected = false;
      } else {
        selector.selected = true;
      }
    });

    setSelected(catSelectors);
  };

  return (
    <View style={styles.scrollWrapper}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        horizontal>
        {selectors.map((selector, index) => {
          return (
            <CatSelector
              key={index}
              selected={selector.selected}
              icon={selector.icon}
              onSelect={() => _onSelect(selector.name)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  catSelector: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#1222',
    borderWidth: 1,
    padding: 9,
    flexGrow: 1,
    marginHorizontal: 5,
    // backgroundColor:colors.white
  },

  contentContainerStyle: {
    // flex:1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingVertical: 10,
  },

  selectedBgColor: {
    backgroundColor: colors.primary,
  },

  selectedIconColor: {
    color: colors.white,
  },

  scrollWrapper: {
    // flex:1
  },
});
