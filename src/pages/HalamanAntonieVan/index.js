// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';




function AntonieVan({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanPenemuSel')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, flexDirection:'row', justifyContent:'space-around',}}>
   <Image   style={{width:111, height:204,}} source={require('../../assets/img/antonie2.png')} />
    <Image   style={{width:142, height:187,}} source={require('../../assets/img/antonie1.png')} />
</View>

<View style={{padding:10}}>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:15,}}>Mikroskop sederhana buatan</Text>
    <Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', textAlign:'center', fontSize:15, bottom:5}}>Anthonie Van Leeuwenhoek</Text>
</View>

<View style={{padding:5}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center'}}>Anthonie Van Leeuwenhoek (1674) ilmuwan berkebangsaan Belanda merupakan orang yang pertama kali mengamati dan menggambarkan makhluk hidup renik dengan mikroskop sederhana sehingga dianggap sebagai mikrobiolog pertama.</Text>
</View>


<View style={{padding:5, top:10}}>
<Text style={{color:colors.secondary, fontFamily:'Poppins-Regular', fontSize:15, textAlign:'center'}}>Leeuwenhoek terkenal atas pengembangan mikroskop dengan membuat lensa yang lebih baik sehingga dapat memvisualisasikan sel hidup dan berhasil melihat benda aneh dalam setetes air rendaman jerami.</Text>
</View>


<View style={{padding:10, paddingVertical:50}} >

</View>


</ScrollView>



    </View>
  );
}


export default AntonieVan;