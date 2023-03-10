// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function JeanBaptise({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:8}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10,  alignItems:'center'}}>
   <Image   style={{width:214, height:271, alignItems:'center'  }} source={require('../../assets/img/jeanbaptisepotret.png')} />
</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, fontWeight:'bold'   , lineHeight:24, letterSpacing:0.08}}>Jean Baptiste</Text>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, bottom:5, fontWeight:'bold' , lineHeight:24, letterSpacing:0.08}}>de Lamarck</Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', letterSpacing:0.08, lineHeight:17}}>Pada tahun 1809, Jean Baptiste de Lamarck (Prancis, 1744-1829) menyatakan bahwa setiap badan hidup adalah kumpulan sel-sel. </Text>
</View>

<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', letterSpacing:0.08, lineHeight:17}}>
Di dalam setiap sel, bergerak cairan yang kompleks.</Text>
</View>



<View style={{padding:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center', letterSpacing:0.08, lineHeight:17}}> Pendapat tersebut di dukung oleh Henri Dutrochet. Ia menyatakan bahwa sel itu merupakan bagian fundamental organisme.
</Text>
</View>


</ScrollView>



    </View>
  );
}


export default JeanBaptise;