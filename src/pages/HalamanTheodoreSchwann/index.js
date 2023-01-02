// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function TheodoreSchwann({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around', }}>
   <Image   style={{width:184, height:248,   }} source={require('../../assets/img/theodoreschwannpotret.png')} />

</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', lineHeight:22, letterSpacing:0.08}}>Theodore Schwann</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>Theodor Schwann adalah ahli zoologi. Schwann berhasil menunjukkan jaringan hewan secara mikroskopik dan menemukan  partikel-partikel yang menarik dalam jaringan syaraf dan otot.  
</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>
Schwann telah mengobservasi sel-sel yang berhubungan  dengan selubung serabut syaraf yang disebut sel-sel Schwann. 
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>
Bersama-sama dengan Schleiden Theodor Schwann  menyimpulkan dari hasil observasinya tentang sel sebagai berikut:</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>Schleiden juga mengetahui  pentingnya inti sel dalam proses pembelahan sel yang ditemukan oleh Robert Brown.
</Text>
</View>


<View style={{padding:10, flexDirection:'row', justifyContent:'space-around' }}>
    <TouchableOpacity   style={{width:70, height:36, backgroundColor:colors.white , }}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('TheodoreSchwann2')}  style={{width:70, height:36, backgroundColor:colors.secondary , borderRadius:30, borderWidth:1, borderColor:colors.tertiary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Next</Text>
    </TouchableOpacity>
</View>




</ScrollView>




    </View>
  );
}


export default TheodoreSchwann;