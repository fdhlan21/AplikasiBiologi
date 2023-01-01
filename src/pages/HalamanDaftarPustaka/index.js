// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanDaftarPustaka({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanTentang')}   style={{width:70, height:36, backgroundColor:'#FFC971' , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>




<View style={{top:100}}>

<View style={{padding:10}}>
    <Text style={{fontFamily:'Alata-Regular', fontSize:35, fontWeight:'bold', textAlign:'center'}}>Daftar Pustaka</Text>
</View>

<View style={{padding:10}}>
    <Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}}>Campbell, 2008, Biologi Jilid 1,</Text>
        <Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}}>Jakarta: Erlangga.
</Text>
</View>


<View style={{padding:10}}>
    <Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}}>Irnaningtyas, 2016, Biologi Jilid II,</Text>
        <Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}}>Jakarta: Erlangga.
</Text>
</View>


<View style={{padding:10}}>
    <Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}}>www.youtube.com
</Text>

</View>



</View>


<View style={{padding:10, paddingVertical:50}}>

</View>



</ScrollView>




    </View>
  );
}


export default HalamanDaftarPustaka;