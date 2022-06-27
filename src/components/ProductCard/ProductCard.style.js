import { Dimensions, StyleSheet} from 'react-native';

const  styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:"#d6d6d6d6",
        flex:1,
        marginLeft:5,
        borderRadius:5,
        padding:5
    },
    Image:{
        height:Dimensions.get("window").height/3,
        borderRadius:5
    },
    title:{
        color:"black",
        fontWeight:"bold",
    },
    price:{
        marginTop:3,
        color:"gray"
    },
    inStock:{
        marginTop:3,
        color:"red",
        fontWeight:"bold"
    },
    containerInner:{
        marginTop:10
    }
})


export default styles
