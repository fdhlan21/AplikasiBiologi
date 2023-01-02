// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanHome({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:20,  }}>
    <Text style={{color:colors.tertiary, fontSize:20, fontFamily:'Poppins-Regular', fontStyle:'italic'}}>Selamat Datang..</Text>
</View>

<View style={{padding:10, }}>
    <Text style={{color:colors.tertiary, fontSize:20, fontFamily:'Poppins-Regular', textAlign:'center',  fontWeight:'bold'}}>MEDIA PEMBELAJARAN</Text>
        <Text style={{color:colors.tertiary, fontSize:20, fontFamily:'Poppins-Regular', textAlign:'center', fontWeight:'bold' }}>BIOLOGI SEL SMA/MA</Text>        
</View>

<View style={{padding:20}}>
    <Text style={{fontFamily:'Poppins-Regular', fontSize:20, letterSpacing:0.08, }}>Kompetensi Dasar</Text>
</View>

<View style={{padding:10,  alignItems:'center', }}>
<View style={{width:287, height:166, backgroundColor:'#cccccc', borderRadius:20, borderWidth:1, borderColor:colors.secondary }} >
<Text style={{fontSize:14, textAlign:'center', color:colors.white, fontFamily:'Poppins-Regular', top:40, fontWeight:'bold', lineHeight:21, letterSpacing:0.08}}>3.1 Menjelaskan komponen kimiawi penyusun sel, struktur, fungsi, dan proses yang berlangsung dalam sel sebagai unit terkecil kehidupan
</Text>
</View>
</View>



<View style={{padding:20}}>
    <Text style={{fontFamily:'Poppins-Regular', fontSize:20, letterSpacing:0.8}}>Tujuan </Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:20,  letterSpacing:0.8 }}>Pembelajaran</Text>
</View>

<View style={{padding:10,  alignItems:'center', }}>
<View style={{width:287, height:327, backgroundColor:colors.tertiary, borderRadius:20, borderWidth:1, borderColor:colors.secondary }} >
<Text style={{fontSize:13, textAlign:'center', color:colors.white, fontFamily:'Poppins-Regular', top:80,  fontWeight:'bold', lineHeight:21, letterSpacing:0.08}}>Mendeskripsikan komponen penyusun sel, struktur, fungsi, dan proses yang berlangsung dalam sel sebagai unit terkecil kehidupan
</Text>

<View style={{padding:10}} >

</View>

<Text style={{fontSize:13, textAlign:'center', color:colors.white, fontFamily:'Poppins-Regular', top:80, fontWeight:'bold',  lineHeight:21, letterSpacing:0.08 }}>
Mengidentifikasi organel sel tumbuhan dan hewan.

Membandingkan mekanisme transpor pada membran (difusi, osmosis, pompa ion, endositosis, eksositosis).


</Text>
</View>
</View>



</ScrollView>


<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'space-around', bottom:0, height:70}}>
<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanBelajar')}>
<Image style={{width:35, height:28}} source={require('../../assets/img/meulaibelajar.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', left:5, fontWeight:'bold'}} >Mulai</Text>
<Text  style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', left:5, fontWeight:'bold'}}>Belajar</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanGlosarium')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/glosarium.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', right:10, fontWeight:'bold', top:5}} >GLOSARIUM</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity>
<Image style={{width:33, height:30}} source={require('../../assets/img/home.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular',  fontWeight:'bold', top:5, textAlign:'center'}} >HOME</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanTentang')}>
<Image style={{width:23, height:32}} source={require('../../assets/img/tentang.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular',  fontWeight:'bold', top:5, right:10}} >TENTANG</Text>
</TouchableOpacity>
</View>

</View>


    </View>
  );
}


export default HalamanHome;