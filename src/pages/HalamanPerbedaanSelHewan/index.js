// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanPerbedaanSelHewan({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>


<View style={{padding:10, alignItems:'center', top:20}}>
<Image  style={{width:308, height:173, }} source={require('../../assets/img/perbedaansel.png')} />
</View>


<View style={{padding:10, top:20}}>

<Text style={{fontFamily:'Poppins-Regular', color:colors.secondary, fontSize:15, textAlign:'center', fontWeight:'bold'}}>Perbedaan Sel Hewan</Text>
<Text style={{fontFamily:'Poppins-Regular', color:colors.secondary, fontSize:15, textAlign:'center', fontWeight:'bold'}}>dan Sel Tumbuhan</Text>
</View>

<View style={{padding:10, alignItems:'center', top:20}}>
<Image  style={{width:315, height:391, }} source={require('../../assets/img/perbedaanselfrup.png')} />
</View>


<View style={{padding:10, justifyContent:'space-around', flexDirection:'row' }}>
    <TouchableOpacity    style={{width:70, height:36, backgroundColor:colors.white , borderRadius:30,}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Menu</Text>
    </TouchableOpacity>
      <TouchableOpacity  onPress={()=>navigation.navigate('HalamanBelajar')}   style={{width:70, height:36, backgroundColor:colors.secondary , borderRadius:30, borderWidth:1, borderColor:colors.tertiary, left:20, top:10}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Menu</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, paddingVertical:50}}>

</View>

</ScrollView>




    </View>
  );
}


export default HalamanPerbedaanSelHewan;