import React from "react";
import { View , Text ,StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { CATEGORIES } from "../../../data/dummy-data";
import MealList from "../../molecules/MealList";
import DefaultText from "../../atoms/DefaultText";


const CategoryMealScreen = props => {

  const catId =  props.route.params.categoryId;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId)>=0);

  if(displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>NO Meal Found , Check your Filters?  </DefaultText>
      </View>
    );
  }

    return (
      <MealList listData={displayMeals} navigation={props.navigation} />
    );
};


// CategoryMealScreen.navigationOptions = (navigationData) => {
//   const catId =  navigationData.navigation.getParam('categoryId');
//   const selectedCategory =CATEGORIES.find(cat => cat.id === catId); 

//   return {
//     headerTitle:selectedCategory.title 
//   };
// };


export const screenOptions= (navigationData) => {
  const catId =   navigationData.route.params.categoryId;
  const selectedCategory =CATEGORIES.find(cat => cat.id === catId); 

  return {
    headerTitle:selectedCategory.title 
  };
};

const styles = StyleSheet.create ({
content: {
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
});

export default CategoryMealScreen;