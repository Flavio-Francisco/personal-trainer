import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons,Entypo  } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Treiner } from '../screens/Treiner';
import { Status } from '../screens/Status';




const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator>

            <Screen
                name='Home'
                component={Home}
                options={{
                    headerTitle: 'Seja Bem Vindo!',
                    headerTitleAlign: 'center',
                    tabBarIcon:()=><Entypo name="home" size={24} color="black" />


                }}
            />
            <Screen
                name='Treinos'
                component={Treiner}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: () => <MaterialIcons name="fitness-center" size={24} color="black" />
                }}
            />
            <Screen
                name='Status'
                component={Status}
                options={{
                    headerShown: false,
                    tabBarIcon: () =>  <Entypo name="area-graph" size={24} color="black" />

                }}
            />
        </Navigator>

    );
}