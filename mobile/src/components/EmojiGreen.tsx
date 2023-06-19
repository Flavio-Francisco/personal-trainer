import { Text ,View,Image,StyleSheet} from "react-native";
import { Theme } from '../../Themas';



export function EmojiGreen(){
    return(
        <View style={style.conteiner}>
          <View style={style.conteinerImage}>
            <Image
            style={style.image}
            source={require('../assets/feliz.webp')}
            />
            <View>
                <Text style={style.text}>Parabéns você  </Text>
                <Text style={style.text1}> estar focado </Text>
                <Text style={style.text1}> Continue assim! </Text>
            </View>
        
          </View>
        </View>
    )
}

const style = StyleSheet.create({
    image:{
        width:150,
        height:100,

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
        backgroundColor:Theme.COLORS.green,
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