import {StyleSheet} from 'react-native';
import {size,weight} from '../theme/fonts';
import {colors} from '../theme/colors';


export const styles = StyleSheet.create({
    post:{
        flex:1,
        
    },
    image:{
        height:350,
        width:'100%'
    },
    header:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    useAvatar:{
      height:50,
      width:50,
      borderRadius:25,
      marginRight:10,
    },
    userName:{
     fontWeight: weight.bold,
     color: colors.black
    },
    threeDots:{
        marginLeft:'auto',
    },
    footer:{
        padding:10,
    },
    iconContainer:{
     flexDirection:'row',
     marginBottom:5,
    },
    icon:{
      marginHorizontal:5,
      color:colors.black,
    },
    text:{
color:colors.black,
lineHeight:18,
    },
    textFonts:{
        fontWeight:weight.bold,
        

    },
    commentText:{
   color:colors.black,
   flex:1,
    },
    comment:{
        flexDirection:'row',
        alignItems:'center',
    }

})