import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import RIGHT from 'react-native-vector-icons/AntDesign';
import LEFT from 'react-native-vector-icons/FontAwesome5';

export default function Button({
  title,
  heightBtn,
  widthBtn,
  fontSize,
  rightIcon,
  leftIcon,
  rightIconName,
  leftIconName,
}) {
  return (
    <View style={styles.main}>
      <View
        style={{
          ...styles.subMain,
          width: widthBtn,
          height: heightBtn,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftIcon == true && (
            <LEFT
              name={leftIconName}
              size={20}
              color="#FFF"
              style={{marginRight: 10}}
            />
          )}
          <Text style={{...styles.text, fontSize: fontSize}}>{title}</Text>
        </View>
        {rightIcon == true && (
          <RIGHT name={rightIconName} size={20} color="#FFF" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subMain: {
    backgroundColor: '#414141',
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 10,
  },

  iconstyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 700,
    alignSelf: 'center',
  },
});
