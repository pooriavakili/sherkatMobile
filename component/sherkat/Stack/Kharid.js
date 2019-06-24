import React, {Component} from 'react';

import {
    View,
    Picker,
    StyleSheet,
    Text,
    Button
}from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class Kharid extends Component {
    state={
        sharj:"",
        number:""
    }
    render() {
        return (
            <View>
               <Picker
               style={Style.Pic}
               onValueChange={(itemValue,itemIndex)=>
            this.setState({sharj:itemValue})
            }
               
               >
               <Picker.Item label='2000' value='2000'/>
               <Picker.Item label='5000' value='5000'/>
               <Picker.Item label='10000' value='10000'/>
               </Picker>
               <Text
               style={style=Style.Text2}
               >مبلغ دلخواه</Text>
               <TextInput onChangeText={(text)=>{
              this.setState({number:text})
                 
               }}
               value={this.state.number}
               style={Style.Text4}
               />
<View  style={Style.Pardakht}>
    <Button title='پرداخت'
    style={Style.Par}
    onPress={()=>{
        this.props.navigation.navigate('pardakht')
    }}
    />
    </View>
            </View>
        );
    }
}
const Style=StyleSheet.create({
Pic:{
    top:220
},
Text2:{
    color:'black',
    top:250,
 right:160
},
Text4:{
    top:250
},
Par:{
    color:'#041d7e',   
},
Pardakht:{
    marginRight:100,
    marginLeft:100,
    top:330,
    left:10 
}
})