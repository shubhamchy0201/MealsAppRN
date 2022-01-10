import React from 'react';
import { Platform  , Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import MealDetailScreen , { screenOptions as mealDetailScreenOptions }from '../components/organisms/screens/MealDetailScreen';
import CategoriesScreen , { screenOptions as categoriesScreenOptions} from '../components/organisms/screens/CategoriesScreen';
import CategoryMealScreen , { screenOptions as categoryMealScreenOptions }from '../components/organisms/screens/CategortMealsScreen';
import Colors from '../constants/Colors';
import FavoritesScreen ,{screenOptions as favoriteScreenOptions } from '../components/organisms/screens/FavoritesScreen';
import FilterScreen , {screenOptions as filterScreenOptions } from '../components/organisms/screens/FilterScreen';
import LoginScreen from '../components/organisms/screens/LoginScreen';

const defaultStackNavOptions = {
        // mode:'model',
         //initialRouteName : 'Categories',
        headerStyle : {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
        },
        headerTitleStyle : {
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily:'open-sans'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        
     
}


const MealsStackNavigator =createNativeStackNavigator();

  const MealsNavigator = (navigation) => {
    return (
    <MealsStackNavigator.Navigator initialRouteName="Categories" screenOptions={defaultStackNavOptions}>
        <MealsStackNavigator.Screen name="Categories" component={CategoriesScreen}  
        options={categoriesScreenOptions} 
        screenProps={{ rootNavigation: navigation }}
        />
        <MealsStackNavigator.Screen name="CategoryMeals" 
        component={CategoryMealScreen}
        options={categoryMealScreenOptions}
        />
        <MealsStackNavigator.Screen name="MealDetail"
         component={MealDetailScreen}
         options={mealDetailScreenOptions}
         />
    </MealsStackNavigator.Navigator>
    );
};




// const MealsNavigator = createStackNavigator( {
//      Categories: 
//      {
//            screen:CategoriesScreen,
//            navigationOptions : {
//            headerTitle : 'Meals Categories!'
//          }

//      },
//      CategoryMeals: {
//          screen: CategoryMealScreen
//      },
//      MealDetail:{
//         screen:MealDetailScreen
//      }
// }, {

//     defaultNavigationOptions : defaultStackNavOptions
// });






// adding favorites stack

//  const FavNavigator =  createStackNavigator( {
//     Favorites:FavoritesScreen,
//     MealDetail: MealDetailScreen
//    },
//    {
//     defaultNavigationOptions :defaultStackNavOptions
// });


const FavStackNavigator =createNativeStackNavigator();

 const FavNavigator = () => {
    return (
    <FavStackNavigator.Navigator  screenOptions={defaultStackNavOptions}>
        <FavStackNavigator.Screen name="Favorite" component={FavoritesScreen} 
        options={favoriteScreenOptions}
        />
        <FavStackNavigator.Screen name="MealDetail" 
        component={MealDetailScreen}
        options={mealDetailScreenOptions}
        />
    </FavStackNavigator.Navigator>
    );
};


//tab

//     const tabScreenConfig = { Meals:{
        
//          navigationOptions: {
//         tabBarIcon: tabInfo => {
//             return ( <Ionicons 
//                 name='ios-restaurant' 
//                 size={25} 
//                 color={tabInfo.tintColor} />
//              );
//         },
//         tabBarColor:Colors.primaryColor,
//         tabBarLabel: Platform.OS === 'android ' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'
//     }
// },
//     Favorites:{
//         navigationOptions: {
//        //tabBarLabel:'Favorites!!',
//        tabBarIcon: tabInfo => {
//            return ( <Ionicons 
//             name='ios-star'
//              size={25} 
//              color={tabInfo.tintColor} 
//            /> 
//            );
//        } ,
//        tabBarColor:Colors.accentColor,
//        tabBarLabel: Platform.OS === 'android ' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'
//     }}
// } 





//  const MealsFavTabNavigator =  Platform.OS==='android' ? 
//  createMaterialBottomTabNavigator(tabScreenConfig , {
//      activeTintColor:'white',
//      shifting:true,
//      barStyle : {
//          backgroundColor:Colors.primaryColor
//      }
//  }) :
//  createBottomTabNavigator(
//      tabScreenConfig
//      , {
//         tabBarOptions: {
//             labelStyle: {
//                 fontFamily:'open-sans'
//             },
//             activeTintColor:Colors.accentColor
//         }
//  });




const FavTabNavigator = createBottomTabNavigator();

const MealsFavTabNavigator = (navigation) => {
    return (
        
        <FavTabNavigator.Navigator shifting={true} screenOptions={ ({route}) =>
            route.name === "Meals" ? 
            {
                tabBarIcon: tabInfo => {
                    return ( <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                         />
                     );
                },
                tabBarColor:Colors.primaryColor,
               // tabBarLabel: Platform.OS === 'android ' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'
            }
            :
            {
                //tabBarLabel:'Favorites!!',
                tabBarIcon: tabInfo => {
                    return ( <Ionicons 
                     name='ios-star'
                      size={25}
                    /> 
                    );
                } ,
                tabBarColor:Colors.accentColor,
                //tabBarLabel: Platform.OS === 'android ' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'
             }
        }>
        <FavTabNavigator.Screen name="Meals" component={MealsNavigator} screenProps={{ rootNavigation: navigation }} options={{headerShown:false}} />
        <FavTabNavigator.Screen name="Favorites" component={FavNavigator} options={{headerShown:false}}/>
        </FavTabNavigator.Navigator>
        
    );
};



// Filter stack

//  const FiltersNavigator = createStackNavigator({
//     Filters: FilterScreen,   
//  },
// {
//     // navigationOptions : {
//     //     drawerLabel:'Filters!!!'
//     // },
//  defaultNavigationOptions : defaultStackNavOptions
// }
//  );

const FilterStackNavigator =createNativeStackNavigator();

 const FiltersNavigator = () => {
    return (
    <FilterStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <FilterStackNavigator.Screen name="Filter" component={FilterScreen} 
        options={filterScreenOptions}
        />
    </FilterStackNavigator.Navigator>
    );
};


// Login Screen
const LoginScreenStackNavigator =createNativeStackNavigator();

 const LoginNavigator = (navigation) => {
    return (
    <LoginScreenStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <LoginScreenStackNavigator.Screen name="Login/Signup" component={LoginScreen} options={{headerShown:false}}
        />
    </LoginScreenStackNavigator.Navigator>
    );
};



 //Drawer
//  const MainNavigator = createDrawerNavigator({
//  MealsFavs:{
//      screen:MealsFavTabNavigator, 
//      navigationOptions: {
//     drawerLabel:'Meals!',

//  }
// },
//  Filters:FiltersNavigator
//  }, {
//      contentOptions: {
//          activeTintColor:Colors.accentColor,
//          labelStyle: {
//              fontFamily: 'open-sans-bold'
//          },
//          itemsContainerStyle: {
//             marginVertical: 30,
//             padding:10
//           },
//      },
//      hideStatusBar:true,
//     drawerWidth:200,


//  });

const MainDrawerNavigator =createDrawerNavigator();

 const MainNavigator = (navigation) => {
    return (
        <NavigationContainer>
        <MainDrawerNavigator.Navigator screenOptions={
            {
                          activeTintColor:Colors.accentColor,
                          labelStyle: {
                              fontFamily: 'open-sans-bold'
                          },
                          itemsContainerStyle: {
                             marginVertical: 30,
                             padding:10
                           },
                      }}>
            <MainDrawerNavigator.Screen name="MealsFavs" component={MealsFavTabNavigator} 
            screenProps={{ rootNavigation: navigation }}
            options={{drawerLabel:'Meals!', headerShown:false}}/>
            <MainDrawerNavigator.Screen name="Filters" component={FiltersNavigator} options={{headerShown:false}}/>
            <MainDrawerNavigator.Screen name="Login" component={LoginNavigator} />
        </MainDrawerNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;

//export default createAppContainer(MainNavigator);
