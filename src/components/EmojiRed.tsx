import { Text ,View,Image,StyleSheet} from "react-native";
import { Theme } from '../../Themas';



export function EmojiRed(){
    return(
        <View style={style.conteiner}>
          <View style={style.conteinerImage}>
            <Image
            style={style.image}
            source={require('../assets/emoji-triste.webp')}
            />
            <View>
                <Text style={style.text}>Você faltando </Text>
                <Text style={style.text1}> demais </Text>
                <Text style={style.text1}> vamos mudar isso!. </Text>
            </View>
        
          </View>
        </View>
    )
}

const style = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius:50,
        margin:20,
       
    },
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:3,
        backgroundColor:Theme.COLORS.blue4
    },
    conteinerImage:{
        backgroundColor:Theme.COLORS.red,
        flexDirection:'row',
        width:'90%',
        borderRadius:10,

    },
    text:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:20,
        marginTop:23,
    },
    text1:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:20,
        
    }

})