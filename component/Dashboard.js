import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
  TouchableWithoutFeedback

} from 'react-native'
import {Header,Left,Right} from 'native-base'
import SwiperFlatList from 'react-native-swiper-flatlist';
import {createMaterialTopTabNavigator} from "react-navigation";
import Bashgahhayman from "./sherkat/Tabs/Bashgahhayman";
import Enter from "./sherkat/Tabs/Enter";
import Tarakoneshha from "./sherkat/drawer/Tarakoneshha";
import Rahnama from "./sherkat/Tabs/Rahnama";
import {Icon} from 'react-native-elements'

export default class Dashboard extends Component {
    render() {

        return (



            <View style={Style.container}>
          
         <Header style={Style.Header
         }>
    <Left style={Style.Right}>

        <Icon onPress={()=>{
            this.props.navigation.openDrawer()}}
            style={Style.Img}
              name='menu'
              color='white'
        />


       
    </Left>



           
         </Header>
       
          
         <View
                style={Style.Touch1}
         >
       <TouchableWithoutFeedback
           onPress={()=>{
               this.props.navigation.navigate('bashgahha')
           }}
       
       >
       
         <Text style={Style.Text1}>باشگاه ها</Text>
           
         
       </TouchableWithoutFeedback>
</View>
<View
                style={Style.Touch2}
         >
       <TouchableWithoutFeedback
   onPress={()=>{
    this.props.navigation.navigate('khadamatPardatBanky')
}}
       
       >
       
         <Text style={Style.Text1}>خدمات پرداخت بانکی</Text>
           
         
       </TouchableWithoutFeedback>
</View>
<View
                style={Style.Touch3}
         >
       <TouchableWithoutFeedback
         onPress={()=>{
            this.props.navigation.navigate('ghabezZarime')
        }}
       
       >
       
         <Text style={Style.Text1}>قبض وجریمه</Text>
           
         
       </TouchableWithoutFeedback>
</View>          
<View
                style={Style.Touch4}
         >
       <TouchableWithoutFeedback

onPress={()=>{
    this.props.navigation.navigate('sharjAsly')
}}
       >
       
         <Text style={Style.Text1}>خرید شارژ</Text>
           
         
       </TouchableWithoutFeedback>
</View>           
<View
                style={Style.Touch5}
         >
       <TouchableWithoutFeedback
onPress={()=>{
    this.props.navigation.navigate('kharidBasteEnternety')
}}
       
       >
       
         <Text style={Style.Text1}>خرید بسته اینترنتی</Text>
           
         
       </TouchableWithoutFeedback>
</View>
<View
                style={Style.Touch6}
         >
       <TouchableWithoutFeedback
onPress={()=>{
    this.props.navigation.navigate('KhadamatBime')
}}
       
       >
       
         <Text style={Style.Text1}>خدمات بیمه</Text>
           
         
       </TouchableWithoutFeedback>
</View>
</View>

        );
    }
}

const Style=StyleSheet.create({
 
  Text1:{

fontSize:20,
color:"#03022c"

  },
  Touch2:{
top:70,
left:-10
  },
  Touch3:{
 top:170,
 left:-260
  },
  Touch4:{
 top:140,
 left:-10
  },
  Touch5:{
top:240,
left:-220
  },
  Touch6:{
top:210,
left:-10
  },
  Touch1:{
   
left:-280,
top:100
  },    
  
  container:{
        flex:1
    },
    Header:{
backgroundColor:'#03022c',
        top:-10

    },
    Right:{
        right:-210
    },
    Img:{
        height:60,
        width:60,


    },

})

