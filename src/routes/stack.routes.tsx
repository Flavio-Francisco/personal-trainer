import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Sinlg } from '../screens/Sinlg';
import { TabRoutes } from './tab.routes';
import { Treiner } from '../screens/Treiner';
import { Theme } from './../../Themas';



const {Navigator,Screen} = createNativeStackNavigator();

export function StarckRoutes(){
    return(
        <Navigator>
        <Screen
        name='Sinlg'
        component={Sinlg}
        options={{
         headerShown:false,
          headerTitleAlign:'center'
        }}
        />
           <Screen
        name='Home'
        component={Home}
        options={{
         headerShown:false,
          headerTitleAlign:'center'
        }}
        />
           <Screen
        name='Treiner'
        component={Treiner}
        options={{
         
          title:'Treinos',
          headerBackTitle:Theme.COLORS.withe1,
          headerTitleAlign:'center'
        }}
        
        />
         <Screen
        name='TabRoutes'
        component={TabRoutes}
        options={{
          headerShown:false,
          
        }}
        />
        
      </Navigator>

    );
}