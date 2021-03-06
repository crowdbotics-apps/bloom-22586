import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps172476Navigator from '../features/Maps172476/navigator';
import Additem172475Navigator from '../features/Additem172475/navigator';
import Maps172471Navigator from '../features/Maps172471/navigator';
import UserProfile172467Navigator from '../features/UserProfile172467/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps172476: { screen: Maps172476Navigator },
Additem172475: { screen: Additem172475Navigator },
Maps172471: { screen: Maps172471Navigator },
UserProfile172467: { screen: UserProfile172467Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
