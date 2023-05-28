import {View,Text, ScrollView} from 'react-native'
import { RecipeBanner } from '../../components/RecipeBanner';
import SearchInput from '../../components/SearchBox';
export default function HomeScreen(){
    const projectDatas = [
        {id:"0001",name:"ราเมงญี่ปุ่น",user:"ประธานต้น"},
        {id:"0002",name:"ข้าวราดซอส",user:"ผู้ใช้ 2"},
        {id:"0003",name:"ไข่เจียวโหรพา",user:"ผู้ใช้ 3"}
      ]
    return(
        <ScrollView style={{backgroundColor:"#FEE8B0"}}>
            <SearchInput/>

            {projectDatas.map(item =>{
                return <RecipeBanner id={item.id} name={item.name} desc={item.desc} user={item.user}></RecipeBanner>
            })}
        </ScrollView>
    );
}