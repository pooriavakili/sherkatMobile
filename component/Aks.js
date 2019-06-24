import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'

export default class Aks extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('dashboard')
        },2000)
    }

    render() {
        return (

<View style={Style.Asly}>
    <Image source={require('./../img/IMG-20190622-WA0003.jpg')}
    style={Style.img2}

    />
    <View style={Style.container}>

        <Image style={Style.img} source={require('./../img/logo2.png')}/>
</View>
</View>
        );
    }
}
const Style=StyleSheet.create({
    container:{

    top:240,
        left:80

    },

    img:{
        width:50,
        height:50
    },
    Asly:{

        top:105,
        left:70
    },
    img2:{
        width:200,
        height: 200
    }

})

