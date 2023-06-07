import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'

const {width,height}=Dimensions.get("window")

export default function DateTimeHeader() {
  return (
    <View style={styles.main} >
        <View style={styles.subContainer} > 
            <View style={styles.dateTime} >
                <View style={styles.date} >
                <Image source={require('../assets/images/set_date.png')} style={{width:width*0.05,height:height*0.030,marginRight:width*0.01}} />
                <Text style={styles.text} >21 May 2021</Text>
                </View>
                <Divider orientation="vertical" insetType='middle' />
                <View style={styles.time} >
                <Image source={require('../assets/images/set_time.png')} style={{width:width*0.05,height:height*0.030,marginRight:width*0.01}} />
                <Text style={styles.text} >10:30 Pm-12:30Pm</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:0,
    },
    subContainer:{
        height:height*.08,
        backgroundColor:'#414141',
        width:width,
       
    },
    dateTime:{
        position:'absolute',
        justifyContent:'space-around',
        flexDirection:'row',
        width:width*.83,
        padding:10,
        height:height*.08,
        backgroundColor:'#FFF',
        top:35,
        borderRadius:10,
        alignSelf:'center',
        shadowColor:'#000',
        elevation:10,
        alignItems:'center'
    },
    text:{
        fontSize:15,
        alignSelf:'center',
        color:'#414141',
       fontWeight:600
    },
    date:{
        flexDirection:'row',
        alignSelf:'center'
    },
    time:{
        flexDirection:'row',
        alignSelf:'center'
    }
})