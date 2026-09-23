import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function Home(){
 const [active,setActive]=useState(false);
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.wrap}>
   <Text style={s.kicker}>WHITETAIL INTELLIGENCE</Text><Text style={s.logo}>RATTLING{`\n`}ANTLERS</Text>
   <Text style={s.tag}>Record. Analyze. Discover.</Text>
   {active ? <View style={s.active}><Text style={s.activeTitle}>HUNT IN PROGRESS</Text><Text style={s.time}>5:42 PM</Text><Pressable style={s.deer} onPress={()=>router.push('/deer')}><Text style={s.deerEmoji}>🦌</Text><Text style={s.deerText}>+ DEER</Text></Pressable><Pressable style={s.secondary} onPress={()=>router.push('/hunt')}><Text>RESUME HUNT</Text></Pressable></View> : <Pressable style={s.start} onPress={()=>{setActive(true);router.push('/start')}}><Text style={s.startText}>START HUNT</Text></Pressable>}
   <View style={s.grid}><Pressable style={s.card} onPress={()=>router.push('/start')}><Text style={s.cardTitle}>＋ QUICK OBSERVATION</Text><Text style={s.muted}>Record a deer without starting a hunt.</Text></Pressable><Pressable style={s.card} onPress={()=>router.push('/history')}><Text style={s.cardTitle}>MY HUNTS</Text><Text style={s.muted}>History and hunt details.</Text></Pressable><Pressable style={s.card} onPress={()=>router.push('/insights')}><Text style={s.cardTitle}>MY INSIGHTS</Text><Text style={s.muted}>Patterns from your own data.</Text></Pressable></View>
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#111'},wrap:{padding:24,gap:18},kicker:{color:'#a8b89f',fontSize:12,fontWeight:'700',letterSpacing:2},logo:{color:'#f5f2e8',fontSize:38,fontWeight:'900',lineHeight:35},tag:{color:'#aaa',fontSize:16},start:{height:150,borderRadius:22,backgroundColor:'#314c2d',alignItems:'center',justifyContent:'center',marginTop:10},startText:{color:'#fff',fontSize:25,fontWeight:'900'},active:{borderRadius:22,padding:18,backgroundColor:'#202a20',alignItems:'center',gap:8},activeTitle:{color:'#a8b89f',fontWeight:'800'},time:{color:'#fff',fontSize:30,fontWeight:'800'},deer:{width:'100%',height:110,borderRadius:18,backgroundColor:'#314c2d',alignItems:'center',justifyContent:'center',flexDirection:'row',gap:12},deerEmoji:{fontSize:34},deerText:{color:'#fff',fontSize:25,fontWeight:'900'},secondary:{padding:14,backgroundColor:'#eee',borderRadius:12,width:'100%',alignItems:'center'},grid:{gap:12},card:{padding:18,borderRadius:16,backgroundColor:'#1d1d1d',gap:7},cardTitle:{color:'#f5f2e8',fontSize:16,fontWeight:'800'},muted:{color:'#999',lineHeight:20}});
