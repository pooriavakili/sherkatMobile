import React, {Component} from 'react';

import {
    View,
    Button,
    Text,
    StyleSheet
}from 'react-native'

export default class SharjAsly extends Component {
    render() {
        return (
            <View
            style={Style.BBtn}
            >
                <Button 
                 style={Style.Bttn}
                onPress={()=>{
                    this.props.navigation.navigate('irancell')
                }}
                 title='ایرانسل'

                />
                    <Button 
                     style={Style.Bttn}
                onPress={()=>{
                    this.props.navigation.navigate('raytel')
                }}
                 title='رایتل'

                />
                      <Button 
                      style={Style.Bttn}
                onPress={()=>{
                    this.props.navigation.navigate('hamrahAval')
                }}
                 title='همراه اول'

                />
            </View>
        );
    }
}
const Style=StyleSheet.create({
    BBtn:{
top:220
    },
    Bttn:{
        color:"#041d7e"
    }
})