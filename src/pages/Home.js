import react from "react";

import{
      View,
      Text, 
      TextInput,
      TouchableOpacity, 
      StyleSheet
    } from 'react-native';
export default function Home(){
    return(
        <view>
            <Text>Meus Filmes</Text>
            <Text>Olá Dianeis, boa noite!</Text>

           <TouchableOpacity>
               <Text> Adiconar </Text>
           </TouchableOpacity>
           
        </view>

    );
}

const styles = StyleSheet.create({

});

