// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function RobertBrown({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around', }}>
   <Image   style={{width:135, height:186,   }} source={require('../../assets/img/robertbrownpotret.png')} />
   <Image   style={{width:173, height:186,   }} source={require('../../assets/img/microbertbrown.png')} />
</View>

<View style={{padding:10, top:20}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', letterSpacing:0.08, lineHeight:24}}>Robert Brown</Text>
</View>

<View style={{padding:10, top:20}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center'  , letterSpacing:0.08, lineHeight:17}}>Robert Brown adalah seorang ahli botani dan palaebotanist yang telah memberikan banyak kontribusi penting terhadap perkembangan ilmu botani.</Text>
</View>

<View style={{padding:10, top:20}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center' , letterSpacing:0.08, lineHeight:17}}>

Brown telah memberi banyak kontribusi pengetahuan tentang inti sel dan gerakan sitoplasma.</Text>
</View>

<View style={{padding:10, top:20}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center' , letterSpacing:0.08, lineHeight:17}}>
Brown menemukan inti sel (nukleus) pada sel anggrek.</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center' , letterSpacing:0.08, lineHeight:17}}>Gerak Brown adalah gerak pada molekul-mokeul yang terlarut dalam sitoplasma pertama kali ditemukan oleh Robert Brown.
</Text>
</View>


</ScrollView>



    </View>
  );
}


export default RobertBrown;