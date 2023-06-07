import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import STAR from 'react-native-vector-icons/FontAwesome';
import ICON from 'react-native-vector-icons/AntDesign';
import DOWN from 'react-native-vector-icons/AntDesign';
import {ActivityIndicator} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function ProductDetail({route}) {
  const {dataItem} = route.params;

  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const data = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1',
      );
      const result = await res.json();
      setProduct(result);
      setIsLoading(false);
    } catch (e) {
      console.log('Product error', e);
    }
  };

  React.useEffect(() => {
    data();
  }, []);

  const veg = () => {
    return product?.ingredients?.vegetables.map(item => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 25,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 400,
              marginTop: 5,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 400,
              marginTop: 5,
            }}>
            {item.quantity}
          </Text>
        </View>
      );
    });
  };

  const spice = () => {
    return product?.ingredients?.spices.map(item => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 25,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 400,
              marginTop: 5,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 400,
              marginTop: 5,
            }}>
            {item.quantity}
          </Text>
        </View>
      );
    });
  };

  const appliance = () => {
    return product?.ingredients?.appliances.map(item => {
      return (
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 25,
            backgroundColor: '#f1f2f6',
            marginTop: 20,
            width: width * 0.23,
            height: height * 0.15,
            borderRadius: 15,
          }}>
          <View>
            <Image
              source={require('../assets/images/refri.png')}
              style={{
                width: width * 0.2,
                height: height * 0.1,
                alignSelf: 'center',
              }}
            />
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 400,
              marginTop: 5,
              alignSelf: 'center',
            }}>
            {item.name}
          </Text>
        </View>
      );
    });
  };

  return (
    <ScrollView>
      <View style={StyleSheet.main}>
        <Header justifyContent="flex-start" />

        {isLoading == true ? (
          <ActivityIndicator
            size={20}
            style={{alignSelf: 'center'}}
            color="#000"
          />
        ) : (
          <View style={styles.subMain}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.title}>{dataItem.name}</Text>
              <View style={styles.miniview}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 12,
                    alignSelf: 'center',
                    marginRight: 4,
                  }}>
                  {dataItem.rating}
                </Text>
                <STAR name="star" size={10} color="#FFF" />
              </View>
            </View>
            <View style={{}}>
              <Text style={{color: 'grey', width: width * 0.6}}>
                {dataItem.name} is a style of cookery developed in the indian
                Subcontinent by the imperial kitchens of the Mugal Empire.
              </Text>
            </View>
            <View
              style={{
                width: width * 0.5,
                height: height * 0.23,
                backgroundColor: 'rgba(0,0,0,0.04)',
                borderRadius: 100,
                position: 'absolute',
                right: 0,
                top: 6,
                alignSelf: 'flex-end',
              }}
            />
            <View
              style={{
                bottom: 30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <ICON
                  name="clockcircleo"
                  size={20}
                  color="#414141"
                  style={{marginRight: 10}}
                />
                <Text style={{color: '#414141', fontWeight: 700, fontSize: 16}}>
                  {product.timeToPrepare}
                </Text>
              </View>
              <View
                style={{
                  width: width * 0.7,
                  height: 4,
                  borderRadius: 10,
                  backgroundColor: '#f1f2f6',
                  position: 'absolute',
                  bottom: 20,
                }}
              />
              <Image
                source={require('../assets/images/Veg.png')}
                style={{
                  width: width * 0.55,
                  height: height * 0.18,
                  alignSelf: 'flex-end',
                }}
              />
            </View>
            <View>
              <Text style={{color: '#1C1C1C', fontSize: 20, fontWeight: 700}}>
                Ingredients
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 13,
                  fontWeight: 400,
                  marginTop: 5,
                }}>
                For 2 People
              </Text>
            </View>
            <View style={{marginVertical: 20}}>
              <View
                style={{
                  width: width * 0.83,
                  height: 1,
                  alignSelf: 'flex-start',
                  backgroundColor: '#f1f2f6',
                }}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#1C1C1C', fontSize: 17, fontWeight: 700}}>
                  Vegitables ({product?.ingredients?.vegetables.length})
                </Text>
                <DOWN
                  name="caretdown"
                  size={13}
                  color="#414141"
                  style={{marginLeft: 6}}
                />
              </View>
              <View style={{}}>{veg()}</View>
            </View>
            <View style={{marginBottom: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#1C1C1C', fontSize: 17, fontWeight: 700}}>
                  Spices ({product?.ingredients?.spices.length})
                </Text>
                <DOWN
                  name="caretdown"
                  size={13}
                  color="#414141"
                  style={{marginLeft: 6}}
                />
              </View>
              <View style={{}}>{spice()}</View>
            </View>
            <View style={{marginBottom: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#1C1C1C', fontSize: 17, fontWeight: 700}}>
                  Appliances ({product?.ingredients?.appliances.length})
                </Text>
                <DOWN
                  name="caretdown"
                  size={13}
                  color="#414141"
                  style={{marginLeft: 6}}
                />
              </View>
              <View style={{flexDirection: 'row'}}>{appliance()}</View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  subMain: {
    width: width,
    paddingLeft: width * 0.08,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: '#414141',
    fontWeight: 700,
    marginRight: 10,
  },
  miniview: {
    backgroundColor: 'green',
    marginTop: 4,
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.1,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
