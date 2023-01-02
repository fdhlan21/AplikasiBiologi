// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanMulaiBelajar({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>


<View style={{padding:20, }}>
    <Text style={{fontFamily:'Poppins-Regular', fontSize:20, letterSpacing:0.08}}>Mulai Belajar</Text>
</View>


<View style={{top:50}}>

    <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity    onPress={()=>navigation.navigate('HalamanPenemuSel')}   style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:20}}>SEJARAH & PENEMUAN</Text>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:30}}>TEORI SEL</Text>
        </TouchableOpacity>
    </View>

  <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('HalamanSelHewan')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:20}}>PERBEDAAN SEL HEWAN</Text>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:30}}>& SEL TUMBUHAN</Text>
        </TouchableOpacity>
    </View>

  <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity onPress={()=>navigation.navigate('StrukturFungsiBagianSel')}  style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:20}}>STRUKTUR & FUNGSI</Text>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:30}}>BAGIAN SEL</Text>
        </TouchableOpacity>
    </View>

  <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity  onPress={()=>navigation.navigate('HalamanTransporPadaMembranSel')}   style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:20}}>TRANSPOR PADA </Text>
<Text style={{textAlign:'center' ,fontFamily:'Poppins-Regular', color:colors.white, fontSize:15, top:30}}>MEMBRAN SEL</Text>
        </TouchableOpacity>
    </View>





</View>




<View style={{padding:10, paddingVertical:50}}>

</View>

</ScrollView>


<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'space-around', bottom:0, height:70}}>
<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity>
<Image style={{width:35, height:28}} source={require('../../assets/img/meulaibelajar.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', left:5, fontWeight:'bold'}} >Mulai</Text>
<Text  style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', left:5, fontWeight:'bold'}}>Belajar</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanGlosarium')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/glosarium.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular', right:10, fontWeight:'bold', top:5}} >GLOSARIUM</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} >
<Image style={{width:33, height:30}} source={require('../../assets/img/home.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular',  fontWeight:'bold', top:5, textAlign:'center'}} >HOME</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanTentang')}>
<Image style={{width:23, height:32}} source={require('../../assets/img/tentang.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Poppins-Regular',  fontWeight:'bold', top:5, right:10}} >TENTANG</Text>
</TouchableOpacity>
</View>

</View>


    </View>
  );
}


export default HalamanMulaiBelajar;