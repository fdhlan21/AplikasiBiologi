// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanTransporPadaMembranSel({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanBelajar')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{top:50}}>

    <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity    onPress={()=>navigation.navigate('HalamanTransporSel')}   style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, top:20}}>Transpor pada</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, top:30}}>membran sel</Text>
        </TouchableOpacity>
    </View>

  <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('KelompokTransporAktif')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, top:40}}>Transpor Aktif</Text>
        </TouchableOpacity>
    </View>

  <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity onPress={()=>navigation.navigate('KelompokTransporPasif')}  style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, top:40}}>Transpor Pasif</Text>
        </TouchableOpacity>
    </View>


</View>




<View style={{padding:10, paddingVertical:50}}>

</View>

</ScrollView>




    </View>
  );
}


export default HalamanTransporPadaMembranSel;