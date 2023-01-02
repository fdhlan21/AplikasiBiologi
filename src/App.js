// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HalamanStart from './pages/HalamanStart';
import HalamanHome from './pages/HalamanHome';
import HalamanMulaiBelajar from './pages/HalamanMulaiBelajar';
import HalamanTentang from './pages/HalamanTentang';
import HalamanKreator from './pages/HalamanKreator';
import HalamanDaftarPustaka from './pages/HalamanDaftarPustaka';
import HalamanPerbedaanSelHewan from './pages/HalamanPerbedaanSelHewan';
import HalamanPenemuSel from './pages/HalamanSejarahSel';
import AntonieVan from './pages/HalamanAntonieVan';
import RobertHooke from './pages/HalamanRobertHooke';
import JeanBaptise from './pages/HalamanJeanBaptise';
import RobertBrown from './pages/HalamanRobertBrown';
import MatthiasJakop from './pages/HalamanMatthisJakop';
import TheodoreSchwann from './pages/HalamanTheodoreSchwann';
import TheodoreSchwann2 from './pages/HalamanTheodoreSchwann2';
import JohannesPurkinje from './pages/HalamanJohannes';
import RudolfLudwig from './pages/HalamanRudolfLudwig';
import StrukturFungsiSel from './pages/HalamanStrukturFungsiBagianSel';
import KelompokSatu from './pages/KelompokSatu';
import KelompokSatuDua from './pages/KelompokSatuDua';
import KelompokSatuTiga from './pages/KelompokSatuTiga';
import KelompokSatuEmpat from './pages/KelompokSatuEmpat';
import KelompokSatuLima from './pages/KelompokSatuLima';
import KelompokDua from './pages/KelompokDua';
import KelompokDuaDua from './pages/KelompokDuaDua';
import KelompokDuaTiga from './pages/KelompokDuaTiga';
import KelompokTiga from './pages/KelompokTiga';
import KelompokTigaDua from './pages/KelompokTigaDua';
import KelompokTigaTiga from './pages/KelompokTigaTiga';
import KelompokTigaEmpat from './pages/KelompokTigaEmpat';
import KelompokEmpat from './pages/KelompokEmpat/Index';
import KelompokLima from './pages/BagianLima';
import KelompokLimaDua from './pages/BagianLimaDua';
import KelompokLimaTiga from './pages/BagianLimaTiga';
import KelompokLimaEmpat from './pages/BagianLimaEmpat';
import KelompokLimaLima from './pages/BagianLimaLima';
import KelompokEnam from './pages/KelompokEnam';
import KelompokEnamDua from './pages/KelompokEnamDua';
import KelompokTujuh from './pages/KelompokTujuh';
import KelompokDelapan from './pages/KelompokDelapan';
import KelompokDelapanDua from './pages/KelompokDelapanDua';
import KelompokSembilan from './pages/KelompokSembilan';
import KelompokSembilanDua from './pages/KelompokSembilanDua';
import KelompokSembilanTiga from './pages/KelompokSembilanTiga';
import KelompokSembilanTigaBagianDua from './pages/KelompokSembilanTigaBagianDua';
import KelompokSepuluh from './pages/KelompokSepuluh';
import KelompokSepuluhDua from './pages/KelompokSepuluhDua';
import KelompokSebelas from './pages/KelompokSebelas';
import KelompokSebelasDua from './pages/KelompokSebelasDua';
import KelompokDuabelas from './pages/KelompokDuabelas';
import KelompokDuabelasDua from './pages/KelompokDuabelasDua';
import KelompokTigabelas from './pages/KelompokTigabelas';
import KelompokTigabelasDua from './pages/KelompokTigabelasDua';
import KelompokTigabelasTiga from './pages/KelompokTigabelasTiga';
import KelompokEmpatbelas from './pages/KelompokEmpatbelas';
import KelompokLimabelas from './pages/KelompokLimabelas';
import KelompokLimabelasDua from './pages/KelompokLimabelasDua';
import KelompokLimabelasTiga from './pages/KelompokLimabelasTiga';
import KelompokEnambelas from './pages/KelompokEnambelas';
import HalamanTransporPadaMembranSel from './pages/HalamanTransporPadaMembranSel';
import KelompokTransporSel from './pages/KelompokTranspor';
import KelompokTransporSelDua from './pages/KelompokTransporDua';
import KelompokTransporSelTiga from './pages/KelompokTransporTiga';
import KelompokTransporAktif from './pages/KelompokTransporAktif';
import KelompokTransporAktifDua from './pages/KelompokTransporAktifDua';
import KelompokTransporAktifTiga from './pages/KelompokTransporAktifTiga';
import KelompokTransporAktifEmpat from './pages/KelompokTramsporAktifEmpat';
import KelompokTransporAktifLima from './pages/KelompokTransporAktifLima';
import KelompokTransporAktifEnam from './pages/KelompokTransporAktifEnam';
import KelompokTransporAktifTujuh from './pages/KelompokTransporAktifTujuh';
import KelompokTransporAktifDelapan from './pages/KelompokTransporAktifDelapan';
import KelompokTransporAktifSembilan from './pages/KelompokTransporAktifSembilan';
import KelompokTransporPasif from './pages/KelompokTransporPasif';
import KelompokTransporPasifDua from './pages/KelompokTransporPasifDua';
import KelompokTransporPasifTiga from './pages/KelompokTransporPasifTiga';
import KelompokTransporPasifEmpat from './pages/KelompokTransporPasifEmpat';
import KelompokTransporPasifLima from './pages/KelompokTransporPasifLima';
import KelompokTransporPasifEnam from './pages/KelompokTransporPasifEnam';
import HalamanGlosarium from './pages/pages/HalamanGlosarium';
import KelompokGlorasiumA from './pages/pages/KelompokA';
import KelompokGlorasiumBbackup from './pages/pages/KelompokB';
import KelompokGlorasiumD from './pages/pages/KelompokD';
import KelompokGlorasiumDDua from './pages/pages/KelompokDDua';
import KelompokGlorasiumE from './pages/pages/KelompokE';
import KelompokGlorasiumF from './pages/pages/KelompokF';
import KelompokGlorasiumG from './pages/pages/KelompokG';
import KelompokGlorasiumH from './pages/pages/KelompokH';
import KelompokGlorasiumHDua from './pages/pages/KelompokHDua';
import KelompokGlorasiumk from './pages/pages/KelompokK';
import KelompokGlorasiumkDua from './pages/pages/KelompokKDua';
import KelompokGlorasiumkTiga from './pages/pages/KelompokKTiga';
import KelompokGlorasiumKEmpat from './pages/pages/KelompokKEmpat';
import KelompokGlorasiumI from './pages/pages/KelompokI';
import KelompokGlorasiumM from './pages/pages/KelompokM';
import KelompokGlorasiumL from './pages/pages/KelompokL';
import KelompokGlorasiumLDua from './pages/pages/KelompokLDua';
import KelompokGlorasiumMDua from './pages/pages/KelompokMDua';
import KelompokGlorasiumMTiga from './pages/pages/KelompokMTiga';
import KelompokGlorasiumMEmpat from './pages/pages/KelompokMEmpat';
import KelompokGlorasiumMLima from './pages/pages/KelompokMLima';
import KelompokGlorasiumMEnam from './pages/pages/KelompokMEnam';
import KelompokGlorasiumMTujuh from './pages/pages/KelompokMTujuh';
import KelompokGlorasiumMDelapan from './pages/pages/KelompokMDelapan';
import KelompokGlorasiumN from './pages/pages/KelompokN';
import KelompokGlorasiumNDua from './pages/pages/KelompokNDua';
import KelompokGlorasiumO from './pages/pages/KelompokO';
import KelompokGlorasiumP from './pages/pages/KelompokP';
import KelompokGlorasiumPDua from './pages/pages/KelompokPDua';
import KelompokGlorasiumPTiga from './pages/pages/KelompokPTiga';
import KelompokGlorasiumPEmpat from './pages/pages/KelompokPEmpat';
import KelompokGlorasiumPLima from './pages/pages/KelompokPLima';
import KelompokGlorasiumPEnam from './pages/pages/KelompokPEnam';
import KelompokGlorasiumPTujuh from './pages/pages/KelompokPTujuh';
import KelompokGlorasiumPDelapan from './pages/pages/KelompokPDelapan';
import KelompokGlorasiumPSembilan from './pages/pages/KelompokPSembilan';
import KelompokGlorasiumPSepuluh from './pages/pages/KelompokPSepuluh';
import KelompokGlorasiumR from './pages/pages/KelompokR';
import KelompokGlorasiumRDua from './pages/pages/KelompokRDua';
import KelompokGlorasiumRTiga from './pages/pages/KelompokRTiga';
import KelompokGlorasiumREmpat from './pages/pages/KelompokREmpat';
import KelompokGlorasiumRLima from './pages/pages/KelompokRLima';
import KelompokGlorasiumREnam from './pages/pages/KelompokREnam';
import KelompokGlorasiumS from './pages/pages/KelompokS';
import KelompokGlorasiumSDua from './pages/pages/KelompokSDua';
import KelompokGlorasiumSTiga from './pages/pages/KelompokSTiga';
import KelompokGlorasiumSEmpat from './pages/pages/KelompokSEmpat';
import KelompokGlorasiumSLima from './pages/pages/KelompokSLima';
import KelompokGlorasiumSEnam from './pages/pages/KelompokSEnam';
import KelompokGlorasiumSTujuh from './pages/pages/KelompokSTujuh';
import KelompokGlorasiumSDelapan from './pages/pages/KelompokSDelapan';
import KelompokGlorasiumT from './pages/pages/KelompokT';
import KelompokGlorasiumTDua from './pages/pages/KelompokTDua';
import KelompokGlorasiumTTiga from './pages/pages/KelompokTTiga';
import KelompokGlorasiumV from './pages/pages/KelompokV';
import KelompokGlorasiumVDua from './pages/pages/KelompokVDua';
import KelompokGlorasiumVTiga from './pages/pages/KelompokVTiga';








