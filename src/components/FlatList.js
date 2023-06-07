import {View, Text, StatusBar, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

function RenderItem(item) {
  return (
    <View
      style={styles.mainview}>
      <View
        style={styles.subview
         
        }>
        <Image
          source={{uri: item.item.item.image}}
          style={styles.image
            
          }
        />
        <View
          style={styles.innerview
           
          }>
          <Text
            style={styles.textview
             
            }>
            {item.item.item.name}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function StoryFlatList({}) {
  const [dishes, setDishes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/',
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
        },
      );
      const result = await res.json();
      setDishes(result.popularDishes);
      setIsLoading(false);
    } catch (e) {
      console.log('Popular Dishes Error', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    handleData();
  }, []);

  return (
    <View style={{marginLeft: isLoading == true ? 0 : 33}}>
      {isLoading == true ? (
        <></>
      ) : (
        <View style={{marginLeft: 0, marginBottom: height*.0, marginTop: height*.0}}>
          <Text style={{color: '#414141', fontSize: 17, fontWeight: 700}}>
            Popular Dishes
          </Text>
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
          horizontal
          scrollIndicatorInsets={false}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  mainview:{
    width: width * 0.2,
    height: height * 0.13,
    borderRadius: 100,
    marginRight: 15,
    justifyContent: 'center',

  },
  subview:{
    width: width * 0.19,
    height: height * 0.1,
    borderRadius: 100,
    marginRight: width*0.2,
    borderColor: '#FF941A',
    borderWidth: 2,
    justifyContent: 'center',
    borderStyle: 'solid',
  },
  image:{
    width: width * 0.17,
    alignSelf: 'center',
    height: height * 0.09,
    borderRadius: 100,
  },

  innerview:{
    width: width * 0.17,
    height: height * 0.09,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  textview:{
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 14,
    fontWeight: 500,
  }



})
