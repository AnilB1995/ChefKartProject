import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'

const {width,height}=Dimensions.get("window")

const data=[
  {id:1,name:"Italian"},
  {id:2,name:"Indian"},
  {id:3,name:"Indian"},
  {id:4,name:"Indian"},
  {id:5,name:"Indian"},
]

function RenderItem(item){

  const [selected,setSelected]=React.useState('')
  
  const handleSelect=(item)=>{
    setSelected(item)
  }
  
    return(
        <TouchableOpacity onPress={()=>handleSelect(item.item.item.id)} >
        <View style={{...styles.renderView,borderColor:item.item.item.id === selected ? 'red' : "#414141",}} >
                <Text style={{...styles.renderText,color: item.item.item.id === selected ? '#FF941A' : "#414141" ,}} >{item.item.item.name} </Text>
        </View>
        </TouchableOpacity>
    )
}

export default function HeaderList() {
  return (
    <View style={styles.container} >
      <FlatList 
      data={data}
      renderItem={item => <RenderItem item={item} />}
      keyExtractor={item=>item.id}
      horizontal
      scrollIndicatorInsets={false}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginTop:height*0.05,marginLeft:width*0.1
  },
  renderView:{
    width:width*.2,height:height*.05,borderRadius:20,marginHorizontal:5,
    borderWidth:1,borderStyle:'solid',backgroundColor:'#FFF',justifyContent:'center'
  },
  renderText:{
    fontSize:17,alignSelf:'center',marginTop:2
  }
})