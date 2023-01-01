// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function MatthiasJakop({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10,  alignItems:'center' }}>
   <Image   style={{width:179, height:227,   }} source={require('../../assets/img/jakoppotet.png')} />

</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'}}>Matthias Jakob</Text>
        <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'}}>Schleiden
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Seorang Profesor Botani berkebangsaan Jerman dari Universitas Jena, sebagai salah seorang pencetus teori sel  bersama dengan Theodor Schwann dan Rudolf Virchow. 
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>
Schwann menyatakan bahwa bagian-bagian yang berbeda dari tumbuhan disusun oleh sel-sel. 
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>
Schleiden dan Schwann menjadi orang pertama yang  membuat formulasi apa yang  kemudian oleh orang diyakini bahwa sel sebagai prinsip dasar biologi yang sama pentingnya dengan teori atom bagi kimia dan fisika.</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Schleiden juga mengetahui  pentingnya inti sel dalam proses pembelahan sel yang ditemukan oleh Robert Brown.
</Text>
</View>


</ScrollView>




    </View>
  );
}


export default MatthiasJakop;