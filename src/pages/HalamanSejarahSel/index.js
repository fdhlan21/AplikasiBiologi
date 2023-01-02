// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';




function HalamanPenemuSel({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary}}>

<ScrollView>

<View style={{padding:10, }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanBelajar')}  style={{width:70, height:36, backgroundColor:colors.tertiary , borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Text style={{fontFamily:'Alata-Regular', fontSize:12, textAlign:'center', color:colors.white, top:5}}>Back</Text>
    </TouchableOpacity>
</View>

<View>

<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('AntonieVan')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/antonievan.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Antonie van</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Leeuwenhoek</Text>
        </TouchableOpacity>
    </View>


    <View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity onPress={()=>navigation.navigate('RobertHooke')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/roberthooke.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:40}}>Robert Hooke</Text>
        </TouchableOpacity>
    </View>



<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('JeanBaptise')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/jeanbaptise.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Jean Baptiste </Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>de Lamarck</Text>
        </TouchableOpacity>
    </View>

<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('RobertBrown')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/beownrobert.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:40}}>Robert Brown</Text>
        </TouchableOpacity>
    </View>

<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('MatthiasJakop')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/jakopmathias.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Matthias Jakob</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Schleiden</Text>
        </TouchableOpacity>
    </View>


<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity  onPress={()=>navigation.navigate('TheodoreSchwann')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/theodore.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Theodore</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Schwann</Text>
        </TouchableOpacity>
    </View>




<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('JohannesPurkinje')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/johannes.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Johannes</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Purkinje</Text>
        </TouchableOpacity>
    </View>




<View style={{padding:10, alignItems:'center'}}> 
        <TouchableOpacity   onPress={()=>navigation.navigate('RudolfLudwig')} style={{width:'100%', height:102, backgroundColor:colors.tertiary, borderRadius:30, borderWidth:1, borderColor:colors.secondary}}>
        <Image style={{width:76, height:76, top:11, left:5}} source={require('../../assets/img/rudolft.png')} />
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Rudolf Ludwig</Text>
<Text style={{textAlign:'center' ,fontFamily:'Alata-Regular', color:colors.white, fontSize:15, bottom:50}}>Karl Virchow</Text>
        </TouchableOpacity>
    </View>


</View>


</ScrollView>


<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'space-around', bottom:0, height:70}}>
<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanBelajar')}>
<Image style={{width:35, height:28}} source={require('../../assets/img/meulaibelajar.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}} >Mulai</Text>
<Text  style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', left:5, fontWeight:'bold'}}>Belajar</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10, left:10}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanGlosarium')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/glosarium.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular', right:10, fontWeight:'bold', top:5}} >GLOSARIUM</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}>
<Image style={{width:33, height:30}} source={require('../../assets/img/home.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, textAlign:'center'}} >HOME</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, bottom:10}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanTentang')}>
<Image style={{width:23, height:32}} source={require('../../assets/img/tentang.png')} />
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular',  fontWeight:'bold', top:5, right:10}} >TENTANG</Text>
</TouchableOpacity>
</View>

</View>


    </View>
  );
}


export default HalamanPenemuSel;