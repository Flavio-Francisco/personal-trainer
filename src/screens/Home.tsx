import { View,Text, TouchableOpacity } from "react-native";


export function Home(){

    return(
        <View>
            <Text style={{margin:"5%"}}>Home</Text>
            <TouchableOpacity><Text>Voltar</Text></TouchableOpacity>
        </View>
    );

}