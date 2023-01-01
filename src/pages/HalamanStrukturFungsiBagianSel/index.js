// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function StrukturFungsiSel({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanBelajar')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{top:50}}>
<ScrollView   horizontal={true}>
<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSatu')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok1.png')}/>
    </TouchableOpacity>
</View>

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokDua')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok2.png')}/>
    </TouchableOpacity>
</View>


<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokTiga')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok3.png')}/>
    </TouchableOpacity>
</View>



<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokEmpat')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok4.png')}/>
    </TouchableOpacity>
</View>
</View>
</ScrollView>



<ScrollView   horizontal={true}>
<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokLima')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok5.png')}/>
    </TouchableOpacity>
</View>

<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokEnam')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok6.png')}/>
    </TouchableOpacity>
</View>


<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTujuh')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok7.png')}/>
    </TouchableOpacity>
</View>



<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokDelapan')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok8.png')}/>
    </TouchableOpacity>
</View>
</View>
</ScrollView>




<ScrollView   horizontal={true}>
<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSembilan')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok9.png')}/>
    </TouchableOpacity>
</View>

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSepuluh')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok10.png')}/>
    </TouchableOpacity>
</View>


<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokSebelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok11.png')}/>
    </TouchableOpacity>
</View>



<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokDuabelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok12.png')}/>
    </TouchableOpacity>
</View>
</View>
</ScrollView>



<ScrollView   horizontal={true}>
<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >

<View style={{padding:10}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTigabelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok13.png')}/>
    </TouchableOpacity>
</View>

<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokEmpatbelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok14.png')}/>
    </TouchableOpacity>
</View>


<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokLimabelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok15.png')}/>
    </TouchableOpacity>
</View>



<View style={{padding:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokEnambelas')}>
        <Image style={{width:124, height:90,}}  source={require('../../assets/img/kelompok16.png')}/>
    </TouchableOpacity>
</View>
</View>
</ScrollView>
</View>


<View style={{padding:10, paddingVertical:20}}></View>


</ScrollView>




    </View>
  );
}


export default StrukturFungsiSel;