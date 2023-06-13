import { View,Text, Image, TouchableOpacity,StyleSheet ,ImageBackground} from "react-native";
import { Theme } from "../../Themas";


export function Home(){
    function handleSubmit(){
        let text = "Treinos"
        return text
    }

    return(
     <View style={styles.conteiner} >
      
        <Image
        style={styles.image3}
        source={require('../assets/emoji-indiferente.jpeg')}
        />
       
     
       <TouchableOpacity style={styles.conteinerImage} onPressIn={handleSubmit}>
            <Image
            style={styles.image}
            source={require('../assets/academia.png')}
            />
        
      </TouchableOpacity>
    
       <TouchableOpacity style={styles.conteinerImage}>
        <Image
            style={styles.image2}
            source={require('../assets/academia1.jpg')}
           />
        
       </TouchableOpacity> 
   
    </View>
    );

}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',  
        backgroundColor:Theme.COLORS.blue4
    },
    conteinerImage: {
        backgroundColor:'',
        alignItems: 'center',
        width:'100%',
        height: '30%',
        borderRadius: 10,
        margin:10,
        marginBottom:15,

       
    },
    
    image: {
        
        width:'95%',
        height: 220,
        borderRadius: 10,
        
        
    },
    image2: {
        
        width:'95%',
        height: 200,
        borderRadius: 10,
        marginTop:10,
    },
    image3: {   
        backgroundColor:Theme.COLORS.blue4,
        width:200,
        height: 150,
        borderRadius: 10,
        marginTop:5,
        marginBottom:10
        
    },
    
  
})