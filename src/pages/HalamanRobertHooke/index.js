// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function RobertHooke({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around',}}>
   <Image   style={{width:142, height:187,}} source={require('../../assets/img/mcroberthook.png')} />
    <Image   style={{width:142, height:187,}} source={require('../../assets/img/selhooke.png')} />
</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:15,}}>Mikroskop yang digunakan</Text>
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:15, bottom:5}}>oleh Robert Hooke &</Text>
        <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:15, bottom:5}}>hasil pengamatan nya</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Sel pertama kali ditemukan oleh seorang ilmuwan inggris bernama Robert Hooke pada tahun 1665. </Text>
</View>


<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Saat itu Hooke mengamati sel gabus dari dinding sel tumbuhan yang sudah mati dengan menggunakan mikroskop sederhana.</Text>
</View>



<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Hooke melihat adanya ruangan kecil kosong yang kemudian menamakannya dengan cellula=sel.</Text>
</View>

</ScrollView>




    </View>
  );
}


export default RobertHooke;