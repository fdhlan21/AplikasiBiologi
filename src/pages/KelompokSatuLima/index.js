// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function KelompokSatuLima({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokSatuEmpat')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10,  }}>
   <Image   style={{width:211, height:179,   }} source={require('../../assets/img/strukturselhewan2.png')} />

</View>

<View style={{padding:10, alignItems:'center', bottom:50,}}>
       <Image   style={{width:218, height:165, left:50  }} source={require('../../assets/img/strukturseltumbuhan1.png')} />
</View>


<View style={{padding:10, }} >  
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:20, fontWeight:'bold', textAlign:'center'}}>b. Sel Eukariotik</Text>
</View>

<View style={{padding:10, }} >  
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15,textAlign:'center'}}>Merupakan sel yang memiliki nukleus yang sebenarnya, atau materi DNA yang dibungkus oleh membran inti.</Text>
</View>

<View style={{padding:10, }} >  
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15,textAlign:'center'}}>Terdapat medium semi cair yang disebut sitosol, serta organel-organel sel yang sebagian besar tidak terdapat pada sel prokariotik.</Text>
</View>


<View style={{padding:10, }} >  
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15,textAlign:'center'}}>Sel eukariotik umumnya berdiameter 10-100 µm.</Text>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around' }}>
    <TouchableOpacity   style={{width:70, height:36, backgroundColor:colors.white , }}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Next</Text>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('StrukturFungsiBagianSel')}  style={{width:70, height:36, backgroundColor:colors.secondary , borderRadius:30, borderWidth:1, borderColor:colors.tertiary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Menu</Text>
    </TouchableOpacity>
</View>




</ScrollView>




    </View>
  );
}


export default KelompokSatuLima;