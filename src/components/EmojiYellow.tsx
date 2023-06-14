import { Text ,View,Image,StyleSheet} from "react-native";
import { Theme } from '../../Themas';



export function EmojiYellow(){
    return(
        <View style={style.conteiner}>
          <View style={style.conteinerImage}>
            <Image
            style={style.image}
            source={require('../assets/emoji.webp')}
            />
            <View>
                <Text style={style.text}>Parabéns você  </Text>
                <Text style={style.text1}> estar bem mais </Text>
                <Text style={style.text1}> pode melhoara. </Text>
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
        backgroundColor:Theme.COLORS.yellow,
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