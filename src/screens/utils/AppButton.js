import React from 'react'
import {Text,StyleSheet, TouchableOpacity,View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function AppButton({name,color, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>


                    <Text style={[styles.button, {backgroundColor:color}]}>
                       {name}
                    </Text>

                   

         </TouchableOpacity>
    )
}




export const ListButton=({name,color, onPress, icon})=> {
    
    return (
        <TouchableOpacity onPress={onPress} >

                <View style={[styles.ListButton, {backgroundColor:color}]}>

                    <Icon name={icon} size={26} color='white'/>

                    
                    <Text style={styles.btntext}>
                       {name}
                    </Text>
                </View>

         </TouchableOpacity>
    )
}
export const MenuButton=({name,color, onPress, icon})=> {
    
    return (
        <TouchableOpacity onPress={onPress} >

                <View style={[styles.diffButton, {backgroundColor:color}]}>

                    <Icon name={icon} size={30} color='white'/>
                    
                    <Text style={styles.btntext}>
                       {name}
                    </Text>

                </View>

         </TouchableOpacity>
    )
}





export const FabButtonL=({color, onPress, icon})=> {
    return (
        <TouchableOpacity onPress={onPress}   style={[styles.FabButtonL, {backgroundColor:color}]}>

                <View >

                    <Icon name={icon} size={26} color='white'  style={styles.btnIcon}/>
                </View>

         </TouchableOpacity>
    )
}




export const FabButtonR=({color, onPress, icon})=> {
    return (
        <TouchableOpacity onPress={onPress}   style={[styles.FabButtonR, {backgroundColor:color}]}>

                <View >

                    <Icon name={icon} size={28} color='white'  style={styles.btnIcon}/>
                </View>

         </TouchableOpacity>
    )
}


export default AppButton;

const styles = StyleSheet.create({

    button:{
        width:"60%",
        alignSelf:"center",
        color:"white",
        textAlign:"center",
        borderRadius:15,
        fontSize:20,
        marginBottom:10,
        marginTop:10,
        padding:4,
        elevation:4,
        fontFamily:'Alegreya-Bold',

    },
    diffButton:{
       
        width:130,
        height:130,
        borderRadius:15,
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'space-evenly',
     margin:10,
        padding:10,
        marginBottom:10,
        marginTop:10,
       elevation:5,
       
       
    },
    ListButton:{
        
        width:"70%",
        
        borderRadius:15,
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        padding:10,
        marginBottom:15,
        marginTop:15,
        elevation:3
        
        
    },
    
    btntext:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontFamily:'Alegreya-Bold',
    },

    FabButtonL:{
        height:50,
        width:50,
        borderRadius:50,
        position:"absolute",
        // right:0,
        bottom:30,
        
        elevation:4,
        zIndex:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    FabButtonR:{
        height:50,
        width:50,
        borderRadius:50,
        position:"absolute",
        right:0,
        bottom:30,
        
        elevation:4,
        zIndex:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnIcon:{
        textAlign:'center'
    }
})


