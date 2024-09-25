import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return <Text>This is the Meal Details {mealId}</Text>;
}

export default MealDetailScreen;