const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HalamanHome'>
        <Stack.Screen name="HalamanStart" component={HalamanStart} options={{headerShown:false}} />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{headerShown:false}} />
    <Stack.Screen name="HalamanBelajar" component={HalamanMulaiBelajar} options={{headerShown:false}} />
 <Stack.Screen name="HalamanTentang" component={HalamanTentang} options={{headerShown:false}} />
 <Stack.Screen name="HalamanKreator" component={HalamanKreator} options={{headerShown:false}} />
 <Stack.Screen name="HalamanPustaka" component={HalamanDaftarPustaka} options={{headerShown:false}} />
 <Stack.Screen name="HalamanSelHewan" component={HalamanPerbedaanSelHewan} options={{headerShown:false}} />
 <Stack.Screen name="HalamanPenemuSel" component={HalamanPenemuSel} options={{headerShown:false}} />
 <Stack.Screen name="AntonieVan" component={AntonieVan} options={{headerShown:false}} />
 <Stack.Screen name="RobertHooke" component={RobertHooke} options={{headerShown:false}} />
 <Stack.Screen name="JeanBaptise" component={JeanBaptise} options={{headerShown:false}} />
 <Stack.Screen name="RobertBrown" component={RobertBrown} options={{headerShown:false}} />
 <Stack.Screen name="MatthiasJakop" component={MatthiasJakop} options={{headerShown:false}} />
 <Stack.Screen name="TheodoreSchwann" component={TheodoreSchwann} options={{headerShown:false}} />
 <Stack.Screen name="TheodoreSchwann2" component={TheodoreSchwann2} options={{headerShown:false}} />
 <Stack.Screen name="JohannesPurkinje" component={JohannesPurkinje} options={{headerShown:false}} />
 <Stack.Screen name="RudolfLudwig" component={RudolfLudwig} options={{headerShown:false}} />
 <Stack.Screen name="StrukturFungsiBagianSel" component={StrukturFungsiSel} options={{headerShown:false}} />
