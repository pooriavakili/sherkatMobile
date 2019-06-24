/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text,
SafeAreaView,
Image,
StyleSheet,
    ScrollView,
    View
} from 'react-native';
import {
    createStackNavigator,
     DrawerItems,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
createAppContainer,
    createSwitchNavigator




} from 'react-navigation'
import Aks from './component/Aks'
import Dashboard from "./component/Dashboard";
import khadamatPardatBanky from './component/sherkat/Stack/KhadamatPardakhtBanky'
import Bashgahha from "./component/sherkat/Stack/Bashgahha";
import GhabezZarime from "./component/sherkat/Stack/GhabezZarime";
import KhadamatPardakhtElectroniky from "./component/sherkat/Stack/KhadamatPardakhtElectroniky";
import KharidBasteEnternety from "./component/sherkat/Stack/KharidBasteEnternety";
import KharidSharj from "./component/sherkat/Stack/KharidSharj";
import Login from './component/sherkat/Stack/Login'
import SabetName from "./component/sherkat/Stack/SabetName";
import Bashgahhayman from "./component/sherkat/Tabs/Bashgahhayman";
import Enter from "./component/sherkat/Tabs/Enter";
import Profile from "./component/sherkat/Tabs/Profile";
import Rahnama from "./component/sherkat/Tabs/Rahnama";
import Tarakoneshha from "./component/sherkat/drawer/Tarakoneshha";
import KhadamatBime from './component/sherkat/Stack/KhadamatBime';

import Raytel from './component/sherkat/Stack/Raytel'
import HamrahAval from './component/sherkat/Stack/HamrahAval'
import Kharid from './component/sherkat/Stack/Kharid';
import Pardakht from './component/sherkat/Stack/Pardakht'
import SharjAsly from './component/sherkat/Stack/SharjAsly'
import Irancell from './component/sherkat/Stack/Irancell'
export default class App extends React.Component {
  render() {
    return (
<AppContiner/>
    );
  }
}
const CustomComponent=(props)=>(

    <SafeAreaView
        style={{
           flex:1,

        }}

    >

        <View style={{height:150,backgroundColor:"white",alignItems: "center",justifyContent: "center"}}>
        <Image style={{width:70,height:70}} source={require('./img/logo2.png')}/>

        </View>
        <ScrollView>
        <View
        style={{left:120,

        }}
        >

            <DrawerItems {...props}/>
        </View>
        </ScrollView>
    </SafeAreaView>

)

const Stack=createStackNavigator({

        aks:{screen:Aks},
        
        dashboard:{screen:Dashboard},
        bashgahha: { screen: Bashgahha},
        khadamatPardatBanky:{screen:khadamatPardatBanky},
        ghabezZarime: { screen:GhabezZarime },
        KhadamatBime: { screen: KhadamatBime },
        khadamatPardakhtElectroniky:{screen:KhadamatPardakhtElectroniky},
        kharidBasteEnternety:{screen:KharidBasteEnternety},
        kharidSharj:{screen:KharidSharj},
        login:{screen:Login},
        sabetName:{screen:SabetName},
        irancell:{screen:Irancell},
        raytel:{screen:Raytel},
        hamrahAval:{screen:HamrahAval},
        kharid:{screen:Kharid},
        pardakht:{screen:Pardakht},
        sharjAsly:{screen:SharjAsly},

    
},{
    navigationOptions:{
        header:null
    }
})
const Draw=createDrawerNavigator({
 

        dashboard:{
            screen:Dashboard
        },
        profile: {
            screen: Profile,
        },
        tarakoneshha: {
            screen: Tarakoneshha,
        },
        rahnama: {
            screen: Rahnama
        },
  
},{
    contentComponent:CustomComponent,
    drawerPosition:"right",
    navigationOptions:{
        header:null
    }

})
const Tab=createMaterialTopTabNavigator({


        bashgahhayman: { screen: Bashgahhayman },
        enter: { screen: Enter },
        tarakoneshha: { screen: Tarakoneshha },
        rahnama: { screen: Rahnama },



},{
    showIcon:true,
    tabBarPosition:"bottom"
})
const Mix=createSwitchNavigator({
    Stack:{
        screen:Stack
    },
    Draw:{
        screen:Draw
    },
    Tab:{
        screen:Tab
    }
})
const AppContiner=createAppContainer(Mix);
