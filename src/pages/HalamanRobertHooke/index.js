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
        <Text style={{fontFamily:'Poppips-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around',}}>
   <Image   style={{width:159, height:120,}} source={require('../../assets/img/mcroberthook.png')} />
    <Image   style={{width:119, height:159,}} source={require('../../assets/img/selhooke.png')} />
</View>

<View style={{padding:10, top
:20}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', textAlign:'center', fontSize:15, fontWeight:'bold', fontStyle:'italic', lineHeight:17, letterSpacing:0.08}}>Mikroskop yang digunakan</Text>
    <Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', textAlign:'center', fontSize:15,  fontWeight:'bold', fontStyle:'italic' , lineHeight:17, letterSpacing:0.08}}>oleh Robert Hooke &</Text>
        <Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', textAlign:'center', fontSize:15, fontWeight:'bold',  fontStyle:'italic', lineHeight:17, letterSpacing:0.08}}>hasil pengamatan nya</Text>
</View>

<View style={{padding:10, top
:40}}>
<Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>Sel pertama kali ditemukan oleh seorang ilmuwan inggris bernama Robert Hooke pada tahun 1665. </Text>
</View>


<View style={{padding:10, top:40}}>
<Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>Saat itu Hooke mengamati sel gabus dari dinding sel tumbuhan yang sudah mati dengan menggunakan mikroskop sederhana.</Text>
</View>



<View style={{padding:10, top
:40}}>
<Text style={{color:colors.secondary, fontFamily:'Poppips-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>Hooke melihat adanya ruangan kecil kosong yang kemudian menamakannya dengan cellula=sel.</Text>
</View>


<View style={{padding:10, paddingVertical:30}}>
</View>

</ScrollView>




    </View>
  );
}


export default RobertHooke;