
import { Text, View } from 'react-native';
import {colors} from './src/theme/colors';
import { size } from './src/theme/fonts';
import AntDesign from "react-native-vector-icons/AntDesign"



const App = () => {

  return(
    <View
    style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:colors.primary}}
    >
      <Text
      style={{color:colors.lightgrey, fontSize:size.lg}}
      >Hello World
      
      <AntDesign 
      name="home"
      size={20}
      />
      </Text>
    </View>
  )
}


export default App