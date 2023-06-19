import { View,Text, Button } from "react-native";
import { EmojiGreen } from "../components/EmojiGreen";
import { EmojiYellow } from "../components/EmojiYellow";
import { EmojiRed } from "../components/EmojiRed";



export function Status(){
    return(
    <View style={{flex:1, justifyContent:'center'}} >
        <EmojiGreen/>
        <EmojiYellow/>
        <EmojiRed/>
    </View>
    );
}