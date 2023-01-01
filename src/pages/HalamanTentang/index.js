// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanTentang({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>


<ScrollView>

<View style={{padding:10,  }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')} style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>


<View style={{top:100}}>

<View>
    <Text style={{fontFamily:'Alata-Regular', fontSize:35, fontWeight:'bold', textAlign:'center'}}>TENTANG</Text>
</View>


<View style={{padding:10, }}>
    <TouchableOpacity    onPress={()=>navigation.navigate('HalamanKreator')}  style={{width:'100%', height:90, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:32, textAlign:'center', color:colors.white, top:10}}>KREATOR</Text>
    </TouchableOpacity>
</View>


<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPustaka')} style={{width:'100%', height:90, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:32, textAlign:'center', color:colors.white, top:10}}>DAFTAR PUSTAKA</Text>
    </TouchableOpacity>
</View>
</View>


<View style={{padding:10, paddingVertical:50}}>

</View>

</ScrollView>





<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'space-around', bottom:0, height:70}}>
<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanBelajar')}>
<Image style={{width:35, height:28}} source={require('../../assets/img/meulaibelajar.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}} >Mulai</Text>
<Text  style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}}>Belajar</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanGlosarium')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/glosarium.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', right:10, fontWeight:'bold', top:5}} >GLOSARIUM</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/home.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, textAlign:'center'}} >HOME</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity>
<Image style={{width:23, height:32}} source={require('../../assets/img/tentang.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, right:10}} >TENTANG</Text>
</TouchableOpacity>
</View>

</View>

    </View>
  );
}


export default HalamanTentang;