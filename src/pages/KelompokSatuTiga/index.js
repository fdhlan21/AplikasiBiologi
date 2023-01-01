// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function KelompokSatuTiga({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSatuDua')}style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, alignItems:'center' }}>
   <Image   style={{width:308, height:238,   }} source={require('../../assets/img/seleukariotik.png')} />

</View>


<View style={{padding:10, alignItems:'center'}}>
   <Image   style={{width:277, height:361,   }} source={require('../../assets/img/kontenkelompoksatuduabagiandua.png')} />

</View>





<View style={{padding:10, flexDirection:'row', justifyContent:'space-around' }}>
    <TouchableOpacity   style={{width:70, height:36, backgroundColor:colors.white , }}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSatuEmpat')}  style={{width:70, height:36, backgroundColor:colors.secondary , borderRadius:30, borderWidth:1, borderColor:colors.tertiary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>
</View>




</ScrollView>




    </View>
  );
}


export default KelompokSatuTiga;