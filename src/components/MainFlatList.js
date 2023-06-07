import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import RIGHT from 'react-native-vector-icons/AntDesign';
import Button from './BtnComponent';
import STAR from 'react-native-vector-icons/FontAwesome';
import DOWN from 'react-native-vector-icons/AntDesign';
import ADD from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Divider} from '@rneui/themed';
import BOX from 'react-native-vector-icons/MaterialCommunityIcons';
import FRIDGE from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

function RenderItem(item) {
  const navigation = useNavigation();

  const equipments = item.item.item.equipments;

  const equip = () => {
    return equipments.map(item => {
      return (
        <View>
          <View style={{alignItems: 'center', marginRight: width * 0.02}}>
            <FRIDGE name="fridge-alert-outline" size={18} color="#000" />
            <Text style={{color: 'grey', fontSize: 8.5}}>{item}</Text>
          </View>
        </View>
      );
    });
  };

  const handleData = item => {
    navigation.navigate('Product', {dataItem: item});
  };

  return (
    <View style={styles.viewcontainer}>
      <View style={styles.miniview}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.textstyle}>{item.item.item.name} </Text>
            <BOX
              name="circle-box-outline"
              size={15}
              color={'green'}
              style={{marginRight: 5, marginLeft: 0}}
            />
            <View style={styles.backgroudview}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 12,
                  alignSelf: 'center',
                  marginRight: 4,
                }}>
                {item.item.item.rating}
              </Text>
              <STAR name="star" size={10} color="#FFF" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: width * 0.6,
              marginTop: 10,
            }}>
            {equip()}
            <Divider
              orientation="vertical"
              insetType="middle"
              style={{marginLeft: 8}}
            />
            <View
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                marginLeft: 15,
              }}>
              <Text style={{color: '#000', fontSize: 13, fontWeight: 600}}>
                Ingredients
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleData(item.item.item)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '', fontSize: 11, fontWeight: 500}}>
                    View list
                  </Text>
                  <RIGHT name="right" size={10} color="red" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              width: width * 0.55,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                fontWeight: 400,
                alignSelf: 'flex-start',
              }}>
              {item.item.item.description}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={{uri: item.item.item.image}}
            style={{
              marginTop: height * 0.01,
              width: width * 0.25,
              height: height * 0.1,
              borderRadius: 10,
            }}
          />
          <View style={styles.addview}>
            <Text
              style={{
                color: '#FF8800',
                fontSize: 17,
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              Add
            </Text>
            <ADD name="add" size={12} color="red" />
          </View>
        </View>
      </View>
      <View
        style={{
          width: width * 0.85,
          height: 1,
          backgroundColor: '#f1f2f6',
          marginTop: 20,
          marginBottom: 10,
        }}
      />
    </View>
  );
}

export default function MainFlatList({}) {
  const [dishes, setDishes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const dishData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/',
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
        },
      );
      const response = await res.json();
      setDishes(response?.dishes);
      setIsLoading(false);
    } catch (e) {
      console.log('dish Data error', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    dishData();
  }, []);

  return (
    <View style={{height: height * 0.56}}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: 4,
            backgroundColor: '#f1f2f6',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        {isLoading == true ? (
          <></>
        ) : (
          <View style={styles.mainview}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontSize: 20,
                  fontWeight: 600,
                  marginRight: 10,
                }}>
                Recommended
              </Text>
              <DOWN name="caretdown" size={15} color="#1C1C1C" />
            </View>
            <View style={{marginRight: 8, color: '#1C1C1C'}}>
              <Button
                title={'Menu'}
                widthBtn={width * 0.2}
                heightBtn={height * 0.04}
              />
            </View>
          </View>
        )}
        {isLoading == true ? (
          <ActivityIndicator
            size={20}
            style={{alignSelf: 'center'}}
            color="#000"
          />
        ) : (
          <FlatList
            data={dishes}
            renderItem={item => <RenderItem item={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
          />
        )}
      </ScrollView>
      {isLoading == true ? (
        <></>
      ) : (
        <View style={{position: 'absolute', bottom: 45, alignSelf: 'center'}}>
          <Button
            title={'3 item Selected'}
            leftIcon={true}
            leftIconName="hamburger"
            rightIcon={true}
            rightIconName="arrowright"
            widthBtn={width * 0.65}
            fontSize={17}
            heightBtn={height * 0.06}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    width: width * 0.87,
    height: height * 0.15,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: height * 0.001,
  },
  miniview: {
    flexDirection: 'row',
    width: width * 0.87,
    height: height * 0.15,
  },
  textstyle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 600,
    alignSelf: 'flex-start',
  },
  backgroudview: {
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addview: {
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 20,
    shadowColor: '#000',
    elevation: 7,
    width: width * 0.2,
    alignSelf: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF9A26',
    height: height * 0.04,
    flexDirection: 'row',
  },
  mainview: {
    flexDirection: 'row',
    marginBottom: 20,
    width: width * 0.87,
    height: height * 0.04,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
