import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const MovieRow = ({movie}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:movie.Poster}} style={styles.poster}/>
            <Text style={styles.title}>{movie.Title}</Text>
            <View style={styles.iconContainer}>
                <Icon name='heart-o' size={36} color='red'/>
            </View>
        </View> 
    )
}


const styles = StyleSheet.create({
    container:{ 
        flexDirection:'row',
        padding:5,
        alignItems:'center'
    },
    iconContainer:{
        flex:1,
        alignItems:'center'
    },
    poster:{
        height:100,
        width:70,
        resizeMode:'contain'
    },
    title:{
        fontSize:24,
        fontWeight:'300',
        flex:2,
        marginLeft:10
    }
})

export default MovieRow;