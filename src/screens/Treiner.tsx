import { View,Text, TouchableOpacity, FlatList,Image } from "react-native";
import foto from '../assets/treino-A.png';

interface treiner{
    id:string;
    image:any;
}

export function Treiner(){
    const Treino : treiner=[
        {
            id:'A',
            image :foto
        },
        {
            id:'B',
            image : <Image
            source={require('../assets/treino-A.png')}/>
        },
        {
            id:'C',
            image : <Image
            source={require('../assets/treino-A.png')}/>
        },
        {
            id:'D',
            image : <Image
            source={require('../assets/treino-A.png')}/>
        },
    ]
    return(
     <View style={{flex:1, justifyContent:'center'}} >
        
      <FlatList 
      data={Treino}
      renderItem={({item})=>< Treino image={item.image}/>}
      keyExtractor={item => item.id}
      />
     </View>
    );


}