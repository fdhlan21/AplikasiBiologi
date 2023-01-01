// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanStart({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>


<View style={{alignItems:'center', top:0}}>
    <Image style={{width:360, height:416}} source={require('../../assets/gif/animasi.gif')}/>
</View>

<View style={{padding:10, backgroundColor:colors.secondary, height:500,  bottom:50, borderTopRightRadius:50, borderTopLeftRadius:50,}}>

<View style={{padding:10}} >
<Text style={{fontSize:40, color:colors.white, fontFamily:'Alata-Regular', textAlign:'center',}}>Bismillah</Text>
<Text style={{fontSize:50, color:colors.white, fontFamily:'Alata-Regular', textAlign:'center', bottom:40}}>....</Text>
</View>

<View style={{padding:10, alignItems:'center', }}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')} style={{width:182, height:63, backgroundColor:'#D6A9D0', borderRadius:30}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center', top:10, fontWeight:'800'}}>GET START</Text>
    </TouchableOpacity>
</View>

</View>

    </View>
  );
}


export default HalamanStart;