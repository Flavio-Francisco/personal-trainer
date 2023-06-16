import { View,Text,TextInput, TouchableOpacity, Image ,StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { useState } from "react";
import { Theme } from "../../Themas";
import { Ionicons } from "@expo/vector-icons";




export function Sinlg(){
    const navigation = useNavigation();

    const [name, setName] = useState('')  
    const [password, setPassword] = useState('')  
    const [secure, setSecure] = useState(true);
    function handleSubmit() {
    
     navigation.navigate('TabRoutes')
    }
    
    return(
       
          <View style={style.conatiner} >

            <View >
                <Image
                 style={style.image}
                 source={require('../assets/jade2.png')}
                />
            </View>
           
            <TextInput
            style={style.input}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu usuario"
             placeholderTextColor={'#ffffff'}
            />
            <View style={style.conteinerInput}>
                <TextInput  
                style={style.passwod}
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                placeholderTextColor={'#ffffff'}
                 
                />
                <TouchableOpacity style={style.icon} onPress={()=>setSecure(!secure)}>
                    {secure?
                    <Ionicons name='eye' size={20} color='#ffffff'/>
                    :
                    <Ionicons name='eye-off' size={20} color='#ffffff'/>
                }
                     
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
             style={style.submit}
            onPress={handleSubmit}
            ><Text style={style.textInput}>Entrar</Text></TouchableOpacity>
           </View>
         
    );
 
}
const style = StyleSheet.create({ 
    conatiner:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#ffffff',
         
    },
    submit:{
        
        textAlign:'center',
        fontSize:22,
        width:'90%',
        height:'7%',
        borderRadius:10,
        margin:10,
        marginTop:50,
        backgroundColor:Theme.COLORS.blue1  
    },
    input:{
      
         backgroundColor:Theme.COLORS.blue4,     
        fontSize:20,
        width:'90%',
        height:60,
        borderRadius:10,
        marginBottom:20,
        paddingLeft:25,
        color:'#ffffff'


        
        
    },
    textInput:{
        fontSize:20,
        fontWeight:'bold',
        color: Theme.COLORS.blue4 ,
        textAlign:'center',
        marginTop:10,
        
        
    },
        conteinerInput:{
        backgroundColor:Theme.COLORS.blue4,  
        flexDirection:'row',
        alignContent:'space-between',
        alignItems:'center',
        fontSize:20,
        width:'90%',
        height:60,
        borderRadius:10,
        margin:10,  
     },
      icon:{
        width:'15%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
     },
     passwod:{
        width:'85%',
        height:50,
        fontSize:20,
        paddingLeft:25,
        color:'#ffffff'
        
     },
     image:{
        width:300,
        height:100,
        marginBottom:100
     }

})
 
             
          
            