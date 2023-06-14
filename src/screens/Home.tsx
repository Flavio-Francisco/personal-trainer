import { View,Text, Image, TouchableOpacity,StyleSheet ,ImageBackground} from "react-native";
import { Theme } from "../../Themas";



export function Home(){
    function handleSubmit(){
        let text = "Treinos"
        return text
    }

    return(
     <View style={styles.conteiner} >
      
      <TouchableOpacity style={styles.conteinerImage} onPressIn={handleSubmit}>
            <Image
            style={styles.image}
            source={require('../assets/avaliacao-fisica.png')}
            />
        
      </TouchableOpacity>
     
       <TouchableOpacity style={styles.conteinerImage} onPressIn={handleSubmit}>
            <Image
            style={styles.image}
            source={require('../assets/academia.png')}
            />
      </TouchableOpacity>
    
       <TouchableOpacity style={styles.conteinerImage}>
        <Image
            style={styles.image}
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
        height: '25%',
        borderRadius: 10,
        marginBottom:'7%',
        marginTop:'5%'
       
    },
    
    image: {
        
        width:'95%',
        height: 200,
        borderRadius: 10,
       
        
    },
 
    
  
})