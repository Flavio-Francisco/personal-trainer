import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Treiner } from '../screens/Treiner';
import { Status } from '../screens/Status';




const {Navigator,Screen} = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Navigator>
   
         <Screen
        name='Home'
        component={Home}
        options={{
            headerTitle:'Seja Bem Vindo!',
            headerTitleAlign:'center',
            

        
        }}
        />
           <Screen
        name='Treiner'
        component={Treiner}
        options={{
            headerTitle:'Treinos',
            headerTitleAlign:'center'
           
         
        }}
        />
            <Screen
        name='Status'
        component={Status}
        options={{
            headerShown:false,
            
          
        }}
        />
      </Navigator>

    );
}