<Stack.Screen name="KelompokSatu" component={KelompokSatu} options={{headerShown:false}} />
<Stack.Screen name="KelompokSatuDua" component={KelompokSatuDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokSatuTiga" component={KelompokSatuTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokSatuEmpat" component={KelompokSatuEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokSatuLima" component={KelompokSatuLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokDua" component={KelompokDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokDuaDua" component={KelompokDuaDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokDuaTiga" component={KelompokDuaTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTiga" component={KelompokTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigaDua" component={KelompokTigaDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigaTiga" component={KelompokTigaTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigaEmpat" component={KelompokTigaEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokEmpat" component={KelompokEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokLima" component={KelompokLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimaDua" component={KelompokLimaDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimaTiga" component={KelompokLimaTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimaEmpat" component={KelompokLimaEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimaLima" component={KelompokLimaLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokEnam" component={KelompokEnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokEnamDua" component={KelompokEnamDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTujuh" component={KelompokTujuh} options={{headerShown:false}} />
<Stack.Screen name="KelompokDelapan" component={KelompokDelapan} options={{headerShown:false}} />
<Stack.Screen name="KelompokDelapanDua" component={KelompokDelapanDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokSembilan" component={KelompokSembilan} options={{headerShown:false}} />
<Stack.Screen name="KelompokSembilanDua" component={KelompokSembilanDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokSembilanTiga" component={KelompokSembilanTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokSembilanTigaBagianDua" component={KelompokSembilanTigaBagianDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokSepuluh" component={KelompokSepuluh} options={{headerShown:false}} />
<Stack.Screen name="KelompokSepuluhDua" component={KelompokSepuluhDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokSebelas" component={KelompokSebelas} options={{headerShown:false}} />
<Stack.Screen name="KelompokSebelasDua" component={KelompokSebelasDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokDuabelas" component={KelompokDuabelas} options={{headerShown:false}} />
<Stack.Screen name="KelompokDuabelasDua" component={KelompokDuabelasDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigabelas" component={KelompokTigabelas} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigabelasDua" component={KelompokTigabelasDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTigabelasTiga" component={KelompokTigabelasTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokEmpatbelas" component={KelompokEmpatbelas} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimabelas" component={KelompokLimabelas} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimabelasDua" component={KelompokLimabelasDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokLimabelasTiga" component={KelompokLimabelasTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokEnambelas" component={KelompokEnambelas} options={{headerShown:false}} />
<Stack.Screen name="HalamanTransporPadaMembranSel" component={HalamanTransporPadaMembranSel} options={{headerShown:false}} />
<Stack.Screen name="HalamanTransporSel" component={KelompokTransporSel} options={{headerShown:false}} />
<Stack.Screen name="HalamanTransporSelDua" component={KelompokTransporSelDua} options={{headerShown:false}} />
<Stack.Screen name="HalamanTransporSelTiga" component={KelompokTransporSelTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktif" component={KelompokTransporAktif} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifDua" component={KelompokTransporAktifDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifTiga" component={KelompokTransporAktifTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifEmpat" component={KelompokTransporAktifEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifLima" component={KelompokTransporAktifLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifEnam" component={KelompokTransporAktifEnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifTujuh" component={KelompokTransporAktifTujuh} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifDelapan" component={KelompokTransporAktifDelapan} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporAktifSembilan" component={KelompokTransporAktifSembilan} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasif" component={KelompokTransporPasif} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasifDua" component={KelompokTransporPasifDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasifTiga" component={KelompokTransporPasifTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasifEmpat" component={KelompokTransporPasifEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasifLima" component={KelompokTransporPasifLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokTransporPasifEnam" component={KelompokTransporPasifEnam} options={{headerShown:false}} />
<Stack.Screen name="HalamanGlosarium" component={HalamanGlosarium} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumA" component={KelompokGlorasiumA} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumB" component={KelompokGlorasiumBbackup} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumD" component={KelompokGlorasiumD} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumDDua" component={KelompokGlorasiumDDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumE" component={KelompokGlorasiumE} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumF" component={KelompokGlorasiumF} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumG" component={KelompokGlorasiumG} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumH" component={KelompokGlorasiumH} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumHDua" component={KelompokGlorasiumHDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumK" component={KelompokGlorasiumk} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumKDua" component={KelompokGlorasiumkDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumkTiga" component={KelompokGlorasiumkTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumKEmpat" component={KelompokGlorasiumKEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumI" component={KelompokGlorasiumI} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumL" component={KelompokGlorasiumL} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumLDua" component={KelompokGlorasiumLDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumM" component={KelompokGlorasiumM} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMDua" component={KelompokGlorasiumMDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMTiga" component={KelompokGlorasiumMTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMEmpat" component={KelompokGlorasiumMEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMLima" component={KelompokGlorasiumMLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMEnam" component={KelompokGlorasiumMEnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMTujuh" component={KelompokGlorasiumMTujuh} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumMDelapan" component={KelompokGlorasiumMDelapan} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumN" component={KelompokGlorasiumN} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumNDua" component={KelompokGlorasiumNDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumO" component={KelompokGlorasiumO} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumP" component={KelompokGlorasiumP} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPDua" component={KelompokGlorasiumPDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPTiga" component={KelompokGlorasiumPTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPEmpat" component={KelompokGlorasiumPEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPLima" component={KelompokGlorasiumPLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPEnam" component={KelompokGlorasiumPEnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPTujuh" component={KelompokGlorasiumPTujuh} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPDelapan" component={KelompokGlorasiumPDelapan} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPSembilan" component={KelompokGlorasiumPSembilan} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumPSepuluh" component={KelompokGlorasiumPSepuluh} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumR" component={KelompokGlorasiumR} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumRDua" component={KelompokGlorasiumRDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumRTiga" component={KelompokGlorasiumRTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumREmpat" component={KelompokGlorasiumREmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumRLima" component={KelompokGlorasiumRLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumREnam" component={KelompokGlorasiumREnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumS" component={KelompokGlorasiumS} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSDua" component={KelompokGlorasiumSDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSTiga" component={KelompokGlorasiumSTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSEmpat" component={KelompokGlorasiumSEmpat} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSLima" component={KelompokGlorasiumSLima} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSEnam" component={KelompokGlorasiumSEnam} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSTujuh" component={KelompokGlorasiumSTujuh} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumSDelapan" component={KelompokGlorasiumSDelapan} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumT" component={KelompokGlorasiumT} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumTDua" component={KelompokGlorasiumTDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumTTiga" component={KelompokGlorasiumTTiga} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumV" component={KelompokGlorasiumV} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumVDua" component={KelompokGlorasiumVDua} options={{headerShown:false}} />
<Stack.Screen name="KelompokGlosariumVTiga" component={KelompokGlorasiumVTiga} options={{headerShown:false}} />



















      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;