// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';




function HalamanGlosarium({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>


<ScrollView>





<View style={{padding:10, }}> 
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Home</Text>
    </TouchableOpacity>
</View>



<View style={{padding:10, left:3}}>

<Text style={{fontSize:20, fontFamily:'Alata-Regular', fontWeight:'bold'}} >Keyword</Text>

</View>


<View style={{padding:10}}>
<ScrollView horizontal={true} >

<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumA')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >A</Text>
    </TouchableOpacity>
</View>


<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokGlosariumB')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >B</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumD')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >D</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumE')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >E</Text>
    </TouchableOpacity>
</View>




</ScrollView>

</View>





<View style={{padding:10}}>
<ScrollView horizontal={true} >

<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumF')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >F</Text>
    </TouchableOpacity>
</View>


<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumG')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >G</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumH')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >H</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumI')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >I</Text>
    </TouchableOpacity>
</View>


</ScrollView>

</View>






<View style={{padding:10}}>
<ScrollView horizontal={true} >

<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('KelompokGlosariumK')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >K</Text>
    </TouchableOpacity>
</View>


<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumL')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >L</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumM')}   style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >M</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumN')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >N</Text>
    </TouchableOpacity>
</View>


</ScrollView>

</View>




<View style={{padding:10}}>
<ScrollView horizontal={true} >

<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumO')}  style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >O</Text>
    </TouchableOpacity>
</View>


<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumP')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >P</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumR')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >R</Text>
    </TouchableOpacity>
</View>



<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokGlosariumS')} style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >S</Text>
    </TouchableOpacity>
</View>


</ScrollView>

</View>




<View style={{padding:10}}>
<ScrollView horizontal={true} >

<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumT')}   style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >T</Text>
    </TouchableOpacity>
</View>


<View  style={{padding:10, flexDirection:'row', justifyContent:'space-around'}} >
    <TouchableOpacity onPress={()=>navigation.navigate('KelompokGlosariumV')}   style={{width:70, height:58, backgroundColor:'#D9D9D9', borderRadius:20}}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20, fontWeight:'bold', top:15}} >V</Text>
    </TouchableOpacity>
</View>



</ScrollView>

</View>


<View style={{padding:10, paddingVertical:50}}>

</View>

</ScrollView>


<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'space-around', bottom:0, height:70}}>
<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanBelajar')}>
<Image style={{width:35, height:28}} source={require('../../../assets/img/meulaibelajar.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}} >Mulai</Text>
<Text  style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}}>Belajar</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity >
<Image style={{width:33, height:30}} source={require('../../../assets/img/glosarium.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', right:10, fontWeight:'bold', top:5}} >GLOSARIUM</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} >
<Image style={{width:33, height:30}} source={require('../../../assets/img/home.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, textAlign:'center'}} >HOME</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanTentang')}>
<Image style={{width:23, height:32}} source={require('../../../assets/img/tentang.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, right:10}} >TENTANG</Text>
</TouchableOpacity>
</View>

</View>


    </View>
  );
}


export default HalamanGlosarium;