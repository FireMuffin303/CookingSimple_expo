import { TouchableWithoutFeedback, View , Text, Button, TouchableOpacity} from "react-native";
import { ToastAndroid,StyleSheet,Image } from "react-native";

export const RecipeBanner = (props) =>{
    return(
            <TouchableOpacity style={style.card} 
            onPress={() => showToast(props.id)}
            >
              <Image style={style.image} source={require('csm_frontend/assets/favicon.png')}/>
              <View>

                <Text style={{
                  fontSize: 20,
                  color:'#ffffff',
                }}>
                  {props.name}
                </Text>

                <Text style={{
                  fontSize: 10,
                  color:'#ffffff',
                }}>
                  วันที่อัปโหลด 28/5/2023
                </Text>

                <View style={style.content}>
                  <Image style={style.avatar} source={require('csm_frontend/assets/icon.png')}></Image>
                  <Text style={{color:'#ffffff'}}>{props.user}</Text>
                </View>
              </View>
            </TouchableOpacity>
    );
  }

function showToast(id){
    ToastAndroid.show("ID : "+id,ToastAndroid.SHORT);
}

const style = StyleSheet.create({
  card:{
    flexDirection:'row',
    alignItems:'center',
    margin: 10,
    marginHorizontal:35,
    padding:6,
    backgroundColor:"#9CA777",
    borderRadius : 4
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 8,
  },
  content: {
    flexDirection:'row',
    flex: 1,
    padding: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  }
  
})