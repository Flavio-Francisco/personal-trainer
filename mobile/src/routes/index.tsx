import {NavigationContainer} from '@react-navigation/native'
import { StarckRoutes } from './stack.routes';
import { TabRoutes } from './tab.routes';




export default function Routes() {
  return (
    <NavigationContainer>
        <StarckRoutes/>
    </NavigationContainer>
    
  );
}