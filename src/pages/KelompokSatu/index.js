// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function KelompokSatu({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('StrukturFungsiBagianSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, alignItems:'center'}}>
   <Image   style={{width:308, height:238,   }} source={require('../../assets/img/seleukariotik.png')} />

</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'}}>a. Sel Prokariotik</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Merupakan sel yang belum memiliki nukleus atau tidak memiliki membran inti. 
  
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>
Materi genetik (DNA) pada sel prokariotik tampak terkonsentrasi pada suatu tempat yang disebut nukleoid. 

</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>
Sel prokariotik memiliki sejumlah ribosom yang dapat mensintesis protein. 
</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Sebagian sel prokariotik (bakteri) ada yang memiliki organel pelekatan berupa fili dan organel pelekatan berupa flagella.
</Text>
</View>



<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Sel bakteri (prokariotik) pada umumnya berdiameter 0,1 -1,0 µm.
</Text>
</View>


<View style={{padding:10, flexDirection:'row', justifyContent:'space-around' }}>
    <TouchableOpacity   style={{width:70, height:36, backgroundColor:colors.white , }}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSatuDua')}  style={{width:70, height:36, backgroundColor:colors.secondary , borderRadius:30, borderWidth:1, borderColor:colors.tertiary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>
</View>




</ScrollView>




    </View>
  );
}


export default KelompokSatu;