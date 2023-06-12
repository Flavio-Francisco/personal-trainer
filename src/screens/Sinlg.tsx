import { View,Text, Button } from "react-native";
import {useNavigation} from '@react-navigation/native';


export function Sinlg(){
    const navigation = useNavigation();
    function handleSubmit() {
    
     navigation.navigate('TabRoutes')
    }

    return(
        <View style={{flex:1, justifyContent:'center'}} >
            <Text style={{margin:"5%",textAlign:'center'}}>Sinlg</Text>
           <Button
           title="Entrar"
           onPress={handleSubmit}
           />
        </View>
    );

}