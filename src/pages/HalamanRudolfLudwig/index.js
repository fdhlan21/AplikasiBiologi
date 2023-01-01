// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function RudolfLudwig({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10,  alignItems:'center'}}>
   <Image   style={{width:193, height:247,   }} source={require('../../assets/img/rudolfpotret.png')} />

</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'}}>Rudolf Ludwig</Text>
        <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'}}>Karl Virchow </Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Rudolf Ludwig Karl Virchow seorang dokter Jerman, yang menyatakan sebuah slogan <Text style={{fontWeight:'bold', fontStyle:'italic'}}>Omnis cellula e cellula</Text> artinya semua sel hanya berasal dari sel sebelumnya. 

 
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>
Pernyataannya ini sekaligus <Text style={{fontWeight:'bold'}}> menentang</Text> pendapat dari penjelasan Schwann yang ketiga bahwa sel muncul begitu saja seperti kristal  (<Text style={{fontWeight:'bold', fontStyle:'italic'}}>generatio spontanea</Text>).
</Text>
</View>




</ScrollView>



    </View>
  );
}


export default RudolfLudwig;