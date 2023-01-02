// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function JohannesPurkinje({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10,  alignItems:'center'}}>
   <Image   style={{width:287, height:279,   }} source={require('../../assets/img/johannespotet.png')} />

</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', lineHeight:22, letterSpacing:0.8}}>Johannes Purkinje</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.8}}>Pada tahun 1935, setelah mengamati struktur sel, Johanes Purkinje dan Felix Durjadin melihat ada cairan dalam sel, kemudain cairan itu diberi nama <Text style={{fontWeight:'bold'}}> protoplasma. </Text>
</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.8}}>
Istilah protoplasma purkinje tidak memberi pengertian kimiawi dan fisik yang jelas, tetapi dapat dipakai untuk menyebut seluruh zat yang terorganisasi dalam sel.
</Text>
</View>




</ScrollView>



    </View>
  );
}


export default JohannesPurkinje;