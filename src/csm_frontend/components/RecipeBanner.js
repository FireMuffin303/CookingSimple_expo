import { TouchableWithoutFeedback, View , Text, Button, TouchableOpacity} from "react-native";
import { ToastAndroid } from "react-native";

export const RecipeBanner = (props) =>{
    return(
            <TouchableOpacity style={{
              margin: 10,
              marginHorizontal:35,
              padding:6,
              backgroundColor:"#9CA777",
              borderRadius : 4
            }} onPress={() => showToast(props.id)}
            >
              <Text style={{
                fontSize: 20,
                color:'#ffffff',
              }}>
                {props.name}
              </Text>
              <Text style={{color:'#ffffff'}}>{props.user}</Text>

            </TouchableOpacity>
    );
  }

function showToast(id){
    ToastAndroid.show("ID : "+id,ToastAndroid.SHORT);
}