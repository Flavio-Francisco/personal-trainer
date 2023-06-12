import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Sinlg } from '../screens/Sinlg';
import { Treiner } from '../screens/Treiner';




const {Navigator,Screen} = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Navigator>
   
         <Screen
        name='Home'
        component={Home}
        options={{
           headerShown:false,
        
        }}
        />
           <Screen
        name='Treiner'
        component={Treiner}
        options={{
            headerShown:false,
         
        }}
        />
      </Navigator>

    );
}