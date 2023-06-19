import { View,Text,StyleSheet } from "react-native";
import { TreinerType } from "../@types/treinerType";
import { Theme } from './../../Themas';

interface Type{
    item:TreinerType,
}


export function CardTreiner({item}:Type){



    return(
        <View style={style.conteiner}>
            <View style={style.conteinertext}>
              <Text style={style.text1}>Grupo: </Text><Text style={style.text2}>{item.id}</Text>
            </View>
            <View style={style.conteinertext}>
              <Text style={style.text1}>Exercicio: </Text><Text style={style.text2}>{item.exercicio}</Text>
            </View>
            <View style={style.conteinertext}>
              <Text style={style.text1}>Repetições: </Text><Text style={style.text2}>{item.repeticao}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        flexDirection: "column",
        backgroundColor:Theme.COLORS.withe1,
        width: '80%',
        height:'100%',
        borderRadius:10,
        marginLeft:30,
        marginTop:30,
        borderLeftWidth:5,
        borderLeftColor:Theme.COLORS.blue2
        
    },
    conteinertext:{
        flex:1,
        flexDirection: "row",
        width: '80%',
        height:'100%',
        borderRadius:5,
        borderBottomWidth:1,
        
        padding:10,

       
    },
    text1:{
        fontSize:22,
        fontWeight:'bold',
      
    },
    text2:{
        fontSize:20,
        
    }

})