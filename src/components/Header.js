import { View, Text, StyleSheet,Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import ICON from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const {width,height}=Dimensions.get("window")

export default function Header({title,justifyContent}) {
    const navigation = useNavigation()
    
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer} >
        <View style={{...styles.viewContainer,justifyContent:justifyContent}} >
        <TouchableOpacity activeOpacity={0.5} style={{alignSelf:'center'}} onPress={()=>navigation.goBack()} >
        <ICON name="chevron-back" size={25} color="#000" style={{alignSelf:'center'}} />
        </TouchableOpacity> 
        <Text style={styles.text} >{title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:0,
    },
    subContainer:{
        width:width,
        height:height*.08,
        backgroundColor:'#FFF',
        alignItems:'flex-start',
        marginTop:StatusBar.currentHeight
    },
    viewContainer:{
        flexDirection:'row',
        height:height*.08,
        alignSelf:'flex-start',
        marginLeft:width*0.1,
        width:width*.45,
    },
    text:{
        color:"#000",
        fontSize:20,
        alignSelf:'center'
    }
})