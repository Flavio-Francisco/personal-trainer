import { View,Text, TouchableOpacity, FlatList,Image,StyleSheet } from "react-native";
import treino_A from '../assets/treino-A.png';
import treino_B from '../assets/treino-B.png';
import treino_C from '../assets/treino-C.png';
import treino_D from '../assets/treino-D.png';



export function Treiner(){
    const Treino =[
        {
            id:'A',
            image :treino_A
        },
        {
            id:'B',
            image :treino_B
        },
        {
            id:'C',
            image :treino_C
        },
        {
            id:'D',
            image :treino_D
        },
    ]
    return(
     <View style={style.conteine} >
        
      <FlatList 
      data={Treino}
      horizontal
      keyExtractor={item => item.id}
      renderItem={(item)=>(
        <TouchableOpacity style={style.buttonImage}>
          <Image 
          style={style.image}
          source={item.item.image}/>
        </TouchableOpacity>
        
      )}
      />
     </View>
    );

}

const style = StyleSheet.create({

    conteine:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center'
    },
    buttonImage:{
        gap:3,
        alignContent:'space-between'
    },
    image:{
        width:200,
        height:100,
        margin:5,
        borderRadius:10,

        
    }
})