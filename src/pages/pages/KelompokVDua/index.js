// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function KelompokGlorasiumVDua({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>
<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokGlosariumV')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, alignItems:'center', top:20 }}>
   <Image   style={{width:252, height:609,   }} source={require('../../../assets/img/glosarium/KelompokV(2).png')} />

</View>



<View  style={{padding:10, paddingVertical:20}} >

</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around' }}>
    <TouchableOpacity   style={{width:70, height:36, backgroundColor:colors.white , }}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('KelompokGlosariumVTiga')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>
</View>
</ScrollView>




    </View>
  );
}


export default KelompokGlorasiumVDua;