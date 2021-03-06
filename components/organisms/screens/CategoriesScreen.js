import React from "react";
import {StyleSheet , FlatList  } from 'react-native';
import { CATEGORIES } from "../../../data/dummy-data";
import CategoryGridTile from "../../molecules/CategoryGridTile";
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
import HeaderButton from "../../atoms/HeaderButton";

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return( 
           <CategoryGridTile title={itemData.item.title}
           color={itemData.item.color}
           onSelect ={ () => {
            props.navigation.navigate( "CategoryMeals", 
             {
                categoryId : itemData.item.id
            }
        );
           }}
           />
        );
     };


    return (
        <FlatList keyExtractor={(item, index) => item.id }  
        data ={CATEGORIES} 
        renderItem={renderGridItem}
         numColumns={2} />
    );
};


// CategoriesScreen.navigationOptions = (navData) => {
//     return {
//     headerTitle: 'Meal Categories', 
//     headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item title="Menu" iconName='ios-menu' onPress={ () => {
//             navData.navigation.toggleDrawer();
//         }} />
//     </HeaderButtons>
//     )};
// };


export const screenOptions= (navData) => {
    //const parent = navData.navigation.getParent();
//   console.log(parent);
  //const grandParent = navData.navigation.getParent();
//   console.log(grandParent);
    return {
    headerTitle: 'Meal Categories!', 
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={ () => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    )};
};

const styles = StyleSheet.create({
  screen: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default CategoriesScreen;