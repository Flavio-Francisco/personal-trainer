import { View,Text,StyleSheet, Alert, TouchableOpacity } from "react-native";
import { TreinerType } from "../@types/treinerType";
import { Theme } from './../../Themas';
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import React, { useCallback, useRef, useState } from "react";
import jaja from '../assets/jaja.mp4';

import VideoPlayer from 'expo-video-player'
import { ResizeMode } from "expo-av";


interface Type{
    item:TreinerType,
}


export function CardTreiner({item}:Type){

    const [playing, setPlaying] = useState(false);
    const playerRef = useRef<YoutubeIframeRef>(null);
    const onStateChange = useCallback((state: string) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video não encontrado!");
        }
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);


    return(
        <View style={style.conteiner}>
            <TouchableOpacity
            style={style.button}
            onPress={togglePlaying}
            onPressIn={()=> {
                playerRef.current?.getCurrentTime().then(
                  currentTime => console.log({currentTime})
                );
      
                playerRef.current?.getDuration().then(
                  getDuration => console.log({getDuration})
                );
              }}
            >
            <YoutubePlayer
                ref={playerRef}
                height={280}
                play={playing}
                // para alterar o video e só  alterar o id do video
                videoId={"-aej3kEcNoU"}
                onChangeState={onStateChange}
                 />
                 

            </TouchableOpacity>
            <VideoPlayer
             style={style.video}
                videoProps={{
                    
                    shouldPlay: true,
                    
                    resizeMode: ResizeMode.COVER,
                
                    source: require('../assets/jaja.mp4')
                    
                }}
/>
           
            <View style={style.conteinertext}>
              <Text style={style.text1}>Grupo: </Text><Text style={style.text2}>{item.id}</Text>
            </View>
            <View style={style.conteinertext}>
              <Text style={style.text1}>Exercicio: </Text><Text style={style.text2}>{item.exercicio}</Text>
            </View>
            <View style={style.conteinertext}>
              <Text style={style.text1}>Repetições: </Text><Text style={style.text2}>{item.repeticao}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        flexDirection: "column",
        backgroundColor:Theme.COLORS.withe1,
        width: '80%',
        height:'100%',
        borderRadius:10,
        marginLeft:30,
        marginTop:30,
        borderLeftWidth:5,
        borderLeftColor:Theme.COLORS.blue2
        
    },
    conteinertext:{
        flex:1,
        flexDirection: "row",
        width: '80%',
        height:'100%',
        borderRadius:5,
        borderBottomWidth:1,
        
        padding:10,

       
    },
    text1:{
        fontSize:22,
        fontWeight:'bold',
      
    },
    text2:{
        fontSize:20,
        
    },
    button:{
        height:180
        
    },
    video:{
        height:180,
        width:310,
    }

})