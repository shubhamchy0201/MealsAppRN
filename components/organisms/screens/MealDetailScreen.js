import React , {useEffect ,useCallback } from "react";
import { ScrollView, Image , View, Text ,StyleSheet  } from 'react-native';
import {useSelector , useDispatch } from 'react-redux';
import { HeaderButtons , Item} from "react-navigation-header-buttons";
import HeaderButton from "../../atoms/HeaderButton";
import DefaultText from "../../atoms/DefaultText";
import { toggleFavorite } from "../../../store/actions/meals";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}


const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);
    const mealId=props.route.params.mealId;
    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some( (meal) => meal.id === mealId)
        );

    
    const selectedMeal= availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler =useCallback( () => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch,  mealId ]);

     useEffect( () => {
       // props.navigation.setParams({mealTitle:selectedMeal.title});
       props.navigation.setParams({toggleFav: toggleFavoriteHandler});
     }, [toggleFavoriteHandler]);
    
     useEffect( () => {
         props.navigation.setParams({isFav: currentMealIsFavorite});
     } , [currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details} >
            <DefaultText >{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredients => <ListItem key={ingredients}>{ingredients}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(steps => <ListItem key={steps}>{steps}</ListItem>)}
       </ScrollView>
    );
};


// MealDetailScreen.navigationOptions = (navigationData) => {
//    // const mealId =  navigationData.navigation.getParam('mealId');
//     const mealTitle = navigationData.navigation.getParam('mealTitle');
//     const toggleFavorite = navigationData.navigation.getParam('toggleFav');
//     const isFavorite = navigationData.navigation.getParam('isFav');
//   //  const selectedMeal= MEALS.find(meal => meal.id === mealId);  
//     return {
//         headerTitle: mealTitle,
//         headerRight:() =>  (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//             <Item  title ='Favorite' 
//             iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
//              onPress={ toggleFavorite }/>
//         </HeaderButtons> )
//     };
// }


export const screenOptions= navigationData => {
    
     const mealTitle =  navigationData.route.params.mealTitle;
     const toggleFavorite =navigationData.route.params.toggleFav;
     const isFavorite =  navigationData.route.params.isFav
    
     return {
         headerTitle: mealTitle,
         headerRight:() =>  (<HeaderButtons HeaderButtonComponent={HeaderButton}>
             <Item  title ='Favorite' 
             iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
              onPress={ toggleFavorite }/>
         </HeaderButtons> )
     };
 }



const styles = StyleSheet.create({
  image: {
    width:'100%',
    height:200
  },
  details: {
      flexDirection:'row',
      padding:15,
      justifyContent:'space-around'
  },
  title : {
      fontFamily:'open-sans-bold',
      fontSize:22,
      textAlign:'center'
  },
  listItem : {
      marginVertical:10,
      marginHorizontal:20,
      borderColor:'#ccc',
      borderWidth:1,
      padding:10
  }

});

export default MealDetailScreen;