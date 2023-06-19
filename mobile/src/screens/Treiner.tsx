import { View,Text, TouchableOpacity, FlatList,Image,StyleSheet } from "react-native";
import treino_A from '../assets/treino-A.png';
import treino_B from '../assets/treino-B.png';
import treino_C from '../assets/treino-C.png';
import treino_D from '../assets/treino-D.png';
import { useState } from "react";
import { TreinerType } from "../@types/treinerType";
import { CardTreiner } from "../components/CardTreiner";
import { Theme } from "../../Themas";



export function Treiner(){
    var value = [{
        id:1,
        exercicio:'remada alta',
        repeticao:15
}]

    var [dataTreiner, setDataTreiner] = useState<TreinerType[]>([])
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
    function cardSubmit(){
       setDataTreiner(value)
        
    }
    return(
          <View style={style.conteine}>
            <View  style={style.conteineList}>
             <FlatList
                data={Treino}
                horizontal
                keyExtractor={item => item.id}
                renderItem={(item) => (
                    <TouchableOpacity style={style.buttonImage} 
                    onPress={cardSubmit}
                    >
                        <Image
                            style={style.image}
                            source={item.item.image} />
                    </TouchableOpacity>
             )} />
            </View>
           <View>
            
           </View>
            <FlatList
                data={dataTreiner}
                keyExtractor={item => item.exercicio}
                renderItem={(item)=> <CardTreiner item={item.item} />  }
              />
           
              
            </View>   
                        
         
    );

}

const style = StyleSheet.create({

    conteine:{
        height:'100%',
        flex:1, 
        backgroundColor:Theme.COLORS.blue4
    },
    conteineList:{
        marginBottom:10,

        backgroundColor:Theme.COLORS.blue4
    },
    buttonImage:{
    
        width:200,
        height:100,
        margin:5,
        borderRadius:10,

    },
    image:{
        width:200,
        height:100,
        margin:5,
        borderRadius:10,

        
    }
})