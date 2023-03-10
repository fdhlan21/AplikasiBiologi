// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function TheodoreSchwann2({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('TheodoreSchwann')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
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
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>1) Sel merupakan kesatuan struktural, fisiologis, dan organisasi dari makhluk hidup,

</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>
2) Sel  memiliki eksistensi  ganda  yaitu  sebagai  entitas  yang  berbeda  dan sebagai bagian yang membangun organisme, 

</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', lineHeight:17, letterSpacing:0.08}}>
3) Sel terbentuk  secara  bebas, mirip  dengan  pembentukan Kristal (<Text style={{fontWeight:'bold', fontStyle:'italic'}}>spontaneous generation</Text>).</Text>
</View>






</ScrollView>




    </View>
  );
}


export default TheodoreSchwann2;